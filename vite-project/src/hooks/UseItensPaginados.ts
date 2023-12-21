import { useQuery } from "react-query";
import Item from "../interfaces/item";
import { URL_ITENS } from "../util/constants";
import useApi from "./UseApi";

interface ItensPaginados {
  totalDeProdutos: number;
  totalDePaginas: number;
  paginaCorrente: number;
  produtos: Item[];
}
interface QueryString {
  pagina: number;
  tamanho: number;
}

const useItensPaginados = (query: QueryString) => {
  const { recuperarPagina } = useApi<Item>(URL_ITENS);

  return useQuery({
    queryKey: ["itens", "paginacao", query],
    queryFn: () =>
      recuperarPagina({
        params: {
          // pagina: query.pagina,
          // tamanho: query.tamanho,
          // nome: query.nome
          ...query,
        },
      }),
    staleTime: 10_000,

  });
};
export default useItensPaginados;
