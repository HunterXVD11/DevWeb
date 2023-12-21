import { useLocation, useNavigate } from "react-router-dom";
import Item from "../interfaces/item";
import 'bootstrap/dist/css/bootstrap.css';
import useRemoverItens from "../hooks/UseRemoverItens";
import { useState } from "react";
import useItemStore from "../store/itensStore";

const DetalhesItem = () => {
    const [isDisabled, setDisabled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    var item = location.state.data;

    const detalhesItem= (item: Item) => {
      navigate(`/alteraitem`, {state: {data: item}})
    }

    const tratarRemocaoItem = (id: number) => {
        removerItem(id);
        setDisabled(true);


      };

      const setItemSelecionado = useItemStore(s => s.setItemSelecionado);

      const tratarItemSelecionado = (item: Item) => {
        setItemSelecionado(item);
        navigate('/vertudo');
      }

      const {
        data: itemRemovida,
        mutate: removerItem,
        isLoading: removendo,
        error: erroRemocao,
      } = useRemoverItens();

      if (erroRemocao) throw erroRemocao;

      const handleVoltar = () => {
        navigate(-1);
        };
    return (
      <>
      <h1>Detalhes Item</h1>
      {itemRemovida && (
        <p className="m-3 text-danger">A item foi removida com sucesso!</p>
      )}
      <div className="row">
        <div className="col-lg-4">
        <h5>Nome: {item.nome}</h5>
          <img
            src={item.image}
            alt="Imagem da Item"
            style={{ width: "100%", maxHeight: "250px", objectFit: "cover" }}
          />
        </div>
        <iframe width="560" height="315" src={`${item.trailer}?autoplay=1`} title="Meu Vídeo do YouTube" frameBorder="0" allowFullScreen></iframe>
        <div className="col-lg-4">
          <h5>Nome: {item.nome}</h5>
          <h5>{item.genero}</h5>
          <div dangerouslySetInnerHTML={{ __html: item.descricao }} />
          {/* <h5>{item.descricao}</h5> */}
          <h5>{item.diretor}</h5>
        </div>
      </div>

      <button type="button" className="btn btn-lg btn-danger m-4" disabled={isDisabled} onClick={() => tratarRemocaoItem(item.id!)}>Deletar</button>
      <button className="btn btn-lg btn-info" disabled={isDisabled} onClick={() => detalhesItem(item)}>Alterar</button>
      

      <button onClick={handleVoltar} className="mt-5 btn btn-sm btn-success d-block">Voltar</button>
      </>
    )

  }
  
  export default DetalhesItem