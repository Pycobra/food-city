import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./accordion.styles.css";



const Accordion = ({category_title, id, index}) => {
    
    const handleHover = (e, str, id) => {
        const lastElem = document.querySelector('#side-content-left .s-content__item:nth-child(2) .wrap .s-content__item-row:last-child')
        const elem = e.currentTarget

        const allItem = document.querySelectorAll('#side-content-left .s-content__item:nth-child(2) .wrap .s-content__item-row')
        Array.from(allItem).map(i => {
            i.classList.remove('active')
            if (i !== lastElem){
                i.nextElementSibling.style.borderTop = "1px solid var(--brown6)"
            }
        })
        if (str === 'enter'){
            elem.classList.add('active')
            if (elem !== lastElem){
                elem.nextElementSibling.style.borderTop = "none"
            }
        } 
    }
    const handleClick = (id) => {
        const collectionOverview = document.querySelector(`.collections-overview[data-index="${id}"]`)
        window.scrollTo(0, collectionOverview.offsetTop)
    }
    return (
            <Link key={index} className="s-content__item-row" 
                onClick={e => handleClick(id)}
                onMouseEnter={e => handleHover(e, 'enter', id)}> 
                <p className="text">{category_title}</p>
            </Link>
    )
}
export default Accordion;

