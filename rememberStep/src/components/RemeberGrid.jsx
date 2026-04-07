import { useState } from "react";

const RememberGrid = ({ squareLength}) => {
  const size = squareLength||3
  const [boxesData] = useState(
    Array.from({ length: size * size }, (_, i) => ({ id: i })),
  );
  const [clickSeq, setClickSeq] = useState([]);

  function handleClick(id) {
    if (clickSeq.includes(id)) return;
    const newSeq = [...clickSeq, id];
    setClickSeq(newSeq);

    if (newSeq.length === size * size) {
      handlePopUp(newSeq);
    }
  }

  function handlePopUp() {
    const interval = setInterval(() => {
      setClickSeq((prev) => {
        if (prev.length === 0) {
          clearInterval(interval);
          return prev;
        }
        return prev.slice(0, -1);
      });
    }, 1000);
  }

  return (
    <div
      className="box-container"
      style={{ gridTemplateColumns: `repeat(${size}, 90px)` }}
    >
      {boxesData.map((box) => (
        <div
          key={box.id}
          className="box"
          style={{
            backgroundColor: clickSeq.includes(box.id) ? "blue" : "#f3f4f6",
          }}
          onClick={() => handleClick(box.id)}
        ></div>
      ))}
    </div>
  );
};

export default RememberGrid;
