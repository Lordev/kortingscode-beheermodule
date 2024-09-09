import { create } from 'zustand';
import { FetchedDataWithState } from 'lib/types/fetchedData';
import { calculateDiscountActive } from 'lib/utils/calculateDiscountActive';

interface DiscountListStore {
	discountList: FetchedDataWithState[];
	sortedDiscountList: FetchedDataWithState[];
	sortingOption: string;
	showBorder: boolean;
	searchQuery: string;
	showInactiveDiscounts: boolean;
	setDiscountList: (discountList: FetchedDataWithState[]) => void;
	setSortingOption: (option: string) => void;
	setShowInactiveDiscounts: (showInactiveDiscounts: boolean) => void;
	setSearchQuery: (query: string) => void;
	addDiscount: (discount: FetchedDataWithState) => void;
	removeDiscount: (discount: FetchedDataWithState) => void;
	updateSortedDiscountList: () => void;
	setShowBorder: () => void;
}

export const useDiscountListStore = create<DiscountListStore>((set, get) => ({
	discountList: [],
	sortedDiscountList: [],
	showInactiveDiscounts: false,
	showBorder: false,
	sortingOption: '',
	searchQuery: '',

	setShowBorder: () => {
		const { sortedDiscountList } = get();
		if (sortedDiscountList.length > 0) {
			set({ showBorder: true });
		} else {
			set({ showBorder: false });
		}
	},

	setDiscountList: discountList => {
		const updatedList = discountList.map(calculateDiscountActive); // Calculate the active state of each discount
		set({ discountList: updatedList });
		get().updateSortedDiscountList();
		get().setShowBorder();
	},

	setSortingOption: option => {
		set({ sortingOption: option });
		get().updateSortedDiscountList();
		get().setShowBorder();
	},

	setSearchQuery: query => {
		set({ searchQuery: query });
		get().updateSortedDiscountList();
	},

	setShowInactiveDiscounts: showInactiveDiscounts => {
		set({ showInactiveDiscounts });
		get().updateSortedDiscountList();
		get().setShowBorder();
	},

	addDiscount: discount => {
		const discountWithState = calculateDiscountActive(discount);
		set(state => ({
			discountList: [...state.discountList, discountWithState],
		}));
		get().updateSortedDiscountList();
	},

	removeDiscount: discount => {
		set(state => ({
			discountList: state.discountList.filter(
				d => d.ObjectID !== discount.ObjectID
			),
		}));
		get().updateSortedDiscountList();
		get().setShowBorder();
	},

	updateSortedDiscountList: () => {
		const { discountList, sortingOption, searchQuery } = get();
		let filteredList = discountList;

		if (searchQuery) {
			filteredList = discountList.filter(discount =>
				discount.titel.toLowerCase().includes(searchQuery.toLowerCase())
			);
		}

		if (!get().showInactiveDiscounts) {
			filteredList = filteredList.filter(discount => discount.isActive);
		}

		// Sort the list based on active discounts
		let sortedList = [...filteredList];
		if (sortingOption === 'title') {
			sortedList.sort((a, b) => a.titel.localeCompare(b.titel));
		} else if (sortingOption === 'date') {
			sortedList.sort((a, b) => {
				if (a.geldigVanaf < b.geldigVanaf) return -1;
				if (a.geldigVanaf > b.geldigVanaf) return 1;
				return 0;
			});
		}

		set({ sortedDiscountList: sortedList });
	},
}));
