import '../hojas-de-estilos/PieDePagina.css'
import { BiLogoReact } from "react-icons/bi";

function PieDePagina (){
  return(
    <footer className='seccionOscura d-flex flex-column align-items-center justify-content-center'>
      <BiLogoReact className='pieDePagina' />
      <div className='derechosDeAutor'>Creado por Carlos N. Basualdo (2024) </div>
    </footer>
  );
}


export default PieDePagina;