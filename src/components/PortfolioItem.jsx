import React ,{useState} from 'react'
import Close from '../assets/close.svg'
import parse from 'html-react-parser'

const PortfolioItem=({img,title,details})=>{
    const [modal,setModal]=useState(false);
    
    const toggleModal=()=>{
        setModal(!modal);
    };

    return(
        <div className='portfolio__item'>
            <img src={img} alt="" className="portfolio__img" />

            <div className="portfolio__hover" onClick={toggleModal}>
                <h3 className="portfolio__title">{title}</h3>
            </div>

            {modal && (
                <div className="portfolio__modal">
                <div className="portfolio__modal-content">
                    <img src={Close} alt="" className="modal__close" onClick={toggleModal}/>
                    <h3 className="modal__title">{title}</h3>
                    <ul className="modal__list grid">
                        {details.map(({icon,title,desc},index)=>{
                            return(
                                <li className="modal__item" key={index}>
                                    <span className="item__icon">{icon}</span>

                                    <div>
                                        <span className="item__title">{title}</span>
                                        <span className="item__details">{parse(desc)}</span>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    <img src={img} alt="" className="modal__img" />
                </div>
            </div>
            )}
        </div>
    )
}

export default PortfolioItem;

/*
Yahan pe basically ho ye raha h ki modal aur setModal jo hain state variables vo hain cross k liye jo aata h
item pe click karne se jo uss project ki description dega vo , vahan pe jo cross aata h uske liye
agar modal true h toh description dikhegi verna nahi , item pe click karne se vo toggle hogi ie true h toh
false aur false h toh true and which means ki desc dikhegi click karne pe aur wapis click karne se
hide ho jayegi and modal& waale syntax ko true hona padega desc dikhne k liye , ie vahan pe condition
laga rakhi h and cross pe click karne se bhi modal state toggle ho jayegi and as cross tabhi dikhega 
jab desc dikhegi ie jab modal = true and cross pe click karte hi modal=false toh desc band ho 
jayegi */