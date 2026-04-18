import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import StoryModal from "./story-modal-details";

let StoryTiemLine = 50000;
let CloseModalTime = 3000;

const Story = () => {
  const [userFile, setuserFile] = useState([]);
  const [openModal, setopenModal] = useState(null);

  function handleUplaod(file) {
    const imageUrl = URL.createObjectURL(file);
    let storyId = nanoid();

    let newSotry = {
      id: storyId,
      url: imageUrl,
    };
    setTimeout(() => {
      setuserFile((prev) => prev.filter((item) => item.id !== storyId));
    }, StoryTiemLine);
    setuserFile((prev) => [newSotry, ...prev]);
  }

  return (
    <div className="stories">
      <StoryModal url={openModal} setopenModal={setopenModal} />
      <div>
        <label htmlFor="file-select" className="file-select">
          <input
            id="file-select"
            type="file"
            className="file-input"
            onChange={(e) => handleUplaod(e.target.files[0])}
          />
          <span className="plus-icon">+</span>
        </label>
      </div>
      <div className="story-container">
        {userFile.length > 0 &&
          userFile.map((item, index) => {
            return (
              <div
                className="single-story"
                onClick={(e) => {
                  setopenModal(item.url);
                  setTimeout(() => {
                    setopenModal(null);
                  }, CloseModalTime);
                }}
                key={item.id}
              >
                <img src={item.url} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Story;
