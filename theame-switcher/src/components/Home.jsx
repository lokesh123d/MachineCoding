import React, { useEffect } from "react";
import { useTheme } from "../context/theme-context-provider";

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const root = document.getElementById("root");
    root.dataset.theme = theme;
  }, []);

      return (
    <div title="ya home hai ">
      home
      <button onClick={() => toggleTheme()}>toggletheme</button>
    </div>
  );
};

export default Home;
