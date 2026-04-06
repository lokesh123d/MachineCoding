import React from "react";
import { useState } from "react";
import axios from "axios";

const FileSystem = () => {
  const [File, setFile] = useState(null);
  const [stauts, setstauts] = useState("idle");
  const [UploadProgress, setUploadProgress] = useState(0);

  async function submithandler() {
    if (!File) return;

    setstauts("uploading");
    setUploadProgress(0);

    const formData = new FormData();
    formData.append("file", File);

    try {
      const response = await axios.post("https://httpbin.org/post", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const progress = progressEvent.total
            ? Math.round(progressEvent.loaded * 100) / progressEvent.total
            : 0;
          setUploadProgress(progress);
        },
      });
      setstauts("success");
      setUploadProgress(100);
    } catch (err) {
      setUploadProgress(0);
      setstauts("error");
      console.error(err);
    }
  }

  return (
    <div>
      <h2>File Upload Handle Here</h2>
      <input
        type="file"
        name=""
        id=""
        onChange={(e) => setFile(e.target.files[0])}
      />
      <div className="loadingContainer">
        <div className="loading-bar" style={{width:UploadProgress+'%'}}></div>
        <span>{Math.floor(UploadProgress)}%</span>
      </div>
    
        <button style={{margin:'20px 0px'}} onClick={submithandler}>Upload File</button>

      {stauts == "success" && <div style={{color:'green'}}>File Uploaded Successfully.........</div>}

      {stauts == "error" && <div style={{color:'red'}}>Uploading File Error.....</div>}
    </div>
  );
};

export default FileSystem;
