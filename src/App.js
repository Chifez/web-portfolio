import React,{useState} from "react";
import AppContext from "./context/context";
import "./App.css";
import Home from "./pages/home/home"
import Navbar from './components/navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Works from "./pages/works/works";

function App() {
const [scrollPos,setScrollPos] = useState("30%")
 
  return (
    <Router>
              <div className="App">
          <AppContext.Provider value = {{scrollPos}}>
          <Routes>
              <Route path ="/" element ={ <Navbar /> } >
                  <Route index element={ <Home />} /> 
                  <Route path ="works" element={<Works />} />   
              </Route>
          </Routes>
        </AppContext.Provider>
              </div>
        </Router>
  );
}

export default App;
