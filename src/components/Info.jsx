import React from 'react'
import {personalInfo} from '../data' /* Iss file mein personal Info name ka array h jisme saari personal info stored
h as array has objects and which are key value pair of personal info*/
const Info=()=>{
    return(
        <>
        {personalInfo.map(({title,description},index)=>{
            return(
                <li className="info__item" key={index}>
                <span className="info__title">{title}</span>
                <span className="info__description">{description}</span>
            </li>
            )
        })}
        </>
    )
}

export default Info