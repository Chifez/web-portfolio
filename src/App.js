import React from "react";
import "./App.css";
import Home from "./pages/home/home"
import Navbar from './components/navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
 
  return (
    <Router>
          <div className="App">
      <Routes>
          <Route path ="/" element ={ <Navbar /> } >
              <Route index element={ <Home />} />    
          </Route>
      </Routes>
          </div>
    </Router>
  );
}

export default App;
