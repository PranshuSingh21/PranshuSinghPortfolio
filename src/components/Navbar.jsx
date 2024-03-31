import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import  {links} from '../data' /* iss links waale objcet mein har nav item k liye route syntax likha hua h
ie name index path etc */
import './navbar.css'
const Navbar=()=>{
    const [showMenu,setShowMenu]=useState(false);
    return(
        <nav className="nav">
            <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}>
                <ul className="nav__list">
                    {links.map(({name,icon,path},index)=>{
                        return(
                            <li className="nav__item" key={index}>
                                <NavLink to={path} className={({isActive})=> isActive ? 'nav__link active-nav' : 
                            'nav__link'}
                            onClick={()=>setShowMenu(!showMenu)}
                            >
                                    {icon}
                                    <h3 className="nav__name">{name}</h3>
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className={`${showMenu? 'nav__toggle animate-toggle':'nav__toggle'}`} 
            onClick={()=> setShowMenu(!showMenu)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
}

export default Navbar

/*By inspecting the original website we come to know that at 1015 px width the nav bar changes to navbar that comes
on phones 3 arrow one */

/*NavLink , links jo hote hain router waale ie home pe click karne se home pe jayega etc unko sambhalta h
ie re-route karwata h */
/* Explaining nav section- nav is the section uswed for navbar items in jsx -ie jinme links hote hain to other 
pages etc
ul is for listing all the items of navbar
map se array traverse hota h in js, and links(from data.jsx) se mil rahe hain ye icon, name etc objects
and aage traverse karte hua har item jo mila usse ek li bana diya and display kar diya*/

/* 
NavLink mein className is like
{}sabse bahar waala ye is used to write code inside js ie code inside code
and () this is for function and andar wala {isActive} is for parameter jo mila h function mein
and ye vohi h ki agar ye NavLink active h ie yahi vo wala link jiska page khula hua h ie agar contacts
page khula hua h toh contacts k liye isActive true hoga and aage ka code is if else ki nav link true
h toh className hoga nav__link and active__nav both and false h toh sirf nav__link*/

/* Logic- show-menu(navbar.css) class apply hote hi poora nav bar which contains home about etc invisible ho jata h
and useState mein ek variable bana diya h showMenu wala and usse hota ye h ki agar showMenu true h toh menu dikhna
chahiye ie ye home vgyarha sab kuch , and ye jab state false ho tab nahi dikhenge and in states mein we can toggle by
those 3 lines we have made by span elements vo navbar ko hide ya show karenge, un 3 lines pe onclick laga diya h
ki unpe click karne se showMenu ki state ulti ie reverse ho jayegi from last state ab iss state k changes are applied
in nav__menu class ie usme ye logic lagaya h ki if showMenu state true h toh vo class show-menu waali
bhi hogi iss div ka className and vo apply hote hi menu ie vo 3 lines dikhengi and contents ie home etc 
invisible ho jayenge and jab vo state false hogi tab vo clas hat jayegi and navBar items dikhne lagenge*/ 

/* Ab issi logic se jab koi NavLink pe click karega kisi pe bhi tab firse showMenu state change hogi and 
ab firse vo menu band ho jayegi as koi kisi link pe click karega toh menu band honi chahiye and uss
link ko khul jana chahiye ie uss path ko jispe click kiya h usko khulna chahiye menu band hoke */

