export interface Listing {
  lastReviewTime: number;
  pricePerUnit: number;
  quantity: number;
  worldName: string;
  worldID: number;
  hq: boolean;
  total: number;
  tax: number;
  listingID: string;
}

export interface ItemSaleData {
  itemID: number;
  listings: Listing[];
  recentHistory: Listing[];
  minPrice: 799;
  maxPrice: 1994;
}

export type PriceDataResponse = {
  itemIDs: number[];
  items: Record<string, ItemSaleData>;
};

export type ItemData = {
  name: string;
};
