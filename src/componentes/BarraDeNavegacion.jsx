import "../hojas-de-estilos/BarraDeNavegacion.css";
import { Link } from "react-router-dom";
import iconoBarra from '../assets/imagenes/favicon.png';

const BarraDeNavegacion =()=> {
  return (
    
      <nav className="navbar navbar-expand-lg  bg-body-tertiary ">
        <div className="container-fluid">
          <Link to='/'>
            <img src={iconoBarra} alt="Icono1" width='80'/>
            <h4>Desarrollador Front-End</h4>
          </Link>
        </div>
      </nav>

    );
  }

export default BarraDeNavegacion;
