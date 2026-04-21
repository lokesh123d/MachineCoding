import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { nanoid } from "nanoid";

function GridLayout({ acctualWord }) {
  const [wordInputs, setWordInputs] = useState(null);
  const [currentRowWord, setCurrentRowWord] = useState([]);
  const [isCheckBtn, setIsCheckBtn] = useState(false);
  const inputRefs = useRef([]);
  const [row, setRow] = useState(1);
  const [column, setColumn] = useState(1);
  const [isWinner, setIsWinner] = useState(false);
  const [isLost, setIsLost] = useState(false);


function createInitialGrid() {
  let allInputs = [];
  for (let i = 1; i <= acctualWord.length; i++) {
    let row = [];
    for (let j = 0; j < acctualWord.length; j++) {
      row.push({ id: nanoid(), value: "", expected: acctualWord[j] });
    }
    allInputs.push(row);
  }
  return allInputs;
}




function resetGame(){
    setWordInputs(createInitialGrid());
    setCurrentRowWord([]);
    setIsCheckBtn(false);
setColumn(1);
setRow(1);
setIsWinner(false);
setIsLost(false);
setTimeout(() => {
  inputRefs.current?.[0]?.[0]?.focus();
}, 0);
}




  useEffect(() => {
    setWordInputs(createInitialGrid());
  }, [acctualWord]);

  // useLayoutEffect(() => {
  //     inputRefs.current?.[0]?.[0]?.focus();
  // }, [acctualWord]);

  //   const [count, setCount] = useState(0);

  function handleFocus(rowIndex, colIndex) {
    if (colIndex + 1 !== acctualWord.length) {
      inputRefs.current[rowIndex][colIndex + 1].focus();
      setIsCheckBtn(false);
    } else {
      if (wordInputs[rowIndex][colIndex].value != "") {
        setIsCheckBtn(false);
      }
      setIsCheckBtn(true);
    }
  }

  function handleCheckWinner() {
    currentRowWord.map((item, index) => {
      if (acctualWord[index] == item.toUpperCase()) {
        inputRefs.current[row - 1][index].style.backgroundColor = "green";
      } else if (acctualWord.includes(item.toUpperCase())) {
        inputRefs.current[row - 1][index].style.backgroundColor = "yellow";
      } else if (!acctualWord.includes(item.toUpperCase())) {
        inputRefs.current[row - 1][index].style.backgroundColor = "gray";
      }
    });
    if (currentRowWord.join("").toUpperCase() == acctualWord) {
      setIsWinner(true);
      return;
    }

    setIsWinner(false);
    inputRefs.current?.[row]?.[0]?.focus();
    setRow((prev) => prev + 1);
    setCurrentRowWord([]);
    setIsCheckBtn(false);
    setIsLost(false)
    if(row==acctualWord.length){
        setIsLost(true)
    }
  }






  return (
    <>
      <div className="layout-container">
        {wordInputs?.map((item, rowIndex) => {
          return (
            <div className="rows-line" key={rowIndex}>
              {item.map((colItem, colIndex) => {
                return (
                  <input
                    className="cols-item"
                    key={colItem.id}
                    ref={(input) => {
                      if (!inputRefs.current[rowIndex]) {
                        inputRefs.current[rowIndex] = [];
                      }
                      inputRefs.current[rowIndex][colIndex] = input;
                    }}
                    value={wordInputs[rowIndex][colIndex].value}
                    onChange={(e) => {
                      const value = e.target.value.slice(-1);

                      setWordInputs((prev) => {
                        const newGrid = [...prev];
                        const newRow = [...newGrid[rowIndex]];

                        newRow[colIndex] = {
                          ...newRow[colIndex],
                          value,
                        };

                        newGrid[rowIndex] = newRow;

                        return newGrid;
                      });
                      handleFocus(rowIndex, colIndex);
                      setCurrentRowWord((prev) => {
                        const newCopy = [...prev];
                        newCopy[colIndex] = value;
                        return newCopy;
                      });
                    }}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      {isCheckBtn &&
        (!isWinner ? (
          <button className="btn check-btn" onClick={handleCheckWinner}>
            Check The Data
          </button>
        ) : (
          <button className="btn reset-btn" onClick={resetGame}>Reset Game</button>
        ))}

      {isWinner && <p className="status-message win-message">hey you win at line {row}</p>}


      {isLost&& <div className="status-message lose-message">
        <span>You Lost the Match</span>
        <button className='btn retry-btn' onClick={resetGame}>Retry Game</button>
      </div> }
    </>
  );
}

export default GridLayout;
