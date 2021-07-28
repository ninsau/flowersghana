import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CartMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CheckoutMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ReviewsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BouquetsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Cart {
  readonly id: string;
  readonly trackOrder?: string;
  readonly cart?: string;
  readonly fetchOrder?: Checkout;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Cart, CartMetaData>);
  static copyOf(source: Cart, mutator: (draft: MutableModel<Cart, CartMetaData>) => MutableModel<Cart, CartMetaData> | void): Cart;
}

export declare class Checkout {
  readonly id: string;
  readonly firstname?: string;
  readonly lastname?: string;
  readonly calender?: string;
  readonly city?: string;
  readonly email?: string;
  readonly fee?: number;
  readonly insturctions?: string;
  readonly location?: string;
  readonly location2?: string;
  readonly note?: string;
  readonly phone?: string;
  readonly region?: string;
  readonly sfisrtname?: string;
  readonly sphone?: string;
  readonly paymentMade?: boolean;
  readonly trackOrder?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Checkout, CheckoutMetaData>);
  static copyOf(source: Checkout, mutator: (draft: MutableModel<Checkout, CheckoutMetaData>) => MutableModel<Checkout, CheckoutMetaData> | void): Checkout;
}

export declare class Reviews {
  readonly id: string;
  readonly name?: string;
  readonly review?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Reviews, ReviewsMetaData>);
  static copyOf(source: Reviews, mutator: (draft: MutableModel<Reviews, ReviewsMetaData>) => MutableModel<Reviews, ReviewsMetaData> | void): Reviews;
}

export declare class Bouquets {
  readonly id: string;
  readonly img?: string;
  readonly title?: string;
  readonly description?: string;
  readonly availability?: string;
  readonly amount?: number;
  readonly slug?: string;
  readonly tags?: string;
  readonly category?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Bouquets, BouquetsMetaData>);
  static copyOf(source: Bouquets, mutator: (draft: MutableModel<Bouquets, BouquetsMetaData>) => MutableModel<Bouquets, BouquetsMetaData> | void): Bouquets;
}