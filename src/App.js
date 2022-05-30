import React from "react";
import { Routes,Route } from "react-router-dom"
import "./assets/bootstrap-5.1.3-dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import DashBoard from "./components/DashBoard";
import { Home } from "./components/Home";



function App() { 
  return (
    <div className="container text-center d-flex flex-column border border-primary">
<Header />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="login" element={<Login />} />
  <Route path="dashboard" element={<DashBoard />} />
  
</Routes>
     
     

      {/* <Routes>      
      <Route path='/' element={<Login />} />      
    </Routes> */}
    
    </div>
  );
}

export default App;
