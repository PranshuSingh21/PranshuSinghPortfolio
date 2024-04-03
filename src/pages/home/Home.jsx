import React from 'react'
import Profile from '../../assets/PranshuTry.jpg'
import {Link} from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import "./home.css"

const Home=()=>{
    const [typeEffect]=useTypewriter({
        words:['Web Developer','Software Engineer','Business Analyst'],
        loop:{},
        typeSpeed:100,
        deleteSpeed:60
    })
    return(
        <section className="home section grid">
            <img src={Profile} alt="" className="home__img" />

            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title">
                        <span>I am Pranshu Singh</span>
                        <br/>
                    <span>{typeEffect}</span></h1>

                    <p className="home__decription">
                        I'm an India based Front-end web designer, Software Engineer and a business analyst
                    ,I am currently pursuing my B.Tech. from Delhi Technological Univerity in Electrical Engineering.
                    </p>
                    <Link to='/about' className="button">
                        More About Me{' '}
                        <span className="button__icon">
                            <FaArrowRight/>
                        </span>
                    </Link>
                </div>
            </div>

            <div className="color__block"></div>
        </section>
    )
}

export default Home