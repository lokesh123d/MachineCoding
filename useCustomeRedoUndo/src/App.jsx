import React, { useEffect } from 'react'
import useUndoRedo from './hooks/useUndoRedo'

const App = () => {

  const { undo, redo, value, setValue, reset ,canRedo,canUndo } = useUndoRedo(0);

  
  

console.log('Value'+value);

  return (
    <div>
<h2>Count : {value}</h2>

<div>
  <button onClick={(e)=>setValue((prev)=>prev+1)}>Increase</button>
  <button onClick={(e)=>undo()}>Undo</button>
  <button onClick={()=>redo()}>Redo</button>
  <button onClick={()=>reset()}>reset</button>
  <button onClick={()=>canRedo()}>canRedo</button>
  <button onClick={()=>canUndo()}>canUndo</button>
 
</div>


    </div>
  )
}

export default App