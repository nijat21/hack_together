import './app.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from '@pages/HomePage'
import Navbar from '@components/Navbar'
import Products from '@pages/Products'
import Footer from '@components/Footer'
import SingleProduct from '@pages/SingleProduct'

export default function App() {
  return (
    <div>
      <Navbar />
      <div className='h-screen'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:productId' element={<SingleProduct />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
