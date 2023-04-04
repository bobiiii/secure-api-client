import React from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Data from './components/Data'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Form />} />
        <Route path='/data' element={<Data />} />

      </Routes>
    </>
  )
}

export default App