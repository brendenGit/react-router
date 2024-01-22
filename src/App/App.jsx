import { useState } from 'react'
import './App.css'
import VendingMachine from '../VendingMachine/VendingMachine'
import VendingItem from '../VendingMachine/VendingItem'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/vending-item/:name" element={<VendingItem />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App