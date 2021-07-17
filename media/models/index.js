// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Bouquets } = initSchema(schema);

export {
  Bouquets
};