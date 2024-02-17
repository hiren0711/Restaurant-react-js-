import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Restaurant/Components/Header';
import Footer from './Restaurant/Components/Footer';
import Home from './Restaurant/pages/Home';
import About from './Restaurant/pages/About';
import Service from './Restaurant/pages/Service';
import Menu from './Restaurant/pages/Menu';
import Contact from './Restaurant/pages/Contact';
import Booking from './Restaurant/pages/Booking';
import Team from './Restaurant/pages/Team';
import Testimonial from './Restaurant/pages/Testimonial';

function App() {
  return (

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header/> <Home/> <Footer/> </>}></Route>
          <Route path="/About" element={<><Header/> <About/> <Footer/> </>}></Route>          
          <Route path="/Service" element={<><Header/> <Service/> <Footer/> </>}></Route>
          <Route path="/Menu" element={<><Header/> <Menu/> <Footer/> </>}></Route>
          <Route path="/Contact" element={<><Header/> <Contact/> <Footer/> </>}></Route>
          <Route path="/Booking" element={<><Header/> <Booking/> </>}></Route>
          <Route path="/Team" element={<><Header/> <Team/> </>}></Route>
          <Route path="/Testimonial" element={<><Header/>  <Testimonial/> </>}></Route>
          </Routes>    
    </BrowserRouter>
   
  );
}

export default App;
