import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./single-collection.styles.css";
import { useParams } from "react-router-dom";
import { selectShopCategories } from "../../redux/shop/shop.selector";
import NeutralSelector from "../../redux/neutral-selector";
import CollectionOverview from '../collection-overview/collection-overview.component';
import {accordionStart} from '../../redux/accordion/accordion.action'



const SingleCollection = ({ HandleModal }) => {
    const { vendorId, categoryId, itemId } = useParams()
    const {singleItem, relatedItems} = useSelector(NeutralSelector("Single Item", itemId))
    const select_vendor = useSelector(NeutralSelector("Single Vendor", vendorId))
    const select_category = useSelector(selectShopCategories)
    const category = select_category ? select_category.find(i => i.id === parseInt(categoryId)) :  null
    const [item, setItem] = useState(null)
    const [vendor, setVendor] = useState(null)
    const [related, setRelated] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(accordionStart([]))
    }, [dispatch])
    useEffect(() => {
        setVendor(select_vendor)
        setItem(singleItem)
        setRelated(relatedItems)
        
        const Container = document.querySelector("#container")
        Container.classList.add('addLeftPadding')
        Container.classList.remove('addRightPadding')
    }, [relatedItems, singleItem, select_vendor])
    const related_items = {name:"Related Items", id: categoryId, data:related}
    return(
            <section id="single-collection">
                <div className="single-collection__wrap">
                    <div className="single-c__item">
                        <div className="single-c__item-wrap">
                            <div className="single-c__item-row">
                                <img className="main-img" alt={item ? item.title : null} src={item ? item.images : null} loading="lazy"/>
                                <div className="single-c__main-item">
                                    <div className="item">
                                        <div className="price item-list">
                                            <span>Price:</span>
                                            <span>${item ? item.price : null}</span>
                                        </div>
                                        <div className="title item-list">
                                            <span>Title:</span>
                                            <span>{item ? item.title : null}</span>
                                        </div>
                                        <div className="title item-list">
                                            <span>Category:</span>
                                            <span>{category ? category.name : null}</span>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="total item-list">
                                            <span>Description:</span>
                                            <span>{item ? item.description : null}</span>
                                        </div>
                                        <div className="vendor item-list">
                                            <span>Vendor:</span>
                                            <span>{vendor ? vendor.store_name : null} Restaurant</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-c__item-row">
                                <CollectionOverview category={related_items} HandleModal={HandleModal} vendor={vendor} displayPattern='flex'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default SingleCollection;






