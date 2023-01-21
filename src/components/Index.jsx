import React, {useState, useRef, useEffect} from "react";
import '../styles/index.scss';
import Lighthouse from "./Lighthouse/Lighthouse";
import Goat from "./Goat/Goat";
import Vessel from "./Vessel/Vessel";
import Contact from "./Contact/Contact";
import Welcome from "./Welcome/Welcome";
import NavBar from "./Navigation/navbar";
import Footer from "./Navigation/Footer";
import useLocoScroll from "./hooks/useLocoScroll";

const Home = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [preloader, setPreloader] = useState(true);
  useLocoScroll(!preloader);
  const [timer, setTimer] = useState(3);

  
  const timeoutId = useRef(null);
  
  const clear = () => {
    clearTimeout(timeoutId.current);
    setPreloader(false);
  };
  
  useEffect(() => {
    if (timer > 0) {
      timeoutId.current = setTimeout(() => {
        setTimer(timer - 1);
        console.log(timer);
      }, 1000);
    } else {
      clear();
    }
  }, [timer]);


  useEffect(() => {
    if (!preloader) {
      setTimeout(() => {
        setIsVisible(true);
      }, 100);
    }
  }, [preloader]);


    return ( 
      <>
      {preloader? (
        <div className="loader-wrapper absolute" ref={timeoutId}>
          <h1>RW</h1>
        </div> )
      : (
      <>
      <div className="main-container" id="main-container" data-scroll-container>
        <div className={`fade-in-all ${isVisible ? "show" : ""}`}>
        <NavBar />
        <div className="wrapperparent">
          <div className="section">
            <Welcome />
          </div>
    
          <div id="goat" className="section">
            <Goat />
          </div>
    
          <div id="lighthouse" className="section">
            <Lighthouse />
          </div>
    
          <div id="vessel" className="section">
            <Vessel />
          </div>
    
          <div id="contact" className="section">
            <Contact />
          </div>
        </div>
        <Footer />
        </div>
        </div>
      </>)
      }
      </>
     );
    
}

export default Home;