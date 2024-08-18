import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home'
import Product from './pages/Product'
import Consulting from './pages/Consulting'
import Team from './pages/Team'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </>
  )
}