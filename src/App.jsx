import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Pricing from './pages/Pricing';
import Products from './pages/Products';

function App(){

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/products" element={<Products />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );

}

export default App;