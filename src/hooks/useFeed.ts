import { useQuery } from "@tanstack/react-query";
import { request } from "../utils/common";
import { REGION } from "../utils/consts";
import { Video } from "../types/video";

const getFeed = async () => {
  const response = await request<{ data: Video[] }>({
    path: `feed/list?region=${REGION}&count=10`,
  });

  return response;
};

export const useFeed = () => {
  const { data } = useQuery({
    queryKey: ["feed"],
    queryFn: getFeed,
  });

  return { data: data?.data || [] };
};
