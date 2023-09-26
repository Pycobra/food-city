import React, { useEffect } from 'react';
import "./collection-overview.styles.css"
import CardMajor from '../card-major/card-major.components';
import CardMinor from '../card-minor/card-minor.components';



const CollectionOverview = ({category, vendor, HandleModal, onCartItem, alert, isCollectionFetching}) => {
    return (
        <div className='collections-overview__box'>
            <div data-index={category.id} className={`collections-overview ${
                    category.name==="All Restaurants" 
                    ? 'col' 
                    : category.name==="African Kitchen" 
                    || category.name==="English" 
                    || category.name==="Oriental" 
                    || category.name==="Related Items"
                    ? 'flex' : 'row'
                }`}>
                {/* {alert ? <Popup>item was added to your cart</Popup> : null}  */}

                <h1 className="header-title">{category.name}</h1>
                <div className='collections-wrap'>
                    <div className='content'>
                        {
                            category.data.map((obj, ind) => 
                                category.name==="All Restaurants" && obj.meals 
                                    ? (
                                        obj.meals.length ? <CardMajor key={ind} item={obj}/> : null
                                    )
                                    : category.name!=="All Restaurants"
                                    ?  <CardMinor key={ind} vendor={vendor} 
                                            HandleModal={HandleModal} category={category} 
                                            onCartItem={onCartItem} item={obj}/>
                                    : null
                            )
                        }
                    </div>
                </div>
            </div>
            
            {
                category.name==="All Restaurants" || category.name==="African Kitchen" 
                ? <div className="advert img__1">
                        <div className='wrap'>
                            <span className="img"></span>
                        </div>
                  </div>
                : category.name==="Recently Added Restaurants"
                    || category.name==="English" 
                ? <div className="advert img__2">
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
            : null
            }
        </div>
    )
}

export default CollectionOverview;
