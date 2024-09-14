// Interfaces
import { PriceDataResponse } from "../interfaces";

export async function getPriceByIds(
  itemIds: number[],
  location: string
): Promise<PriceDataResponse> {
  // location can be world, or datacenter
  const res = await fetch(
    `https://universalis.app/api/v2/${location}/${itemIds.toString()}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
