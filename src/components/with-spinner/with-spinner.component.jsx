import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styled-component.jsx";




const withSpinner = (WrappedComponent) => ({isLoading, ...otherProps}) => {
    // const { searchedUrl, searchedId, searchedInputItem } = useParams()
    // console.log(isLoading)
    
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps}/>
    )
}
export default withSpinner;