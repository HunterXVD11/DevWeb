import { FieldValues, useForm } from "react-hook-form";
import useCadastrarItem from "../hooks/UseCadastro";
import Item from "../interfaces/item";
import Categoria from "../interfaces/categoria";
import useCategorias from "../hooks/UseCategorias";
import { useEffect } from "react";
import useAlterarItem from "../hooks/UseAltera";
import { URL_CATEGORIAS } from "../util/constants";
import useApi from "../hooks/UseApi";

const { recuperar } = useApi<Categoria>(URL_CATEGORIAS);
let categoriasValidas: Categoria[];

const validaCategoria = async (id: string) => {
  if (!categoriasValidas) {
    categoriasValidas = await recuperar();
  }
  const cat = categoriasValidas.find((categoria) => categoria.id === parseInt(id));
  return cat;
};

interface Props {
  itemSelecionado: Item;
  tratarItemSelecionado: (item: Item) => void;
}

const CadastroDeItemsForm = ({itemSelecionado,tratarItemSelecionado}:Props) => {
  // console.log(">>>>>>>>>>>>>>>>> renderizou o componente CadastroDeItemsForm");

  const { mutate: cadastrarItem, error: errorCadastrar } = useCadastrarItem();
  const { data: categorias, error: errorCategorias } = useCategorias();
  const { mutate: alterarItem, error: errorAlterar } = useAlterarItem();

  const { register, handleSubmit, reset } = useForm();
  
  const onSubmit = ({
    nome,
    anoLancamento,
    diretor,
    genero,
    descricao,
    trailer,
    image,
    nota,
    categoria,
  }: FieldValues) => {
    const item: Item = {
      nome: nome ,
      anoLancamento: anoLancamento, // Use null ou ajuste conforme necessário
      diretor: diretor,
      genero: genero,
      descricao: descricao,
      trailer: trailer,
      image: image,
      nota: nota , // Use null ou ajuste conforme necessário
      categoria: { id: categoria, nome: "" },
    };

    // console.log("---------------------------------------------------------------------------------")
    // console.log(itemSelecionado.id)
    // console.log("---------------------------------------------------------------------------------")
    // console.log(item.id)
    // console.log("---------------------------------------------------------------------------------")
    // if (itemSelecionado.id) {
    //   item.id = itemSelecionado.id;
    //   alterarItem(item);
    // } else {
      cadastrarItem(item);
    // }
    // cadastrarItem(item);
    reset();
  };

  if (errorCategorias) throw errorCategorias;


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-xl-6">
          <div className="row mb-2">
            <label htmlFor="nome" className="col-xl-2 fw-bold">
              Nome
            </label>
            <div className="col-xl-10">
              <input
                {...register("nome")}
                type="text"
                id="nome"
                className="form-control form-control-sm"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="row mb-2">
            <label htmlFor="descricao" className="col-xl-3 fw-bold">
              Ano de Lançamento
            </label>
            <div className="col-xl-9">
              <input
                {...register("anoLancamento")}
                type="text"
                id="descricao"
                className="form-control form-control-sm"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="row mb-2">
            <label htmlFor="descricao" className="col-xl-3 fw-bold">
              Diretor
            </label>
            <div className="col-xl-9">
              <input
                {...register("diretor")}
                type="text"
                id="descricao"
                className="form-control form-control-sm"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="row mb-2">
            <label htmlFor="descricao" className="col-xl-3 fw-bold">
              Gênero
            </label>
            <div className="col-xl-9">
              <input
                {...register("genero")}
                type="text"
                id="descricao"
                className="form-control form-control-sm"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="row mb-2">
            <label htmlFor="descricao" className="col-xl-3 fw-bold">
              Descrição
            </label>
            <div className="col-xl-9">
              <input
                {...register("descricao")}
                type="text"
                id="descricao"
                className="form-control form-control-sm"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-1">
        <div className="col-xl-6">
          <div className="row mb-2">
            <label htmlFor="imagem" className="col-xl-2 fw-bold">
              Trailer
            </label>
            <div className="col-xl-10">
              <input
                {...register("trailer")}
                type="text"
                id="imagem"
                className="form-control form-control-sm"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-1">
        <div className="col-xl-6">
          <div className="row mb-2">
            <label htmlFor="imagem" className="col-xl-2 fw-bold">
              Imagem
            </label>
            <div className="col-xl-10">
              <input
                {...register("image")}
                type="text"
                id="imagem"
                className="form-control form-control-sm"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-1">
        <div className="col-xl-6">
          <div className="row mb-2">
            <label htmlFor="imagem" className="col-xl-2 fw-bold">
              Nota
            </label>
            <div className="col-xl-10">
              <input
                {...register("nota")}
                type="text"
                id="imagem"
                className="form-control form-control-sm"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-1">
        <div className="col-xl-6">
          <div className="row mb-2">
            <label htmlFor="categoria" className="col-xl-2 fw-bold">
              Categoria
            </label>
            <div className="col-xl-10">
              <select
                {...register("categoria")}
                id="categoria"
                className="form-control form-control-sm"
              >
                <option value="0">Selecione uma categoria</option>
                {categorias?.map((categoria) => (
                  <option key={categoria.id} value={categoria.id}>
                    {categoria.nome}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-xl-6">
          <div className="row">
            <div className="col-xl-10 offset-xl-2">
              <button
                id="botao"
                type="submit"
                className="btn btn-primary btn-sm"
              >
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CadastroDeItemsForm;
