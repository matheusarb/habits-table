import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Habit from "./components/Habit";

function App() {
  return (
    <div>
      <Habit completed={3} />
      <Habit completed={10} />
      <Habit completed={20} />
    </div>
  );
}

export default App;

// Componente: Reaproveitar/ isolar
// Propriedade: Uma informação enviada para modificar um componente visual ou comportamental
