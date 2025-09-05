import React from 'react';
import { Link } from 'react-router-dom';

// Importa las imágenes de cada terapia
import ReikiPersonasImg from '../../assets/reiki-personas.jpg';
import ReikiAnimalesImg from '../../assets/reiki-animales.jpg';
import ChakrasImg from '../../assets/chakras.jpg';
import PenduloImg from '../../assets/pendulo.jpg';
import LimpiezaImg from '../../assets/limpieza-energetica.jpg';
import CartasImg from '../../assets/lectura-cartas.jpg';

// Componente para una tarjeta de terapia
const TerapiaCard = ({ title, description, imageSrc }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center h-full">
    {/* Contenedor de la imagen sin altura fija */}
    <div className="w-full mb-4 rounded-lg flex items-center justify-center overflow-hidden">
      <img src={imageSrc} alt={title} className="w-full h-auto object-contain" />
    </div>
    <h3 className="text-2xl font-bold text-purple-400 mb-2">{title}</h3>
    <p className="text-gray-300 mb-2 flex-grow">{description}</p>
    <p className="text-purple-300 text-sm font-semibold mt-auto pt-2 border-t border-gray-700 w-full">
      Terapia disponible a distancia.
    </p>
  </div>
);

const Terapias = () => {
  return (
    <section
      id="terapias"
      className="pt-36 py-20 px-4 md:px-10 lg:px-20 min-h-screen
                 bg-indigo-950/40 backdrop-blur-sm text-white"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Sección de Título y Descripción General */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Terapias Holísticas
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
            Descubre un camino de bienestar a través de sesiones diseñadas para armonizar tu cuerpo, mente y espíritu. Cada terapia es una experiencia única para ayudarte a conectar con tu esencia.
          </p>
        </div>

        {/* Sección de Tarjetas de Terapias */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <TerapiaCard 
            title="Reiki a Personas"
            description="Armoniza tu energía vital, reduce el estrés y promueve la curación física y emocional para alcanzar un estado de paz profunda."
            imageSrc={ReikiPersonasImg}
          />
          <TerapiaCard 
            title="Reiki a Animales"
            description="Reiki para mascotas. Ayuda a calmar, sanar y mejorar el bienestar de tus compañeros de vida."
            imageSrc={ReikiAnimalesImg}
          />
          <TerapiaCard 
            title="Alineación de Chakras"
            description="Equilibra tus centros de energía para liberar bloqueos, restaurar el flujo energético y mejorar tu bienestar general y claridad mental."
            imageSrc={ChakrasImg}
          />
          <TerapiaCard 
            title="Lectura con Péndulo"
            description="Conecta con tu subconsciente y recibe respuestas claras y objetivas a tus preguntas, obteniendo una guía para tomar decisiones con confianza."
            imageSrc={PenduloImg}
          />
          <TerapiaCard 
            title="Limpieza Energética"
            description="Purifica tus espacios y tu aura de energías estancadas o negativas para atraer vibraciones positivas y sentir una renovación completa."
            imageSrc={LimpiezaImg}
          />
          <TerapiaCard 
            title="Lectura de Cartas"
            description="Obtén orientación sobre tu camino de vida y descubre perspectivas sobre tu futuro. Un camino hacia el autoconocimiento y la sanación."
            imageSrc={CartasImg}
          />
        </div>

        {/* Sección de Llamada a la Acción Final */}
        <div className="mt-20 text-center bg-gray-900/60 p-10 rounded-lg shadow-xl">
          <h3 className="text-3xl font-bold text-purple-400 mb-4">
            ¿Lista para comenzar tu viaje de sanación?
          </h3>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-6">
            Estoy aquí para guiarte. Contáctame para agendar tu primera sesión y dar el primer paso hacia un estado de bienestar total.
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-purple-600 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 hover:bg-purple-700"
          >
            Contactar
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Terapias;