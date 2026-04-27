import {useState} from 'react'
function Counter() {
  const [count, setCount] = useState(0);

  function delayedLog() {
    setTimeout(() => {
      console.log(count);
    }, 2000);
  }

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={delayedLog}>Log After 2s</button>
    </>
  );
}

export default Counter;