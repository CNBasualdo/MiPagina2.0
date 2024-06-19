import "../hojas-de-estilos/SeccionSobreMI.css";
import { BiLogoGithub } from "react-icons/bi";

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
        <a className="Proyectos" href="https://github.com/CNBasualdo" target="_blank">
            <button className="btn btn-primary">
              <BiLogoGithub className="iconoBoton" />
              Mis Proyectos 
            </button>
        </a>
      </div>
    </div>
  );
}

export default SeccionSobreMI;