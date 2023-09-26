import React from "react";
import "./vendor-page.styles.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import VendorCollection from "../../../components/vendor-collection/vendor-collection.components"
import SingleCollection from "../../../components/single-collection/single-collection.components"
import { Routes, Route } from "react-router-dom";
import withSpinner from "../../../components/with-spinner/with-spinner.component";
import { selectAccordionList } from "../../../redux/accordion/accordion.selector";
import Modal from "../../../components/modal/modal.components";
import CartPopUp from "../../../components/cart/cart-pop-up/cart-pop-up.component";
import { selectClickedCart } from "../../../redux/cart/cart.selector";






const VendorCollectionWithSpinner = withSpinner(VendorCollection)
const SingleCollectionWithSpinner = withSpinner(SingleCollection)

class VendorPage extends React.Component {
    constructor () {
        super()
        this.state = {modalDisplay: null}
    }
    componentDidMount(){
        window.scrollTo(0, 0)
    }


    HandleModal = (e, str) => {
        if (e.target.className==="modal" || str==="display"){
            const { modalDisplay } =  this.state
            this.setState({modalDisplay: !modalDisplay})
        }
    }
    render(){ 
        const { isCollectionFetching, isVendorFetching, currentCartLoad } =  this.props
        const { modalDisplay } =  this.state
        return (
            <section id="vendor-page"> 
                {
                    modalDisplay
                    ? <Modal HandleModal={this.HandleModal}> <CartPopUp currentCartLoad={currentCartLoad}/> </Modal>
                    : null
                }

                <Routes>              
                    <Route 
                    index
                    element={
                        <VendorCollectionWithSpinner 
                            isLoading={isCollectionFetching ? isCollectionFetching : isVendorFetching} 
                            HandleModal={this.HandleModal}/>
                        } 
                    />  
                    <Route 
                    path="/:categoryId/:itemId/"
                    // path=":categoryUrl/:categoryId/:collectionUrl/:collectionId" 
                    element={
                        <SingleCollectionWithSpinner 
                            isLoading={isCollectionFetching ? isCollectionFetching : isVendorFetching} 
                            HandleModal={this.HandleModal}/>
                        } 
                    />
                </Routes>
            </section>)
    }
}
const mapStateToProps = createStructuredSelector ({
    accordionList: selectAccordionList,
    currentCartLoad: selectClickedCart
})
export default connect(mapStateToProps)(VendorPage);

