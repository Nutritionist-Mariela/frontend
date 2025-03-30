import "./Blog.css";
import { useState, useEffect } from "react";
import { Modal, Button, Container, Row, Col, Card, Alert } from "react-bootstrap";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";

function BlogNutricion() {
    const [modalShow, setModalShow] = useState(null);
    const [articulos, setArticulos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const articuloDefault = [
        {
            id: "default-2",
            titulo: "Planifica tu menú semanal en 5 pasos",
            contenido: `En estos días en que el tiempo es oro, puede ser un desafío preparar comidas caseras, saludables y nutritivas.
        
Permíteme decirte que no eres el único al que le sucede.
        
Esta publicación estará centrada en hacerte la vida más simple, permitiéndote disfrutar de alimentos deliciosos y caseros sin el estrés de pensar en el típico "¿qué vamos a comer hoy?".
        
En esta guía te voy a dar algunos tips esenciales para planificar la comida de la semana de una manera fácil, rápida y sencilla. Prepárate para simplificar tu vida y disfrutar del placer de la comida casera todos los días.
        
### Paso 1: Elige 3 proteínas
Son la base de tu plato. Tres opciones que te gusten y que se adapten a tus preferencias dietéticas. Aquí algunos ejemplos:
- **Carne de vaca**: Clásica y versátil. Desde un churrasco hasta una hamburguesa casera, elige el corte de tu preferencia, intentando que sea lo más magro posible.
- **Carne de pollo**: Una opción más ligera. Pechuga, muslo, al horno o desmenuzado… siempre sin piel.
- **Lentejas**: Excelentes para una opción vegana o vegetariana, ricas en proteínas. En un guisito, ensalada o en hamburguesa, hay mil opciones.
        
### Paso 2: Elige 3 carbohidratos
Cumplen el rol de guarnición o complemento de tu proteína y te darán la energía necesaria para enfrentar el día.
- **Arroz**: Una base versátil y nutritiva. Si le agregas especias y hierbas durante o luego de su cocción, le darás un toque especial.
- **Fideos**: Pasta de trigo o sémola, dependiendo de tus preferencias y necesidades. Mil posibilidades de combinaciones frías y calientes.
- **Papas**: Los tubérculos son una maravillosa opción para agregar un carbohidrato no refinado.
        
### Paso 3: Elige de 3 a 5 vegetales
Es hora del color. Los vegetales nos aportan vitaminas, minerales y fibra esenciales para una dieta balanceada. Intenta incluir la mayor variedad posible:
- **Tomate (rojo)**: Fresco y sabroso, en ensaladas o también en una salsa casera.
- **Zanahoria**: Cruda, rallada, hervida en trozos, horneada, etc.
- **Zucchini (verde)**: En rodajas, asado o en finas tiras tipo pasta.
- **Berenjena (violeta)**: Al horno en finas tiras, salteada o como sustituto de masa para tartas.
- **Brócoli**: Cargado de nutrientes, fácil y rápido de preparar.
        
### Paso 4: Armar platos combinando ingredientes
¡Llegó el momento de crear!
Utiliza las proteínas, carbohidratos y vegetales que elegiste y arma tu plato. Ejemplos:
- Churrasco de vaca con arroz integral acompañado de ensalada de tomate y zanahoria.
- Pollo al horno con papas y brócoli al vapor.
- Ensalada de lentejas y arroz con mix de vegetales.
- Pollo al curry con arroz y vegetales.
- Ensalada fría de pasta con pollo desmenuzado, tomate y zucchini.
- Sopa de pollo con fideos y vegetales.
        
### Paso 5: ¡Disfruta de cada día de la semana!
Ahora que tienes los platos programados y distribuidos en la semana, organiza cada día según tu agenda y preferencias. Recuerda variar tus elecciones para mantener la alegría de comer rico y variado.

Además, ir al supermercado con tu lista de compras será más fácil, rápido y económico, ya que incluso puedes planificar de antemano las cantidades y dedicarte a elegir la mejor calidad y precio.`,
            fecha: "2025-03-01",
            imagen: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?q=80&w=2070&auto=format&fit=crop",
        },
    ];

    useEffect(() => {
        const fetchArticulos = async () => {
            try {
                const response = await fetch("https://api.marielabarcelo.com/api/blogs");

                if (!response.ok) {
                    throw new Error("Error al cargar los artículos");
                }

                const responseData = await response.json();

                if (responseData && responseData.data && responseData.data.length > 0) {
                    const articulosFormateados = responseData.data.map((articulo) => ({
                        id: articulo.id.toString(),
                        titulo: articulo.title,
                        contenido: articulo.content,
                        fecha: articulo.publishedAt,
                        imagen: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?q=80&w=2070&auto=format&fit=crop",
                    }));

                    setArticulos(articulosFormateados);
                    setError(null);
                } else {
                    console.warn("No se encontraron artículos en la respuesta de la API");
                    setArticulos(articuloDefault);
                }
            } catch (error) {
                console.error("Error obteniendo artículos:", error);
                setArticulos(articuloDefault);
                setError("No se pudieron cargar los artículos. Mostrando contenido por defecto.");
            } finally {
                setLoading(false);
            }
        };

        fetchArticulos();
    }, []);

    const formatearFecha = (fechaStr) => {
        const opciones = { year: "numeric", month: "long", day: "numeric" };
        return new Date(fechaStr).toLocaleDateString("es-ES", opciones);
    };

    const handleShow = (modal) => setModalShow(modal);
    const handleClose = () => setModalShow(null);

    return (
        <>
            <NavBar />
            <Container className="py-5">
                <Row className="justify-content-center text-center mb-5">
                    <Col lg={8}>
                        <h1 className="display-4 mb-3">Blog de Nutrición</h1>
                        <p className="lead">Información sobre nutrición y alimentación saludable</p>

                        {loading && (
                            <Alert variant="info" className="mt-3">
                                Cargando artículos...
                            </Alert>
                        )}

                        {error && (
                            <Alert variant="warning" className="mt-3">
                                {error}
                            </Alert>
                        )}
                    </Col>
                </Row>

                {/* Lista de artículos del blog */}
                {articulos && articulos.length > 0 ? (
                    <Row>
                        {articulos.map((articulo) => (
                            <Col md={4} className="mb-4" key={articulo.id}>
                                <Card className="h-100 shadow-sm">
                                    <Card.Img variant="top" src={articulo.imagen} alt={articulo.titulo} style={{ height: "200px", objectFit: "cover" }} />
                                    <Card.Body>
                                        <div className="mb-2">
                                            <small className="text-muted">{formatearFecha(articulo.fecha)}</small>
                                        </div>
                                        <Card.Title>{articulo.titulo}</Card.Title>
                                        <Card.Text>
                                            {articulo.contenido.substring(0, 120)}
                                            {articulo.contenido.length > 120 ? "..." : ""}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="bg-white border-top-0">
                                        <Button variant="outline-primary" onClick={() => handleShow(articulo.id)} className="w-100">
                                            Leer artículo completo
                                        </Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                ) : (
                    <Container className="text-center mt-4">{!loading && <p>No hay artículos disponibles en este momento.</p>}</Container>
                )}
            </Container>

            <Modal show={modalShow !== null} onHide={handleClose} size="lg" centered>
                {modalShow !== null && articulos.length > 0 && (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>{articulos.find((a) => a.id === modalShow)?.titulo}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img
                                src={articulos.find((a) => a.id === modalShow)?.imagen}
                                alt={articulos.find((a) => a.id === modalShow)?.titulo}
                                className="img-fluid mb-3 w-100"
                                style={{ maxHeight: "400px", objectFit: "cover" }}
                            />
                            <div className="mb-3">
                                <small className="text-muted">Publicado: {formatearFecha(articulos.find((a) => a.id === modalShow)?.fecha)}</small>
                            </div>
                            <div className="article-content">
                                {articulos
                                    .find((a) => a.id === modalShow)
                                    ?.contenido.split("\n")
                                    .map((parrafo, index) => (
                                        <p key={index}>{parrafo}</p>
                                    ))}
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cerrar
                            </Button>
                        </Modal.Footer>
                    </>
                )}
            </Modal>

            <WhatsappButton phoneNumber="+59899076258" message="Hola! Me gustaría..." />

            <Footer />
        </>
    );
}

export default BlogNutricion;
