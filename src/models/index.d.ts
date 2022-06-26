import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CheckoutNewMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type InfoPagesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SaleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BannerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

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

export declare class CheckoutNew {
  readonly id: string;
  readonly email?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly address?: string | null;
  readonly apartment?: string | null;
  readonly city?: string | null;
  readonly region?: string | null;
  readonly phone?: string | null;
  readonly note?: string | null;
  readonly instructions?: string | null;
  readonly amount?: string | null;
  readonly cart?: string | null;
  readonly status?: string | null;
  readonly tracking?: string | null;
  readonly trackingID?: string | null;
  readonly deliveryDate?: string | null;
  readonly senderPhone?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CheckoutNew, CheckoutNewMetaData>);
  static copyOf(source: CheckoutNew, mutator: (draft: MutableModel<CheckoutNew, CheckoutNewMetaData>) => MutableModel<CheckoutNew, CheckoutNewMetaData> | void): CheckoutNew;
}

export declare class InfoPages {
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly page?: string | null;
  readonly header?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<InfoPages, InfoPagesMetaData>);
  static copyOf(source: InfoPages, mutator: (draft: MutableModel<InfoPages, InfoPagesMetaData>) => MutableModel<InfoPages, InfoPagesMetaData> | void): InfoPages;
}

export declare class Sale {
  readonly id: string;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly buttonText?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Sale, SaleMetaData>);
  static copyOf(source: Sale, mutator: (draft: MutableModel<Sale, SaleMetaData>) => MutableModel<Sale, SaleMetaData> | void): Sale;
}

export declare class Banner {
  readonly id: string;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Banner, BannerMetaData>);
  static copyOf(source: Banner, mutator: (draft: MutableModel<Banner, BannerMetaData>) => MutableModel<Banner, BannerMetaData> | void): Banner;
}

export declare class Users {
  readonly id: string;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Users, UsersMetaData>);
  static copyOf(source: Users, mutator: (draft: MutableModel<Users, UsersMetaData>) => MutableModel<Users, UsersMetaData> | void): Users;
}

export declare class Cart {
  readonly id: string;
  readonly trackOrder?: string | null;
  readonly cart?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Cart, CartMetaData>);
  static copyOf(source: Cart, mutator: (draft: MutableModel<Cart, CartMetaData>) => MutableModel<Cart, CartMetaData> | void): Cart;
}

export declare class Checkout {
  readonly id: string;
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly calender?: string | null;
  readonly city?: string | null;
  readonly email?: string | null;
  readonly fee?: number | null;
  readonly insturctions?: string | null;
  readonly location?: string | null;
  readonly location2?: string | null;
  readonly note?: string | null;
  readonly phone?: string | null;
  readonly region?: string | null;
  readonly sfirstname?: string | null;
  readonly sphone?: string | null;
  readonly paymentMade?: boolean | null;
  readonly trackOrder?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Checkout, CheckoutMetaData>);
  static copyOf(source: Checkout, mutator: (draft: MutableModel<Checkout, CheckoutMetaData>) => MutableModel<Checkout, CheckoutMetaData> | void): Checkout;
}

export declare class Reviews {
  readonly id: string;
  readonly name?: string | null;
  readonly review?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Reviews, ReviewsMetaData>);
  static copyOf(source: Reviews, mutator: (draft: MutableModel<Reviews, ReviewsMetaData>) => MutableModel<Reviews, ReviewsMetaData> | void): Reviews;
}

export declare class Bouquets {
  readonly id: string;
  readonly img?: string | null;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly availability?: string | null;
  readonly amount?: number | null;
  readonly slug?: string | null;
  readonly tags?: string | null;
  readonly category?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Bouquets, BouquetsMetaData>);
  static copyOf(source: Bouquets, mutator: (draft: MutableModel<Bouquets, BouquetsMetaData>) => MutableModel<Bouquets, BouquetsMetaData> | void): Bouquets;
}