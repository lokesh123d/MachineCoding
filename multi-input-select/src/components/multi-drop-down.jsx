import React, { useEffect, useRef, useState } from "react";

const MultiDropDown = () => {
  const searchRef = useRef(null);
  const [selectedItems, setselectedItems] = useState([]);
  const [isExpand, setIsExpand] = useState(false);
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const [dropDownItems, setDropDownItems] = useState([
    { id: 0, title: "Cricket", isChecked: false },
    { id: 1, title: "VideoGame", isChecked: false },
    { id: 2, title: "Coding", isChecked: false },
  ]);

  useEffect(() => {
    setselectedItems(
      dropDownItems
        .filter((item) => {
          if (item.isChecked) {
            return item.title;
          }
        })
        .map((item) => item.title),
    );
  }, [dropDownItems]);

  function handleChecked(id) {
    let copyItems = [...dropDownItems];
    copyItems[id].isChecked = !copyItems[id].isChecked;
    setDropDownItems(copyItems);
  }

  useEffect(() => {
    if (query == "") {
      setFilteredData(dropDownItems);
      return;
    }

    const normilizedQuery = query.trim().toLowerCase();

    setFilteredData(
      dropDownItems.filter((item) => {
        if (item.title.toLocaleLowerCase().includes(normilizedQuery)) {
          return item;
        }
      }),
    );
  }, [query]);

  return (
    <div className="flex flex-col  pt-30 items-center h-screen bg-white">
      <div className="flex border-2 min-w-52  sticky max-w-80 px-3 py-2 rounded">
        <div className="flex flex-wrap w-[100%] gap-2">
          {selectedItems.length > 2
            ? "More then 2 Items"
            : selectedItems?.join(",")}
          {selectedItems.length == 0 ? "Select Category" : ""}
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            setIsExpand(!isExpand);
            searchRef.focus();
          }}
        >
          🔻
        </div>
      </div>

      <div
        className="flex flex-col"
        style={{ display: `${isExpand ? "flex" : "none"}` }}
      >
        <input
          type="text"
          placeholder="Search items"
          className="bg-blue-200 rounded outline-blue-600 px-3 py-1"
          ref={searchRef}
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        {filteredData.map((item) => (
          <label
            htmlFor={item.title}
            key={item.id}
            className="bg-gray-200 hover:bg-gray-300 transition-all shadow-blue-400 border-b-mist-100 w-53 flex  h-8 justify-between px-2 rounded"
          >
            {item.title}
            <input
              type="checkbox"
              id={item.title}
              onChange={(e) => handleChecked(item.id)}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default MultiDropDown;
