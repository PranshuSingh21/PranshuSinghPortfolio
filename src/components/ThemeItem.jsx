import React from 'react'

const ThemeItem =({color,img,changeColor}) =>{
    return (
        <img src={img} alt="" className="theme__img" onClick={()=>{
            changeColor(color)
        }} />
    )
}

/* Yahan pe ho ye raha h ki jo function declare hua h Themes.jsx mein usme value pass ki h color ki 
which will change the color of website ye themeitem bas color show karega jo pass kiya h themes.jsx se
and vahan pe aaya h data.jsx se ie jo setting mein individual colours dikh rahe hain ye vo dikhaega and ye
ek hi colour dikhaega , themes.jsx mein ispe loop laga k map function se saare colours show kiye hain settings 
menu mein*/

export default ThemeItem