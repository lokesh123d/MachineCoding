import React, { useState, useEffect, useRef } from "react";
const GameLayout = ({ word }) => {
    console.log(word)
  const [userInputs, setUserInputs] = useState(
    Array.from({ length: word.length * word.length }, (_, i) => {
      return { id: i, value: "", userGuess: "", result: 0 };
    }),
  );

  const [currentRow, setCurrentRow] = useState(1);
  const [currentColumns, setCurrentColumns] = useState(1);
  const [isLastColumn, setIsLastColumn] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  const inputRef = useRef([]);
  const {
    current: { rows, columns },
  } = useRef({
    rows: word.length,
    columns: word.length,
  });

  useEffect(() => {
    inputRef.current[0].focus();
  }, []);

  function handleChange(value, index) {
    const copyItem = [...userInputs];
    copyItem[index].value = value.slice(-1);
    setUserInputs(copyItem);
    if (columns == currentColumns) {
      setIsLastColumn(true);
    } else if (!isWinner) {
      inputRef.current[index + 1]?.focus();

      setCurrentColumns((prev) => prev + 1);
    }
  }

  function checkWord() {
    let result = [];

    const userWord = userInputs
      .slice((currentRow - 1) * word.length, currentRow * word.length)
      .map((item) => item.value.toUpperCase());
    const realWord = word.split("");
    const hasWon = userWord.join("") === realWord.join("");

    if (hasWon) {
      result = new Array(userWord.length).fill("Matched");
      setIsWinner(true);
    } else {
      result = userWord.map((item, index) => {
        if (item == realWord[index]) {
          return "Matched";
        } else if (realWord.includes(item)) {
          return "UnMatched";
        }
        return "Not Available";
      });
    }

    if (!isWinner) {
      const copyInputs = [...userInputs];
      let startIdx = (currentRow - 1) * word.length;
      result.map((item, index) => {
        copyInputs[startIdx + index] = {
          ...copyInputs[startIdx + index],
          result: item,
        };
      });

      setUserInputs(copyInputs);
      setCurrentColumns(1);
      setIsLastColumn(false);

      if (!hasWon) {
        setCurrentRow((prev) => prev + 1);
        inputRef.current[currentRow * word.length]?.focus();
      }
    }
  }

  useEffect(() => {}, [currentColumns]);

  return (
    <div className="game">
      <h1>Word Guesssing Game</h1>
      {isWinner && <h2>You Won in row {currentRow}!</h2>}
      <div
        className="input-container"
        style={{ gridTemplateColumns: `repeat(${word.length},50px)` }}
      >
        {userInputs.map((item, index) => {
          const activeRowStart = (currentRow - 1) * word.length;
          const activeRowEnd = currentRow * word.length;

          return (
            <input
              type="text"
              key={item.id}
              value={userInputs[index].value}
              className="input-box"
              ref={(input) => (inputRef.current[index] = input)}
              onChange={(e) => handleChange(e.target.value, index)}
              style={{
                backgroundColor: `${item.result == "Matched" ? "#52aa78" : item.result == "Not Available" ? " #D3D3D3" : item.result == "UnMatched" ? " #c1d33d" : ""}`,
              }}
              disabled={isWinner || !(index >= activeRowStart && index < activeRowEnd)}
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  e.preventDefault();

                  setUserInputs((prev) => {
                    const next = [...prev];
                    next[index] = { ...next[index], value: "" };
                    return next;
                  });

                  if (index > activeRowStart) {
                    inputRef.current[index - 1]?.focus();
                    setCurrentColumns((prev) => Math.max(prev - 1, 1));
                  }
                }
              }}
            />
          );
        })}
        <div className="btn-container">
          {isLastColumn ? (
            <button className="btn-check" onClick={checkWord} disabled={isWinner}>
              Check Word
            </button>
          ) : (
            ""
          )}


          {
            isWinner ? <button onClick={()=>{
                setCurrentRow(1);
                setCurrentColumns(1);
                setIsWinner(false);
                setUserInputs((prev)=>prev.map((item)=>({ id: item.id, value: "", userGuess: "", result: 0 })))
            }}
            className='reset-btn'
            >Reset Game</button>:''
          }
        </div>
      </div>
    </div>
  );
};
export default GameLayout;
