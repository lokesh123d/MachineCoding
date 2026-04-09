import React, { useState, useEffect } from "react";
import Interest from "./Interest";
import Profile from "./Profile";
import Settings from "./Setting";

const TabData = [
  { id: 0, title: "Profile", component: <Profile /> },
  { id: 1, title: "Interest", component: <Interest /> },
  { id: 2, title: "Setting", component: <Settings /> },
];

const Tabs = ({ formData }) => {
  const [currentIndexPage, setCurrentIndexPage] = useState(0);
  return (
    <>
      <div className="tab-buttons">
        {TabData.map((tab) => (
          <button key={tab.id} onClick={() => setCurrentIndexPage(tab.id)}>
            {tab.title}
          </button>
        ))}
      </div>

      <div className="tab-ui">{TabData[currentIndexPage].component}</div>
    </>
  );
};

export default Tabs;
