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

// Define the schema for an array of fetched data
export const fetchedDataArraySchema = z.array(fetchedDataSchema);

// Infer the TypeScript type for a single fetched data object
export type FetchedData = z.infer<typeof fetchedDataSchema>;

// Infer the TypeScript type for an array of fetched data objects
export type FetchedDataArray = z.infer<typeof fetchedDataArraySchema>;
