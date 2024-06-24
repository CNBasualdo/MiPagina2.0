import "../hojas-de-estilos/BarraDeNavegacion.css";
import { Link } from "react-router-dom";
import iconoBarra from '../assets/imagenes/favicon.png';

const BarraDeNavegacion =()=> {
  return (
    
      <nav className="navbar navbar-expand-lg  bg-body-tertiary ">
        <div className="container-fluid">
          <Link to='/'>
            <img src={iconoBarra} alt="Icono1" width='80'/>
          </Link>
          <h4>Desarrollador Front-End</h4>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-5 lg-9 mb-lg-0">
            <li className="nav-item">            
            </li>
          </ul>
        </div>
        </div>
      </nav>

    );
  }

export default BarraDeNavegacion;
