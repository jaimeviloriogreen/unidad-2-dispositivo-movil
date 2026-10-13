import ElementoLista from "./ElementoLista";

interface Props {
  values: string[];
}

function ListaOrdenada({ values }: Props) {
  return (
    <>
      <ol>
        {values.map((value, index) => (
          <ElementoLista text={value} key={index} />
        ))}
      </ol>
    </>
  );
}

export default ListaOrdenada;
