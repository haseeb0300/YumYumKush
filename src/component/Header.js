import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link, withRouter } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

import Logo from '../assets/images/header/Logo.png'
import Cart from '../assets/images/header/Cart.svg'
import { addToCart, removeFromCart,updateQuantity } from '../store/actions/cartAction';
import { ThemeProvider } from 'react-bootstrap';
import { getCartQuanitityAndAmount } from '../store/reducers/cart';




class Contact extends Component {

   constructor(props) {
      super(props);
      this.state = {
         serverError: {},
         isLoading: false,
         newBookList: [],
         total: 0,
         showModal: false,


      };
   }

   componentDidUpdate(prevProps, prevState) {
      if (JSON.stringify(prevProps.cart) !== JSON.stringify(this.props.cart)) {
         var tmptotal = 0
         this.props.cart.map((item, i) => {
            if (item.InventryId) {
               tmptotal = tmptotal + item.price
            } else {
               tmptotal = tmptotal + parseInt(item.dealPrice)
            }
            this.setState({ total: tmptotal }, () => { console.log(this.state.total) })
         }
         )
      }
   }

   componentDidMount() {

   }


   handleClose = () => {
      this.setState({ showModal: false })
   }
   onClickPay = () => {

      this.props.history.push('/checkout',{total: this.props.total})
   }
   _updateQuantity = (item,quantity) =>{

      let payloadItem = {
         ...item,
         quantity:item.quantity + quantity
      }
      this.props.updateQuantity(payloadItem)

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

            {/* header start */}

            {/* headerDesktop Start */}
            <div className='DesktopHeader'>
               <div className='sideCart'>
                  <Modal

                     onHide={() => this.props.handleCloseModal()}
                     dialogClassName="col-xl-12  sideCart   "
                     show={this.props.showModal}
                     size="lg"
                     aria-labelledby="contained-modal-title-vcenter"

                     animation={false}
                  >


                     <div className="  modal-body p-0">
                        <div className='col-12 p-0'>
                           <div className='cartTop'>
                              <div className='row m-0'>
                                 <div className='col-8 p-0 poppins_bold'><p>Cart</p></div>
                                 <div className='col-4 text-right p-0' onClick={() => this.props.handleCloseModal()}><p>x</p></div>

                              </div>

                           </div>
                        </div>

                        <div className='col-12 CartMid'>

                           {this.props.cart.map((item, i) => {

                              return (
                                 <div className='CartItemCard'>
                                    <div className='col-md-12'>
                                       {item.DealId && (
                                          <div className='row'>
                                             <div className='col-md-3 text-center'>
                                                <img className='w-100 MobileCartItemImg' src={item?.DealImages[0]?.imageUrl} />
                                             </div>
                                             <div className='col-md-6 my-auto text-center'>
                                                <p className='poppins_bold CartItemCardtext1'>{item?.dealName}</p>
                                                <p className='poppins_semibold CartItemCardtext2'>${item?.dealPrice * item?.quantity }</p>
                                             </div>
                                             <div className='col-md-3 text-center my-auto p-0'>
                                                <label className='poppins_bold addBtn' onClick={ () =>this._updateQuantity(item,-1)}>-</label>
                                                <label style={{
                                                   fontSize:18,
                                                   color:"#000"
                                                }} className='mr-1 ml-1 poppins_bold CartItemCardtext1'>{item?.quantity}</label>
                                                <label className='poppins_bold addBtn'  onClick={ () =>this._updateQuantity(item,1)}>+</label>
                                             </div>
                                          </div>
                                       )}
                                       {item.InventryId && (
                                          <div className='row'>
                                             <div className='col-md-3 text-center'>
                                                <img className='w-100 MobileCartItemImg' src={item.InventryImages[0]?.imageUrl} />
                                             </div>
                                             <div className='col-md-6 my-auto text-center'>
                                                <p className='poppins_bold CartItemCardtext1'>{item.title}</p>
                                                <p className='poppins_semibold CartItemCardtext2'>$ {item.price *item?.quantity }</p>
                                             </div>
                                             <div className='col-md-3 text-center my-auto p-0'>
                                                <label className='poppins_bold addBtn' onClick={ () =>this._updateQuantity(item,-1)}>-</label>
                                                <label className='mr-1 ml-1 poppins_bold CartItemCardtext1'>{item?.quantity}</label>
                                                <label className='poppins_bold addBtn'  onClick={ () =>this._updateQuantity(item,1)}>+</label>
                                             </div>
 
                                          </div>
                                       )}
                                    </div>

                                 </div>
                              )
                           })}


                        </div>

                        <div className='CartBottom'>
                           <div className='col-12'>
                              <div className='row'>
                                 <div className="col-4 my-auto">
                                    <p className='poppins_regular CartBottomText1 '>Total</p>
                                    <p className='poppins_regular poppins_semibold CartBottomText2'>$ {this.props.total}</p>

                                 </div>
                                 <div className="col-8 text-right my-auto">

                                       <button className='Paynowbtn' onClick={() => this.onClickPay()}>Pay Now</button>
                                 </div>
                              </div>
                           </div>

                        </div>



                     </div>


                  </Modal>
               </div>
               <div className='col-md-12  backwhite'>
                  <div className='row'>
                     <div className='col-md-2 text-center'>
                        <Link to="/">
                           <img className='w-100 logoimg' src={Logo} />
                        </Link>
                     </div>
                     <div className='col-md-7 my-auto'>
                        <div className='col-md-12'>
                           <div className='row'>
                              <div className='col-md-2 text-center'>
                                 <Link to="/">

                                    <p className=' headerTabs'>Home</p>
                                 </Link>
                              </div>
                              <div className='col-md-2 text-center'>
                                 <a href="#Category">


                                    <p className=' headerTabs'>Store</p>

                                 </a>
                              </div>
                              <div className='col-md-2 text-center'>
                                 <a href="#Rewards">

                                    <p className=' headerTabs'>Rewards</p>
                                 </a>
                              </div>
                              <div className='col-md-2 text-center'>
                                 <a href="#Contact">

                                    <p className=' headerTabs'>Contact</p>
                                 </a>
                              </div>
                              <div className='col-md-2 text-center'>
                                 <a href="#About">

                                    <p className=' headerTabs'>About</p>
                                 </a>
                              </div>
                              <div className='col-md-2 text-center'>
                                 <a href="#Feedback">

                                    <p className=' headerTabs'>Feedback</p>
                                 </a>
                              </div>


                           </div>
                        </div>

                     </div>
                     <div className='col-md-3 my-auto'>
                        <div className='row'>
                           <div>
                              <Link to="/product">

                                 <button className='header_btn'>Explore Product</button>
                              </Link>
                           </div>
                           <div className='my-auto ml-4 mr-4'>
                              <img  onClick={() => this.props.showModal} src={Cart} />
                           </div>
                        </div>


                     </div>
                  </div>
               </div>
            </div>
            {/* headerDesktop End */}
            <div className='MobileHeader'>
               <div className='col-12  p-0'>
                  <div className='row'>
                     <div className='col-8'>
                        <img className='w-100 logoimg ' src={Logo} />

                     </div>
                     <div className='col-4 vertical_center text-right'>
                        <button className='barbtn' type="button" data-toggle="collapse" data-target="#demo"  >
                           <i class="fa fa-bars bars" aria-hidden="true"></i>
                        </button>
                     </div>
                  </div>

                  <div id="demo" class="collapse">
                     <div class="card-body">
                        <div className='col-12 text-center'>
                        </div>
                        <ul >
                           <Link to="/">
                              <li>Home </li>
                           </Link>
                           <div className="nav_hr"></div>
                           <Link to="#Category">

                              <li>Store </li>
                           </Link>
                           <div className="nav_hr"></div>
                           <Link to="#Rewards">
                              <li>Rewards </li>
                           </Link>
                           <div className="nav_hr"></div>
                           <a href="#Contact">
                              <li>Contact </li>
                           </a>
                           <div className="nav_hr"></div>
                           <a href="#About">
                              <li>About </li>
                           </a>
                           <div className="nav_hr"></div>
                           <a href="#Feedback">
                              <li>Feedback </li>
                           </a>
                           <div className="nav_hr"></div>
                           <Link to="/product">
                              <li>Explore Product </li>
                           </Link>
                           <div className="nav_hr"></div>





                        </ul>
                     </div>
                  </div>

               </div>


            </div>

            {/* header end */}
         </>


      )
   }

}
const mapStatetoProps = ({ auth, cart }) => ({
   user: auth.user,
   cart: cart?.cart,
   total:getCartQuanitityAndAmount(cart)?.total

})
const mapDispatchToProps = ({
   addToCart,
   removeFromCart,
   updateQuantity
   
})
Contact.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(Contact);

