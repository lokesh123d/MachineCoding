import React, { useEffect, useMemo, useState } from "react";

const GameGrid = () => {
  const [boardLeng, setboardLeng] = useState(4);
  const boardSize = useMemo(
    () =>
      Array.from({ length: boardLeng * boardLeng }, () => ({
        isOpened: false,
      })),
    [boardLeng],
  );

  const [boardCal, setboardCal] = useState(boardSize);
  const [lastRecord, setlastRecord] = useState({
    prevIndex: null,
    prevVal: null,
    nowVal: null,
  });
  const [isChecking, setisChecking] = useState(false);

  const [matched, setmatched] = useState([]);

  const initialState = useMemo(() => {
    let arr = [];
    for (let i = 1; i <= (boardLeng * boardLeng) / 2; i++) {
      arr.push(i);
    }
    return shuffle([...shuffle(arr), ...shuffle(arr)]);
  }, [boardLeng]);

  useEffect(() => {
    setboardCal(boardSize);
    setmatched([]);
    setlastRecord({ prevIndex: null, prevVal: null, nowVal: null });
    setisChecking(false);
  }, [boardSize]);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function handleClick(index) {
    if (isChecking) return;
    if (boardCal[index]?.isOpened) return;
    if (matched.includes(initialState[index])) return;

    setboardCal((prev) => {
      const copyarr = [...prev];
      copyarr[index] = {
        ...copyarr[index],
        isOpened: true,
      };
      return copyarr;
    });

    if (lastRecord.prevVal === null) {
      setlastRecord({
        prevIndex: index,
        prevVal: initialState[index],
        nowVal: null,
      });
      return;
    }

    if (lastRecord.prevIndex === index) return;

    if (lastRecord.prevVal === initialState[index]) {
      setmatched((prev) => [...prev, initialState[index]]);
      setlastRecord({ prevIndex: null, prevVal: null, nowVal: null });
      return;
    }

    setisChecking(true);
    const previousIndex = lastRecord.prevIndex;
    setTimeout(() => {
      setboardCal((prev) => {
        const copyarr = [...prev];
        if (previousIndex !== null) {
          copyarr[previousIndex] = {
            ...copyarr[previousIndex],
            isOpened: false,
          };
        }
        copyarr[index] = {
          ...copyarr[index],
          isOpened: false,
        };
        return copyarr;
      });
      setlastRecord({ prevIndex: null, prevVal: null, nowVal: null });
      setisChecking(false);
    }, 800);
  }

  function handleBoardLengthChange(value) {
    const nextValue = Number(value) || 2;
    const normalized = Math.max(2, nextValue);
    setboardLeng(normalized % 2 === 0 ? normalized : normalized + 1);
  }

  const totalPairs = (boardLeng * boardLeng) / 2;
  const isWinner = matched.length === totalPairs;

  return (
    <div>
      <input
        type="number"
        min={2}
        step={2}
        value={boardLeng}
        onChange={(e) => handleBoardLengthChange(e.target.value)}
        placeholder="board size"
      />
      <div
        className="boardContainer"
        style={{ width: boardLeng * 40 + boardLeng * 5 + "px" }}
      >
        {boardCal.map((elem, index) => {
          return (
            <div
              className="boardbox"
              key={index}
              onClick={() => handleClick(index)}
              style={{
                backgroundColor: matched.includes(initialState[index])
                  ? "green"
                  : "",
              }}
            >
              {elem.isOpened ? initialState[index] : ""}
            </div>
          );
        })}
      </div>
      {isWinner && <h2>You Win!</h2>}
    </div>
  );
};

export default GameGrid;
