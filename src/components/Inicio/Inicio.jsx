import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png'; 

const Inicio = () => {
  return (
    <section className='pt-36 min-h-screen flex flex-col items-center justify-center bg-indigo-950/40 backdrop-blur-sm'>
    
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
  );
};

export default Inicio;