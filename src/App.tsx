import "./App.css";
import ListaOrdenada from "./listas/ListaOrdenada";
import MainTitle from "./MainTitle";
import MyButton from "./MyButton";

function App() {
  const tareas: string[] = [
    "Leer un libro",
    "Aprender React",
    "Descansar",
    "Jugar basket",
    "Jugar Fornite",
  ];

  const hobbies = ["Programar", "Ver televisión", "Leer un libro"];
  const roomies = ["Julio Santos", "Pablo Rosario", "Carmén Pérez", "Marino Quezada"];
  return (
    <>
      <MainTitle text="Aprendiendo React" />

      <MyButton text="Botón 1" />
      <MyButton text="Botón 2" />
      <MyButton text="Botón 1" />

      <h2>Tareas pendientes</h2>
      <ListaOrdenada values={tareas} />
      <br />
      <h2>Hobbies</h2>
      <ListaOrdenada values={hobbies} />

      <br />
      <h2>Mis roomies</h2>
      <ListaOrdenada values={roomies} />
    </>
  );
}

export default App;
