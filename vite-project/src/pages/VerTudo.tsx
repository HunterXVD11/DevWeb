import TabelasDeItens from "../components/TabelaDeItens";
import useItens from "../hooks/UseItens";
import Item from "../interfaces/item";
import Paginacao from "../components/Paginacao";
import Pesquisa from "../components/Pesquisa";
import useItensPaginados from "../hooks/UseItensPaginados";
import useRemoverItens from "../hooks/UseRemoverItens";
import { useState } from "react";
import CadastroItem from "../components/CadastroItem"
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";


const VerTudo = () => {
  const [pagina, setPagina] = useState(0);
  const [nome, setNome] = useState("");
  const [itemSelecionado, setItemSelecionado] = useState({ } as Item);
  

  const tratarPaginaSelecionada = (page: number) => setPagina(page);
  const tratarNomePesquisado = (nome: string) => {
    setNome(nome);
    setPagina(0);
  }
  const tratarItemSelecionado = (item: Item) => setItemSelecionado(item);

  const { 
    data: itemRemovido,
    mutate: removerItem, 
    isLoading: removendo, 
    error: erroRemocao } 
    = useRemoverItens();

  const tratarRemocaoDeItem = (id: number) => {
    removerItem(id);
    setPagina(0);
  }

  const tamanho = 5;

  const { 
    data: itensPaginados, 
    isLoading, error } 
    = useItensPaginados({pagina, tamanho});

  if (isLoading) return <h6>Carregando...</h6>

  if (error) throw error;
  if (erroRemocao) throw erroRemocao;

  const itens = itensPaginados!.itens;
  const totalDePaginas = itensPaginados!.totalDePaginas

  console.log(itemRemovido);

  return (
    <>
    <div className="mb-4">
        <h5>Cadastro de Produtos</h5>
        <hr className="mt-0" />
      </div>
    <CadastroItem
    itemSelecionado={itemSelecionado}
    tratarItemSelecionado={tratarItemSelecionado}
     />
    <div className="mb-4">
        <h5>Lista de Produtos</h5>
        <hr className="mt-0" />
      </div>
    <Pesquisa tratarNomePesquisado={tratarNomePesquisado} nome={nome}/>
    <TabelasDeItens
     itens={itens} 
     tratarRemocaoDeItem={tratarRemocaoDeItem}
     tratarItemSelecionado={tratarItemSelecionado}
     />
    <Paginacao paginaCorrente={pagina} 
                 totalDePaginas={totalDePaginas} 
                 tratarPaginaSelecionada={tratarPaginaSelecionada}/>
    </>
      
    )
};

export default VerTudo;
