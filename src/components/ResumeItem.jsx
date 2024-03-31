import React from 'react'
import parse from 'html-react-parser';

const ResumeItem=({icon,year,title,desc})=>{
    return(
        <div className="resume__item">
            <div className="resume__icon">{icon}</div>

            <span className="resume__date">{year}</span>
            <h3 className="resume__subtitle">{parse(title)}</h3>
            <p className="resume__description">{parse(desc)}</p>
        </div>
    )
}

export default ResumeItem

/* Yahan pe resume array from data.jsx bina import kiye uske objects isliye use kar pa rahe hain as this component
is being used in About.jsx and vahan iske saath props bhi pass kiye hain resume k jo ki data.jsx se import kiye hain
and hence mila k ye dono saath mein use ho rahe hain */

/* Html react parser ka ye use h ki jo data.jsx mein resume array h usme objects mein html bhi use hui h and render 
karte hue vo html aise ki aisi website pe show ho rahi h tags are shown but they are not used in their true meaning
so html ko as a paragraph na show karke unke tags ko as their meaning use karne k liye js mein html-react-parser is
used and its meaning lies in it's name*/