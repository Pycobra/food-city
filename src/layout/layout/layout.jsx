import React, { useEffect, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from '../../components/header/header.component.jsx';
import './layout.style.css'
import Footer from '../../components/footer/footer.component.jsx';
import { createStructuredSelector} from "reselect"; 
import { connect, useDispatch, useSelector } from 'react-redux';
import FetchCollectionPage from '../../pages/fetch-collection-page/fetch-collection-page.jsx';
import ErrorBoundary from '../error-boundary/error-boundary.jsx';
import CheckoutPage from '../../pages/checkout-page/checkout-page.jsx';
import AuthPage from '../../pages/auth-page/auth-page.jsx';
import { 
  fetchAllShopStart, fetchAllVendorShopStart, fetchShopCategoriesStart 
} from '../../redux/shop/shop.action';
import { fetchIsUserAuthenticated } from '../../redux/user/user.action.js';
import { selectAlertMsg } from '../../redux/user/user.selector.js';
import AlertPopup from '../../components/alert-popup/alert-popup.component.jsx';
import { fetchAllVendorStart, fetchBestSellingVendorStart, fetchRecentAddedVendorStart } from '../../redux/vendor/vendor.action.js';
import CartIcon from '../../components/cart/cart-icon/cart-icon.component.jsx';
import SideContent from '../../components/side-content/side-content.components.jsx';
import { selectAccordionList } from '../../redux/accordion/accordion.selector.js';
import Fallback from '../fallback/fallback.jsx';





// const scroll = window.requestAnimationFrame || function(callback){
//   window.setTimeout(callback,
//   1000/60)
// };

// const elementToShow = document.querySelectorAll('.show-on-scroll')
// function loop(){
//   elementToShow.forEach(function(element){
//       if (isElementInViewport(element)){
//           element.classList.add('is-visible')
//       } else {
//           element.classList.remove('is-visible')
//       }
//   });
//   scroll(loop);
// }

// function isElementInViewport(el){
//   if (typeof jQuery === "function" && el instanceof jQuery){
//       el = el[0];
//   }
//   var rect= el.getBoundingClientRect();
//   return (
//       (rect.top <= 0 && rect.bottom >= 0)
//       ||
//       (rect.bottom >= (window.innerHeight || document
//           .documentElement.clientHeight) && 
//       rect.top <= (window.innerHeight || document
//           .documentElement.clientHeight))
//       ||
//       (rect.top >= 0 && 
//           rect.bottom <= (window.innerHeight || document
//           .documentElement.clientHeight))
//   )
// }


const Layout = ({accordionList}) => {
  const dispatch = useDispatch()
  const alertMsg = useSelector(selectAlertMsg)
  
  useEffect(() => {
    
      dispatch(fetchIsUserAuthenticated())

      dispatch(fetchAllShopStart())
      dispatch(fetchAllVendorShopStart())
      dispatch(fetchShopCategoriesStart())

      dispatch(fetchAllVendorStart())
      dispatch(fetchRecentAddedVendorStart())
      dispatch(fetchBestSellingVendorStart())
      
  }, [dispatch])
  return (
    <div className='layout'>
        <div id='wrapper' className='wrapper'>
          <Header/>
          <div id='main-layout'>
            <main>
              <div id='container' className='container'>

                <div className="fixed-cart">
                    <CartIcon place='mobile' />
                </div>

                <ErrorBoundary>
                  {/* <Suspense fallback={<div>Page Is Currently Loading...</div>}> */}
                  <Suspense fallback={              
                    <Fallback url={`../../Media/gifs/Fidget-spinner.gif`} type="gif" text="Page Is Currently Loading..."/>
                    }>
                    <SideContent sideList={accordionList} Leftside />
                    {/* <div></div> */}
                    <div className='main-wrap'>
                        <Routes>
                            <Route path='/*' element={<FetchCollectionPage/>} />      
                            <Route path='/checkout/*' element={<CheckoutPage/>} />  
                            <Route path='/auth/*' element={<AuthPage />} />  
                        </Routes>
                    </div>
                    {/* <div></div> */}
                    <SideContent Rightside />  
                  </Suspense>
                </ErrorBoundary>
                {
                    alertMsg ? <AlertPopup msg={alertMsg} /> : null
                }
              </div>
            </main>
            <Footer />
          </div>
        </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector ({
    accordionList: selectAccordionList
})
export default connect(mapStateToProps)(Layout);