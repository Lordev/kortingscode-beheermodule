import { create } from 'zustand';
import { FormData } from '../types/formSchema';

interface FormState {
	formData: FormData;
	kortingsBedrag: string;
	setFormValue: (
		key: keyof FormData,
		value: FormData[keyof FormData]
	) => void;
	resetForm: () => void;
}

export const useFormStore = create<FormState>(set => ({
	formData: {
		titel: '',
		code: '',
		omschrijving: '',
		kortingType: 'Bedrag',
		kortingsPercentage: '',
		geheelGetal: '',
		decimaalGetal: '',
		geldigVanaf: '',
		geldigTot: '',
		maximumGebruik: false,
		aantalKeer: '',
	},
	kortingsBedrag: '',
	setFormValue: (key, value) =>
		set(state => ({
			formData: {
				...state.formData,
				[key]: value,
			},
		})),
	resetForm: () =>
		set({
			formData: {
				titel: '',
				code: '',
				omschrijving: '',
				kortingType: 'Bedrag',
				kortingsPercentage: '',
				geheelGetal: '',
				decimaalGetal: '',
				geldigVanaf: '',
				geldigTot: '',
				maximumGebruik: false,
				aantalKeer: '',
			},
		}),
}));
