import React from "react"
import Navbar from "../NavBar/Navbar"

export function Section1(params){
    return(    
    <div id = "seccion1" className="carrusel">
            <div id="carouselExampleDark" className="ubicacion carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active redondeo" aria-current="true" aria-label="Slide 1" ></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" className="redondeo"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3" className="redondeo"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                            <div className="imagenescarrusel1">
                            <header>
                                <Navbar/>
                            </header>
                            <div className="titulos">
                                <h1 className="titulo-uno">Sed ut perspiciatis unde omnis </h1>
                                <h3 className="titulo-dos">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</h3>
                                <button className="button">Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <div className="imagenescarrusel2">
                            <header>
                                <Navbar/>
                            </header>
                            <div className="titulos">
                                <h1 className="titulo-uno">Customize el carrusel en bootstrap</h1>
                                <h3 className="titulo-dos">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit neque blanditiis eum nulla ipsam mollitia voluptates saepe. Quia similique, veniam incidunt vitae nesciunt magnam voluptates illo, maxime eligendi optio obcaecati..</h3>
                                <button className="button">Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="imagenescarrusel3">
                            <header>
                                <Navbar/>
                            </header>
                            <div className="titulos">
                                <h1 className="titulo-uno">Buscamos a lo mejor que tienes en ti</h1>
                                <h3 className="titulo-dos">Texto random para ver que valga el carrusel.</h3>
                                <button className="button">Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
    </div>
    )
};
export default Section1;

