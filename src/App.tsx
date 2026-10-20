import "./App.css";
// import ListaOrdenada from "./listas/ListaOrdenada";
import MainTitle from "./MainTitle";
import AdminPanel from "./ui/AdminPanel";
import LoginForm from "./ui/LoginForm";
import MyButton from "./MyButton";
import { useState } from "react";

function App() {
  // const tareas: string[] = [
  //   "Leer un libro",
  //   "Aprender React",
  //   "Descansar",
  //   "Jugar basket",
  //   "Jugar Fornite",
  // ];

  // const hobbies = ["Programar", "Ver televisión", "Leer un libro"];
  // const roomies = ["Julio Santos", "Pablo Rosario", "Carmén Pérez", "Marino Quezada"];

  const isLoggin: boolean = false;
  const [counter, setCounter] = useState(0);

  const handleClick = (isIncrement: boolean) => {
    console.log(isIncrement);

    if (isIncrement === true) {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  };
  // let content;

  // if (isLoggin) {
  //   content = <AdminPanel />;
  // } else {
  //   content = <LoginForm />;
  // }
  return (
    <>
      <MainTitle text="Aprendiendo React" />

      <MyButton text="Counter:" onHandleClick={() => handleClick(false)} count={counter} />
      {/* 
      <MyButton text="Botón 2" />
      <MyButton text="Botón 1" />

      <h2>Tareas pendientes</h2>
      <ListaOrdenada values={tareas} />
      <br />
      <h2>Hobbies</h2>
      <ListaOrdenada values={hobbies} />

      <br />
      <h2>Mis roomies</h2>
      <ListaOrdenada values={roomies} /> */}
      {isLoggin ? <AdminPanel /> : <LoginForm />}
      {/* {content} */}
    </>
  );
}

export default App;
