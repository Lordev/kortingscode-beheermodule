import { create } from 'zustand';
import { FetchedDataWithState } from 'lib/types/fetchedData';
import { calculateDiscountActive } from 'lib/utils/calculateDiscountActive';

interface DiscountListStore {
	discountList: FetchedDataWithState[];
	sortedDiscountList: FetchedDataWithState[];
	sortingOption: string;
	searchQuery: string;
	showInactiveDiscounts: boolean;
	setDiscountList: (discountList: FetchedDataWithState[]) => void;
	setSortingOption: (option: string) => void;
	setShowInactiveDiscounts: (showInactiveDiscounts: boolean) => void;
	setSearchQuery: (query: string) => void;
	addDiscount: (discount: FetchedDataWithState) => void;
	removeDiscount: (discount: FetchedDataWithState) => void;
	updateSortedDiscountList: () => void;
}

export const useDiscountListStore = create<DiscountListStore>((set, get) => ({
	discountList: [],
	sortedDiscountList: [],
	showInactiveDiscounts: false,
	sortingOption: '',
	searchQuery: '',

	setDiscountList: discountList => {
		const updatedList = discountList.map(calculateDiscountActive); // Calculate the active state of each discount
		set({ discountList: updatedList });
		get().updateSortedDiscountList();
	},

	setSortingOption: option => {
		set({ sortingOption: option });
		get().updateSortedDiscountList();
	},

	setSearchQuery: query => {
		set({ searchQuery: query });
		get().updateSortedDiscountList();
	},

	setShowInactiveDiscounts: showInactiveDiscounts => {
		set({ showInactiveDiscounts });
		get().updateSortedDiscountList();
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
	},

	updateSortedDiscountList: () => {
		const { discountList, sortingOption, searchQuery } = get();
		let filteredList = discountList;

		// Filter the list based on the search query
		if (searchQuery) {
			filteredList = discountList.filter(discount =>
				discount.titel.toLowerCase().includes(searchQuery.toLowerCase())
			);
		}

		// Filter the list based on the showInactiveDiscounts flag
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
