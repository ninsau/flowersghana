// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Reviews, Bouquets } = initSchema(schema);

export {
  Reviews,
  Bouquets
};