import { useState } from 'react';
import './App.css';

import Card from './componentes/Cards';


function App() {
  return (
    <>
      <h1>Vite + React</h1> 
      <Card title="Prueba" body="una prueba de prueba" />
      <Card title="Prueba 2" body="una prueba de prueba de la prueba" />
    </>
  );
}
        
   

export default App;


