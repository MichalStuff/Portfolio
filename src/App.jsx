import React, { useState, useEffect, useRef } from 'react';
import './css/index.css';
import Header from './components/Header';
import Menu from './components/Menu';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  
  const handleOrientation = ()=>{
      const screenWidth = window.screen.width;
      const screenHeight = window.screen.height;
      if(screenHeight < screenWidth){
        return "Landscape";
      }else{
        return "Portrait";
      }
    }

  const [orientation, setOrientation] = useState(handleOrientation);

  const appRef = useRef([]); //Positions of App elements


  useEffect(()=>{
    const handleOrientationHelper = ()=>{
      setOrientation(handleOrientation);
    }
    window.addEventListener('resize',handleOrientationHelper);
    return ()=>{
      window.removeEventListener('resize',handleOrientationHelper);
    }
  },[orientation]);

  return (
    <div className='container'>
      <Header orientation = {orientation} ref = {appRef}/>
      <Menu orientation={orientation} itemsPosition={appRef}/>
      <About ref = {appRef} orientation = {orientation}/>
      <Technologies ref={appRef}/>
      <Projects ref={appRef}/>
      <Contact ref={appRef}/>
      <Footer/>
    </div>
  )
}

export default App;