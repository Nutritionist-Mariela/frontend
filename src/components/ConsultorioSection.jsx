import { Carousel } from "react-bootstrap";
import consultorio1_img1 from "../assets/consultorio1_1.jpeg";
import consultorio1_img2 from "../assets/consultorio1_2.jpeg";

import consultorio2_img1 from "../assets/consultorio2_1.jpeg";
import consultorio2_img2 from "../assets/consultorio2_2.jpeg";

import './ConsultorioSection.css';

import online_img from "../assets/consultorio3.png"; // imagen para consulta online

const ConsultorioSection = () => {
    return (
        <section className="consultorio-section" id="consultorio">
            <div className="container py-5">
                <h1 className="subtitulo text-center mb-4">Consultas</h1>

                <div className="row g-4">

                    {/* CARD Consultorio Parque Batlle */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card consultorio-card position-relative">

                            {/* Cintillo PRESENCIAL */}
                            <span className="badge-diagonal presencial">PRESENCIAL</span>

                            <Carousel fade indicators={false}>
                                <Carousel.Item>
                                    <img src={consultorio2_img1} className="card-img-top" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={consultorio2_img2} className="card-img-top" />
                                </Carousel.Item>
                            </Carousel>

                            <div className="card-body">
                                <h4 className="card-title">Consultorio Parque Batlle</h4>

                                <ul className="lista-consultorio text-start mt-3">
                                    <li><strong>Ubicación:</strong> Parque Batlle</li>
                                    <li><strong>Horarios:</strong> Lunes, Miércoles y Viernes</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* CARD Consultorio Las Piedras */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card consultorio-card position-relative">

                            {/* Cintillo PRESENCIAL */}
                            <span className="badge-diagonal presencial">PRESENCIAL</span>

                            <Carousel fade indicators={false}>
                                <Carousel.Item>
                                    <img src={consultorio1_img1} className="card-img-top" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={consultorio1_img2} className="card-img-top" />
                                </Carousel.Item>
                            </Carousel>

                            <div className="card-body">
                                <h4 className="card-title">Consultorio Las Piedras</h4>

                                <ul className="lista-consultorio text-start mt-3">
                                    <li><strong>Ubicación:</strong> Las Piedras</li>
                                    <li><strong>Horarios:</strong> Lunes, Miércoles, Viernes y Sábados</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* CARD CONSULTA ONLINE */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card consultorio-card position-relative">

                            {/* Cintillo ONLINE */}
                            <span className="badge-diagonal online">ONLINE</span>

                            <img src={online_img} className="card-img-top" />

                            <div className="card-body">
                                <h4 className="card-title">Consulta Online</h4>
                                <p className="card-text">
                                    Atención profesional desde la comodidad de tu casa.
                                </p>

                                <ul className="lista-consultorio text-start mt-3">
                                    <li><strong>Ubicación:</strong> Desde cualquier lugar</li>
                                    <li><strong>Horarios:</strong> Flexibles</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default ConsultorioSection;
