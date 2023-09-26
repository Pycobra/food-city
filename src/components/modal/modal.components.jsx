import React from "react";
import "./modal.styles.css";



const Modal = ({children, HandleModal}) => {
    return(
        <div id="myModal" className="modal" onClick={e => HandleModal(e)}>
            <div className="modal-content" style={{position:"relative"}}>
                {children}
            </div>

        </div>  
    )
}
export default Modal;
