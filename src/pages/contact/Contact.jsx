import React from 'react'

import{
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaInstagramSquare,
    FaLinkedin
} from 'react-icons/fa'

import { FiSend } from 'react-icons/fi'

import './contact.css'

const Contact=()=>{
    return(
        <section className="contact section">
            <h2 className="section__title">
                Gen in <span>Touch</span>
            </h2>
            <div className="contact__container container grid">
                <div className="contact__data">
                    <h3 className="contact__title">Dont't be Shy!</h3>
                    <p className="contact__description">Feel Free to get in touch with me.I am always Open
                    to discussing new projects, creative ideas or opportunities to be a part of your visions
                    </p>
                    <div className="contact__info">
                        <div className="info__item">
                            <FaEnvelopeOpen className='info__icon' />
                            <div>
                                <span className="info__title">Mail Me@ </span>
                                <h4 className="info__desc">pranshusingh2108@gmail.com</h4>
                            </div>
                        </div>

                        <div className="info__item">
                            <FaPhoneSquareAlt className='info__icon' />
                            <div>
                                <span className="info__title">Call Me  </span>
                                <h4 className="info__desc">+918708492595</h4>
                            </div>
                        </div>

                        <div className="contact__socials">
                            <a href="https://instagram.com/_pranshu_2108" className="contact__social-link">
                                <FaInstagramSquare />
                            </a>
                            <a href="https://linkedin.com/in/pranshu-singh-a86455245" 
                            className="contact__social-link">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                    </div>
                <form className='contact__form'>
                    <div className="form__input-group">
                        <div className="form__input-div">
                        <input type="text" 
                        placeholder='Your Name' 
                        className="form__control" />
                        </div>
                        <div className="form__input-div">
                        <input type="email" 
                        placeholder='Your E-mail' 
                        className="form__control" />
                        </div>
                        <div className="form__input-div">
                        <input type="text" 
                        placeholder='Subject' 
                        className="form__control" />
                        </div>
                        <div className="form__input-div">
                            <textarea 
                            placeholder='Type your message here'
                            className="form__control textarea">

                            </textarea>
                        </div>
                    </div>
                    <button className="button">
                            Send Message
                            <span className="button__icon contact__button-icon">
                                <FiSend/>
                            </span>
                        </button>
                </form>
            </div>
        </section>
    )
}

export default Contact