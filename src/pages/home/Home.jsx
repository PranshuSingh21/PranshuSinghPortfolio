import React from 'react'
import Profile from '../../assets/Pranshu.png'
import {Link} from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import "./home.css"

const Home=()=>{
    return(
        <section className="home section grid">
            <img src={Profile} alt="" className="home__img" />

            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title">
                        <span>I am Pranshu Singh</span>
                        <br/>
                    Web Designer</h1>

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