import { useCallback, useState } from 'react'
import Child from './Child'


const App = () => {
  const [count, setcount] = useState(0)
  const [count2, setcount2] = useState(0)

 const js = useCallback(() => {
    console.log('js');
  }, [count])

console.log('component got rerender')



const childFunc=useCallback(()=>{
 console.log('child function');
},[count])


  return (
    <div>
      <button onClick={() => setcount((prev) => prev + 1)}>Click me</button>
      <button onClick={() => setcount2((prev) => prev + 1)}>Click me2</button>
      <button onClick={() => js()}>run function </button>
   <Child func={childFunc}/>
     
    </div>
  )
}

export default App