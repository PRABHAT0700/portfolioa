import React from "react";
import "../node_modules/bootstrap/dist/css//bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";



const App = () => {
    return ( <> 
    <Navbar />
       <Routes>

          <Route  path="/" Component={Home}/>
          <Route exact path="/about" Component={About}/>
          <Route exact path="/contact" Component={Contact}/>
          <Route exact path="/service" Component={Service}/>
        
       </Routes>

       <Footer />
     </> )
};

export default App;