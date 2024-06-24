import "./App.css";
import BarraDeNavegacion from "./componentes/BarraDeNavegacion";
import SeccionPrincipal from "./componentes/SeccionPrincipal";
import SeccionSobreMI from "./componentes/SeccionSobreMI";
import Contacto from "./componentes/Contacto";
import PieDePagina from "./componentes/PieDePagina";

function App() {
  return (
    <div className="App">
      <BarraDeNavegacion />
      <SeccionPrincipal />
      <SeccionSobreMI />
      <Contacto />
      <PieDePagina />
    </div>
  );
}

export default App;
