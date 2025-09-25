import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import MockTest from './components/templates/MockTest'
import "antd/dist/antd.css";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MockTest />} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
