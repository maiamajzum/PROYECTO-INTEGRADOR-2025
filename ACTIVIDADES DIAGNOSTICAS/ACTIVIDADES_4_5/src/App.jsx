import './App.css';
import React from 'react';
import Saludo from './componentes/Saludo';
import Presentacion from './componentes/Presentacion';
import Boton from './componentes/Boton';



function App() {
  
  const handleClick = () => {
    alert('¡Hiciste clic en el botón!');
  };
  return (
    <div>
      <Saludo nombre="Martin" />
      <Presentacion nombre="Maia" edad={35} profesion="Implementadora de Sistemas" />
      <Boton text="Boton" onClick={handleClick} />
    </div>
  );
}
export default App;