import Item from "../interfaces/item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { useNavigate } from 'react-router-dom';

interface Props {
  itens: Item[];
  tratarRemocaoDeItem: (id: number) => void;
  tratarItemSelecionado: (item: Item) => void;

}

const TabelasDeItens = ({ itens,tratarRemocaoDeItem,tratarItemSelecionado}: Props) => {
  const navigate = useNavigate();

  const detalhesItem= (item: Item) => {
    navigate(`/item`, {state: {data: item}})
  }

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {itens.map((item) => (
        <div key={item.id} className="col mb-4">
          <div className="card" style={{backgroundColor: '#181818' } }>
            <img
              src={item.image}
              alt={item.nome}
              className="card-img-top"
              style={{ maxHeight: '200px', objectFit: 'cover' }}
              onClick={() => detalhesItem(item)}
            />
            <button className="btn btn-icon position-absolute top-0 start-0 item-plus" style={{ borderBottomLeftRadius: '0',
                borderBottomRightRadius: '0',
                borderTopRightRadius: '0'}}>
              <FontAwesomeIcon style={{color: '#ffffff' } } icon={faPlus} />
            </button>
            <div className="card-body" style={{color: '#ffffff' } } >
              <h5 className="card-title">{item.nome}</h5>
              <p className="card-text">Nota: {item.nota}</p>
              <button onClick={() => tratarRemocaoDeItem(item.id!)}  className="btn btn-danger" >
                Remover
              </button>
            </div>
            <td colSpan={2} className="align-middle text-center fw-bold">
            R$ {" "}
            {itens
              .reduce((total, item) => item.nota + total, 0)
              .toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                useGrouping: true,
              })}
          </td>
          </div>
        </div>
      ))}
    </div>

  );
};

export default TabelasDeItens;
