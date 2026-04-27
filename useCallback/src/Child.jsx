import React,{memo} from 'react'

const Child = ({func}) => {
    console.log('child re reder')
  return (
    <div>
        <button onClick={func}>func run kar la bhai</button>
    </div>
  )
}

export default memo(Child)