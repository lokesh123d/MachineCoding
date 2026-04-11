import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const Image = () => {
  const [data, setdata] = useState([]);
  const [limit, setlimit] = useState(6);
  const [page, setpage] = useState(1);
  const [skip, setskip] = useState(limit * page);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(null);

  async function fetchData() {
    try {
      setisLoading(true);
      const response = await fetch(
        `https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`,
      );
      const result = await response.json();

      setdata((prev) => [...prev, ...result.recipes]);
    } catch (err) {
      setisError(err.message);
    } finally {
      setisLoading(false);
    }
  }

  useEffect(() => {
    setskip(limit * (page - 1));
    fetchData();
  }, [page]);

  return (
    <div className="item-container">


      {data.map((item) => {
          return <span key={nanoid()}>{item.name}</span>;
        })}

        {isLoading&& 'Loading........'}
        {isError&& isError}
      <button
        onClick={() => {
          setpage((prev) => prev + 1);
        }}
      >
        {isLoading?"Loading...":'Load More'}
      </button>
    </div>
  );
};

export default Image;
