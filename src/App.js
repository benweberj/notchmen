import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { GlobalStyle } from './styles'

import Home from './pages/Home'
import Gallery from './pages/Gallery'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Services from './pages/Services'
// import Products from './pages/Products'
// import Login from './pages/Login'
// import Register from './pages/Register'
// import ForgotPassword from './pages/ForgotPassword'

function App() {
   return (
      <>
         <GlobalStyle />
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/gallery" element={<Gallery />} />
            </Routes>
         </BrowserRouter>

      </>
  )
}

export default App
