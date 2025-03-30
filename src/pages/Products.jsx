import { useState, useEffect } from "react";
import { Modal, Button, Container, Row, Col, Alert } from "react-bootstrap";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";

function Products() {
    const [modalShow, setModalShow] = useState(null);
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Producto por defecto
    const defaultProduct = {
        producto: "default-product",
        titulo: "Recetario Básico",
        descripcion: "Nuestro recetario básico con las mejores recetas caseras. Ideal para principiantes en la cocina.",
        imagen: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop",
    };

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await fetch("https://api.marielabarcelo.com/api/products?populate=*");

                if (!response.ok) {
                    throw new Error("Error al cargar los productos");
                }

                const data = await response.json();
                // Verificar si se obtuvieron productos
                if (data && data.data && data.data.length > 0) {
                    // Transformar la estructura de datos para que coincida con nuestro formato actual
                    const formattedProducts = data.data.map((item) => ({
                        producto: item.id.toString(),
                        titulo: item.title || item.attributes?.title,
                        descripcion: item.description || item.attributes?.description,
                        imagen: item.image?.url
                            ? `https://api.marielabarcelo.com${item.image.url}`
                            : item.attributes?.image?.data?.attributes?.url
                            ? `https://api.marielabarcelo.com${item.attributes.image.data.attributes.url}`
                            : defaultProduct.imagen,
                    }));
                    setProductos(formattedProducts);
                } else {
                    setProductos([defaultProduct]);
                    console.error("No se encontraron productos");
                }
            } catch (error) {
                console.error("Error obteniendo productos:", error);
                setProductos([defaultProduct]);
            } finally {
                setLoading(false);
            }
        };

        fetchProductos();
    }, []);

    const handleShow = (modal) => setModalShow(modal);
    const handleClose = () => setModalShow(null);

    // Función para agrupar productos en filas de 3
    const renderProductosGrid = () => {
        const rows = [];
        for (let i = 0; i < productos.length; i += 3) {
            // Tomar hasta 3 productos para cada fila
            const rowItems = productos.slice(i, i + 3);
            rows.push(
                <Row key={`row-${i}`} className="mb-4">
                    {rowItems.map((producto) => (
                        <Col md={4} key={producto.producto}>
                            <div className="card h-100" onClick={() => handleShow(producto.producto)}>
                                <img src={producto.imagen} className="card-img-top" alt={producto.titulo} />
                                <div className="card-body">
                                    <h5 className="card-title">{producto.titulo}</h5>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            );
        }
        return rows;
    };

    return (
        <>
            <NavBar />
            <Container className="py-5">
                <Row className="justify-content-center text-center mb-5">
                    <Col lg={8}>
                        <h1 className="display-4 mb-3">Encuentra tu producto</h1>
                        <p className="lead">Recetas y mucho más!</p>

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

                {/* Contenedor de productos con grid system */}
                {!loading && renderProductosGrid()}
            </Container>

            {/* Modal Genérico */}
            <Modal show={modalShow !== null} onHide={handleClose}>
                {modalShow !== null && (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>{productos.find((p) => p.producto === modalShow)?.titulo}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{productos.find((p) => p.producto === modalShow)?.descripcion}</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cerrar
                            </Button>
                            <Button
                                variant="primary"
                                onClick={() => {
                                    const producto = productos.find((p) => p.producto === modalShow);
                                    const mensaje = encodeURIComponent(`Hola, me interesa tu recetario ${producto.titulo}`);
                                    const url = `https://wa.me/59899076258?text=${mensaje}`;
                                    window.location.href = url;
                                }}
                            >
                                Acceder
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

export default Products;
