import React,{useState,useEffect} from "react";
import AppContext from "./context/context";
import "./App.css";
import Home from "./pages/home/home"
import Navbar from './components/navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {motion,useViewportScroll,useTransform} from 'framer-motion'


function App() {
  const [scrollPos, setScrollPos] = useState(0)
  const [open ,setIsOpen] = useState(false)

  const onScroll = () =>{
    let pixelFromTop = window.scrollY;
    // console.log(pixelFromTop)
    let documentHeight = document.body.clientHeight;
    let windowHeight= window.innerHeight;
    // console.log(windowHeight)
    let difference = documentHeight - windowHeight;
    let percentage = (100 * pixelFromTop) / difference;
    // console.log(percentage) 
    setScrollPos(percentage);
  }
  

  // const {scrollYProgress} = useViewportScroll();
  
  // const yRange = useTransform(scrollYProgress, [0, 1], [0, 100])
  // console.log(yRange)

  useEffect(() =>{
      window.addEventListener("scroll", onScroll)
      return ()=> window.removeEventListener('scroll', onScroll)
    },[]);

  return (
              <motion.div className="App">
                  <AppContext.Provider value = {{scrollPos, open, setIsOpen}}>
                  <Navbar/>
                  <Home />
                  </AppContext.Provider>
              </motion.div>

  );
}

export default App;
