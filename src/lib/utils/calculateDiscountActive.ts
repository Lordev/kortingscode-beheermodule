// lib/utils/discountUtils.ts

import { FetchedData, FetchedDataWithState } from 'lib/types/fetchedData';

export const calculateDiscountActive = (
	discount: FetchedData
): FetchedDataWithState => {
	const currentDate = new Date().getTime();
	const startingDate = new Date(discount.geldigVanaf).getTime();
	const endingDate = new Date(discount.geldigTot).getTime();

	let isActive = false;
	if (discount.geldigTot) {
		isActive = currentDate >= startingDate && currentDate <= endingDate;
	} else {
		isActive = currentDate >= startingDate;
	}

	const FutureActive = startingDate > currentDate;
	const isExpired = currentDate > endingDate;

	return {
		...discount,
		isActive,
		FutureActive,
		isExpired,
	};
};
