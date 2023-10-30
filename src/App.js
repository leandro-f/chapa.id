import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PerfilUsuario from './componentes/PerfilUsuario/PerfilUsuario';
import Inicio from './componentes/pages/Inicio';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/user/:nombre" element={<PerfilUsuario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

  