import React, { useCallback, useState } from "react";
import Child from "./Child";
const App = () => {
  const [count, setcount] = useState(0);
// console.log('parent got rerender');



function yachalaga(){
  console.log('hehe')
}

const handleClick = useCallback(()=>{
    console.log('handle click chala hai');

},[])

  return (
    <div>
      <button onClick={(prev) => setcount(prev + 1)}>click here</button>
      <Child  func={handleClick}/>
    </div>
  );
};

export default App;

// what is ues callback
// why we use this
// where we ues
// ho e ue
