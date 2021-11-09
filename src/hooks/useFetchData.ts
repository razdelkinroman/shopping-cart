import axios from 'axios';
import useSWR from 'swr';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export function useFetchData(query: string) {
  const { data, error } = useSWR(`${BASE_URL}/${query}`, fetcher);

  return { data, isLoading: !error && !data, error };
}
