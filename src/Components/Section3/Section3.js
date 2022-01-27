import React from 'react';

export function Section3(params){
    return(    
        <div id="seccion3" className ="contenedor-tres">
            <div className="imagentres">
                <div className="caja">
                    <div className="carrusel">
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div>
                                <div className="carousel-item active" data-bs-interval="10000">
                                    <h4 className="texto-caja1">Sed ut perspiciatis</h4>
                                    <h2 className="texto-caja2">Nemo Enim</h2>
                                    <p className="texto-caja3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <h4 className="texto-caja1">Texto Dos</h4>
                                    <h2 className="texto-caja2">No se que poner</h2>
                                    <p className="texto-caja3">Esto si que cuesta pero esta muy BONITO!!!</p>
                                </div>
                                <div className="carousel-item">
                                    <h4 className="texto-caja1">Auxilio!!!!</h4>
                                    <h2 className="texto-caja2">Que genial BOOTSTRAP</h2>
                                    <p className="texto-caja3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, fugiat!</p>
                                </div>
                            </div>
                            <div className="flechas">
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                    <span className="flecha-izquierda" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                    <span className="flecha-derecha" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
};
export default Section3;

