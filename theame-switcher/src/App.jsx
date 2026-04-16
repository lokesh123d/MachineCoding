import React from 'react'
import { Outlet } from 'react-router-dom'
import ThemeProvider from './context/theme-context-provider'

const App = () => {
  return (
    <ThemeProvider>
    <div>
      <Outlet />
    </div>
    </ThemeProvider>
  )
}

export default App