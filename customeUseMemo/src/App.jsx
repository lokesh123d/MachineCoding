import React, { useMemo, useState } from "react";
import useCustomeMemo from "./hooks/use-custome-memo";

const App = () => {
  const [count, setcount] = useState(0);
  const [count2, setcount2] = useState(0);

  const showignCount = useCustomeMemo(() => handcount(), [count]);
  const showignCount2 = useCustomeMemo(() => handleCount2(), []);

  function handcount() {
    console.log("heavy calculation run now ");
    return count * count;
  }

  function handleCount2() {
    console.log("heavy task2222222222222222222222222");
    return count2 * count2;
  }

  return (
    <div>
      <h1>{showignCount}</h1>
      <button onClick={() => setcount(count + 1)}>Increase</button>
      <h1>{count2}</h1>
      <button onClick={() => setcount2(count2 + 1)}>Increase2</button>
    </div>
  );
};

export default App;
