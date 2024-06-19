import '../hojas-de-estilos/Botonera.css';
import { BiLogoJavascript, BiLogoReact, BiLogoBootstrap, BiLogoHtml5, BiLogoGit } from "react-icons/bi";


function Botonera () {
  return(
    <div className='botones'>
      <div className='titulos'>
        <h4>esta fue mi ruta de aprendizaje: </h4>
      </div>
        
        <div className='botonera'>
          <a href="https://www.youtube.com/watch?v=kN1XP-Bef7w" target='_blank'>
            <button className='fill btn btn-primary'>
            <BiLogoHtml5 className='iconoCurso'/>Html
            </button>
          </a>

          <a href="https://www.youtube.com/watch?v=QCw0L6FupQ0&list=PLZKRlIq931nIrXUWF1nmAxpW9z6nwcJ4y" target='_blank'>
            <button className='fill btn btn-primary'>
            <BiLogoBootstrap className='iconoCurso'/>
            Bootstrap
            </button>
          </a>

          <a href="https://www.youtube.com/watch?v=z95mZVUcJ-E&list=PLZKRlIq931nIrXUWF1nmAxpW9z6nwcJ4y&index=2&t=3s&ab_channel=SoyDalto" target="_blank">
            <button className="fill btn btn-primary" >
            <BiLogoJavascript className='iconoCurso'/>
            JavaScript
            </button>
          </a>

          <a href="https://www.youtube.com/watch?v=6Jfk8ic3KVk&list=PLZKRlIq931nIrXUWF1nmAxpW9z6nwcJ4y&index=4" target='_blank'>
            <button className="fill btn btn-primary">
            <BiLogoReact className='iconoCurso'/>
            React
            </button>
          </a>

          <a href="https://www.youtube.com/playlist?list=PLU8oAlHdN5BlyaPFiNQcV0xDqy0eR35aU" target='_blank'>
            <button className="fill btn btn-primary">
            <BiLogoGit className='iconoCurso'/>
            Git
            </button>
          </a>
        </div>
    </div>
  );
}


export default Botonera;
