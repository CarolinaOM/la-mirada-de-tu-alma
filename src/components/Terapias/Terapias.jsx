import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TerapiaCard from './TerapiaCard'; // <-- Importamos el nuevo componente

// Importa las imágenes de cada terapia
import ReikiPersonasImg from '../../assets/reiki-personas.jpg';
import ReikiAnimalesImg from '../../assets/reiki-animales.jpg';
import ChakrasImg from '../../assets/chakras.jpg';
import PenduloImg from '../../assets/pendulo.jpg';
import LimpiezaImg from '../../assets/limpieza-energetica.jpg';
import CartasImg from '../../assets/lectura-cartas.jpg';

const Terapias = () => {
  const [expandedTerapia, setExpandedTerapia] = useState(null);

  const terapiasData = [
    {
      id: 1,
      title: "Reiki a Personas",
      description: "Armoniza tu energía vital, reduce el estrés y promueve la curación física y emocional para alcanzar un estado de paz profunda.",
      fullDescription: "El Reiki es una técnica de sanación energética que ayuda a reequilibrar tu cuerpo, liberar bloqueos emocionales y reducir el estrés. Con el reiki a distancia, te envío energía curativa sin necesidad de estar presente físicamente. Mi intención es canalizar y dirigir la energía a través del espacio y el tiempo hacia ti, buscando tu bienestar total.",
      imageSrc: ReikiPersonasImg,
    },
    {
      id: 2,
      title: "Reiki a Animales",
      description: "Reiki para mascotas. Terapia energética suave y no invasiva que ayuda a calmar, sanar y mejorar el bienestar de tus compañeros de vida.",
      fullDescription: "El Reiki es una sanación energética suave y no invasiva, a la que los animales son muy receptivos. A distancia, se canaliza energía a través de la intención para calmar, ayudar en la recuperación de enfermedades y fortalecer el vínculo con tu mascota. Esta terapia ayuda a equilibrar sus centros energéticos para mejorar su bienestar físico y emocional.",
      imageSrc: ReikiAnimalesImg,
    },
    {
      id: 3,
      title: "Alineación de Chakras",
      description: "Equilibra tus centros de energía para liberar bloqueos, restaurar el flujo energético y mejorar tu bienestar general y claridad mental.",
      fullDescription: "Los chakras son los centros de energía del cuerpo. Cuando están bloqueados, pueden causar malestares físicos y emocionales. Esta terapia utiliza técnicas energéticas para limpiar y equilibrar cada uno de los siete chakras principales, lo que promueve un flujo de energía saludable y vitalidad. Al ser una terapia que se puede realizar a distancia, te permite recibir esta sanación desde la comodidad de tu hogar.",
      imageSrc: ChakrasImg,
    },
    {
      id: 4,
      title: "Lectura con Péndulo",
      description: "Conecta con tu subconsciente y recibe respuestas claras y objetivas a tus preguntas, obteniendo una guía para tomar decisiones con confianza.",
      fullDescription: "La Lectura con Péndulo es una herramienta de radiestesia que amplifica tu intuición para obtener respuestas claras (sí o no) a preguntas específicas. El péndulo actúa como una extensión de tu energía, permitiéndote recibir guía para tomar decisiones con confianza y obtener claridad en situaciones confusas. Esta técnica es ideal para realizarse a distancia, ya que se basa en la conexión energética, sin necesidad de estar físicamente presente.",
      imageSrc: PenduloImg,
    },
    {
      id: 5,
      title: "Limpieza Energética",
      description: "Purifica tus espacios y tu aura de energías estancadas o negativas para atraer vibraciones positivas y sentir una renovación completa.",
      fullDescription: "La Limpieza Energética es un proceso de purificación que se puede aplicar a personas, objetos o espacios. Se eliminan energías densas o negativas que pueden estar afectando tu bienestar, lo que resulta en una sensación de ligereza, claridad mental y un ambiente más armónico. Este proceso puede realizarse con la misma eficacia a distancia, canalizando la energía a través de la intención para purificar tu espacio y tu aura, sin importar la ubicación física.",
      imageSrc: LimpiezaImg,
    },
    {
      id: 6,
      title: "Lectura de Cartas",
      description: "Obtén orientación sobre tu camino de vida y descubre perspectivas sobre tu futuro. Un camino hacia el autoconocimiento y la sanación.",
      fullDescription: "Una lectura de cartas te ofrece una perspectiva simbólica y profunda de tu situación actual. Es una poderosa herramienta de autoconocimiento que te ayuda a entender las energías que te rodean, a reconocer patrones y a tomar decisiones con mayor conciencia. Se realiza a distancia, lo que permite la conexión energética sin necesidad de estar físicamente presente. Esto te brinda la comodidad de recibir orientación y guía desde cualquier lugar.",
      imageSrc: CartasImg,
    },
  ];

  const handleCardClick = (id) => {
    setExpandedTerapia(expandedTerapia === id ? null : id);
  };

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
            Terapias Holísticas a Distancia
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
            Descubre un camino de bienestar a través de sesiones diseñadas para armonizar tu cuerpo, mente y espíritu desde la comodidad de tu hogar.
          </p>
        </div>

        {/* Sección de Tarjetas de Terapias */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {terapiasData.map((terapia) => (
            <TerapiaCard 
              key={terapia.id}
              {...terapia}
              isExpanded={expandedTerapia === terapia.id}
              onClick={() => handleCardClick(terapia.id)}
            />
          ))}
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