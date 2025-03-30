import "./Services.css";
import { Container, Card, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

const cardsData = [
    {
        icon: "house",
        title: "Consultas a domicilio",
        content: "Brindamos atención personalizada, en la comodidad de tu hogar.",
    },
    {
        icon: "camera",
        title: "Video consultas",
        content: "Accede a asesoramiento profesional desde cualquier lugar con nuestras videoconsultas personalizadas.",
    },
    {
        icon: "list",
        title: "Diseño de planes nutricionales",
        content: "Ofrecemos planes nutricionales personalizados adaptados a tus objetivos, estilo de vida y preferencias alimenticias.",
    },
    {
        icon: "plus",
        title: "Seguimientos",
        content:
            "Brindamos un servicio de seguimiento constante para evaluar tu progreso, realizar ajustes necesarios y asegurarnos de que estás en el camino hacia tus metas. Contarás con apoyo y orientación personalizada.",
    },
    {
        icon: "person-running",
        title: "Nutrición aplicada al deporte",
        content: "Diseñamos planes alimenticios específicos para atletas y personas activas, optimizando su rendimiento, recuperación y bienestar general.",
    },
    {
        icon: "chart-line",
        title: "Antropometría",
        content:
            "Medidas antropométricas ISAK I (masa adiposa, ósea, muscular y residual). Informe técnico e interpretación del mismo. Monitoreo del progreso físico, identificación de áreas de mejora corporal, optimización del rendimiento deportivo.",
    },
];

const ServicesCard = ({ icon, title, content }) => {
    return (
        <Col>
            <Card className="h-100 border-0">
                <div className="card-icon d-flex justify-content-center align-items-center py-4">
                    <i className={`fa-solid fa-${icon} text-4xl text-blue-500`}></i>
                </div>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{content}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

// Add PropTypes validation
ServicesCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

function Services() {
    return (
        <div className="divServices" id="servicesSection">
            <Container>
                <h1 className="subtitulo">Servicios</h1>
                <Row xs={1} md={3} className="g-4">
                    {cardsData.map((card, index) => (
                        <ServicesCard key={index} icon={card.icon} title={card.title} content={card.content} />
                    ))}
                </Row>
            </Container>
            <br />
        </div>
    );
}

export default Services;
