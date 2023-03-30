import React, { useState } from "react";
import "./Projects.css";
import { useDispatch, useSelector } from "react-redux";
import { projectsActions } from "../../store/projects-slice";

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.project);
  console.log(projects);

  const deleteProject = (id) => {
    dispatch(projectsActions.deleteProject(id));
  };

  const [hiddenProjects, setHiddenProjects] = useState([]);

  const hideProject = (id) => {
    setHiddenProjects((prev) => [...prev, id]);
  };

  const unhideProject = (id) => {
    setHiddenProjects((prev) => prev.filter((hiddenId) => hiddenId !== id));
  };

  return (
    <>
      <div className="projects-container">
        <h1>Projects</h1>
        {projects.map((work, i) => {
          if (hiddenProjects.includes(work.id)) {
            return (
              <div
                style={{ display: "flex", justifyContent: "center" }}
                key={i}
                className="individual-project"
              >
                <div className="projects-buttons">
                  <button onClick={() => unhideProject(work.id)}>Unhide</button>
                </div>
              </div>
            );
          }

          return (
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
                <button onClick={() => hideProject(work.id)}>Hide</button>
                <button>Edit</button>
                <button onClick={() => deleteProject(work.id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
