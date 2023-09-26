import React, { useEffect, useState, useContext } from "react";
import { Link } from 'react-router-dom';
import "./main-content.styles.css";
import SideContent from '../../components/side-content/side-content.components';
import { createStructuredSelector} from "reselect"; 
import { connect, useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import { fetchAllShopStart, fetchAllVendorShopStart } from '../../redux/shop/shop.action';
import { selectAllVendorShop, selectAllShop } from '../../redux/shop/shop.selector';
import { fetchAllVendorStart } from '../../redux/vendor/vendor.action';
import { selectAllVendor, selectBestSellingVendor, selectRecentAddedVendor } from '../../redux/vendor/vendor.selector';
import NeutralSelector from "../../redux/neutral-selector";
import { selectAccordionList } from "../../redux/accordion/accordion.selector";
import { accordionStart } from "../../redux/accordion/accordion.action";






const MainContent = ({isCollectionFetching, neutralSelector}) => {
    const recently_added = useSelector(NeutralSelector("Recently Added")) //useSelector(selectRecentAddedVendor)
    // const best_selling = useSelector(NeutralSelector("Best Selling Restaurants")) //useSelector(selectBestSellingVendor)
    const all_restaurant = useSelector(NeutralSelector("All Restaurants"))
    
    // const recently_added = neutralSelector("Recently Added")
    // const best_selling = neutralSelector("Best Selling Restaurants")
    // const all_restaurant = neutralSelector("All Restaurants")
    // console.log(all_shop, "all_shop")
    const [categoriesToDisplay, setCategoriesToDisplay] = useState([
        {name: "All Restaurants", id: 1, data: []},
        {name: "Recently Added Restaurants", id: 2, data: []},
        {name: "Best Selling Restaurants", id: 3, data: []},
        {name: "Most Viewed Restaurants", id: 4, data: []},
        {name: "Most Rated Restaurants", id: 5, data: []},
    ])
    const accordion = useSelector(selectAccordionList)
    const dispatch = useDispatch()
    useEffect(() => {
        const updatedData = categoriesToDisplay.map(i => {
            if (i.name === "All Restaurants"){
                i['data'] = all_restaurant
            }
            // if (i.category_title === "Best Selling Restaurants"){
            //     i['data'] = best_selling
            // }
            if (i.name === "Recently Added Restaurants"){
                i['data'] = recently_added
            }
            return i
        })
        // console.log(updatedData)
        dispatch(accordionStart(updatedData))
        setCategoriesToDisplay(updatedData)
    }, [recently_added, all_restaurant])

    useEffect(() => {
        const allItem = document.querySelectorAll('.header-ul .header-li')
        const home = document.querySelector('.header-ul .header-li:first-child')
        Array.from(allItem).map(i => {
            i.classList.remove('active')
            var footer = i.querySelector('.header-li-footer')
            if (footer){ i.removeChild(footer)}
        })
        home.classList.add('active')
        home.insertAdjacentHTML('beforeend', "<span class='header-li-footer'></span>")

    },[])
    // console.log(all_restaurant)
    // console.log("all_restaurant all_restaurant all_restaurant all_restaurant all_restaurant")
    // console.log(best_selling)
    // console.log("all_restaurant all_restaurant all_restaurant all_restaurant all_restaurant")
    // console.log(recently_added)
    return (
        <div id="main-content">
            <div className="m-con-item">
                {/* <div className="container"> */}
                    
                    {/* <SideContent sideList={accordion} Leftside /> */}
                    <div className="m-con-item__wrap">
                        {/* <div className="m-con-item__row">
                        </div> */}
                        <div id="main-content__main-view" className="m-con-item__row">
                            <div className="main-content__main-view__wrap">
                                {
                                    // <CollectionOverview category={allRestaurant}/>
                                    
                                    categoriesToDisplay.map((obj, idx) => 
                                        obj.data 
                                        ? (
                                            obj.data.length 
                                            ? <CollectionOverview key={idx} category={obj}/>
                                            : null
                                        ) 
                                        : null
                                    )
                                }
                            </div>  
                        </div>
                        {/* <div className="m-con-item__row">
                        </div> */}
                    </div>
                    {/* <SideContent Rightside /> */}
                {/* </div> */}
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    neutralSelector : (obj) => NeutralSelector(obj),
})
export default connect(mapStateToProps, null)(MainContent);
// export default MainContent;







