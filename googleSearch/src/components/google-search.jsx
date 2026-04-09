import React, { useEffect, useRef, useState } from "react";

const GoogleSearch = () => {
  const [data, setdata] = useState([]);
  const [query, setQuery] = useState("");

  const [isFocus, setIsFocus] = useState(true);
  const [cacheResult, setcacheResult] = useState({});

  async function fetchData() {
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${query}`,
    );
    const result = await response.json();
    setdata(result.recipes);

    setcacheResult((prev) => ({ ...prev, [query]: result.recipes }));
  }

  useEffect(() => {
    if (cacheResult[query]) {
      setdata(cacheResult[query]);
      return;
    }

    const timerId = setTimeout(fetchData, 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [query,cacheResult]);


  return (
    <div>
      <input
        type="text"
        placeholder="Search Something"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />

      {isFocus && (
        <div className="result-container">
          {data?.map((item) => {
            return (
              <div className="result" key={item.id}>
                {item.name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default GoogleSearch;
