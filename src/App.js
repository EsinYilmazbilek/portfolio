import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './common/Navbar'
import Home from './common/Home'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/profile" element={<About />} />
        <Route path="/register" element={<Projects />} />
        <Route path="/login" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
