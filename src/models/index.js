// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CheckoutNew, InfoPages, Sale, Banner, Users, Cart, Checkout, Reviews, Bouquets } = initSchema(schema);

export {
  CheckoutNew,
  InfoPages,
  Sale,
  Banner,
  Users,
  Cart,
  Checkout,
  Reviews,
  Bouquets
};