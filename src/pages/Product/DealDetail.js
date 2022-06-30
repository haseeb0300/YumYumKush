import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { Modal } from 'react-bootstrap';

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Header from '../../component/Header'

import product1 from '../../assets/images/dashboard/section4/1.png'
import product2 from '../../assets/images/dashboard/section4/2.png'
import product3 from '../../assets/images/dashboard/section4/3.png'
import product4 from '../../assets/images/dashboard/section4/4.png'
import product5 from '../../assets/images/dashboard/section4/5.png'
import product6 from '../../assets/images/dashboard/section4/6.png'

import CartItem1 from '../../assets/images/sideCart/1.png'

import section1img from '../../assets/images/dashboard/section1/1.png'

import { v4 } from 'uuid';

import Footer from '../../component/Footer'
import { getInventory } from '../../store/actions/productAction';
import { addToCart, removeFromCart } from '../../store/actions/cartAction';


import sycrup from '../../assets/images/dashboard/section3/sycrup.svg'
class DealDetail extends Component {

   constructor(props) {
      super(props);
      this.state = {
         errors: {},
         serverError: {},
         dealList: [],
         DealId: "",
        
         total: 0,
         categoryList: [],
         checkedBoxes: [],
         isLoading: false,
         showModal: false,
         productList: [],


      };
   }

   componentDidMount() {
      this.props.getInventory().then((res) => {
         console.log(res)
         this.setState({
            productList: res.content,
         }
         )
      }).catch((err) => {
         console.log(err)

      })
   }
   componentWillMount() {

      if (this.props != null && this.props.location.state != null && this.props.location.state.item) {
         console.log(this.props.location.state.item)

         const {  dealList } = this.props?.location?.state?.item
         this.setState({
           
            dealList: this.props?.location?.state?.item
         }, () => { console.log(this.state.dealList) })
      }
   }
   renderInventory = () => {
      if (this.state.productList && this.state.productList.length < 1) {

         return () =>

            <p class="text-center" >   No Data To Display</p>



      }
      return this.state.productList.map((item, i) =>
         <>
            <div className='col-md-4'>
               <div className='relatedProductCard'>
                  <img className='RelatedProductImg w-100' src={item.InventryImages[0]?.imageUrl} />
                  <p className='RelatedProductTitle'>{item.title}</p>
               </div>
            </div>


         </>
      )



   }
   handleClose = () => {
      this.setState({ showModal: false })
   }

   handleTotal = () => {
      var tempTotal = 0
      for (var i = 0; i < this.state.checkedBoxes.length; i++) {
         tempTotal = tempTotal + parseInt(this.state.checkedBoxes[i].price)
      }
      this.setState({ total: tempTotal })
   }
   handleCheckbox = (e, s) => {
    var tempCheckedBoxes = [...this.state.checkedBoxes];
    if (e.target.checked) {
       tempCheckedBoxes.push(s)
    } else {
       const index = tempCheckedBoxes.findIndex((ch) => ch.InventryParamId === s.InventryParamId);
       tempCheckedBoxes.splice(index, 1);
    }
    this.setState({
       checkedBoxes: tempCheckedBoxes
    }, () => this.handleTotal())
 }
 
   onClickCart = (deal) => {
      console.log(deal)
      console.log(this.props.cart)

      let items = this.props.cart.find(item => {
         console.log(item)
         return item.DealId === deal.DealId
      })
      if (!items)
         this.props.addToCart(deal)
      else {
      }
      this.setState({ showModal: true })
   }
   handleCloseModal = () => {
    this.setState({showModal: false})
 }

 handleClose = () => {
   this.setState({ showModal: false })
}
handleCloseModal = () => {
   this.setState({ showModal: false })
}

toogleModal = () => {
   this.setState({ showModal: true })
}
   render() {
      // const { t, i18n } = this.props
      const { t, i18n, location, user } = this.props
      const { isLoading } = this.state;
      if (isLoading) {
         return (
            <div className="loader-large"></div>
         )
      }
      
      return (
         <>
          <Header
                        showModal={this.state.showModal}
                        history={this.props.history}
                        toogleModal={this.toogleModal}
                        handleClose={this.handleClose}


                    />
            <div className='sideCart'>
             
            </div>


            {/* section4 start */}


            <div className='ProductDetailContainer'>
               <div className='col-md-12'>
                  <div className='row'>
                     <div className='col-md-4 text-center'>
                        <div className='productDetailImgContainer'>

                           <img className='w-100 productDetailImg' src={this.state.dealList?.DealImages[0]?.imageUrl} />

                        </div>
                     </div>
                     <div className='col-md-8 vc'>
                        <div className='priceContainer'>
                           <p className='productPrice1 poppins_regular mb-0'>{this.state.dealList?.dealName}</p>
                           <div className='seprator'></div>

                           {/* <p className='productPrice1 poppins_regular mb-0'>${this.state.dealList.dealPrice}</p> */}


                           {/* <div className='seprator'></div> */}
                            <p className='productPrice1 poppins_regular mb-0'>${this.state.dealList.dealPrice}</p> 
                           <div className='seprator'></div>

                           <button className='productDetailAddtocart' onClick={() => this.onClickCart(this.state.dealList)}>ADD TO CART</button>
                        </div>

                     </div>
                  </div>
               </div>
               <div className='col-md-12'>
                  <div className='text-center'>
                     <p className='poppins_medium RelatedProduct'>You may also love</p>
                  </div>
                  <div className='col-md-12 mt-5 mb-5'>
                     <div className='row'>
                        {this.renderInventory()}


                     </div>
                  </div>
               </div>
            </div>


            <Footer />
            {/* section8 end */}

         </>

      )
   }

}
const mapStatetoProps = ({ auth,cart }) => ({
   user: auth.user,
   cart: cart?.cart
})
const mapDispatchToProps = ({
   getInventory,
   addToCart,
   removeFromCart
})
DealDetail.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(DealDetail);

