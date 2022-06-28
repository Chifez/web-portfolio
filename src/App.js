import React,{useState,useEffect} from "react";
import AppContext from "./context/context";
import "./App.css";
import Home from "./pages/home/home"
import Navbar from './components/navbar'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {Triangle} from 'react-loader-spinner'
import {motion,useTransform} from 'framer-motion'


function App() {
  const [scrollPos, setScrollPos] = useState(0)
  const [open ,setIsOpen] = useState(false)
  const [loading,setIsloading] = useState(false)


  const onScroll = () =>{
    let pixelFromTop = window.scrollY;
    let documentHeight = document.body.clientHeight;
    let windowHeight= window.innerHeight;
    let difference = documentHeight - windowHeight;
    let percentage = (100 * pixelFromTop) / difference;
    setScrollPos(percentage);
  }
  
  useEffect (()=>{
    setIsloading(false);
    window.addEventListener('scroll', onScroll)
    setTimeout(()=>{
      setIsloading(true)},3000)
      return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  // useEffect(() =>{
  //     window.addEventListener('scroll', onScroll)
  //     return ()=> window.removeEventListener('scroll', onScroll)
  //   },[]);

  return (
              <motion.div className="App">
                {!loading && <div 
                style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100vw', height:'100vh', backgroundColor:'black'}}
                >
                  <Triangle color="#00BFFF" height={100} width={100} arialLabel='loading-indicator' />
                  </div>}
                  {loading && <AppContext.Provider value = {{scrollPos, open, setIsOpen}}>
                  <Navbar/>
                  <Home />
                  </AppContext.Provider>}
              </motion.div>

  );
}

export default App;
