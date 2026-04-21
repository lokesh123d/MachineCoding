import { useState, useEffect, useRef } from "react";

const SnakeLayout = ({ rows, cols }) => {
  const [gridLayout, setGridLayout] = useState(initializeGrid());
  const initialSnake = [
    [1, 4],
    [2, 4],
    [3, 4],
  ];
  const [snakeDets, setSnakeDets] = useState(initialSnake);
  const [food, setFood] = useState(() => generateFoodPosition(initialSnake));
  const directionRef = useRef("ArrowRight");
  const intervalId = useRef(null);
  const foodRef = useRef(food);

  useEffect(() => {
    foodRef.current = food;
  }, [food]);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setSnakeDets((prev) => {
        const head = prev[0];
        const nextHead = [...head];

        if (directionRef.current === "ArrowUp") {
          nextHead[0] -= 1;
        }
        if (directionRef.current === "ArrowDown") {
          nextHead[0] += 1;
        }
        if (directionRef.current === "ArrowLeft") {
          nextHead[1] -= 1;
        }
        if (directionRef.current === "ArrowRight") {
          nextHead[1] += 1;
        }

        if (nextHead[0] < 0) nextHead[0] = rows - 1;
        if (nextHead[0] >= rows) nextHead[0] = 0;
        if (nextHead[1] < 0) nextHead[1] = cols - 1;
        if (nextHead[1] >= cols) nextHead[1] = 0;

        const currentFood = foodRef.current;
        const ateFood = nextHead[0] === currentFood[0] && nextHead[1] === currentFood[1];

        if (ateFood) {
          const newSnake = [nextHead, ...prev];
          setFood(generateFoodPosition(newSnake));
          return newSnake;
        }

        return [nextHead, ...prev.slice(0, -1)];
      });
    }, 250);

    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  function generateFoodPosition(snake = []) {
    let nextFood = null;

    while (!nextFood) {
      const row = Math.trunc(Math.random() * rows);
      const col = Math.trunc(Math.random() * cols);

      if (!snake.some((item) => item[0] === row && item[1] === col)) {
        nextFood = [row, col];
      }
    }

    return nextFood;
  }

  function initializeGrid() {
    return Array.from({ length: rows }, (_, idx) =>
      Array.from({ length: cols }, (_, colId) => idx + "-" + colId),
    );
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.key == "ArrowUp" ||
        e.key == "ArrowDown" ||
        e.key == "ArrowRight" ||
        e.key == "ArrowLeft"
      ) {
        directionRef.current = e.key;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // console.log(directionRef);

  function isBlockSnake(xc, yc) {
    return snakeDets.some((item) => item[0] === xc && item[1] === yc);
  }

  return (
    <div>
      <div className="grid-container" style={{width:`${40*cols}px`,height:`${40*rows}px`}}>
        {gridLayout.map((item, yc) => {
          return (
            <div className="grid-row" key={yc}>
              {item.map((val, xc) => {
                return (
                  <div
                    className={`grid-col ${isBlockSnake(yc, xc) ? "snack" : ""} ${food[0] === yc && food[1] === xc ? "food" : ""}`}
                    key={yc + "-" + xc}
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

export default SnakeLayout;
