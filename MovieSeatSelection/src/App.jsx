import React from 'react'
import MovieSeat from './components/MovieSeat'

const App = () => {
  return (
    <div><MovieSeat  rows={10} columns={10}/>
    
    </div>
  )
}

export default App



/*
1. create a dynamic ui with 
and all seat have a one object which contaitn a current status price 
when i click on a seat then it wil selected and if i proceed with that then i show the details and and want a payemtn then payment is done we make it reserved type and show all the un reserved seats ;
*/