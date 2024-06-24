import '../hojas-de-estilos/SeccionPrincipal.css';
import Botonera from './Botonera';
import imagenPrincipal from '../assets/imagenes/imagenPrincipal.png';


function SeccionPrincipal () {

    return (
      <div className='seccionPrincipal  align-items-stretch'>
        <div className='principal '>
          <img className='imagenPrincipal rounded-circle' src={imagenPrincipal} alt="ilustracionDeNicolaBasualdo"/>
          <h1>Hola soy Nicolas Basualdo</h1>
          <h2>Front-End Developer JR</h2>
            <Botonera/>
          </div>
        </div>
    );
  }

export default SeccionPrincipal;
