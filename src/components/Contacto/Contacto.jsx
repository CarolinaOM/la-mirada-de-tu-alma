import React from 'react';
import ContactoImagen from '../../assets/contacto-mistico2.jpg';

const Contacto = () => {
  return (
    <section
      id="contacto"
      className="pt-36 pb-20 px-4 md:px-10 lg:px-20 min-h-screen
                 bg-gradient-to-br from-purple-200 to-indigo-200 text-gray-900 
                 flex items-center justify-center relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo sutiles (blobs) */}
      <div className="absolute top-10 left-1/4 w-48 h-48 bg-purple-300/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-indigo-300/30 rounded-full mix-blend-multiply filter blur-xl animation-delay-2000 animate-blob"></div>

      {/* Contenedor principal del contenido de contacto */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 
                      bg-[#1a1c29]/70 backdrop-blur-md p-8 md:p-12 rounded-lg shadow-2xl 
                      transform transition-all duration-500 scale-95 hover:scale-100 ease-in-out
                      animate-fade-in-up text-white border border-purple-500/30">
        
        {/* Sección de la imagen (Columna izquierda en escritorio) */}
        <div className="md:w-1/2 w-full flex justify-center items-center h-auto animate-fade-in-left"> 
          <img
            src={ContactoImagen}
            alt="Ilustración mística de conexión"
            // Se quita el borde morado para un estilo más limpio
            className="rounded-lg shadow-lg w-[25rem] h-auto object-cover transform hover:scale-105 transition-transform duration-300"
             loading="lazy"
          />
        </div>

        {/* Sección del texto de contacto (Columna derecha en escritorio) */}
        <div className="md:w-1/2 w-full text-center md:text-left animate-fade-in-right">
          {/* Título con degradado */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 leading-tight">
            Ponte en contacto
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 font-light leading-relaxed">
            Para cualquier duda, consulta o para agendar una cita en tu camino de bienestar,
            no dudes en escribirme. Estoy aquí para escucharte y guiarte con amor y luz.
          </p>

          <div className="mb-8 p-4 bg-white/5 rounded-md border border-gray-700 hover:border-purple-600 transition-colors duration-300">
            {/* Correo */}
            <h3 className="text-2xl sm:text-3xl font-medium mb-2 text-gray-100 flex items-center justify-center md:justify-start">
              <i className="bi bi-envelope-fill text-purple-400 mr-3"></i> Correo Electrónico
            </h3>
            <a
              href="mailto:lamiradadetualma@gmail.com"
              className="text-purple-300 hover:text-purple-400 text-xl sm:text-2xl font-semibold 
                         transition-colors duration-300 transform hover:scale-105 inline-block mt-2"
            >
              lamiradadetualma@gmail.com
            </a>
          </div>

          {/* Botón de acción */}
          <div className="my-8">
            <a
              href="mailto:lamiradadetualma@gmail.com"
              className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xl md:text-2xl font-bold 
                         py-4 px-8 rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out
                         border border-purple-500 hover:border-white"
            >
              ¡Agenda Tu Sesión Hoy! <i className="bi bi-arrow-right ml-2"></i>
            </a>
          </div>

          {/* Redes Sociales */}
          <div className="p-4 bg-white/5 rounded-md border border-gray-700 hover:border-indigo-600 transition-colors duration-300">
            <h3 className="text-2xl sm:text-3xl font-medium mb-2 text-gray-100 flex items-center justify-center md:justify-start">
              <i className="bi bi-share-fill text-indigo-400 mr-3"></i> Redes Sociales
            </h3>
            <div className="flex justify-center md:justify-start gap-6 sm:gap-8 text-3xl sm:text-4xl mt-4">
              <a
                href="https://www.instagram.com/lamiradadetualma/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#E1306C] transition-transform transform hover:scale-125"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/@lamiradadetualma261"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FF0000] transition-transform transform hover:scale-125"
              >
                <i className="bi bi-youtube"></i>
              </a>
              <a
                href="https://www.tiktok.com/@lamiradadetualma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-transform transform hover:scale-125"
              >
                <i className="bi bi-tiktok"></i>
              </a>
              <a
                href="https://www.facebook.com/lamiradadetualma.lamiradadetualma.1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#4267B2] transition-transform transform hover:scale-125"
              >
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;