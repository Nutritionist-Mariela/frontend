import React from "react";
import "./AboutMe.css";
import img1 from "../assets/me.jpg";
import img2 from "../assets/me1.jpeg";
import img3 from "../assets/me2.jpg";


const AboutSection = () => {
    const aboutImages = [img1, img2, img3];

    const description = `
        ¡Hola! Soy Mariela Barceló, licenciada en Nutrición por la Universidad de la República (UdelaR).
        Mi objetivo es ayudarte a mejorar tu bienestar a través de una alimentación equilibrada y personalizada.
        En cada consulta trabajo de manera cercana y profesional para brindarte el acompañamiento que necesitas en tu camino hacia una mejor alimentación.
        ¡Juntos encontraremos la mejor estrategia para vos!
        
    `;

    return (
        <div style={{ backgroundColor: "#F8F7FC" }} className="container-seccion" id="sobremi">
            <br></br>
            <div className="container">
            </div>
            <h1 className="subtitulo">Sobre mí</h1>
            <div className="container">
                <div className="card shadow-sm rounded border-0">
                    <div className="row g-0 align-items-center">

                        <div className="col-12 col-md-6 text-center">
                            <div id="aboutCarousel" className="carousel slide">
                                <div className="carousel-inner">

                                    {aboutImages.map((img, index) => (
                                        <div
                                            key={index}
                                            className={`carousel-item ${index === 0 ? "active" : ""}`}
                                        >
                                            <img
                                                src={img}
                                                className="d-block w-100 rounded-start"
                                                alt={`Mariela foto ${index + 1}`}
                                                style={{ height: "100%", objectFit: "cover" }}
                                            />
                                        </div>
                                    ))}

                                </div>

                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#aboutCarousel"
                                    data-bs-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                </button>

                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#aboutCarousel"
                                    data-bs-slide="next"
                                >
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                </button>
                            </div>
                        </div>


                        <div className="col-12 col-md-6">
                            <div className="card-body">
                                <p className="card-text" style={{ lineHeight: "1.7" }}>
                                    {description}
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
