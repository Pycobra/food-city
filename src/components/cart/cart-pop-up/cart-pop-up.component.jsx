import React, { useEffect, useState, useContext } from "react";
import { connect } from 'react-redux';
import './cart-pop-up.style.css'
import CustomButton from "../../custom-button/custom-button.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { addItemStart } from "../../../redux/cart/cart.action";



const CartPopUp = ({currentCartLoad, addItemStart, HandleModal}) => { 
    const {ingredient} = currentCartLoad
    const items = ingredient.split(',').map((i, ind) => ({name: i, active: false, id: ind}))
    const [ingList, setIngList] = useState(items)
    const [showText, setShowText] = useState(true)

    useEffect(() => {
        const findActive = ingList.find((i) => i.active)
        if (!findActive) setShowText(true)
        else setShowText(false)
    })

    const HandleClick = (e, id) => {
        if (!e.target.classList.contains("input")){
            var input = e.currentTarget.querySelector('input')
            if (!input) input = document.querySelector(`.input.ing-${id}`)
            if (input) input.checked = !input.checked 
        }

        const obj = ingList.map((i, ind) => 
            id===ind ? {...i, active: !i.active} : i
        )
        setIngList(obj)
    }
    const HandleCart = (e, id) => {
        const ing = ingList.map(i => i.active 
            ? i.name : null).filter(i => i)
        const instruction = document.querySelector('textarea').value
        addItemStart({
            ...currentCartLoad, ingredient: ing.join(","), 
            special_instuction: instruction
        })

    }

    return (
            <div className="current-cart__card">
                <div className="current-cart__card-wrap">
                    <div className="current-cart__card-col">
                        <div className="c-c__card-col_item first">
                            <div className="items-display">
                                {
                                    ingList.map(({name, active, id}, ind) => 
                                        active 
                                        ? <div key={ind} className="item">
                                            <span className="text">{name}</span>
                                            <FontAwesomeIcon icon={faTimesCircle} onClick={e => HandleClick(e, id)}/>
                                        </div>
                                        : null
                                    )
                                }
                                {
                                    showText
                                    ? <span> Your picked ingredients will appear here </span>
                                    : null
                                }
                            </div>
                        </div>
                        <ul className="c-c__card-col_item">
                            {
                                ingList.map((i, ind) => 
                                    <li key={ind} onClick={e => HandleClick(e, ind)}>
                                        <input className={`input ${'ing-' + i.id}`} type="checkbox" />
                                        <span className="text">{i.name}</span>
                                    </li>
                                )
                            }
                        </ul>
                        <span className="c-c__card-col_item">
                            <textarea placeholder="special instruction"></textarea>
                            <span className="btn-box">
                                <CustomButton buttonType="Button" onClick={e => {
                                    HandleCart(e)
                                    HandleModal(e)
                                }}>
                                {/* <FontAwesomeIcon icon={faCartShopping} /> */}
                                    <span>Place Order</span>
                                </CustomButton>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
    )
}


const mapDispatchToProps = dispatch => ({
    addItemStart: item => dispatch(addItemStart(item)),
})
export default connect(null, mapDispatchToProps)(CartPopUp);







