interface Props {
  text: string;
}

function MyButton(props: Props) {
  return <button> {props.text} </button>;
}

export default MyButton;
