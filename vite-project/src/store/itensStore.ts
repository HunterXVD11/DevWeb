import { create } from "zustand";
import Item from "../interfaces/item";

interface ItemStore {
    pagina: number;
    origem: string;
    itemSelecionada: Item;
    tamanho: number;

    setPagina: (pagina: number) => void;
    setOrigem: (origem
: string) => void;
    setItemSelecionada: (itemSelecionada: Item) => void;
}

const useItemStore = create<ItemStore>((set) => ({
    pagina: 0,
    origem: "",
    itemSelecionada: {} as Item,
    tamanho: 5,

    setPagina: (pagina: number) => set(() => ({pagina: pagina})),
    setOrigem: (origem
: string) => set(() => ({origem
: origem})),
    setItemSelecionada: (itemSelecionada: Item) => set(() => ({itemSelecionada: itemSelecionada}))
}));
export default useItemStore;