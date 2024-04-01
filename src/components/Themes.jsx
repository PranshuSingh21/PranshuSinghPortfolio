import React, {useState,useEffect} from 'react'
import { themes } from '../data'
import ThemeItem from './ThemeItem'
import { FaCog } from 'react-icons/fa'
import {BsSun,BsMoon} from 'react-icons/bs'
import './themes.css'

const getStorageColor =()=>{
    let color='hsl(225, 73%, 57%)';
    if(localStorage.getItem('color')){
        color=localStorage.getItem('color');
    }
    return color;
}

const getStorageTheme =()=>{
    let theme='light-theme';
    if(localStorage.getItem('theme')){
        theme=localStorage.getItem('theme');
    }
    return theme;
}


const Themes =()=>{
    const [showSwitcher,setShowSwitcher]=useState(false);
    const [color,setColor]=useState(getStorageColor()); /*Default color local storage se le lega jo last time user 
    ne use kiya tha  */ 
    const [theme,setTheme]=useState(getStorageTheme());

    const changeColor= (color) =>{
        setColor(color);
    };

    const toggleTheme=()=>{
        if(theme==='light-theme'){
            setTheme('dark-theme');
        }
        else{
            setTheme('light-theme');
        }
    }

    useEffect(()=>{
        document.documentElement.style.setProperty('--first-color',color);
        localStorage.setItem('color',color); 
    },[color])
    /* Yahan pe ye hua h ki useEffect(har time jo state update karta h live) usse --first-color name ka 
    jo css variable h uski value color set kardi h aur ye jo upar javaScript likhi h document.documentElement waali
    iska matlab ye h ki ye document mein se style name ka element select karega which is obviously for CSS and
    uski propert --first-color jo ki ek variable h uski value set kar dega color*/

    useEffect(()=>{
        document.documentElement.className=theme;
        localStorage.setItem('theme',theme);  
    },[theme])

    return(
        <div>
            <div className={`${showSwitcher ? 'show-switcher': ''} style__switcher`}>
                <div className="style__switcher-toggler" onClick={()=> setShowSwitcher(!showSwitcher)}>
                    <FaCog/>
                </div>
                <div className="theme__toggler" onClick={toggleTheme}>
                    {theme==='light-theme' ? <BsMoon/> : <BsSun/> }
                </div>
                <h3 className="style__switcher-title">Style Switcher</h3>
                <div className="style__switcher-items">
                    {themes.map((theme,index)=>{
                        return <ThemeItem key={index} {...theme} changeColor={changeColor} />
                    })}
                </div>
                <div className="style__switcher-close" onClick={()=> setShowSwitcher(!showSwitcher)}>
                    &times;
                </div>
            </div>
        </div>
    )
}

export default Themes