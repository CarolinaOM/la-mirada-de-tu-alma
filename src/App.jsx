import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Fondo from "./assets/Fondo.png";

function App() {

  const bgImagen = {
      backgroundImage: `url(${Fondo})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "55% 50%",
      backgroundSize: "cover",
      position: "relative",
      filter: "brightness(85%)" // Hace la imagen más opaca para que el menú resalte
    };
  
  return (
    <div style={bgImagen} className="overflow-hidden min-h-screen">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App