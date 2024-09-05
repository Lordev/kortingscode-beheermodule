import { z } from 'zod';

// Define the schema for the form data
export const formSchema = z
	.object({
		titel: z.string().min(1, 'Titel is benodigd'),
		code: z.string().min(1, 'Code is benodigd'),
		omschrijving: z.string().optional(),
		kortingType: z.enum(['Bedrag', 'Percentage']),
		kortingsPercentage: z
			.string()
			.regex(/^\d{1,2}$/, 'Geef een geldig percentage')
			.optional(),
		geheelGetal: z
			.string()
			.regex(/^\d+$/, 'Geef een geldig heel getal')
			.optional(),
		decimaalGetal: z
			.string()
			.regex(/^\d{1,2}$/, 'Geef een geldig decimaal getal')
			.optional(),
		geldigVanaf: z.string().min(1, 'Geldig vanaf is benodigd'),
		geldigTot: z.string().optional(),
		maximumGebruik: z.boolean(),
		aantalKeer: z.string().optional(),
	})
	.refine(
		data => {
			if (data.kortingType === 'Bedrag') {
				return !!data.geheelGetal && !!data.decimaalGetal;
			}
			if (data.kortingType === 'Percentage') {
				return !!data.kortingsPercentage;
			}
			return true;
		},
		{
			message:
				'Vul het correcte veld in op basis van het gekozen kortingstype.',
			path: ['kortingType'],
		}
	);

export type FormData = z.infer<typeof formSchema>;
