import {useState} from 'react';
import {MdOutlineEmail} from 'react-icons/md';
import {ImPhone} from 'react-icons/im';
import {BsMessenger} from 'react-icons/bs';

function Footer() {

    const [clicked, setClicked] = useState(false);

    // const handleCopy = (e)=>{
    //     navigator.clipboard.writeText(e.target.innerText);
    //     console.log(e.target.innerText)
    //     copied();
    // }

    const handleCopy = (text)=>{
        console.log(text);
    }

    const copied = ()=>{
        setClicked(true);
        setTimeout(()=>{
            setClicked(false);
            console.log(clicked);
        },1000);
    }

  return (
    <div className='footer'>
        <div className="footer__options">
            <div className='option'>
                <a href="mailto:mszuleta98@gmail.com" onClick={()=>handleCopy('mszuleta98@gmail.com')}><MdOutlineEmail className='option__icon'/></a>
                <h5 className='option__tooltip --mail' data-tooltip="Copy e-mail" onClick={()=>handleCopy('mszuleta98@gmail.com')}>mszuleta98@gmail.com</h5>

            </div>
            <div className='option'> 
                <ImPhone className='option__icon' onClick={()=>handleCopy('697 425 422')}/> 
                <h5 className='option__tooltip --number' data-tooltip="Copy number" onClick={()=>handleCopy('697 425 422')}>697 425 422</h5>
            </div>
            <div className='option'>
                <a href="https://m.me/michal.szuleta" target="_blank" rel='noopener noreferrer' className='option__tooltip --messenger' ><BsMessenger className='option__icon'/></a>
                <h5 className='option__tooltip --messenger' data-tooltip="Go to messenger" href="https://m.me/michal.szuleta" target="_blank" rel='noopener noreferrer'>Messenger</h5>
            </div>
        </div>
    </div>
  )
} 

export default Footer