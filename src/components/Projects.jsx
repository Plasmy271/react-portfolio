// components/Projects.jsx
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import KIRIN_IMAGE from './KIRIN.png';
import STAR_IMAGE from './Star.png';
import SANBUSAKU_IMAGE from './Sanbusaku.png';

const Projects = () => {
  const [showModal, setShowModal] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('lightblue');

  const handleShowModal = (modalName, color) => {
    setShowModal(modalName);
    setBackgroundColor(color);
    document.body.style.backgroundColor = color;
  };

  const handleCloseModal = () => {
    setShowModal(null);
    setBackgroundColor('lightblue');
    document.body.style.backgroundColor = 'lightblue';
  };

  return (
    <div id="projects" className="container mt-4">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100 d-flex flex-column">
            <img src={KIRIN_IMAGE} className="card-img-top card-img-fixed" alt="KIRIN" />
            <div className="card-body d-flex flex-column">
              <div className="flex-grow-1">
                <h5 className="card-title">KIRIN</h5>
                <h6 className="card-subtitle mb-2 text-muted">A prelude to Sanbusaku</h6>
                <p className="card-text">Uncover Rin's past, ranging from her birth, all the way up until the first installment of Touhou Sanbusaku.</p>
              </div>
              <div className="mt-auto pt-2">
                <Button 
                  variant="primary" 
                  onClick={() => handleShowModal('KIRIN', '#FFF29A')}
                >
                  Learn More!
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 d-flex flex-column">
            <img src={STAR_IMAGE} className="card-img-top card-img-fixed" alt="Star" />
            <div className="card-body d-flex flex-column">
              <div className="flex-grow-1">
                <h5 className="card-title">Rise, Blazing Star</h5>
                <h6 className="card-subtitle mb-2 text-muted">A girl who dreams of magic</h6>
                <p className="card-text">Marisa Kirisame is a young girl who dreams of learning forbidden magic. Take a read, and learn how she chases her dreams.</p>
              </div>
              <div className="mt-auto pt-2">
                <Button 
                  variant="primary" 
                  onClick={() => handleShowModal('STAR', '#ABFFBC')}
                >
                  Learn More!
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 d-flex flex-column">
            <img src={SANBUSAKU_IMAGE} className="card-img-top card-img-fixed" alt="Sanbusaku" />
            <div className="card-body d-flex flex-column">
              <div className="flex-grow-1">
                <h5 className="card-title">Touhou Sanbusaku ~ Shrine Maiden's First Steps</h5>
                <h6 className="card-subtitle mb-2 text-muted">The start of the Hakurei's life</h6>
                <p className="card-text">Somebody has destroyed the Hakurei Shrine! Read to follow Reimu Hakurei and her journey to find those responsible for this tragedy!</p>
              </div>
              <div className="mt-auto pt-2">
                <Button 
                  variant="primary" 
                  onClick={() => handleShowModal('REIMU', '#FFB6B6')}
                >
                  Learn More!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KIRIN Modal */}
      <Modal show={showModal === 'KIRIN'} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>KIRIN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={KIRIN_IMAGE} className="img-fluid mb-3" alt="KIRIN" />
          <h4>About KIRIN</h4>
          <p>My first ever proper fanfic project that I was able to fully finish. An 18 chapter long fic that totalled to 82.5K words. It follows the origins of Rin Satsuki, a scrapped character from the Touhou series, for a what-if if she wasn't scrapped from development.</p>
          <p>Read it in <a href="https://archiveofourown.org/works/41738169/chapters/104708025" target="_blank" rel="noopener noreferrer">AO3</a></p>
        </Modal.Body>
      </Modal>

      {/* STAR Modal */}
      <Modal show={showModal === 'STAR'} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Rise, Blazing Star</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={STAR_IMAGE} className="img-fluid mb-3" alt="STAR" />
          <h4>About Rise, Blazing Star</h4>
          <p>A project involving Marisa Kirisame, Touhou Project's deuteragonist when she was young. Personally, I find the final output somewhat lacking and misleading to the initial summary. If I had the chance, I'd rewrite the last two chapters to include certain other characters to completely cover my basis.</p>
          <p>Read it in <a href="https://archiveofourown.org/works/55363948" target="_blank" rel="noopener noreferrer">AO3</a></p>
        </Modal.Body>
      </Modal>

      {/* REIMU Modal */}
      <Modal show={showModal === 'REIMU'} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Touhou Sanbusaku ~ Shrine Maiden's First Steps</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={SANBUSAKU_IMAGE} className="img-fluid mb-3" alt="Sanbusaku" />
          <h4>About Touhou Sanbusaku ~ Shrine Maiden's First Steps</h4>
          <p>This was the starting work for my first ever multi-work series, Touhou Kako no Jidai. A retelling of the first five Touhou games on the PC-98 system. The Sanbusaku series will cover the first three. Shrine Maiden's First Steps tackles the first game of the series, Highly Responsive to Prayers.</p>
          <p>As of right now, the series is in indefinite hiatus until further notice due to general writer's block and the lack of motivation.</p>
          <p>Read it in <a href="https://archiveofourown.org/works/49119718" target="_blank" rel="noopener noreferrer">AO3</a></p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Projects;