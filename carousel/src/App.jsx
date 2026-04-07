import React from "react";
import Carousel from "./components/carousel";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [imageData, setimageData] = useState([]);

  useEffect(() => {
    async function fetchImageData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos",
      );
      const result = await response.json();
      setimageData(result);
    }
    fetchImageData();
  }, []);
  return (
    <div>
      <Carousel imageData={imageData} />
    </div>
  );
};

export default App;
