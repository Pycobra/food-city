import React from 'react';
import "./landingpage.styles.css"
import MainContent from '../../../components/main-content/main-content.components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCutlery } from "@fortawesome/free-solid-svg-icons"






class Homepage extends React.Component {

    componentDidMount(){
        window.scrollTo(0, 0)
        
        const Container = document.querySelector("#container")
        Container.classList.add('addLeftPadding')
        Container.classList.add('addRightPadding')
    }

    render(){ 
        return (
            <div className='main-page'>
                <div className="main-page__wrap">
                    <div style={{zIndex:'1'}} className="main-page__main-content">
                        <div id="homepage">
                            <div className="inner-block">
                                <div className="site-intro-wrap">
                                    <div className="site-intro">
                                        <h1 className="place1" style={{fontWeight:'bold'}}>Excite</h1>
                                        <h1 className="place2">Your&nbsp;taste&nbsp;bud</h1>
                                        <h3 className="place3">WITH&nbsp;TASTY&nbsp;9JA DISHES <FontAwesomeIcon icon={faCutlery} /></h3>
                                        <h4 className="place4"><span className="">Nourishing</span><FontAwesomeIcon icon={faCutlery} /></h4>
                                        <h4 className="place4"><span className="">Exciting</span><FontAwesomeIcon icon={faCutlery} /></h4>
                                        <h4 className="place4"><span className="">Well Prepared</span><FontAwesomeIcon icon={faCutlery} /></h4>
                                        <h4 className="place4"><span className="">Finger-licking</span><FontAwesomeIcon icon={faCutlery} /></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <MainContent />
                    </div>
                    <div className="fixed-img">
                        <img alt='chef-image' src={require("../../../Media/images/site_images/chef.jpg")}/>
                    </div>
                </div>
            </div>
        )
    }
 };
 export default Homepage;










 
