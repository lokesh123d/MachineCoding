import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const App = () => {
  const [value, setvalue] = useState(10);
  const [data, setdata] = useState("lokesh");
  const [counter, setcounter] = useState(0);

  return (
    <div>
      <h3>hey lokesh kaisa hai kya chal raha hai ? </h3>
      <p>
        here child one only when the data would be chaged and child 2 will run
        or re create a function while the value will be changed
      </p>
      <Child1 value={value} data={data} />
      <Child2 value={value} data={data} />

      <div>
        <button onClick={() => setvalue((prev) => prev + 1)}>
          Change value
        </button>
        <button onClick={() => setdata((prev) => prev + Date.now())}>
          Change Data
        </button>
      </div>

      <div>
        {counter}
        <div>
          <button onClick={() => setcounter((prev) => prev + 1)}>
            Increase
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
