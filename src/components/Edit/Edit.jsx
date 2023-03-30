import React, { useState } from "react";
import "./Edit.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { projectsActions } from "../../store/projects-slice";

const Edit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  const projects = useSelector((projects) => projects.projects.project);
  console.log(projects);

  const existingProject = projects.filter((proj) => proj.id === params.id);
  console.log(existingProject);

  const [workImage, setWorkImage] = useState("");

  const { title, description, website, image } = existingProject[0];
  const [values, setValues] = useState({
    title,
    description,
    website,
    image,
  });

  const handleEdit = (e) => {
    e.preventDefault();
    // setValues({ title: "", description: "", website: "", image: "" });

    dispatch(
      projectsActions.updateProject({
        id: params.id,
        title: values.title,
        description: values.description,
        image: values.image,
        website: values.website,
      })
    );
    toast("Project Edited!", { pauseOnHover: false });

    setTimeout(() => {
      navigate("/projects");
    }, 3000);
  };

  return (
    <>
      <div className="add-container">
        <h1>Add Project</h1>
        <form onSubmit={handleEdit}>
          <div className="add-inner-container">
            <input
              type="text"
              placeholder="Type your work title here"
              value={values.title}
              onChange={(e) => setValues({ ...values, title: e.target.value })}
              required
            />
            <div className="add-descr-img">
              <textarea
                name=""
                id=""
                maxLength={90}
                cols="30"
                rows="10"
                placeholder="Describe your work"
                value={values.description}
                onChange={(e) =>
                  setValues({ ...values, description: e.target.value })
                }
                required
              ></textarea>
              <input
                type="url"
                placeholder="Add your website link"
                value={values.website}
                onChange={(e) =>
                  setValues({ ...values, website: e.target.value })
                }
              />
              <div className="add-file">
                <input
                  type="file"
                  //   value={image}
                  onChange={(e) =>
                    setWorkImage(URL.createObjectURL(e.target.files[0]))
                  }
                  required
                />
              </div>
            </div>
          </div>
          <button type="submit">Update Details</button>
          <ToastContainer
            position="top-center"
            theme="dark"
            style={{ marginTop: "80px" }}
          />
        </form>
      </div>
    </>
  );
};

export default Edit;
