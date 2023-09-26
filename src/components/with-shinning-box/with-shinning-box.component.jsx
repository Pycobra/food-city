import React from "react";
import { CardContainer, CardOverlay, CardContent } from "../with-shinning-box/with-shinning-box.styled-component.jsx";
import { ReactComponent as ShoppingCartSvg } from '../../components/asset/shopping-cart3.svg';



const WithShinningBox = (WrappedComponent) => ({isLoading, ...otherProps}) => {
    return isLoading ? (
    <CardOverlay>
        <CardContainer><CardContent><ShoppingCartSvg/></CardContent></CardContainer>
    </CardOverlay>
    ) : (
        <WrappedComponent {...otherProps}/>
    )
}
export default WithShinningBox;

