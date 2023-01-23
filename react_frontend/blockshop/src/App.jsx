import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Agriculture from './pages/Agriculture'
import Cart from './pages/Cart'
import Dashboard from './pages/Dashboard'
import Electronics from './pages/Electronics'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Preview from './pages/Preview'
import UpdateProfile from './pages/UpdateProfile'
import Wears from './pages/Wears'

function App() {

  return (
    <BrowserRouter>
        <Navbar/>
        <Routes >
            <Route path='/' element={<Home/>} />
            <Route path="/sgriculture" element={<Agriculture />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/wears" element={<Wears />} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/profile" element={<UpdateProfile/>} />
            <Route path="/cart/:item" element={<Cart/>} />
            <Route path="/preview/:description" element={<Preview/>} />
            <Route path="*" element={<ErrorPage/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App
