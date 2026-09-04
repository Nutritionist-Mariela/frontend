import { Link } from "react-router";

import "./Banner.css";

import { Image } from "react-bootstrap";

import bannerPhoto from "../assets/banner.jpg";

function Banner() {
    return (
        <div className="position-relative top-0 banner">
            <Image src={bannerPhoto} className="banner-image" alt="Banner image" />

            <div className="overlay"></div>

            <div className="banner-content d-flex flex-column align-items-center">
                <h1 className="banner-title">Cada bocado es una oportunidad para cuidar de ti mismo</h1>

                <div className="banner-buttons">
                    <a href="https://wa.me/59899343545" target="_blank" rel="noopener noreferrer" className="btn btn-lg cta-button">
                        Agendar consulta
                    </a>

                    <Link to="/precios" className="btn btn-lg cta-button cta-button-outline">
                        Ver precios
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Banner;
