interface Props {
  text: string;
}
function ElementoLista({ text }: Props) {
  return <li> {text}</li>;
}

export default ElementoLista;
