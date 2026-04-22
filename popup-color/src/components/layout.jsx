import { useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";
const Layout = ({ rows = 5, cols = 5 }) => {
  const [gridLayout, setGridLayout] = useState(
    Array.from({ length: rows }, (_, rowId) =>
      Array.from({ length: cols }, (_, colId) => rowId + "-" + colId),
    ),
  );
  //   console.log(gridLayout);

  const intervalId = useRef(null);
  const timeoutId = useRef(null);

  const [selectedItem, setSelectedItem] = useState([]);

  function handleClick(rowId, colId) {
    clearTimeout(timeoutId.current);
    let copySelected = [...selectedItem];
    if (copySelected.some((item) => item[0] == rowId && item[1] == colId))
      return;
    copySelected.push([rowId, colId]);
    setSelectedItem(copySelected);

    timeoutId.current = setTimeout(() => {
      nowPoppedItem();
    //   nowPoppedItem(selectedItem.length);
    }, 3000);
  }

//   function nowPoppedItem(times) {
//     setTimeout(() => {
//       let copy = [...selectedItem];
//       copy.slice(0, -1);
//       setSelectedItem(copy);
//     }, 1000);

//     times--;
//     if (times >= 0) nowPoppedItem(times);
//   }


function nowPoppedItem() {
  intervalId.current = setInterval(() => {
    setSelectedItem((prev) => {
      if (prev.length === 0) {
        clearInterval(intervalId.current);
        return prev;
      }
      return prev.slice(0, -1);
    });
  }, 1000);
}









  function checkDivClick(rowId, colId) {
    return selectedItem.some((item) => item[0] == rowId && item[1] == colId);
  }

  return (
    <div>
      <div className="grid-container">
        {gridLayout.map((item, rowIdx) => {
          return (
            <div className="grid-row" key={rowIdx}>
              {item.map((val, colIdx) => {
                return (
                  <div
                    className={`grid-col ${checkDivClick(rowIdx, colIdx) ? "active" : ""}`}
                    key={rowIdx + "-" + colIdx}
                    onClick={() => handleClick(rowIdx, colIdx)}
                  ></div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Layout;
