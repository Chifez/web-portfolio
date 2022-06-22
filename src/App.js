import React,{useState,useEffect} from "react";
import AppContext from "./context/context";
import "./App.css";
import Home from "./pages/home/home"
import Navbar from './components/navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {motion,useViewportScroll,useTransform} from 'framer-motion'


function App() {
  const [scrollPos, setScrollPos] = useState(50)
  const [open ,setIsOpen] = useState(false)
  
  const {scrollYProgress} = useViewportScroll();
  
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100])
  console.log(yRange)
//   useEffect(
//     () =>
//         yRange.onChange((v) => {
//           setScrollPos(Math.trunc(yRange.current))
//           console.log(scrollYProgress)
//         }),
//     [yRange]
// );

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
