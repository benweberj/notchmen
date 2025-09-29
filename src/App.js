import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { GlobalStyle } from './styles'

import Header from './components/Header'

import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Showcase from './pages/Showcase'
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
            <Header />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/gallery" element={<Gallery />} />
               <Route path='/gallery/:id' element={<Showcase />} />
               <Route path='*' element={<Unknown />} />
            </Routes>
         </BrowserRouter>

      </>
  )
}


const Unknown = () => <div className='full center'>
   That page dont work yet bro
</div>

export default App
