import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashbord = () => {
  return (
    <div>
      <div>Dashbord</div>
      <Outlet />
    </div>
  )
}

export default Dashbord