import React from "react";
import "./modal.styles.css";
// import { selectIsFetching } from "../../../redux/user/user.selector";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";



const Modal = ({children, HandleModal}) => {
    // const is_fetching = useSelector(selectIsFetching)
    // useEffect(() => {
    //     is_fetching
    // , [is_fetching]})
    return(
        <div id="myModal" className="modal" onClick={e => HandleModal(e)}>
            <div className="modal-content" style={{position:"relative"}}>
                {children}
            </div>

        </div>  
    )
}
export default Modal;
