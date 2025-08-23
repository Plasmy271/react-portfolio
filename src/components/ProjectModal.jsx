import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ProjectModal({ show, handleClose, project }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{project.modalContent.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={`${project.id}.png`} className="img-fluid mb-3" alt={project.title} />
        <h4>About {project.title}</h4>
        <p>{project.modalContent.about}</p>
        <p>
          Read it in <a href={project.modalContent.link} target="_blank" rel="noopener noreferrer">AO3</a>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectModal;