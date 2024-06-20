import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import BarraDeNavegacion from "./componentes/BarraDeNavegacion";
import SeccionPrincipal from "./componentes/SeccionPrincipal";
import SeccionSobreMI from "./componentes/SeccionSobreMI";
import Contacto from "./componentes/Contacto";
import PieDePagina from "./componentes/PieDePagina";

function App() {
  return (
    <div className="App">
    <Router>
      <BarraDeNavegacion />
      <SeccionPrincipal />
      <SeccionSobreMI />
      <Contacto />
      <PieDePagina />
    </Router>
    </div>
  );
}

export default App;
