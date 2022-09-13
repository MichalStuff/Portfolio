import React,{Suspense, useState, useEffect, forwardRef, useRef} from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import IphoneNEW from './IphoneNEW';
import LaptokNEW from './LaptokNEW';

function Header(orientation,ref) {
  const [ sceneStyle, setSceneStyle ] = useState();
  const [ device, setDevice ] = useState();

  const headerRef = useRef();

  const handleResize = ()=>{
    const tempStyle = getScreenDimentions();
    setSceneStyle({
      width : tempStyle.width,
      height : tempStyle.height/2
    })

    if(tempStyle.width <= 814){
      setDevice('mobile');
    }else{
      setDevice('laptop');
    }
  }
  
  const handleModel = ()=>{
    if(device === 'mobile'){
      return <IphoneNEW data={sceneStyle}/>;
    }else{
      return <LaptokNEW data={sceneStyle}/>;
    }
  }

  const getScreenDimentions = ()=>{
    const {innerWidth : width, innerHeight : height} = window;
    return {
      width,
      height
    }
  }

  useEffect(()=>{
    handleResize()
    window.addEventListener('resize', handleResize);
    ref.current.push(headerRef.current);
    return ()=>{
      window.removeEventListener('resize',handleResize);
    }
  },[orientation]);

  return (
    <header className='Header' ref={headerRef}>
      <h1 className='Header__Hello'>Hello My name is Michał and I'm Front-End Developer</h1>
      <div className='Header__curtain'></div>
      <Canvas style={sceneStyle} camera={{fov : 100, near : 0.1, far : 1000, position : [0,0,5]}} className="Header__Canvas">
        <OrbitControls enableZoom={false} position={[-2,1,5]}/>
        <ambientLight intensity={0.8}/>
        <Suspense fallback={null} rf3>
          {handleModel()}
        </Suspense>
      </Canvas>
    </header>
  )
}

// export default Header;
export default forwardRef(Header);