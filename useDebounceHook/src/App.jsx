import React, { useEffect, useState } from 'react'
import useDebounce from './hooks/useDebounce'
import useThrottle from './hooks/useTrrottle';

const App = () => {

  const [query, setquery] = useState('')
  const debouce = useDebounce(chalaDo,2000);
  const throttle = useThrottle(throttlekobheclaalDo,2000)

  function chalaDo(){
    console.log(query);
  }


  function throttlekobheclaalDo(){
    console.log('throttle chal raha hai');
  }


  useEffect(()=>{
   const response = throttle();
  },[setquery,query])
  return (
    <div><input type="text" placeholder='hey kuch likh yaha per' value={query} onChange={(e)=>setquery(e.target.value)}/></div>
  )
}

export default App