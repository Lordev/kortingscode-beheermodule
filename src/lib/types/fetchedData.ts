import { z } from 'zod';

const fetchedDataSchema = z.object({
	ObjectID: z.string(),
	titel: z.string(),
	code: z.string(),
	omschrijving: z.string(),
	kortingType: z.enum(['Bedrag', 'Percentage']),
	geldigVanaf: z.string(),
	geldigTot: z.string(),
	maximumGebruik: z.boolean(),
	aantalKeer: z.string(),
	geheelGetal: z.string(),
	decimaalGetal: z.string(),
	kortingsPercentage: z.string(),
});

export const fetchedDataArraySchema = z.array(fetchedDataSchema);

export type FetchedData = z.infer<typeof fetchedDataSchema>;

export type FetchedDataArray = z.infer<typeof fetchedDataArraySchema>;

export interface FetchedDataWithState extends FetchedData {
	isActive: boolean;
	FutureActive: boolean;
	isExpired: boolean;
}
