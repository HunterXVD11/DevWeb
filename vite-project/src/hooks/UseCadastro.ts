import { useMutation, useQueryClient } from "react-query";
import Item from "../interfaces/item";
import useApi from "./UseApi";
import { URL_ITENS } from "../util/constants";

const useCadastrarItem = () => {
  const { cadastrar } = useApi<Item>(URL_ITENS);
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (item: Item) => cadastrar(item),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["itens"],
      });
    },
  });
};

export default useCadastrarItem;