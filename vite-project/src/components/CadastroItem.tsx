import { FieldValues, useForm } from "react-hook-form";
import useCadastrarItem from "../hooks/UseCadastro";
import Item from "../interfaces/item";
import useCategorias from "../hooks/UseCategorias";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Categoria from "../interfaces/categoria";
import useApi from "../hooks/UseApi";
import { URL_CATEGORIAS } from "../util/constants";
import { useEffect } from "react";
import useAlterarItem from "../hooks/UseAltera";
// import { DevTool } from "@hookform/devtools";
import useItemStore from "../store/itensStore";

const { recuperar } = useApi<Categoria>(URL_CATEGORIAS);
let categoriasValidas: Categoria[];

const validaCategoria = async (id: string) => {
  if (!categoriasValidas) {
    categoriasValidas = await recuperar();
  }
  const cat = categoriasValidas.find(
    (categoria) => categoria.id === parseInt(id)
  );
  return cat;
};

const regexImagem = /^[a-z]+\.(gif|jpg|png|bmp)$/;
const schema = z.object({
  nome: z
    .string()
    .min(1, { message: "O nome deve ser informado." })
    .min(3, { message: "O nome deve ter pelo menos 3 caracteres." }),
  anoLancamento: z
    .number({
      invalid_type_error: "A quantidade em estoque deve ser informada.",
    }),
  diretor: z.string().min(1, { message: "A descição deve ser informada." }),
  genero: z.string().min(1, { message: "A descição deve ser informada." }),
  descricao: z.string().min(1, { message: "A descição deve ser informada." }),
  trailer: z
    .string()
    .min(1, { message: "O trailer deve ser informada." }),
  image: z
    .string()
    .min(1, { message: "A image deve ser informada." }),
  nota: z.number({
    invalid_type_error: "A quantidade em estoque deve ser informada.",
  }),
  categoria: z
    .string()
    .refine(validaCategoria, { message: "Categoria inválida." }),
});

type FormItem = z.infer<typeof schema>;

const CadastroDeItemsForm = () => {
  console.log(">>>>>>>>>>>>>>>>> renderizou o componente CadastroDeItemsForm");
  // const {itemSelecionada, setItemSelecionado} = useItemStore();
  const itemSelecionada = useItemStore((s) => s.itemSelecionada);
  const setItemSelecionado = useItemStore((s) => s.setItemSelecionada);

  const tratarItemSelecionado = (item: Item) => setItemSelecionado(item);

  // console.log("ressetou");
  const { mutate: cadastrarItem, error: errorCadastrar } = useCadastrarItem();
  const { data: categorias, error: errorCategorias } = useCategorias();
  const { mutate: alterarItem, error: errorAlterar } = useAlterarItem();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
    setValue,
    setFocus,
    control,
  } = useForm<FormItem>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
    defaultValues: {
      nome: "",

    },
  });
  // console.log(register("nome"));
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
      nome: nome || "",
    anoLancamento: anoLancamento || null, // Use null ou ajuste conforme necessário
    diretor: diretor || "",
    genero: genero || "",
    descricao: descricao || "",
    trailer: trailer || "",
    image: image || "",
    nota: nota || null, // Use null ou ajuste conforme necessário
    categoria: { id: categoria || "", nome: "" },
    };

    console.log(itemSelecionada.id);
    // if (itemSelecionada.id) {
    //   item.id == itemSelecionada.id;
    //   alterarItem(item);
    // } else {
    //   console.log("xala")
    //   cadastrarItem(item);
    // }
    cadastrarItem(item);
    reset();
  };

  useEffect(() => {
    setFocus("nome");
    if (itemSelecionada.id) {
      reset();
      setValue("nome", itemSelecionada.nome);
      setValue("anoLancamento", itemSelecionada.anoLancamento);
      setValue("diretor", itemSelecionada.diretor);
      setValue("genero", itemSelecionada.genero);
      setValue("descricao", itemSelecionada.descricao);
      setValue("trailer", itemSelecionada.trailer);
      setValue("image", itemSelecionada.image);
      setValue("nota", itemSelecionada.nota);
      setValue("categoria", String(itemSelecionada.categoria.id));
    }
  }, [itemSelecionada]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      tratarItemSelecionado({} as Item);
    }
  }, [isSubmitSuccessful]);

  if (errorCategorias) throw errorCategorias;
  if (errorCadastrar) throw errorCadastrar;
  if (errorAlterar) throw errorAlterar;

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
