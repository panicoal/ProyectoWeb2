import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Inicio from './pages/Inicio';
import Institucion from './pages/Institucion';
import Especialidad from './pages/Especialidad';
import Contacto from './pages/Contacto';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Inicio />} />
            <Route path="institucion" element={<Institucion />} />
            <Route path="especilidad" element={<Especialidad />} />
            <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
