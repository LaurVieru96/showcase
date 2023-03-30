import React, { useState } from "react";
import "./Projects.css";
import { useSelector } from "react-redux";

const Projects = () => {
  const projects = useSelector((state) => state.projects.project);
  console.log(projects);

  const [hideContent, setHideContent] = useState(false);

  return (
    <>
      <div className="projects-container">
        <h1>Projects</h1>

        {!hideContent
          ? projects.map((work, i) => (
              <div key={i} className="individual-project">
                <img src={work.image} alt="" width={150} height={150} />
                <div className="projects-details">
                  <h5>{work.title}</h5>
                  <p>{work.description}</p>
                  <a href={work.website} target="_blank" rel="noreferrer">
                    Link To Website
                  </a>
                </div>
                <div className="projects-buttons">
                  <button onClick={() => setHideContent(true)}>Hide</button>
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </div>
            ))
          : `test`}
      </div>
    </>
  );
};

export default Projects;
