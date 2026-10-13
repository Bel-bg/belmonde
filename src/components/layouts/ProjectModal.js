import React from 'react';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="project-modal-backdrop" onClick={onClose}>
            <div className="project-modal-card" onClick={(e) => e.stopPropagation()}>
                <button className="project-modal-close" onClick={onClose} aria-label="Fermer">
                    &times;
                </button>
                <div className="project-modal-image">
                    <div className={`img-pro ${project.id}`}></div>
                </div>
                <div className="project-modal-body">
                    <h2 className="project-modal-title">{project.name}</h2>
                    
                    {project.skills && (
                        <div className="project-modal-tags">
                            {project.skills.map((skill, idx) => (
                                <span key={idx} className="project-modal-tag">{skill}</span>
                            ))}
                        </div>
                    )}

                    <p className="project-modal-description">
                        {project.description || 
                         "Description détaillée de ce projet : architecture mise en place, défis techniques relevés et fonctionnalités principales développées."}
                    </p>

                    <div className="project-modal-actions">
                        {project.url && (
                            <a 
                                href={project.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="project-modal-btn project-modal-btn-primary"
                            >
                                <i className="fab fa-github mr-2"></i> Voir sur GitHub
                            </a>
                        )}
                        {project.demoUrl && (
                            <a 
                                href={project.demoUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="project-modal-btn project-modal-btn-secondary"
                            >
                                <i className="fas fa-external-link-alt mr-2"></i> Voir la Démo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
