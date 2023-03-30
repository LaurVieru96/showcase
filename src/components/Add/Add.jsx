import React, { useState } from "react";
import "./Add.css";

const Add = () => {
  const [uploadPhoto, setUploadPhoto] = useState(null);

  const handlePhotoUpload = (event) => {
    setUploadPhoto(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <>
      <div className="add-container">
        <h1>Add Project</h1>
        <div className="add-inner-container">
          <input type="text" placeholder="Type your work title here" />
          <div className="add-descr-img">
            <input type="text" placeholder="Describe your work" />
            <input type="file" onChange={handlePhotoUpload} />
          </div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      </div>
    </>
  );
};

export default Add;

//  {uploadPhoto && (
//   <img className="added-photo" src={uploadPhoto} alt="uploaded" />
// )}
