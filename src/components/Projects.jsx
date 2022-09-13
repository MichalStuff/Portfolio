import React, { forwardRef, useEffect, useRef, useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronCircleDown, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import data from '../assets/assets';
import Project from './Project';

function Projects(prop,ref) {
  // const smallData = 
  const itemsRef = useRef([]);
  const projectRef = useRef();
  const [ visible, setVisible] =useState(true);
  const [ showMoreProj , setShowMoreProj ] = useState(false);
  const [ projectsArray , setProjectsArray ] = useState(data.slice(0,5));

  // let projectsArray = data.slice(0,5);

  // const handleMoreProjects = ()=>{
  //   setShowMoreProj(prev =>!prev);
  // }
  const handleMoreProjects = ()=>{
    console.log(projectsArray.length === 5)
    projectsArray.length !== 5 ? setProjectsArray(data.slice(0,5)) : setProjectsArray(data);
    setShowMoreProj(prev => !prev);
    console.log(projectsArray);
  }

  const handleUpdate = (visible)=>{
    setVisible(visible);
  }
  


  // useEffect(()=>{
  //   showMoreProj ? projectsArray = data.splice(0,5) : projectsArray = data;
  // },[showMoreProj]);


  useEffect(() => {
    console.log(projectsArray);
    const handleScroll =()=> {
      itemsRef.current.forEach((item,id)=>{
            if(item.offsetTop !== null){
              if(item.offsetTop - (window.scrollY + (0.5 * window.innerHeight))<= 0 && item.offsetTop!==null){
                  if(item.className.includes('--showProjects')){

                  }else{
                    item.className = `${item.className} --showProjects`;
                    handleUpdate(true);
                  }
              }else if(item.offsetTop - (window.scrollY + window.innerHeight) >0 && item.offsetTop!==null){
                  item.className = "Projects__project";
                  handleUpdate(false);
          }
          }
        });
    };
    window.removeEventListener('scroll',handleScroll);
    window.addEventListener('scroll', handleScroll);

    //REF for MENU
    ref.current.push(projectRef.current);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [projectsArray]);

  return (
    <article className='Projects' id='Projects' ref={projectRef}>
      <h3 className='Projects__header'>Projects</h3>
      {projectsArray.map(item =>{ return(
        <Project item={item} key={item.id} visible={visible} ref={itemsRef}/>
        )})}
      <a className='Projects__button' onClick={handleMoreProjects}><FontAwesomeIcon icon={showMoreProj ? faChevronCircleUp : faChevronCircleDown} className='Projects__button__icon'/></a>
      {console.log("dupa")}
    </article>
  )
}

export default forwardRef(Projects);