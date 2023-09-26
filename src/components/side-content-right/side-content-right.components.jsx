import React from "react";
import "./side-content-right.styles.css";
import ImageSlide from "../image-slideshow/image-slideshow.components";




const SideContentRight = () => {
    // useEffect(() => {
    //     if (){
    //         document.querySelector('')
    //     }
    // })
    return (
        <div id="side-content-right" className='s-content__wrap'>
            <div className="s-content__item">
                <div className='wrap'>
                    <span className="img"></span>
                </div>
            </div>
            <div className="s-content__item">
                <div className='wrap'>
                    <span className="img"></span>
                </div>
                <div className='wrap'>
                    <span className="img"></span>
                </div>
                <div className='wrap'>
                    <span className="img"></span>
                </div>
                <div className='wrap'>
                    <span className="img"></span>
                </div>
            </div>
            <div className="s-content__item">
                <div className='wrap'>
                    <ImageSlide side='rightSide'/>
                </div>
            </div>
        </div>
    )
}

export default SideContentRight;


































