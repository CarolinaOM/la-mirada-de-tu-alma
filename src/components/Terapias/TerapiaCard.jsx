// src/pages/Terapia/TerapiaCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const TerapiaCard = ({ title, description, fullDescription, imageSrc, isExpanded, onClick }) => (
  <div
    className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center h-full relative"
  >
    {/* Contenido principal que se muestra siempre */}
    <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
      <div className="w-full mb-4 rounded-lg flex items-center justify-center overflow-hidden">
        <img src={imageSrc} alt={title} className="w-full h-auto object-contain" />
      </div>
      <h3 className="text-2xl font-bold text-purple-400 mb-2">{title}</h3>
      <p className="text-gray-300 mb-2 flex-grow">{description}</p>
      
      {/* Texto de "Terapia disponible a distancia." */}
      <hr className="my-4 border-t border-gray-600 w-3/4 mx-auto" />
      <p className="text-purple-300 text-sm mt-2 font-semibold">Terapia disponible a distancia.</p>

    </div>
    
    {/* Contenedor del contenido expandido (se superpone al expandir) */}
    <div className={`absolute inset-0 bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-500 ease-in-out transform flex flex-col items-center justify-center ${isExpanded ? 'scale-100 opacity-100 z-10' : 'scale-95 opacity-0 pointer-events-none'}`}>
      <div className="w-full h-1/3 mb-4 rounded-lg flex items-center justify-center overflow-hidden">
        <img src={imageSrc} alt={title} className="w-full h-auto object-contain" />
      </div>
      <h3 className="text-2xl font-bold text-purple-400 mb-2">{title}</h3>
      <p className="text-gray-300 text-base mb-6">{fullDescription}</p>
      
      <div className="flex justify-center w-full space-x-4">
        <button
          onClick={onClick}
          className="text-white font-medium py-2 px-4 rounded-full border-2 border-purple-400 flex-grow"
        >
          Cerrar
        </button>
        <Link
          to="/contacto"
          className="bg-purple-600 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 hover:bg-purple-700 flex-grow"
        >
          Contactar
        </Link>
      </div>
    </div>
    
    {/* Botón para expandir/colapsar la tarjeta */}
    {!isExpanded && (
      <button
        onClick={onClick}
        className="text-white font-medium py-2 px-4 rounded-full mt-4 border-2 border-purple-400 w-full"
      >
        Saber más
      </button>
    )}
  </div>
);

export default TerapiaCard;