import { useQuery } from "react-query";
import Categoria from "../interfaces/categoria";
import { URL_CATEGORIAS } from "../util/constants";
import useApi from "./UseApi";

const useCategorias = () => {
  const { recuperar } = useApi<Categoria>(URL_CATEGORIAS);

  return useQuery({
    queryKey: ["categorias"],
    queryFn: () => recuperar(),
    staleTime: 7 * 24 * 60 * 60 * 1000,
    keepPreviousData: true,
  });
};
export default useCategorias;