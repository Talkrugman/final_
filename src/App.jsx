// import { useState } from 'react'
import Header from './Componnets/Header'
// import Main from './Componnets/Main'
import Footer from './Componnets/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './Componnets/Home'
import Catalog from './Componnets/Catalog'
import Cart from './Componnets/Cart'

function App() {
  return (<div className="bg-gray-100">
    <Header />
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/id' element={<Product />} />
        <Route path='/products' element={<Catalog />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </main>
    {/* <Main /> */}
    <Footer />
  </div>
  )
}

export default App
