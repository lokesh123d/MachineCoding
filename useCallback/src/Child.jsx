import React,{memo} from 'react'

const Child = ({func}) => {
  func()
  console.log('child got re render')
  return (
    <div>Child</div>
  )
}

export default  memo(Child)