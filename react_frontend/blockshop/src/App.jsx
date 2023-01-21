import Sidebar from './components/homecomponents/Sidebar'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>
          <Navbar/>
        <Routes >
            <Route path='/' element={<Home/>} />
            <Route path="/electronics" element={<NewNFT />} />
            <Route path="/wears" element={<NewNFT />} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="*" element={<ErrorPage/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
