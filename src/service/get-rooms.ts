import type { GetRoomsSearchResponse } from "@/types/api/get-rooms-search";

const baseUrl = import.meta.env.VITE_API_URL;

export const getRoomsService = async (): Promise<GetRoomsSearchResponse> => {
  const response = await fetch(`${baseUrl}/rooms`);
  return await response.json();
};
