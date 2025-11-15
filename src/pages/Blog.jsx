import "./Blog.css";
import { useState } from "react";
import { Modal, Button, Container, Row, Col, Card, Alert } from "react-bootstrap";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";

function BlogNutricion() {

    const articulosHardcodeados = [
        {
            id: "1",
            titulo: "Planifica tu menú semanal en 5 pasos",
            contenido: `En estos días en que el tiempo es oro, puede ser un desafío preparar comidas caseras, saludables y nutritivas.
            
Permíteme decirte que no eres el único al que le sucede.

Esta publicación estará centrada en hacerte la vida más simple, permitiéndote disfrutar de alimentos deliciosos y caseros sin el estrés de pensar en el típico "¿qué vamos a comer hoy?".

En esta guía te voy a dar algunos tips esenciales para planificar la comida de la semana de una manera fácil, rápida y sencilla. Prepárate para simplificar tu vida y disfrutar del placer de la comida casera todos los días.

### Paso 1: Elige 3 proteínas
- Carne de vaca
- Carne de pollo
- Lentejas

### Paso 2: Elige 3 carbohidratos
- Arroz
- Fideos
- Papas

### Paso 3: Elige de 3 a 5 vegetales
- Tomate
- Zanahoria
- Zucchini
- Berenjena
- Brócoli

### Paso 4: Armar platos combinando ingredientes

### Paso 5: ¡Disfruta de cada día de la semana!
`,
            fecha: "2025-03-01",
            imagen: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    const [articulos] = useState(articulosHardcodeados);
    const [modalShow, setModalShow] = useState(null);

    const formatearFecha = (fechaStr) => {
        const opciones = { year: "numeric", month: "long", day: "numeric" };
        return new Date(fechaStr).toLocaleDateString("es-ES", opciones);
    };

    const handleShow = (id) => setModalShow(id);
    const handleClose = () => setModalShow(null);

    return (
        <>
            <NavBar />

            <Container className="py-5">
                <Row className="justify-content-center text-center mb-5">
                    <Col lg={8}>
                        <h1 className="display-4 mb-3">Blog de Nutrición</h1>
                        <p className="lead">Información sobre nutrición y alimentación saludable</p>
                    </Col>
                </Row>

                {/* Artículos */}
                <Row>
                    {articulos.map((articulo) => (
                        <Col md={4} className="mb-4" key={articulo.id}>
                            <Card className="h-100 shadow-sm">
                                <Card.Img
                                    variant="top"
                                    src={articulo.imagen}
                                    alt={articulo.titulo}
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <Card.Body>
                                    <div className="mb-2">
                                        <small className="text-muted">{formatearFecha(articulo.fecha)}</small>
                                    </div>
                                    <Card.Title>{articulo.titulo}</Card.Title>
                                    <Card.Text>
                                        {articulo.contenido.substring(0, 120)}...
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="bg-white border-top-0">
                                    <Button
                                        variant="outline-primary"
                                        onClick={() => handleShow(articulo.id)}
                                        className="w-100"
                                    >
                                        Leer artículo completo
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* Modal con artículo completo */}
            <Modal show={modalShow !== null} onHide={handleClose} size="lg" centered>
                {modalShow !== null && (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>{articulos.find(a => a.id === modalShow)?.titulo}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <img
                                src={articulos.find(a => a.id === modalShow)?.imagen}
                                alt=""
                                className="img-fluid mb-3 w-100"
                                style={{ maxHeight: "400px", objectFit: "cover" }}
                            />

                            <div className="mb-3">
                                <small className="text-muted">
                                    Publicado: {formatearFecha(articulos.find(a => a.id === modalShow)?.fecha)}
                                </small>
                            </div>

                            <div className="article-content">
                                {articulos
                                    .find(a => a.id === modalShow)
                                    ?.contenido.split("\n")
                                    .map((p, i) => <p key={i}>{p}</p>)}
                            </div>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
                        </Modal.Footer>
                    </>
                )}
            </Modal>

            <WhatsappButton phoneNumber="+59899343545" message="Hola! Me gustaría..." />
            <Footer />
        </>
    );
}

export default BlogNutricion;
