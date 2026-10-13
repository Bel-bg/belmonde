import React from "react";

const Project = ({ id, name, url, skills, description, demoUrl, onSelect }) => {
  return (
    <div data-aos="fade-up" className="col-12 col-lg-6 project-card">
      <div
        className="image-project"
        onClick={() =>
          onSelect && onSelect({ id, name, url, skills, description, demoUrl })
        }
      >
        <div className={`img-pro ${id}`}></div>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-2 px-1">
        <h2
          className="project-name-title"
          onClick={() =>
            onSelect &&
            onSelect({ id, name, url, skills, description, demoUrl })
          }
        >
          {name}
        </h2>
        {url && (
          <a
            title="Voir le code source"
            className="project-github-link"
            rel="noopener noreferrer"
            target="_blank"
            href={url}
          >
            <i className="fab fa-globe"></i>
          </a>
        )}
      </div>
      {skills && <h3>{skills.join(" • ")}</h3>}
    </div>
  );
};

export default Project;
