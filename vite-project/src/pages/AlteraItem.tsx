import TabelasDeItens from "../components/TabelaDeItens";
import Paginacao from "../components/Paginacao";
import Pesquisa from "../components/Pesquisa";
import useItensPaginados from "../hooks/UseItensPaginados";
import useRemoverItens from "../hooks/UseRemoverItens";
import AjusteItem from "../components/AjusteItem";
import { useState } from "react";
import CadastroItem from "../components/CadastroItem"
import { useMutation, useQueryClient } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";

const VerTudo = () => {
  const [pagina, setPagina] = useState(0);
  const [nome, setNome] = useState("");
  
  const location = useLocation();
  var item = location.state.data;

  const tratarPaginaSelecionada = (page: number) => setPagina(page);
  const tratarNomePesquisado = (nome: string) => {
    setNome(nome);
    setPagina(0);
  }

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
        <h5>{item.nome}</h5>
        <h5>Cadastro de Produtos SHALA</h5>
        <hr className="mt-0" />
      </div>
    < AjusteItem/>
    </>
      
    )
};

export default VerTudo;
