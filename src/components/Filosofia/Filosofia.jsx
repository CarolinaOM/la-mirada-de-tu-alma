import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

import FilosofiaImagenPrincipal from '../../assets/mujer-meditando.jpg';
import FilosofiaLogrosImagen from '../../assets/mujer-en-bosque-logros.jpg'; 

const Filosofia = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // La animación solo se ejecutará una vez
    threshold: 0.1, // Se activa cuando el 10% del componente es visible
  });

  return (
    <section
      id="filosofia"
      className="pt-36 py-20 px-4 md:px-10 lg:px-20 min-h-screen
                 bg-indigo-950/40 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto bg-gray-900/70 text-white p-8 md:p-12 lg:p-16 rounded-lg shadow-2xl backdrop-blur-md">
        
        {/* Sección Superior: Información personal */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Soy Carolina Ordoñez
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-16">
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-3xl font-bold text-purple-400 mb-4">
              Mi Esencia y Propósito
            </h3>
            <p className="text-lg text-gray-200">
              Bienvenida/o a un espacio de conexión y sanación profunda. Mi misión es guiarte en el redescubrimiento de tu luz interior, a través de herramientas energéticas y espirituales que transformarán tu vida.
            </p>
          </div>

          <div className="w-full md:w-1/3 flex justify-center items-center">
            <img 
              src={FilosofiaImagenPrincipal} 
              alt='Mujer meditando en un entorno espiritual' 
              className='w-full h-auto max-h-[400px] object-cover rounded-lg shadow-lg'
            />
          </div>

          <div className="w-full md:w-1/3 text-left">
            <h3 className="text-2xl font-semibold mb-4">
              Me especializo en:
            </h3>
            <ul className="text-lg list-disc list-inside space-y-2 text-gray-200">
              <li>Reiki</li>
              <li>Limpieza Energética</li>
              <li>Lectura con Péndulo</li>
              <li>Lectura de Cartas</li>
            </ul>
          </div>
        </div>
        
        {/* Nueva Sección de Logros y Estadísticas con el diseño solicitado */}
        <div className="relative w-full overflow-hidden rounded-lg shadow-xl" ref={ref}>
          {/* Parte superior de la imagen */}
          <div className="relative w-full h-auto max-h-[450px] overflow-hidden">
            <img 
              src={FilosofiaLogrosImagen} 
              alt='Mujer meditando en un entorno natural con logros' 
              className='w-full object-cover object-top'
              style={{ maxHeight: '450px' }}
            />
          </div>

          {/* Parte inferior con el fondo sólido y las estadísticas */}
          <div className="bg-purple-800 py-10 px-6 sm:px-10 text-white">
            <div className="grid grid-cols-2 gap-8">
              
              {/* Sección de Años de Experiencia */}
              <div className="flex flex-col items-center">
                <p className="text-5xl font-bold text-purple-200">
                  {inView && <CountUp end={10} duration={2} suffix="+" />}
                </p>
                <p className="text-sm font-medium text-gray-100 mt-2 text-center">
                  AÑOS DE EXPERIENCIA
                </p>
              </div>

              {/* Sección de Títulos y Certificaciones */}
              <div className="flex flex-col items-center">
                <p className="text-5xl font-bold text-purple-200">
                  {inView && <CountUp end={5} duration={2} />}
                </p>
                <p className="text-sm font-medium text-gray-100 mt-2 text-center">
                  TÍTULOS Y CERTIFICACIONES
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Sección inferior con botón */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-purple-400 mb-4">
            Especialidades que te guiarán en tu camino
          </h3>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
            Enfocada en la sanación energética, acompaño cada sesión con las siguientes herramientas para crear una experiencia única y personalizada para ti.
          </p>
          <Link
            to="/terapias"
            className="inline-block bg-purple-600 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 hover:bg-purple-700"
          >
            Descubre mis terapias
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Filosofia;