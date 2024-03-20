import { Method } from "axios";
import { SWRConfiguration } from "swr";
import useSWR from "swr/immutable";
import { api } from "@/services/axios";

const defaultOptions: SWRConfiguration = {
  revalidateOnFocus: false,
};

export function useFetch<data = unknown, error = unknown>(
  path: string,
  swrOptions = defaultOptions,
  method: Method = "get",
  reqdata: {} = {}
) {
  const data = useSWR<data, error>(
    path,
    async (url: string) => {
      const res = await api.request({ method, url, data: reqdata });
      return res.data;
    },
    swrOptions
  );

  return data;
}
