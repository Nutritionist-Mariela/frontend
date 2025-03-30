import { Link } from "react-router";
import "./Banner.css";
import { Image } from "react-bootstrap";
import bannerPhoto from "../assets/banner.jpg";

function Banner() {
    return (
        <div className="position-relative top-0 banner">
            <Image src={bannerPhoto} className="banner-image" alt="Banner image"></Image>
            <div className="overlay"></div>
            <div className="banner-content d-flex flex-column align-items-center">
                <h1 className="banner-title">Cada bocado es una oportunidad para cuidar de tí mismo</h1>
                <Link to="/agendarconsulta" className="btn btn-lg mt-4 cta-button">
                    Agendar Consulta
                </Link>
            </div>
        </div>
    );
}

export default Banner;
