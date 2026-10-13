interface Props {
  text: string;
}

function MainTitle(props: Props) {
  return <h1> {props.text} </h1>;
}

export default MainTitle;
