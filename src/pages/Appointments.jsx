import { useState, useEffect, useRef } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import WhatsappButton from '../components/WhatsappButton'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Appointments.css'

function Appointments() {
    const formRef = useRef(null);
    const [toastMessage, setToastMessage] = useState(null);
    const [toastType, setToastType] = useState(null);

    useEffect(() => {
        const form = formRef.current;
        if (!form) return;

        const handleSubmit = async (event) => {
            event.preventDefault();
            event.stopPropagation();

            if (!form.checkValidity()) {
                form.classList.add("was-validated");
                return;
            }

            const data = {
                name: form.name.value,
                email: form.email.value,
                phone: form.phone.value,
                reason: form.reason.value,
            };

            try {
                const response = await fetch("https://api.marielabarcelo.com/api/appointments", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ data }),
                });

                if (response.ok) {
                    setToastMessage("Gracias por agendarte! Nos contactaremos contigo a la brevedad.");
                    setToastType("success");
                    form.reset();
                    form.classList.remove("was-validated");
                } else {
                    setToastMessage("Algo salió mal. Intenta de nuevo más tarde.");
                    setToastType("error");
                }
            } catch (error) {
                console.error("Error:", error);
                setToastMessage("Algo salió mal. Intenta de nuevo más tarde.");
                setToastType("error");
            }
        };

        form.addEventListener("submit", handleSubmit);
        return () => form.removeEventListener("submit", handleSubmit);
    }, []);

    return (
        <>
            <NavBar />
            <br />
            <section className="hero-section">
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col>
                            <h1 className="display-3 mb-4">Agenda tu consulta</h1>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Container>
                <Form ref={formRef} className="needs-validation" noValidate>
                    <Form.Group>
                        <Form.Label>Nombre*</Form.Label>
                        <Form.Control type="text" id="name" required />
                        <div className="invalid-feedback">Ingresa tu nombre.</div>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Correo electrónico*</Form.Label>
                        <Form.Control type="email" id="email" required />
                        <div className="invalid-feedback">Ingresa tu correo.</div>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Teléfono*</Form.Label>
                        <Form.Control type="tel" id="phone" required />
                        <div className="invalid-feedback">Ingresa tu teléfono.</div>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Motivo de consulta</Form.Label>
                        <Form.Control as="textarea" id="reason" />
                    </Form.Group>

                    <div className="text-center mt-3">
                        <Button type="submit" className="btn button submit1">Agendar</Button>
                    </div>
                </Form>
            </Container>

            {toastMessage && (
                <div className={`toast align-items-center rounded-3 ${toastType === "success" ? "toast-success" : "toast-error"}`} role="alert">
                    <div className="toast-header" style={{ backgroundColor: "#857AA5", color: "white" }}>
                        <strong className="me-auto">Mariela Barcelo</strong>
                        <button type="button" className="btn-close" onClick={() => setToastMessage(null)}>×</button>
                    </div>
                    <div className="toast-body" style={{ backgroundColor: "white", color: "black" }}>
                        <p>{toastMessage}</p>
                    </div>
                </div>
            )}

            <WhatsappButton
                phoneNumber="+59899076258"
                message="Hola! Me gustaría..."
            />

            <Footer />
        </>
    );
}

export default Appointments;
