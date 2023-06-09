import React, { useState } from "react";
import "./Add.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch } from "react-redux";
import { projectsActions } from "../../store/projects-slice";

import { useNavigate } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

const Add = () => {
  const dispatch = useDispatch();

  const [uploadPhoto] = useState(null);
  const [workTitle, setWorkTitle] = useState("");
  const [workDescription, setWorkDescription] = useState("");
  const [workImage, setWorkImage] = useState("");
  const [workWebsite, setWorkWebsite] = useState("");

  // const notify = () => toast("Project Uploaded!", { pauseOnHover: false });

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(workTitle);
    // console.log(workDescription);
    // console.log(workImage);

    if (workDescription.length < 15) {
      toast.error("Description must be at least 15 characters long!");
      return;
    }

    dispatch(
      projectsActions.setProjectsList({
        id: uuidv4(),
        title: workTitle,
        description: workDescription,
        image: workImage,
        website: workWebsite,
      })
    );

    toast.success("Project Uploaded!", { pauseOnHover: false });

    setWorkTitle("");
    setWorkDescription("");
    setWorkImage("");
    setWorkWebsite("");

    setTimeout(() => {
      navigate("/projects");
    }, 3000);
  };

  return (
    <>
      <div className="add-container">
        <h1>Add Project</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="add-inner-container">
            <input
              data-testid="input-title"
              type="text"
              placeholder="Type your work title here"
              value={workTitle}
              onChange={(e) => setWorkTitle(e.target.value)}
              required
            />
            <div className="add-descr-img">
              <textarea
                data-testid="textarea"
                name=""
                id=""
                maxLength={90}
                cols="30"
                rows="10"
                placeholder="Describe your work"
                value={workDescription}
                onChange={(e) => setWorkDescription(e.target.value)}
                required
              ></textarea>
              <input
                data-testid="input-url"
                type="url"
                placeholder="Add your website link"
                value={workWebsite}
                onChange={(e) => setWorkWebsite(e.target.value)}
              />
              <div className="add-file">
                <input
                  data-testid="input-file"
                  type="file"
                  // value={workImage}
                  onChange={(e) =>
                    setWorkImage(URL.createObjectURL(e.target.files[0]))
                  }
                  required
                />
                {uploadPhoto && (
                  <img
                    className="added-photo"
                    src={uploadPhoto}
                    alt="uploaded"
                    width={50}
                  />
                )}
              </div>
            </div>
          </div>
          <button
            // onClick={
            //   workTitle && workDescription && workImage ? notify : undefined
            // }
            data-testid="submit-add-btn"
            type="submit"
          >
            Submit
          </button>
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

export default Add;
