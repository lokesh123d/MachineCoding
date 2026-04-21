import { useState } from "react";
import GridLayout from './component/grid-layout'
function App() {
  const [count, setCount] = useState(0);

  return <>
  <GridLayout acctualWord={'LOKESH'} />
  </>;
}

export default App;
