
import Navbar from "./Component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Service from "./pages/Service";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
function App() {
  return (
    //figma
    <>
    <div className="">
  <h1 ></h1>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/service" element={<Service />}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
   


   </Routes>
  
   </BrowserRouter>
 
   

  
    </div>
    </>
  );
}

export default App;
