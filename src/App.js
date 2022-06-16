import React from "react";
import "./App.css";
import Home from "./pages/home/home"
import Navbar from './components/navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Works from "./pages/works/works";

function App() {
 
  return (
    <Router>
          <div className="App">
      <Routes>
          <Route path ="/" element ={ <Navbar /> } >
              <Route index element={ <Home />} /> 
              <Route path ="works" element={<Works />} />   
          </Route>
      </Routes>
          </div>
    </Router>
  );
}

export default App;
