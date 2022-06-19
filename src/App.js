import React,{useState,useEffect} from "react";
import AppContext from "./context/context";
import "./App.css";
import Home from "./pages/home/home"
import Navbar from './components/navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {motion,useViewportScroll} from 'framer-motion'


function App() {
  const [scrollPos,setScrollPos] = useState("")
  
  const {scrollYProgress} = useViewportScroll()

  const scroll = `${scrollYProgress}%`
  console.log(scroll)

  useEffect(()=>{
    setScrollPos(scrollYProgress * 100 )
    console.log(scrollPos)
    console.log(scrollYProgress)
  },[scrollYProgress])


  return (
          <AppContext.Provider value = {{scrollPos}}>
              <motion.div className="App">
                  <Navbar />
                  <Home />
              </motion.div>
        </AppContext.Provider>

  );
}

export default App;
