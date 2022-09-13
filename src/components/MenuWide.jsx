import React, { useState, useRef, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleQuestion, faCode, faEnvelope, faRobot, faHome} from '@fortawesome/free-solid-svg-icons';

export default function MenuWide({itemsPosition}) {

    const [activeMenu, setActiveMenu] = useState('#');

    useEffect(()=>{

        const handlePosition = ()=>{
            const position = window.scrollY;
            itemsPosition.current.forEach((item,i) =>{
                if(item.offsetTop <= position && item.offsetTop + item.clientHeight >= position){
                    setActiveMenu(`#${item.id}`);
                }
            })
        }

        window.addEventListener('scroll',handlePosition);
        window.addEventListener('touchmove',handlePosition);
        return function cleanup(){
            window.removeEventListener('scroll',handlePosition);
            window.removeEventListener('touchmove',handlePosition);
        }
    },[]);

    return (
    <nav className="MenuWide">
        <a href="#" className={activeMenu ==='#' ? 'MenuWide__link --active' : 'MenuWide__link'}  onClick={()=> setActiveMenu('#')}><FontAwesomeIcon icon={faHome} className="MenuWide__icon"/> </a>
        <a href="#About" className={activeMenu ==='#About' ? 'MenuWide__link --active' : 'MenuWide__link'} onClick={()=> setActiveMenu('#About')}><FontAwesomeIcon icon={faCircleQuestion} className="MenuWide__icon"/> </a>
        <a href="#Technologies" className={activeMenu ==='#Technologies' ? 'MenuWide__link --active' : 'MenuWide__link'}  onClick={()=> setActiveMenu('#Technologies')} ><FontAwesomeIcon icon={faRobot} className="MenuWide__icon"/> </a>
        <a href="#Projects" className={activeMenu ==='#Projects' ? 'MenuWide__link --active' : 'MenuWide__link'}  onClick={()=> setActiveMenu('#Projects')} ><FontAwesomeIcon icon={faCode} className="MenuWide__icon"/> </a>
        <a href="#Contact" className={activeMenu ==='#Contact' ? 'MenuWide__link --active' : 'MenuWide__link'}  onClick={()=> setActiveMenu('#Contact')}><FontAwesomeIcon icon={faEnvelope} className="MenuWide__icon"/> </a>
    </nav>
    )
}
