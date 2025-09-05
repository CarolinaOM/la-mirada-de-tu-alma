import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Inicio/Inicio';
import Filosofia from './components/Filosofia/Filosofia';
import Terapias from './components/Terapias/Terapias'; // ¡Añade esta línea!

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gradient-to-br from-purple-200 to-indigo-200 overflow-hidden min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/filosofia" element={<Filosofia />} />
          <Route path="/terapias" element={<Terapias />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;