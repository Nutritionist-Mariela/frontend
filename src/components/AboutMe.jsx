import React, { useState, useEffect } from "react";
import "./AboutMe.css";

const AboutSection = () => {
    const [aboutData, setAboutData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAboutInfo = async () => {
            try {
                const response = await fetch("https://api.marielabarcelo.com/api/about?populate=*");

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setAboutData(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching about data:", error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchAboutInfo();
    }, []);

    if (loading) return <div className="container text-center py-5">Loading...</div>;
    if (error) return <div className="container text-center py-5">Error: {error}</div>;
    if (!aboutData) return <div className="container text-center py-5">No data available</div>;

    const description = aboutData.data.Description[0].children[0].text;

    const imageData = aboutData.data.Cover;
    const imageUrl = `https://api.marielabarcelo.com${imageData.url}`;

    return (
        <div style={{ backgroundColor: "#e7e3f7" }} className="container-seccion" id="sobremi">
            <div className="container">
                <h1 className="subtitulo">Sobre mi</h1>
            </div>
            <div className="container">
                <div className="card shadow-sm rounded border-0">
                    <div className="row g-0 align-items-center">
                        <div className="col-12 col-md-6 text-center">
                            <img src={imageUrl} className="img-fluid rounded-start h-100" alt="Mariela Barceló" style={{ transition: "transform 0.3s" }} />
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="card-body">
                                <p className="card-text" style={{ lineHeight: "1.7" }}>
                                    {description.split(". ").map((sentence, index, array) => (
                                        <React.Fragment key={index}>
                                            {sentence}
                                            {index < array.length - 1 ? ". " : ""}
                                            {index < array.length - 1 && index % 2 === 1 && <br />}
                                        </React.Fragment>
                                    ))}
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
