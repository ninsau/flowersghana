// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UntitledModel, Checkout, Reviews, Bouquets } = initSchema(schema);

export {
  UntitledModel,
  Checkout,
  Reviews,
  Bouquets
};