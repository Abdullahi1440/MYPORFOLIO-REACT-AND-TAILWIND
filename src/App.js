
import Navbar from "./Component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Service from "./pages/Service";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./Component/Footer";
function App() {
  return (
    //figma
    <>
    <div className="">

   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/service" element={<Service />}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
   


   </Routes>
    <Footer/>
   </BrowserRouter>
   
 
   

  
    </div>
    </>
  );
}

export default App;
