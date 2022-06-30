import React, {useState} from 'react'

import {images} from '../../constants'
import {AppWrap, MotionWrap} from '../../wrapper'
import { client } from '../../client';
import './Footer.scss';


const Footer = () => {

  const [formData, setFormData]= useState({name: '', email:'', message:''});
  const [isFormSubmitted, setIsFormSubmitted]= useState(false);
  const [loading, setLoading] = useState(false);

  const {name, email, message} =formData;

  const handleChangeInput=(e) => {
    const {name, value} = e.target;

    setFormData({...formData, [name]: value});
  }

  const handleSubmit=()=>{
    setLoading(true);
    const contact={
      _type:'contact',
      name:name,
      email: email,
      message: message,
    }

    client.create(contact).then(() =>{
      setLoading(false);
      setIsFormSubmitted(true);
    })
  }

  return (
    <>
      <h2 className='head-text'>Video llamada <span>& habla conmigo</span></h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email'></img>
          <a href='mailto:anto.tepsich@gmail.com' className='p-text'>anto.tepsich@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.linkedin} alt='mobile'></img>
          <a href="https://www.linkedin.com/in/antonio-tepsich-765411228/" target="_blank" className='p-text'>Antonio Tepsich</a>
        </div>
      </div>

      {!isFormSubmitted ?
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input className='p-text' type='text' placeholder='Tu nombre' name='name' value={name} onChange={handleChangeInput}></input>
          </div>
          <div className='app__flex'>
            <input className='p-text' type='email' placeholder='Tu email' name='email' value={email} onChange={handleChangeInput}></input>
          </div>

          <div>
            <textarea className='p-text' placeholder='Dejame tu mensaje' value={message} name='message' onChange={handleChangeInput}></textarea>
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Enviando...':'Enviar consulta'}</button>
        </div>

        :<div>
          <h3 className='head-text'>Gracias por contactarme!</h3>
        </div>
      }
    </>
  )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__Primarybg')