import React, { lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import withSpinner from '../../components/with-spinner/with-spinner.component';
import VendorPage from './vendor-page/vendor-page.component';
import './fetch-collection-page.styles.css'
import { selectIsVendorFetching } from "../../redux/vendor/vendor.selector";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";




const LandingPage = lazy(() => import('./landingpage/landingpage.component.jsx'));
const HomePageWithSpinner = withSpinner(LandingPage)

class FetchCollectionPage extends React.Component {
    render(){ 
        const { isCollectionFetching, isVendorFetching } =  this.props
        return(
            <div id="fetch-collection-page">
                <Routes>           
                    <Route 
                    index
                    element={<HomePageWithSpinner isLoading={isCollectionFetching ? isCollectionFetching : isVendorFetching} />} 
                    />           
                    <Route 
                    path='/restaurant/:vendorId/*'
                    element={
                        <VendorPage 
                            isCollectionFetching={isCollectionFetching}
                            isVendorFetching={isVendorFetching} />
                        }
                    />
                </Routes>
            </div>
        )
}
}
const mapStateToProps = createStructuredSelector ({
    isCollectionFetching: selectIsCollectionFetching,
    isVendorFetching: selectIsVendorFetching,
})
export default connect(mapStateToProps)(FetchCollectionPage);


