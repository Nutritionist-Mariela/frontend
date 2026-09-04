import "./Pricing.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";

const Pricing = () => {
    const planesPrincipales = [
        {
            nombre: "Consulta puntual",
            precio: "$1.900",
            descripcion: "Ideal si buscás una orientación personalizada o resolver una situación específica.",
            items: ["Una consulta nutricional personalizada.", "Recomendaciones adaptadas a tus necesidades."],
        },
        {
            nombre: "Control",
            precio: "$1.400",
            descripcion: "Control de la consulta puntual en un plazo máximo de 2 meses.",
            items: [],
        },
        {
            nombre: "Pack inicio",
            precio: "$2.700",
            descripcion: "Pensado para quienes buscan un acompañamiento cercano durante el proceso de cambio:",
            items: [
                "Consulta inicial completa.",
                "Primer control a la semana, para realizar los ajustes necesarios y resolver dudas.",
                "Todo el material y las recomendaciones que sean necesarias según lo conversado durante las consultas.",
            ],
            destacado: true,
        },
    ];

    const packsSeguimiento = [
        {
            nombre: "Pack 2 controles",
            precio: "$2.300",
            descripcion: "Dos (2) controles posteriores al Pack inicio para acompañar tus progresos.",
            items: ["Pueden ser realizados una vez por semana o cada 15 días (máximo)."],
        },
        {
            nombre: "Pack 3 controles",
            precio: "$4.000",
            descripcion: "Cuatro (4) controles posteriores al Pack inicio.",
            items: ["Pueden ser realizados en un máximo de 2 meses."],
        },
    ];

    const politicas = [
        {
            titulo: "Reserva de la primera consulta",
            texto: "Se reserva con una seña del 30%, no reembolsable.",
        },
        {
            titulo: "Cambio de fecha",
            texto: "Se necesita una anticipación de al menos 24hs, de lo contrario se cobrará el 50% de la consulta pactada. La nueva fecha va a depender de la disponibilidad existente.",
        },
        {
            titulo: "Cancelaciones o inasistencias",
            texto: "Deben avisarse con 24hs de anticipación, de lo contrario se cobrará el 50% de la consulta.",
        },
    ];

    const renderPlanCard = (plan, index) => (
        <div className={`col-12 col-md-6 col-lg-4`} key={index}>
            <div className={`plan-card ${plan.destacado ? "plan-card-destacado" : ""}`}>
                {plan.destacado && <span className="plan-badge">El más elegido</span>}
                <div className="plan-header">
                    <h3 className="plan-nombre">{plan.nombre}</h3>
                    <span className="plan-precio">{plan.precio}</span>
                </div>
                <p className="plan-descripcion">{plan.descripcion}</p>
                {plan.items.length > 0 && (
                    <ul className="plan-lista">
                        {plan.items.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );

    return (
        <>
            <NavBar />

            <div className="pricing-hero">
                <div className="container text-center">
                    <p className="pricing-kicker">Acompañamiento nutricional</p>
                    <h1 className="pricing-titulo">Elegí el plan que mejor se adapte a vos</h1>
                    <p className="pricing-subtitulo">Todas las opciones incluyen recomendaciones personalizadas y seguimiento cercano de tu proceso.</p>
                </div>
            </div>

            <div className="pricing-section">
                <div className="container">
                    <div className="row g-4 justify-content-center">{planesPrincipales.map(renderPlanCard)}</div>
                </div>

                <div className="container mt-5">
                    <div className="seguimiento-header">
                        <h2 className="seguimiento-titulo">Packs de seguimiento</h2>
                        <p className="seguimiento-subtitulo">Continuación del Pack inicio, para sostener tus progresos en el tiempo.</p>
                    </div>
                    <div className="row g-4 justify-content-center">{packsSeguimiento.map(renderPlanCard)}</div>
                </div>

                <div className="container mt-5">
                    <p className="text-center fst-italic aviso-envio">
                        Toda la información, recomendaciones y material acordado durante las consultas se envía por WhatsApp o por correo electrónico, para que
                        la tengas siempre disponible y puedas consultarla cuando lo necesites.
                    </p>
                </div>

                <div className="container mt-5">
                    <div className="politicas-card">
                        <h3 className="politicas-titulo">Políticas de reserva y cancelación</h3>
                        <ul className="politicas-lista">
                            {politicas.map((politica, index) => (
                                <li key={index}>
                                    <strong>{politica.titulo}:</strong> {politica.texto}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <WhatsappButton phoneNumber="+59899076258" message="Hola! Me gustaría consultar sobre los planes de acompañamiento nutricional." />
            <Footer />
        </>
    );
};

export default Pricing;
