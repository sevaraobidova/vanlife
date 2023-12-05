
import './App.css'
import Header from './Components/Layout/Header'
import Button from './Components/Button/Button'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/pages/Home'
import About from './Components/pages/About'
import Vans from './Components/pages/Vans'
import Footer from './Components/Layout/Footer'
import VansDetail from './Components/pages/VansDetail'
import Shop from './Components/pages/Shop'
function App() {

  return(
    <>
    <Header />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/vans/:id' element={<VansDetail/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
