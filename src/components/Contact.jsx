import {forwardRef, useRef} from 'react';
import emailjs from 'emailjs-com';
import { useEffect } from 'react';

function Contact(props, ref) {

  const form = useRef();
  const contactRef = useRef();

  useEffect(()=>{
    ref.current.push(contactRef.current);
  },[]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kafhyi7', 'template_d26my84', form.current, 'OivwRa9oFMaPevuK9')
      .then((result) => {
          console.log(result.text);
      }, (error) => { 
          console.log(error.text);
      });
  };

  return (
    <div className='contact' id='Contact' ref={contactRef}>
      <h3 className='contact__header'>Contact with me</h3>
     
      <form ref={form} onSubmit={sendEmail} className="contact__form">
        <input type="text" name="name" placeholder='Your Full Name' className='contact__form__input' />
        <input type="email" name="email" placeholder='Your Email' className='contact__form__input'/>
        <textarea name="message" rows={7} placeholder='Your Message' className='contact__form__input'/>
        <button type='submit' className='contact__form__button'>Send</button>
      </form>
    </div>
  )
}

// export default Contact;
export default forwardRef(Contact);