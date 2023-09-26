import React, { useEffect } from "react";
import "./card.styles.css";
import FormInput from "../form-input/form-input.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faCheck, faMotorcycle } from "@fortawesome/free-solid-svg-icons";






const CardDeliveryAddress = ({value, naming, HandleChange}) => {
    return(
        <div className={`card ${naming==="deliveryOption" || naming==="addressOption" ? 'removable-card' : null}`} 
            data-index="{{mydeliveryopt.id}}">
            <div className="card-wrap">
            {
            naming==="deliveryOption" || naming==="deliveryOption2"
            ?
                <div className="place1">
                    <div className="icon">
                        <FontAwesomeIcon icon={faMotorcycle}/> 
                    </div>
                        
                    <div className="card-body">
                        <p className="card-text">{value.delivery_name}</p>
                        <p className="card-text"><span>Your order should be delivered within</span> <span>{value.delivery_timeframe}</span></p>
                        <p className="card-text"><span>delivery region</span> <span>{value.delivery_region}</span></p>
                        <p className="card-text"><span>delivery window</span> <span>{value.delivery_window}</span></p>
                        <p className="card-text"><span>delivery price</span> <span>${value.delivery_price}</span></p>
                    </div>
                </div>
            : 
                <div className="card-body">
                    <p className="card-text"><span>Fullname: </span> <span>{value.full_name}</span></p>
                    <p className="card-text"><span>Phone: </span> <span>{value.phone}</span></p>
                    <p className="card-text"><span>Email:</span> <span className="email-text">{value.email}</span></p>
                    <p className="card-text"><span>Post code:</span> <span>{value.postal_code}</span></p>
                    <p className="card-text"><span>Town/city:</span> <span>{value.city}</span></p>
                    <p className="card-text"><span>Address line:</span> <span>{value.address_line}</span></p>
                </div>
            }
                <div className="icon2">
                    <FontAwesomeIcon icon={faCheck} style={{color:'var(--green)'}}/>  
                    <FormInput 
                        inputtype="roundbordertype"
                        name={`${naming}`} 
                        type='radio' 
                        value={value}
                        onChange={(e) => HandleChange(e, value.id)}
                        required  /> 
                </div>
            </div>

            {
                naming==="addressOption" || naming==="addressOption2"
                ?
                <span className="icon-wrap">
                    <span className="icon"><FontAwesomeIcon icon={faTrash}/></span>
                    <span className="icon"><FontAwesomeIcon icon={faPen} /></span>
                </span>
                : null
            }
        </div>
                  
                            
    )
}
export default CardDeliveryAddress;

