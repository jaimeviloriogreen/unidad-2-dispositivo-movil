// import { useState } from "react";
import "./MyButton.css";

interface Props {
  text: string;
  onHandleClick: () => void;
  count: number;
}

function MyButton({ text, onHandleClick, count }: Props) {
  // const [count, setCount] = useState(0);

  // const handleClick = () => {
  //   setCount(count + 1);
  // };

  return (
    <button className="button" onClick={onHandleClick}>
      {" "}
      {text}
      {count}
    </button>
  );
}

export default MyButton;
