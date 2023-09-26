import React from "react";
import "./alert-popup.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";




const AlertPopup = ({msg}) => 
    <div className="alert-popup">
        <div><FontAwesomeIcon icon={faInfoCircle}/></div>
        <div><span>{msg.content}</span></div>
    </div>

export default AlertPopup;