import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./vendor-collection.styles.css";
import { useParams } from "react-router-dom";
import CollectionOverview from '../collection-overview/collection-overview.component';
import NeutralSelector from "../../redux/neutral-selector";
import {accordionStart} from '../../redux/accordion/accordion.action'





const VendorCollection = ({ alert, HandleModal }) => {
    const { vendorId } = useParams()
    const select_vendor = useSelector(NeutralSelector("Single Vendor", vendorId))
    
    const dispatch = useDispatch()
    const [vendor, setVendor] = useState(null)
    useEffect(() => {
        setVendor(select_vendor)
        dispatch(accordionStart(select_vendor ? select_vendor.meals : []))
        
        const Container = document.querySelector("#container")
        Container.classList.add('addLeftPadding')
        Container.classList.remove('addRightPadding')
    }, [dispatch, select_vendor])


    console.log(vendor, 'kkkk')
    return(
        <section id="vendor-collection">
            <div className="vendor-collection__item">
                <div className="vendor-c__item-wrap">
                    {/* <div className="vendor-c__item-wrap__col">
                    </div> */}
                    <div id="vendor-c__item-wrap__main" className="vendor-c__item-wrap__col">
                        <div className="img">
                            <h1>{vendor ? vendor.store_name : null} Restaurant</h1>
                            <img alt={vendor ? vendor.store_name : ''} src={require(`../../Media/images/site_images/google-map1.PNG`)}/>
                            <h2>{vendor ? vendor.location : null}</h2>
                        </div> 
                        {
                            vendor
                            ? vendor.meals.map((obj, idx) =>
                                obj.data
                                ? (
                                    obj.data.length 
                                    ? <CollectionOverview key={idx} category={obj} 
                                        vendor={vendor} HandleModal={HandleModal}/>
                                    : null 
                                )
                                : null
                            )
                            : null
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VendorCollection;






