import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png'; 
import GuiaImagen from '../../assets/guia-bienestar.jpg'; 

const carouselPhrases = [
  "El bienestar es el único viaje que te lleva a casa, a tu alma.",
  "La sanación no es un destino, es un camino constante de amor propio.",
  "Conectar con tu alma es el primer paso para liberar tu potencial infinito.",
];

const Inicio = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => 
        prevIndex === carouselPhrases.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Sección principal de Bienvenida */}
      <section className='pt-36 min-h-[85vh] flex flex-col items-center justify-center bg-indigo-950/40 backdrop-blur-sm'>
        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto p-10 gap-10">
          
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img 
              src={Logo} 
              alt='Logo La Mirada de tu Alma' 
              className='max-w-[300px] md:max-w-md'
            />
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col text-center md:text-left items-center md:items-start text-white">
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              La Mirada de tu Alma
            </h1>

            <p className="text-xl sm:text-2xl text-white mb-8"> 
              Un viaje de sanación y conexión contigo mismo.
            </p>

            <p className="text-lg sm:text-xl text-white max-w-xl mb-10"> 
              Te acompaño en el camino del autodescubrimiento y la sanación energética para que encuentres la paz interior que buscas. Descubre un espacio de calma donde el bienestar florece.
            </p>

            <Link 
              to="/terapias" 
              className="mt-4 bg-purple-600 py-3 px-8 text-white rounded-full hover:bg-purple-700 transition-colors text-lg font-medium"
            >
              Descubre nuestras terapias
            </Link>
          </div>
        </div>
      </section>

      {/* Sección del Carrusel de Frases Inspiradoras */}
      <section className="py-20 bg-indigo-950/60 text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold italic transition-opacity duration-1000 ease-in-out opacity-100">
            "{carouselPhrases[currentPhraseIndex]}"
          </p>
        </div>
      </section>

      {/* Sección "Mi Viaje de Sanación"*/}
      <section className="py-20 bg-indigo-950/40 backdrop-blur-sm text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-purple-600">
            Mi Viaje de Sanación
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 text-white-200">
            Mi misión es guiarte en el redescubrimiento de tu luz interior, a través de las herramientas que me han ayudado a mí. Te invito a conocer más sobre mi filosofía y mi camino.
          </p>
          <Link
            to="/filosofia"
            className="bg-purple-600 py-3 px-8 text-white rounded-full hover:bg-purple-700 transition-colors text-lg font-medium"
          >
            Conoce mi filosofía
          </Link>
        </div>
      </section>

      {/* Sección de la Guía Gratuita */}
      <section className="py-20 bg-purple-100 text-gray-900">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          
          {/* Columna de Texto */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-purple-700">
              Desbloquea tu Potencial con nuestra Guía Gratuita
            </h2>
            <p className="text-lg sm:text-xl mb-6 text-gray-800">
              Sumérgete en "Los Primeros Pasos Hacia tu Bienestar" y descubre técnicas sencillas para empezar a armonizar tu energía y encontrar la calma interior.
            </p>
            <p className="text-lg sm:text-xl mb-8 text-gray-800">
              ¡No necesitas nada, solo el deseo de conectar contigo misma!
            </p>
            {/* Nuevo texto para tus seguidores */}
            <p className="text-xl sm:text-2xl font-bold text-gray-800">
              Descubre el camino hacia tu bienestar y únete a nuestra comunidad para encontrar el apoyo y las herramientas para tu viaje de sanación.
            </p>
          </div>

          {/* Columna de Imagen */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img 
              src={GuiaImagen} 
              alt='Ilustración de guía de bienestar' 
              className='max-w-full h-auto rounded-lg shadow-lg'
            />
          </div>

        </div>
      </section>

      {/* Sección del Contador de Visitas */}
      <div className="py-8 bg-indigo-950/40 text-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-sm">
            {/* ¡Pega aquí el código que te dio el servicio de contador! */}
            {/* Ejemplo: */}
            Visitas a la página: 12345
          </p>
        </div>
      </div>
    </>
  );
};

export default Inicio;