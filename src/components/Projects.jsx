import React, {useState} from "react";
import ProjectModal from "./ProjectModal";

function Projects ()
{
    const [showModal, setShowModal] = useState(null);
    const [bgColor, setBgColor] = useState("lightblue");

    const projects =
    [
        {
            id: "KIRIN",
            title: "KIRIN",
            subititle: "A prelude to Sanbusaku",
            description: "Uncover Rin's past, ranging from her birth, all the way up until the first installment of Touhou Sanbusaku",
            bgColor: "#FFF29A",
            modalContent:
            {
                title: "KIRIN",
                about: "My first ever proper fanfic project that I was able to fully finish...",
                link: "https://archiveofourown.org/works/41738169/chapters/104708025"
            }
        },
        {
            id: "Star",
            title: "Rise, Blazing Star",
            subititle: "A girl who dreams of magic",
            description: "Marisa Kirisame is a young girl who dreams of learning forbidden magic. Take a read, and learn how she chases her dreams.",
            bgColor: "#ABFFBC",
            modalContent:
            {
                title: "Rise, Blazing Star",
                about: "A project involving Marisa Kirisame, Touhou Project's deuteragonist when she was young. Personally, I find the final output somewhat lacking and misleading to the initial summary. If I had the chance, I'd rewrite the last two chapters to include certain other characters to completely cover my basis.",
                link: "https://archiveofourown.org/works/55363948"
            }
        },
        {
            id: "Sanbusaku",
            title: "Touhou Sanbusaku ~ Shrine Maiden's First Steps",
            subititle: "The start of the Hakurei's life",
            description: "Somebody has destroyed the Hakurei Shrine! Read to follow Reimu Hakurei and her journey to find those responsible for this tragedy!",
            bgColor: "#FFB6B6",
            modalContent:
            {
                title: "Touhou Sanbusaku ~ Shrine Maiden's First Steps",
                about: "This was the starting work for my first ever multi-work series, Touhou Kako no Jidai. A retelling of the first five Touhou games on the PC-98 system. The Sanbusaku series will cover the first three. Shrine Maiden's First Steps tackles the first game of the series, Highly Responsive to Prayers.",
                link: "https://archiveofourown.org/works/49119718"
            }
        },
    ];

    const handleModalOpen = (projectId, projectBGColor) =>
    {
        setShowModal (projectId);
        setBgColor (projectBGColor);
    };

    const handleModalClose = () =>
    {
        setShowModal(null);
        setBgColor("lightblue");
    };

    return (
    <div className="container mt-4">
      <div className="row">
        {projects.map(project => (
          <div className="col-md-4 mb-4" key={project.id}>
            <div className="card h-100">
              <img src={`${project.id}.png`} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{project.subtitle}</h6>
                <p className="card-text">{project.description}</p>
                <button 
                  type="button" 
                  className="btn btn-primary" 
                  onClick={() => handleModalOpen(project.id, project.bgColor)}
                >
                  Learn More!
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {projects.map(project => (
        <ProjectModal
          key={project.id}
          show={showModal === project.id}
          handleClose={handleModalClose}
          project={project}
        />
      ))}
    </div>
  );
}

export default Projects;