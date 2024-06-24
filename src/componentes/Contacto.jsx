import '../hojas-de-estilos/Contacto.css';
import { BiLogoGmail, BiLogoLinkedin, BiLogoDiscordAlt} from "react-icons/bi";
import ImgTamaño2 from '../assets/imagenes/ImgTamaño2.png';



function Contacto() {
  return (
    <div className='contacto'>
      <div className='contededorLinks'>
          <h1>Contacto</h1>
          <a href="mailto:basualdocarlos691@gmail.com" target='_blank'>
            <BiLogoGmail className='iconoLink'/> Gmail
          </a>
          <a href="https://www.linkedin.com/in/carlos-basualdo-60028a2b8" target='_blank'>
            <BiLogoLinkedin className='iconoLink'/> Linkedin 
          </a>
          <a href="https://discord.gg/YE4dx4y8Gs"> 
            <BiLogoDiscordAlt className='iconoLink'/> Discord 
          </a>
        </div>

      <img className='contactoImg'  src={ImgTamaño2} alt="ImagenContacto"/>

    </div>
  );
}



export default Contacto;


