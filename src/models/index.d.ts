import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type BouquetsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
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