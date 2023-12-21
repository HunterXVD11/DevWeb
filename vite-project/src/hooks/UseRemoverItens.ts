import {useMutation, useQueryClient} from 'react-query';
import Item from '../interfaces/item';
import { URL_ITENS } from "../util/constants";
import useApi from "./UseApi";

const useRemoverItens = () => {
    const { remover } = useApi<Item>(URL_ITENS);
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => remover(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["itens"],
            });
        },
    });
};

export default useRemoverItens