import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { Modal } from 'react-bootstrap';

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Header from '../../component/Header'


import { v4 } from 'uuid';

import Footer from '../../component/Footer'
import { getInventory } from '../../store/actions/productAction';
import { addToCart, removeFromCart } from '../../store/actions/cartAction';


import sycrup from '../../assets/images/dashboard/section3/sycrup.svg'
class ProductDetail extends Component {

   constructor(props) {
      super(props);
      this.state = {
         errors: {},
         serverError: {},
         productPriceList: [{ "InventryParamId": v4(), "price": "", "type": "" }],
         //productImageList: [1],
         title: '',
         description: '',
         status: '',
         imageList: [{ "InventryImageId": v4(), "imageUrl": "" }],
         InventryId: '',
         imageUrl: "",
         price: "",
         type: "",
         inventoryItem: [],
         InventryId: "",
         CategoryId: "",
         total: 0,
         categoryList: [],
         checkedBoxes: [],
         isLoading: false,
         showModal: false,
         productList: [],
         quantityTotal: 0,
         activeTab: 0,


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
   onClickSelection = (val) => {
      this.setState({
         activeTab: val
      })
   }
   componentWillMount() {

      if (this.props != null && this.props.location.state != null && this.props.location.state.item) {
         console.log(this.props.location.state.item)

         const { InventryId, title, description, status, InventryParams, InventryImages, inventoryItem } = this.props?.location?.state?.item
         this.setState({
            InventryId: InventryId,
            title: title,
            description: description,
            status: status,
            productPriceList: InventryParams,
            imageList: InventryImages,
            inventoryItem: this.props?.location?.state?.item
         }, () => { console.log(this.state.inventoryItem) })
      }
   }


   renderInventory = () => {
      if (this.state.productList && this.state.productList.length < 1) {

         return () =>

            <p class="text-center" >   No Data To Display</p>



      }
      return this.state.productList.slice(0, 3).map((item, i) =>
         <>
            <div className='col-md-4'>

               <div className='ExploreCard' onClick={() => this.setState({ inventoryItem: item, total: 0, checkedBoxes: [] })} >
                  <p className='poppins_semibold newArrival'>New Arrival</p>
                  <img className='ExploreCardImg' src={item.InventryImages[0]?.imageUrl} />
                  <p className='poppins_bold ExploreCardtext1'>{item.title}</p>
                  <p className='poppins_regular ExploreCardtext2'>{item.status}</p>
                  <p className='poppins_semibold ExploreCardtext3'>$ {item.InventryParams[0]?.price}</p>


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
      var tempQuantityTotal = 0
      for (var i = 0; i < this.state.checkedBoxes.length; i++) {
         tempTotal = tempTotal + parseInt(this.state.checkedBoxes[i].price)
         tempQuantityTotal = tempQuantityTotal + parseInt(this.state.checkedBoxes[i].type.replace('g', ''))
      }
      this.setState({ total: tempTotal, quantityTotal: tempQuantityTotal })
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

   handleCloseModal = () => {
      this.setState({ showModal: false })
   }

   onClickCart = (product) => {
      var obj = {
         ...product,
         InventryId: product.InventryId,
         price: this.state.total,
         quantityToMinus: this.state.quantityTotal
      }
      console.log(obj)
      let items = this.props.cart.find(item => {
         console.log(item)
         return item.InventryId === obj.InventryId
      })
      if (!items)
         this.props.addToCart(obj)
      else {
      }
      this.setState({ showModal: true })
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




            {/* section4 start */}
            <Header
               showModal={this.state.showModal}
               history={this.props.history}
               toogleModal={this.toogleModal}
               handleClose={this.handleClose}


            />

            <div className='ProductDetailContainer'>
               <div className='col-md-12'>
                  <div className='row'>
                     <div className='col-md-4 text-center'>
                        <div className='productDetailImgContainer'>

                           <img className='w-100 productDetailImg' src={this.state.inventoryItem.InventryImages[0]?.imageUrl} />

                        </div>
                     </div>
                     <div className='col-md-8 vc'>
                        <div className='priceContainer'>
                           <p className='productPrice1 poppins_regular mb-0'>{this.state.inventoryItem.title}</p>
                           <div className='seprator'></div>

                           {this.state.inventoryItem.InventryParams.map((item, i) => {
                              return (
                                 <p key={i} className='mb-0'><input onChange={(e) => this.handleCheckbox(e, item)} checked={this.state.checkedBoxes.find((ch) => ch.InventryParamId === item.InventryParamId)} className='priceCheckbox' type='checkbox' /><label className='productPrice poppins_regular mb-0'>{item.type} Gram for ${item.price}</label></p>

                              )
                           })}

                           <div className='seprator'></div>
                           <p className='productPrice1 poppins_bold mb-0'>{'$' + this.state.total} </p>
                           <div className='seprator'></div>
                           {/* {this.state.activeTab === 1 || this.state.checkedBoxes.length > 0 ? (
                              <p className='QuantityError'>Please Select Quantity</p>
                            ):
                            <p></p>
                           } */}
                           {this.state.checkedBoxes.length > 0 ? (
                              <button className='productDetailAddtocart' onClick={() => this.onClickCart(this.state.inventoryItem)}>ADD TO CART</button>
                           ) :
                           <>
                           <p className='QuantityError'>Please Select Quantity</p>

                              <button className='productDetailAddtocart'>ADD TO Cart</button>
                              </>
                           }


                        </div>

                     </div>
                  </div>
               </div>
               <div className='col-md-12'>
                  <div className='text-center'>
                     <p className='poppins_medium RelatedProduct'>You may also love</p>
                  </div>
                  <div className='col-md-12 container section4 mt-5 mb-5'>
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
const mapStatetoProps = ({ auth, cart }) => ({
   user: auth.user,
   cart: cart?.cart
})
const mapDispatchToProps = ({
   getInventory,
   addToCart,
   removeFromCart
})
ProductDetail.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(ProductDetail);

