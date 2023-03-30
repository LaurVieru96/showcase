import React from "react";
import "./Projects.css";
import { useSelector } from "react-redux";
// const proj = [
//   {
//     title: "First Proj",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit unde asperiores non obcaecati, voluptatibus necessitatibus!",
//     image: "blob:http://localhost:3000/c95e8df6-a72d-4d35-a1c2-f24782b72d4b",
//   },
//   {
//     title: "First Proj",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit unde asperiores non obcaecati, voluptatibus necessitatibus!",
//     image: "blob:http://localhost:3000/c95e8df6-a72d-4d35-a1c2-f24782b72d4b",
//   },
//   {
//     title: "First Proj",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit unde asperiores non obcaecati, voluptatibus necessitatibus!",
//     image: "blob:http://localhost:3000/2255f757-8f52-4843-8ca2-9e181dfa67d5",
//   },
// ];

const Projects = () => {
  const projects = useSelector((state) => state.projects.project);
  console.log(projects);

  return (
    <>
      <div className="projects-container">
        <h1>Projects</h1>
        {projects.map((work, i) => (
          <div key={i} className="individual-project">
            <img src={work.image} alt="" width={50} />
            <h5>{work.title}</h5>
            <p>{work.description}</p>
            <button>Open</button>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
