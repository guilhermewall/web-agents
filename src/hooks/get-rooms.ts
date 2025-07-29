import { getRoomsService } from "@/service/get-rooms";
import type { GetRoomsSearchResponse } from "@/types/api/get-rooms-search";
import { QUERY_KEY } from "@/utils/constants/reactQuery";
import type { RequestErrorResponse } from "@/utils/requests";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";

export const useGetRooms = (): UseQueryResult<
  GetRoomsSearchResponse,
  RequestErrorResponse
> => {
  return useQuery({
    queryKey: [QUERY_KEY.ROOMS],
    queryFn: async () => await getRoomsService(),
  });
};
