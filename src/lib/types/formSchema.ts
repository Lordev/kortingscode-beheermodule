import { z } from 'zod';

// Base schema without refinement
const baseFormSchema = z.object({
	titel: z.string().min(1, 'Titel is benodigd'),
	code: z.string().min(1, 'Code is benodigd'),
	omschrijving: z.string().optional(),
	kortingType: z.enum(['Bedrag', 'Percentage']),
	geldigVanaf: z
		.string()
		.min(1, 'Geldig vanaf is benodigd')
		.regex(
			/^\d{4}-\d{2}-\d{2}$/,
			'Geldig vanaf moet een geldige datum zijn'
		),
	geldigTot: z
		.string()
		.transform(val => (val === '' ? undefined : val)) // Convert empty string to undefined
		.optional()
		.refine(
			val => !val || /^\d{4}-\d{2}-\d{2}$/.test(val),
			'Geldig tot moet een geldige datum zijn'
		), // Validate if present
	maximumGebruik: z.boolean(),
	aantalKeer: z.string().optional(),
});

// Schema for Bedrag type
const bedragSchema = baseFormSchema.extend({
	geheelGetal: z
		.string()
		.min(1, 'Geef een geheel getal')
		.regex(/^\d+$/, 'Geef een geldig heel getal'),
	decimaalGetal: z
		.string()
		.regex(/^\d{1,2}$/, 'Geef een geldig decimaal getal')
		.optional(),
	kortingsPercentage: z.string().optional(),
});

// Schema for Percentage type
const percentageSchema = baseFormSchema.extend({
	kortingsPercentage: z
		.string()
		.regex(/^\d{1,2}$/, 'Geef een geldig percentage')
		.min(1, 'Percentage is benodigd'),
	geheelGetal: z.string().optional(),
	decimaalGetal: z.string().optional(),
});

// Union schema that selects the correct schema based on kortingType
export const formSchema = z.union([
	bedragSchema.refine(data => data.kortingType === 'Bedrag', {
		message:
			'Geheel getal en Decimaal getal zijn verplicht voor Bedrag type',
		path: ['kortingType'],
	}),
	percentageSchema.refine(data => data.kortingType === 'Percentage', {
		message: 'Percentage is verplicht voor Percentage type',
		path: ['kortingType'],
	}),
]);

export type FormData = z.infer<typeof formSchema>;
