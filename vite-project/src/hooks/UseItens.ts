import { useQuery } from 'react-query';
import Item from "../interfaces/item";
import axios from "axios";


const useItens = () => useQuery({
    queryKey: ['itens'],
    queryFn: () => axios
        .get<Item[]>("http://localhost:8080/itens")
        .then(res=>res.data),
    staleTime: 10_000
});
export default useItens;