import "./AboutMe.css";
import mariela1 from "../assets/mariela1.jpg";

const AboutSection = () => {
    const description = `
        ¡Hola! Soy Mariela Barceló, licenciada en Nutrición por la Universidad de la República (UdelaR). Mi objetivo es ayudarte a mejorar tu bienestar a través de una alimentación equilibrada y personalizada. En cada consulta trabajo de manera cercana y profesional para brindarte el acompañamiento que necesitas en tu camino hacia una mejor alimentación. ¡Juntos encontraremos la mejor estrategia para vos!
    `;

    return (
        <div style={{ backgroundColor: "#e7e3f7" }} className="container-seccion" id="sobremi">
            <div className="container">
                <h1 className="subtitulo">Sobre mí</h1>
            </div>

            <div className="container">
                <div className="card shadow-sm rounded border-0">
                    <div className="row g-0 align-items-center">
                        <div className="col-12 col-md-6 text-center">
                            <img src={mariela1} className="img-fluid rounded-start h-100" alt="Mariela Barceló" style={{ transition: "transform 0.3s" }} />
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
