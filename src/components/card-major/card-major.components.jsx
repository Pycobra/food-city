import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import "./card-major.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"





const CardMajor = ({item}) => {
    const [currentItem, setCurrentFoodImg] = useState(item.meals[0])
    
    let navigate = useNavigate()
    let location = useLocation()
    const handleClick = (e, vendorId) => {
        const elem = e.target
        if (elem.className === 'card-major-image'){
            item.meals.map((i) => {
                if (parseInt(elem.dataset.index) === i.id) {
                    setCurrentFoodImg(i) 
                    const active = elem.closest('.block-bottom').querySelector('div.active')
                    active.classList.remove('active')
                    elem.parentElement.classList.add('active')
                }
                return i
            })
        } else {
            navigate(`${location.pathname}restaurant/${vendorId}`)
        }
    }
    return (
        <div className="card-major" id={item.id}  onClick={e => handleClick(e, item.id)}>
            <div className="block block1">
                <div className="content">
                    <div className="block-top">
                        <img src={item.vendor_image}/>
                        <p>{item.store_name}</p>
                    </div> 
                    <div className="block-bottom">
                        {
                            item.meals.map(({images, id}, idx) => 
                                <div className={`${idx===0 ? 'active' : ''}`} key={idx}>
                                    <span><FontAwesomeIcon icon={faCaretDown}/></span>
                                    <img data-index={id} className='card-major-image' src={images}/>
                                </div>
                            )
                        }
                    </div>   
                </div>            
            </div>
            <div className="block block2">
                <div className="content">
                    <div className="block-top">
                        <span className="amount">{currentItem.price}</span>
                        <span className="img">
                                <img src={currentItem.images}/>
                        </span>
                    </div>
                    <div className="block-bottom">
                        <p>{currentItem.title}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardMajor;







