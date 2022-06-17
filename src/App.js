import React,{useState} from "react";
import AppContext from "./context/context";
import "./App.css";
import Home from "./pages/home/home"
import Navbar from './components/navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
const [scrollPos,setScrollPos] = useState("30%")
 
  return (
              <div className="App">
          <AppContext.Provider value = {{scrollPos}}>
                  <Navbar />
                  <Home />
        </AppContext.Provider>
              </div>

  );
}

export default App;
