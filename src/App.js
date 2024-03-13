import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Pages from './Pages/Pages';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Footer from './Footer/Footer';


function App() {
  return (
   <>
   <BrowserRouter>
        <Navbar/>
        <Routes>
            {/* <Route path="/" element={<Navbar/>}></Route> */}
            <Route path="/" element={<Home/>}></Route>
            <Route path="/shop" element={<Shop/>}></Route>
            <Route path="/pages" element={<Pages/>}></Route>
            <Route path="/blog" element={<Blog/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
        </Routes>
        <Footer/>
   </BrowserRouter>
   </>
  );
}

export default App;
