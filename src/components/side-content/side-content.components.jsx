import React, { useEffect }  from "react";
import SideContentLeft from "../side-content-left/side-content-left.components";
import SideContentRight from "../side-content-right/side-content-right.components";
import { useLocation } from "react-router-dom";
import { SideContentStyle } from "./side-content.styled-components";






const SideContent = ({sideList, Leftside, Rightside}) => {
    const MainContent = document.getElementsByTagName('main')
    const {pathname} = useLocation()

    useEffect(() => {
        window.onscroll = (event) => {
            const mainItemHeight = document.querySelector('main').clientHeight
            var scrollBarlocation= window.scrollY;
            if (scrollBarlocation === mainItemHeight) {
                console.log("elements are the same height now")
            }
        }
      })


    
    return (
        <SideContentStyle url={pathname} place={Leftside ? 'Leftside' : 'Rightside'} data={MainContent} sidePosition={Leftside ? 'Leftside' : 'Rightside'}>
            <div className="side-content-wrap">
                {
                Leftside 
                ? 
                <SideContentLeft sideList={sideList}/>
                : 
                <SideContentRight />
                }
            </div>
        </SideContentStyle>
    )
}

 export default SideContent;



































 