// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Cart, Checkout, Reviews, Bouquets } = initSchema(schema);

export {
  Cart,
  Checkout,
  Reviews,
  Bouquets
};