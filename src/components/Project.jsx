import React, {useState, forwardRef, useEffect} from 'react';
import { useRef } from 'react';

function Project({item},ref) {
    const itemRef = useRef();
    const [clicked, setClicked] = useState(false);

    useEffect(()=>{
        ref.current.push(itemRef.current);
    },[])

    const handleShowDescription = ()=>{
        clicked? setClicked(false) : setClicked(true);
    }   
    
  return (
        <div className='Projects__project' id={item.id} key={item.id} ref={itemRef}>
        <h3 className='Projects__project__title'>{item.name}</h3>
        <div style={{ backgroundImage : `url(${item.image})` }} className='Projects__project__image' onClick={handleShowDescription}>
            <div className={`Projects__project__description ${clicked ? '' : 'Projects--hide'}`}>
                <p className={`Projects__project__description__text ${clicked ? '' : 'Projects--hide'}`}>{clicked ? item.description : null}</p>  
            </div>
        </div>  
        <div className='Projects__project__buttons'>
            <a href={item.url} target="_blank" rel='noopener noreferrer' className='Projects__project__buttons__button Projects__project__live'>Live</a>
            <a href={item.github} target="_blank" rel='noopener noreferrer' className='Projects__project__buttons__button Projects__project__github'>GitHub</a>
        </div>
    </div>
    )
}
export default forwardRef(Project);