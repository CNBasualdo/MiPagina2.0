import "../hojas-de-estilos/SeccionSobreMI.css";
import { BiLogoReact } from "react-icons/bi";
import { Link} from "react-router-dom";


function SeccionSobreMI  () {
  return(
    <div className="sobreMi seccionOscura">
      <div className="contenedor">
        <h2 className="seccionTitulo textoBLanco"> Conoceme</h2>
        <p className="seccionTexto">
          Mi nombre es Nicolas Basualdo tengo 24 años, vivo en Serodino provincia de Santa Fe. Soy desarrollador Front-End Jr.
          Realice mis estudios en el<a href="https://esc48-sfe.infd.edu.ar/sitio/"> Instituto de Educación Superior Nº48</a>, de la localidad de totoras. Me gustaría seguir adquiriendo conocimientos y tener mi primera experiencia laboral como diseñador Web.
          Un saludo y ante cualquier consulta por favor contacteme.
        </p>
        
        <Link className="Proyectos" to="/misProyectos" >
            <button className="btn btn-primary">
              <BiLogoReact className="iconoBoton" />
              Mis Proyectos 
            </button>
        </Link>

        </div>
    </div>
  );
}

export default SeccionSobreMI;