import React, { useEffect, useState } from "react";
import defaultBg from "../../assets/dark.png";

const ProjectDetail = ({ project, onBack }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentSlide(0);
  }, [project]);

  if (!project) return null;

  // Image brute de fond sans aucun filtre ou dégradé assombrissant ajouté
  const backgroundImageTarget = project.image || defaultBg;

  const pageStyle = {
    backgroundImage: `url(${backgroundImageTarget})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    width: "100%",
    color: "#ffffff",
    fontFamily: '"Source Sans Pro", sans-serif',
    padding: "60px 0",
  };

  const nextSlide = () => {
    if (project.screenshots?.length) {
      setCurrentSlide((prev) => (prev + 1) % project.screenshots.length);
    }
  };

  const prevSlide = () => {
    if (project.screenshots?.length) {
      setCurrentSlide(
        (prev) =>
          (prev - 1 + project.screenshots.length) % project.screenshots.length,
      );
    }
  };

  return (
    <div style={pageStyle} className="project-detail-page">
      {/* Utilisation de la largeur totale de l'écran */}
      <div className="container-fluid px-4 px-md-5">
        {/* Navigation supérieure */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <button
            onClick={onBack}
            style={{
              background: "none",
              border: "none",
              color: "#ffffff",
              cursor: "pointer",
              fontSize: "1.1rem",
              fontWeight: "600",
              padding: 0,
            }}
          >
            Retour
          </button>
        </div>

        {/* Bloc unique aligné sur la classe .third de ton projet */}
        <article className="third" style={{ margin: "0", width: "100%" }}>
          {/* En-tête principale */}
          <header
            style={{
              marginBottom: "40px",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              paddingBottom: "30px",
            }}
          >
            <h1
              style={{
                fontFamily: '"Montserrat", sans-serif',
                fontSize: "2.8rem",
                fontWeight: "700",
                marginBottom: "20px",
                color: "var(--primary-color)",
              }}
            >
              {project.name}
            </h1>
            <p
              style={{
                fontSize: "1.25rem",
                color: "#a0aec0",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              {project.summary}
            </p>

            {/* Actions / Liens du projet */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "30px",
                flexWrap: "wrap",
              }}
            >
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "var(--primary-color)",
                    color: "#ffffff",
                    padding: "12px 28px",
                    borderRadius: "8px",
                    fontWeight: "700",
                    textDecoration: "none",
                  }}
                >
                  Visiter 
                </a>
              )}
            </div>
          </header>

          {/* Corps de texte */}
          <section style={{ marginBottom: "40px" }}>
            <h2
              style={{
                fontFamily: '"Montserrat", sans-serif',
                fontSize: "1.6rem",
                marginBottom: "15px",
                color: "#ffffff",
              }}
            >
              À propos
            </h2>
            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
                fontSize: "1.1rem",
                margin: 0,
              }}
            >
              {project.description}
            </p>
          </section>

          {/* Déclinaisons de la solution */}
          {project.variants && project.variants.length > 0 && (
            <section style={{ marginBottom: "40px" }}>
              <h2
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: "1.6rem",
                  marginBottom: "20px",
                  color: "#ffffff",
                }}
              >
                Disponibilité
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "20px",
                }}
              >
                {project.variants.map((v, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      padding: "20px",
                      borderRadius: "8px",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.2rem",
                        margin: "0 0 10px 0",
                        color: "var(--primary-color)",
                        fontFamily: '"Montserrat", sans-serif',
                      }}
                    >
                      {v.type}
                    </h3>
                    <p
                      style={{
                        fontSize: "1rem",
                        color: "#a0aec0",
                        margin: 0,
                        lineHeight: "1.5",
                      }}
                    >
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Stack & Services */}
          <section
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "40px",
              marginBottom: "40px",
            }}
          >
            {project.technologies && (
              <div>
                <h2
                  style={{
                    fontFamily: '"Montserrat", sans-serif',
                    fontSize: "1.6rem",
                    marginBottom: "20px",
                    color: "#ffffff",
                  }}
                >
                  Technologies
                </h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="project-modal-tag"
                      style={{
                        background: "rgb(255, 81, 0)",
                        color: "white",
                        padding: "6px 16px",
                        borderRadius: "20px",
                        fontSize: "0.9rem",
                        fontWeight: "600",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.services && (
              <div>
                <h2
                  style={{
                    fontFamily: '"Montserrat", sans-serif',
                    fontSize: "1.6rem",
                    marginBottom: "20px",
                    color: "#ffffff",
                  }}
                >
                  Intervention
                </h2>
                <ul
                  style={{
                    listStyleType: "none",
                    padding: 0,
                    margin: 0,
                    color: "#cbd5e1",
                    fontSize: "1.05rem",
                  }}
                >
                  {project.services.map((srv, idx) => (
                    <li
                      key={idx}
                      style={{
                        marginBottom: "12px",
                        paddingLeft: "15px",
                        borderLeft: "3px solid var(--primary-color)",
                      }}
                    >
                      {srv}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* Carrousel d'images */}
          {project.screenshots && project.screenshots.length > 0 && (
            <section
              style={{
                borderTop: "1px solid rgba(255,255,255,0.08)",
                paddingTop: "40px",
              }}
            >
              <h2
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: "1.6rem",
                  marginBottom: "25px",
                  color: "#ffffff",
                }}
              >
                Aperçus de l'interface
              </h2>

              <div style={{ width: "100%" }}>
                {/* Image active intégrée dans un wrapper propre type .image-project */}
                <div
                  className="image-project"
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={project.screenshots[currentSlide]}
                    alt={`Copie d'écran ${currentSlide + 1}`}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "700px",
                      objectFit: "contain",
                    }}
                  />
                </div>

                {project.screenshots.length > 1 && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "25px",
                    }}
                  >
                    <button
                      onClick={prevSlide}
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#ffffff",
                        padding: "10px 24px",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontSize: "1rem",
                        fontWeight: "600",
                      }}
                    >
                      Précédent
                    </button>

                    <span
                      style={{
                        fontSize: "1.1rem",
                        color: "var(--primary-color)",
                        fontWeight: "700",
                        fontFamily: '"Montserrat", sans-serif',
                      }}
                    >
                      {currentSlide + 1} / {project.screenshots.length}
                    </span>

                    <button
                      onClick={nextSlide}
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#ffffff",
                        padding: "10px 24px",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontSize: "1rem",
                        fontWeight: "600",
                      }}
                    >
                      Suivant
                    </button>
                  </div>
                )}
              </div>
            </section>
          )}
        </article>

        {/* Sortie de secours bas de page */}
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <button
            onClick={onBack}
            style={{
              background: "none",
              border: "none",
              color: "var(--primary-color)",
              cursor: "pointer",
              textDecoration: "underline",
              fontSize: "1.1rem",
              fontWeight: "600",
            }}
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
