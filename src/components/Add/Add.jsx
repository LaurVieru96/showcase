import React, { useState } from "react";
import "./Add.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add = () => {
  const [uploadPhoto, setUploadPhoto] = useState(null);
  const [workTitle, setWorkTitle] = useState("");
  const [workDescription, setWorkDescription] = useState("");
  const [workImage, setWorkImage] = useState("");

  const notify = () => toast("Project Uploaded!", { pauseOnHover: false });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(workTitle);
    console.log(workDescription);
    console.log(workImage);
  };

  return (
    <>
      <div className="add-container">
        <h1>Add Project</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="add-inner-container">
            <input
              type="text"
              placeholder="Type your work title here"
              value={workTitle}
              onChange={(e) => setWorkTitle(e.target.value)}
              required
            />
            <div className="add-descr-img">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Describe your work"
                value={workDescription}
                onChange={(e) => setWorkDescription(e.target.value)}
                required
              ></textarea>
              <div className="add-file">
                <input
                  type="file"
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
            onClick={
              workTitle && workDescription && workImage ? notify : undefined
            }
            type="submit"
          >
            Submit
          </button>
          <ToastContainer position="top-center" theme="dark" />
        </form>
      </div>
    </>
  );
};

export default Add;
