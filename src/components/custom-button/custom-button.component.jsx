import React from "react";
import "./custom-button.styles.css";


const CustomButton = ({children, active, isFetching, buttonType, ...otherProps}) => (
    <button className={`${
        (buttonType === "Button") ? `my-bet-btn2${active ? ' active' : ''}`
        : ''} custom-button`} {...otherProps}>
        { children }
    </button>
)
export default CustomButton;