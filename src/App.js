
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import About from './pages/About/About';
import Author from './pages/authors/Author';
import Cart from './pages/cart/Cart';
import Login from './pages/forms/Login';
import Book from './pages/book/Book';
import Contact from './pages/contact/Contact';
import Register from './pages/forms/Register';


import {BrowserRouter,Routes,Route} from "react-router-dom";



function App() {
  return (
    <BrowserRouter >
      <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/author" element={<Author />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/book/:id" element={<Book />} />

      
    </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
