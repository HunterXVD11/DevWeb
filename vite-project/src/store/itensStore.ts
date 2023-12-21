import { create } from "zustand";
import Item from "../interfaces/item";

interface ItemStore {
    pagina: number;
    origem: string;
    ItemSelecionado: Item;
    tamanho: number;

    setPagina: (pagina: number) => void;
    setOrigem: (origem
: string) => void;
    setItemSelecionado: (ItemSelecionado: Item) => void;
}

const useItemStore = create<ItemStore>((set) => ({
    pagina: 0,
    origem: "",
    ItemSelecionado: {} as Item,
    tamanho: 5,

    setPagina: (pagina: number) => set(() => ({pagina: pagina})),
    setOrigem: (origem
: string) => set(() => ({origem
: origem})),
    setItemSelecionado: (ItemSelecionado: Item) => set(() => ({ItemSelecionado: ItemSelecionado}))
}));
export default useItemStore;