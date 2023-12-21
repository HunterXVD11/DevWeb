import { useMutation, useQueryClient } from "react-query";
import Item from "../interfaces/item";
import { URL_ITENS } from "../util/constants";
import useApi from "./UseApi";

const useAlterarItem = () => {
  const { alterar } = useApi<Item>(URL_ITENS);
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (item: Item) => alterar(item),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["itens"],
      });
    },
  });
};

export default useAlterarItem;