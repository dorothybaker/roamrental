import { useQuery } from "react-query";
import { getAllProperties } from "../Utils/api";

export default function useProperties() {
  const { data, isLoading, isError, refetch } = useQuery(
    "allProperties",
    getAllProperties,
    { refetchOnWindowFocus: false }
  );

  return { data, isLoading, isError, refetch };
}
