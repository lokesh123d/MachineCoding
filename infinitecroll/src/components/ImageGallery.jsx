import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ImageGallery = () => {
  const [imageData, setImageData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [imageLimit, setImageLimit] = useState(20);

  useEffect(() => {
    fetchImages();
  }, [currentPage,setCurrentPage]);

  async function fetchImages() {
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${currentPage}&limit=${imageLimit}`,
    );
    const result = await response.json();
    setImageData([...imageData,...result]);
  }

useEffect(()=>{

window.addEventListener('scroll',function (e){
let  percent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
if(percent>70){    
    setCurrentPage(prev=>prev+1);
}
})





},[])


  return (
    <div className="card-container">
      {imageData?.map((item) => (
        <div className="card">
          <img src={item.download_url} width="190px" height="190px" />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
