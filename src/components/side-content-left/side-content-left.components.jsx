import React from "react";
import "./side-content-left.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArchive } from "@fortawesome/free-solid-svg-icons";
import Accordion from "../accordion/accordion.components";









const SideContentLeft = ({sideList}) => {

    return (
        <div id="side-content-left" className='s-content__wrap'>
            <div className="s-content__item">
                    <div className='wrap'>
                        <div className="s-content__item-row">
                            <img alt="img-place" src={require("../../Media/images/site_images/chef.jpg")} loading="lazy"/>
                        </div>
                    </div>
            </div>
            <div className="s-content__item">
                <div className='wrap'>
                    {
                        sideList
                        ? sideList.map((obj, ind) => 
                            obj.data
                            ? (
                                obj.data.length
                                ? <Accordion key={`${obj.name + obj.id}`} category_title={obj.name} id={obj.id} index={ind} />
                                : null
                            )
                            : null
                        )
                        : null
                    }
                </div>
            </div>
            <div className="s-content__item">
                <div className="wrap">
                    <div className="s-content__item-row">
                        <div className="site-intro">
                            <div className="site-intro__row">
                                <h1 className="text1" style={{fontWeight:'bold'}}>Excite</h1>
                                <h1 className="text2">Your&nbsp;taste&nbsp;bud</h1>
                                <h2 className="text3">WITH&nbsp;TASTY&nbsp;9JA DISHES</h2>
                            </div>
                            <div className="site-intro__row">
                                <div className="site-intro__row-item">
                                    <span className="text">Remarks</span>
                                    <FontAwesomeIcon icon={faArchive}/>
                                </div>
                                <div className="site-intro__row-item">
                                    <span className="text">Good Food</span>
                                    <span className="icon"><FontAwesomeIcon icon={faCheck}/></span>
                                </div>
                                <div className="site-intro__row-item">
                                    <span className="text">Norishing</span>
                                    <span className="icon"><FontAwesomeIcon icon={faCheck}/></span>
                                </div>
                                <div className="site-intro__row-item">
                                    <span className="text">Delicious</span>
                                    <span className="icon"><FontAwesomeIcon icon={faCheck}/></span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
            
    )
}

export default SideContentLeft;









