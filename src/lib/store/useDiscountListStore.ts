import { create } from 'zustand';
import { FetchedData } from 'lib/types/fetchedData';

interface DiscountListStore {
	discountList: FetchedData[];
	setDiscountList: (discountList: FetchedData[]) => void;
	addDiscount: (discount: FetchedData) => void;
	removeDiscount: (discount: FetchedData) => void;
}

export const useDiscountListStore = create<DiscountListStore>(set => ({
	discountList: [],
	setDiscountList: discountList => set({ discountList }),
	addDiscount: discount =>
		set(state => ({ discountList: [...state.discountList, discount] })),
	removeDiscount: discount =>
		set(state => ({
			discountList: state.discountList.filter(
				d => d.ObjectID !== discount.ObjectID
			),
		})),
}));
