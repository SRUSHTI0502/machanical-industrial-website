import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ProjectsPage from "./ProjectsPage";
import IndustriesServed from "./IndustriesServedPage";
import ServicesPage from "./ServicesPage";
import Footer from "./Footer";



function App() {
  return (
    <Router>
      <div>
    <Navbar />
    <Routes>
      <Route path="/"element={<ProjectsPage/>}/>
      <Route path="/Industries served"element={<IndustriesServed/>}/>
      <Route path="service"element={<ServicesPage/>}/>
    </Routes>
    <Footer/>
    </div>
  </Router>
  );
}

export default App;
