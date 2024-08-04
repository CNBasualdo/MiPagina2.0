import React from 'react'
import "../hojas-de-estilos/MisProyectos.css"
import BarraDeNavegacion from './BarraDeNavegacion'
import PieDePagina from './PieDePagina'
import { BiLogoGithub } from "react-icons/bi";

import Pokedex from '../assets/MisProyectos/pokedexImg.png'
import Calculadora from '../assets/MisProyectos/Calculadora.jpg'
import MiPagin2 from '../assets/MisProyectos/ImgTamaño2.png'
import Bootstr from '../assets/MisProyectos/Bootstrap.png'
import Abm from '../assets/MisProyectos/ContClick.png'
import Cripto from '../assets/MisProyectos/Cripto.png'









export default function MisProyectos() {
  return (
        <div className='misProyectos'>
            <BarraDeNavegacion/>
                <div >
                    <div className='cabecera'>
                      <h1>Estos son mis proyectos</h1>
                      <a href="https://github.com/CNBasualdo" target='_blank'>
                      <button className='btn btn-primary'>
                          <BiLogoGithub className='iconoBoton'/>
                          Mi Repositorio
                      </button>
                      </a>
                    </div>

                  <div className='tarjetero'>

                    <div className="card">
                        <img src={Abm} className="card-img-top"/>
                          <div className="card-body">
                            <h5 className="card-title">A.B.M</h5>
                            <p className="card-text">App para control de stock, con un alta, baja y modificaion de productos."En Proceso"</p>
                            <a href="https://cnbasualdo.github.io/alta-baja-modificacion/" className="btn btn-primary">Ir al Proyecto</a>
                          </div>
                      </div>

                      <div className="card">
                        <img src={Cripto} className="card-img-top"/>
                          <div className="card-body">
                            <h5 className="card-title">Criptomoneda </h5>
                            <p className="card-text">Pagina para ver el Precio de las Criptomonedas."En Proceso"</p>
                            <a href="https://cnbasualdo.github.io/proyectoCripto/" className="btn btn-primary">Ir al Proyecto</a>
                          </div>
                      </div>

                      <div className="card">
                        <img src={Pokedex} className="card-img-top"/>
                          <div className="card-body">
                            <h5 className="card-title">Pokedex</h5>
                            <p className="card-text">Esta pokedex se hizo con base en React, consumiendo todo los datos de la PokeApi.</p>
                            <a href="https://cnbasualdo.github.io/POKEDEX/" className="btn btn-primary">Ir al Proyecto</a>
                          </div>
                      </div>

                      <div className="card">
                        <img src={Calculadora} className="card-img-top"/>
                          <div className="card-body">
                            <h5 className="card-title">Calculadora</h5>
                            <p className="card-text">Calculadora realizada en Curso de React, primer proyecto utilizando Hooks  .</p>
                            <a href="https://cnbasualdo.github.io/calculadoraReact/" className="btn btn-primary">Ir al Proyecto</a>
                          </div>
                      </div>

                    
                    
                      <div className="card">
                        <img src={MiPagin2} className="card-img-top"/>
                          <div className="card-body">
                            <h5 className="card-title">Mi Pagina 2.0</h5>
                            <p className="card-text">Esta pagina de presentacion fue echa con React. al finalizar el curso.</p>
                            <a href="#" className="btn btn-primary">Ir al Proyecto</a>
                          </div>
                      </div>
                    
                      <div className="card">
                        <img src={Bootstr} className="card-img-top"/>
                          <div className="card-body">
                            <h5 className="card-title">Mi Pagina 1.0</h5>
                            <p className="card-text">Pagina de presentacion echa solo con HTML5 y Bootstrasp.</p>
                            <a href="https://cnbasualdo.github.io/MiPagina1.0/" target='_blank' className="btn btn-primary">Ir al Proyecto</a>
                          </div>
                      </div>
                  
                    </div>

                </div>
        <PieDePagina/>
        </div>
  );
}
