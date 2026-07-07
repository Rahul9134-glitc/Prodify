import React from 'react'
import AppRouters from './routes/AppRouters'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <AppRouters />
    </BrowserRouter>
  )
}

export default App