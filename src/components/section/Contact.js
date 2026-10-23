import React, { useState } from "react";
import { contact, section5Title, social } from "../../profile";

const Contact = () => {
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: "" });

    const userKey = process.env.REACT_APP_PUSHOVER_USER_KEY;
    const appToken = process.env.REACT_APP_PUSHOVER_APP_TOKEN;

    if (
      !userKey ||
      !appToken ||
      userKey.includes("votre_user_key") ||
      appToken.includes("votre_api_token")
    ) {
      setStatus({
        loading: false,
        success: false,
        error: "Veuillez configurer vos clés Pushover dans le fichier .env.",
      });
      return;
    }

    const notificationMessage = `Nom: ${formData.firstname}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    try {
      // CORRECTION : Passage au format JSON pur pour correspondre à ton exemple valide
      const response = await fetch("https://api.pushover.net/1/messages.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Changé ici
        },
        body: JSON.stringify({
          // Changé ici
          token: appToken,
          user: userKey,
          title: `Portfolio: ${formData.subject || "Nouveau contact"}`,
          message: notificationMessage,
          priority: 0,
        }),
      });

      // L'API Pushover renvoie un statut HTTP standard en cas d'erreur
      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        setStatus({
          loading: false,
          success: false,
          error: errorData?.errors
            ? errorData.errors.join(", ")
            : "Erreur lors de l'envoi.",
        });
        return;
      }

      // Si tout est ok
      setStatus({ loading: false, success: true, error: "" });
      setFormData({ firstname: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: "Impossible de joindre l'API Pushover.",
      });
    }
  };

  return (
    <div className="parallax">
      <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
        <div className="git-head-div text-center mx-auto">
          <h1 id="Contact" className="git-head">
            {section5Title}
          </h1>
        </div>
        <div className="container">
          <div className="git-cont row">
            <div className="col-12 col-sm-6 half">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Votre nom"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  id="mailid"
                  name="email"
                  placeholder="Adresse email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  id="sub"
                  name="subject"
                  placeholder="Sujet"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <textarea
                  id="msg"
                  name="message"
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

                <div className="d-flex flex-wrap align-items-center">
                  <button
                    style={{ cursor: "pointer" }}
                    type="submit"
                    disabled={status.loading}
                  >
                    {status.loading ? "Envoi en cours..." : "Envoyer le message"}
                  </button>

                  {social.portfolioPdf && (
                    <a
                      href={social.portfolioPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="download-portfolio-btn"
                      title="Télécharger mon portfolio (PDF)"
                    >
                      Télécharger mon portfolio
                    </a>
                  )}
                </div>

                {status.success && (
                  <p
                    className="text-success mt-2 font-weight-bold"
                    style={{ color: "#28a745" }}
                  >
                    Message envoyé avec succès via Pushover !
                  </p>
                )}
                {status.error && (
                  <p
                    className="text-danger mt-2 font-weight-bold"
                    style={{ color: "#e96224" }}
                  >
                    {status.error}
                  </p>
                )}
              </form>
            </div>
            <div className="col-12 col-sm-6 half">
              <p className="lead">{contact.pitch}</p>
              <div className="d-flex justify-content-center align-items-center flex-column">
                <div
                  style={{ display: "flex", gap: "20px", alignItems: "center" }}
                >
                  {social.linkedin && (
                    <a
                      title="Consulter mon profil LinkedIn"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.linkedin}
                      style={{ color: "inherit" }}
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  )}
                  {social.github && (
                    <a
                      title="Consulter mon profil GitHub"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.github}
                      style={{ color: "inherit" }}
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  {social.resume && (
                    <a
                      title="Télécharger mon portfolio (Google Drive)"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.resume}
                    >
                      <i className="fas fa-file-pdf"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p id="not-dark" className="Copy">
        {new Date().getFullYear()} © Tous droits réservés{" "}
        <strong>{contact.copyright}</strong>
      </p>
    </div>
  );
};

export default Contact;
