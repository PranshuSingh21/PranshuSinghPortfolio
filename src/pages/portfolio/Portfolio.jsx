import React from 'react'
import {portfolio} from '../../data' /* yahan jaake objects add or remove karke and change karke 
we can change no of projects and their description etc*/
import PortfolioItem from '../../components/PortfolioItem' 
import './portfolio.css'
const Portfolio=()=>{
    return(
        <section className="portfolio section">
            <h2 className="section__title">My <span>Projects</span></h2>

            <div className="portfolio__container conatiner grid">
                {portfolio.map((item)=>{
                    return <PortfolioItem key={item.id} {...item}/>
                })}
            </div>
        </section>
    )
}

export default Portfolio

/* Baaki jagah pe object ki properties sidhi likhi thi function k callback mein yahan nahi kiya aisa as
yahan bhot saari properties hain toh key access kar lenge by dot convention and baaki properties spread kar denge*/