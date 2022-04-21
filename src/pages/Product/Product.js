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



import Footer from '../../component/Footer'


import sycrup from '../../assets/images/dashboard/section3/sycrup.svg'
class Product extends Component {

   constructor(props) {
      super(props);
      this.state = {
         serverError: {},
         isLoading: false,
         showModal: false,


      };
   }

   componentDidMount() {

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
            <Header />
            <div className='sideCart'>
               <Modal

                  onHide={this.handleClose}
                  dialogClassName="col-xl-12  sideCart   "
                  show={this.state.showModal}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"

                  animation={false}
               >


                  <div className="  modal-body p-0">
                     <div className='col-12 p-0'>
                        <div className='cartTop'>
                           <div className='row m-0'>
                              <div className='col-8 p-0 poppins_bold'><p>Cart</p></div>
                              <div className='col-4 text-right p-0' onClick={() => this.setState({ showModal: false })}><p>x</p></div>

                           </div>
                           
                        </div>
                     </div>

<div className='col-12 CartMid'>
   <div className='CartItemCard'>
      <div className='col-12'>
         <div className='row'>
            <div className='col-3 text-center'>
               <img className='w-100' src={CartItem1}/>
            </div>
            <div className='col-6 my-auto'>
               <p className='poppins_bold CartItemCardtext1'>God's Gift Indica</p>
               <p className='poppins_semibold CartItemCardtext2'>$ 50.00</p>
            </div>
            <div className='col-3 my-auto p-0'>
               <label className='poppins_bold addBtn'>-</label>
               <label className='mr-1 ml-1 poppins_bold'>1</label>
               <label className='poppins_bold addBtn'>+</label>

            </div>
         </div>
      </div>

   </div>
   
</div>

<div className='CartBottom'>
   <div className='col-12'>
      <div className='row'>
         <div className="col-4 my-auto">
            <p className='poppins_regular CartBottomText1 '>Total</p>
            <p className='poppins_regular poppins_semibold CartBottomText2'>$ 50.00</p>

         </div>
         <div className="col-8 text-right my-auto">
           <button className='Paynowbtn'>Pay Now</button>
         </div>
      </div>
   </div>

</div>



                  </div>


               </Modal>

            </div>


            {/* section4 start */}
            <section className='container section4'>
               <div className='col-md-12 mt-mb-30 text-center'>
                  <div className='centerheading'>
                     <p className='text1 poppins_regular'><label className='horizontal-Line'></label> EXPLORE! <label className='horizontal-Line'></label></p>
                     <p className='heading poppins_bold'>EXPLORE OUR  <label className='primarycolor'> PRODUCTS</label> </p>
                     <p className='text2 poppins_light'>WE HELP PEOPLE ELEVATE THEIR HAPPINESS.</p>
                  </div>
               </div>
               <div className='col-md-12'>
                  <div className='row'>
                     <div className='col-md-4'>
                        <div className='ExploreCard'>
                           <p className='poppins_semibold newArrival'>New Arrival</p>
                           <img className='ExploreCardImg' src={product1} />
                           <p className='poppins_bold ExploreCardtext1'>Purple Slush</p>
                           <p className='poppins_regular ExploreCardtext2'>In Stock</p>
                           <p className='poppins_semibold ExploreCardtext3'>$ 40.00</p>
                           <div class="overlayy">
                              <img className='ExploreCardImg' src={product1} />
                              <div class="poppins_semibold ExploreCardtext4" onClick={() => this.setState({ showModal: true })}>Add to cart</div>
                           </div>

                        </div>
                     </div>
                     <div className='col-md-4'>
                        <div className='ExploreCard'>
                           <p className='poppins_semibold newArrival'>New Arrival</p>

                           <img className='ExploreCardImg' src={product2} />
                           <p className='poppins_bold ExploreCardtext1'>Purple Slush</p>
                           <p className='poppins_regular ExploreCardtext2'>In Stock</p>
                           <p className='poppins_semibold ExploreCardtext3'>$ 40.00</p>
                           <div class="overlayy">
                              <img className='ExploreCardImg' src={product2} />
                              <div class="poppins_semibold ExploreCardtext4">Add to cart</div>
                           </div>

                        </div>
                     </div>
                     <div className='col-md-4'>
                        <div className='ExploreCard'>
                           <p className='poppins_semibold newArrival'>New Arrival</p>

                           <img className='ExploreCardImg' src={product3} />
                           <p className='poppins_bold ExploreCardtext1'>God's Gift Indica</p>
                           <p className='poppins_regular ExploreCardtext2'>In Stock</p>
                           <p className='poppins_semibold ExploreCardtext3'>$ 50.00</p>
                           <div class="overlayy">
                              <img className='ExploreCardImg' src={product3} />
                              <div class="poppins_semibold ExploreCardtext4">Add to cart</div>
                           </div>

                        </div>
                     </div>
                     <div className='col-md-4'>
                        <div className='ExploreCard'>
                           <p className='poppins_semibold newArrival'>New Arrival</p>

                           <img className='ExploreCardImg' src={product4} />
                           <p className='poppins_bold ExploreCardtext1'>Jet Pack OG</p>
                           <p className='poppins_regular ExploreCardtext2'>In Stock</p>
                           <p className='poppins_semibold ExploreCardtext3'>$ 40.00</p>
                           <div class="overlayy">
                              <img className='ExploreCardImg' src={product4} />
                              <div class="poppins_semibold ExploreCardtext4">Add to cart</div>
                           </div>

                        </div>
                     </div>
                     <div className='col-md-4'>
                        <div className='ExploreCard'>
                           <p className='poppins_semibold newArrival'>New Arrival</p>

                           <img className='ExploreCardImg' src={product5} />
                           <p className='poppins_bold ExploreCardtext1'>Purple Goddess</p>
                           <p className='poppins_regular ExploreCardtext2'>In Stock</p>
                           <p className='poppins_semibold ExploreCardtext3'>$ 40.00</p>
                           <div class="overlayy">
                              <img className='ExploreCardImg' src={product5} />
                              <div class="poppins_semibold ExploreCardtext4">Add to cart</div>
                           </div>

                        </div>
                     </div>
                     <div className='col-md-4'>
                        <div className='ExploreCard'>
                           <p className='poppins_semibold newArrival'>New Arrival</p>

                           <img className='ExploreCardImg' src={product6} />
                           <p className='poppins_bold ExploreCardtext1'>Wedding Cake</p>
                           <p className='poppins_regular ExploreCardtext2'>In Stock</p>
                           <p className='poppins_semibold ExploreCardtext3'>$ 40.00</p>
                           <div class="overlayy">
                              <img className='ExploreCardImg' src={product6} />
                              <div class="poppins_semibold ExploreCardtext4">Add to cart</div>
                           </div>

                        </div>
                     </div>
                     <div className='col-md-4'>
                        <div className='ExploreCard'>
                           <p className='poppins_semibold newArrival'>New Arrival</p>
                           <img className='ExploreCardImg' src={product1} />
                           <p className='poppins_bold ExploreCardtext1'>Purple Slush</p>
                           <p className='poppins_regular ExploreCardtext2'>In Stock</p>
                           <p className='poppins_semibold ExploreCardtext3'>$ 40.00</p>
                           <div class="overlayy">
                              <img className='ExploreCardImg' src={product1} />
                              <div class="poppins_semibold ExploreCardtext4">Add to cart</div>
                           </div>

                        </div>
                     </div>
                     <div className='col-md-4'>
                        <div className='ExploreCard'>
                           <p className='poppins_semibold newArrival'>New Arrival</p>

                           <img className='ExploreCardImg' src={product2} />
                           <p className='poppins_bold ExploreCardtext1'>Purple Slush</p>
                           <p className='poppins_regular ExploreCardtext2'>In Stock</p>
                           <p className='poppins_semibold ExploreCardtext3'>$ 40.00</p>
                           <div class="overlayy">
                              <img className='ExploreCardImg' src={product2} />
                              <div class="poppins_semibold ExploreCardtext4">Add to cart</div>
                           </div>

                        </div>
                     </div>
                     <div className='col-md-4'>
                        <div className='ExploreCard'>
                           <p className='poppins_semibold newArrival'>New Arrival</p>

                           <img className='ExploreCardImg' src={product3} />
                           <p className='poppins_bold ExploreCardtext1'>God's Gift Indica</p>
                           <p className='poppins_regular ExploreCardtext2'>In Stock</p>
                           <p className='poppins_semibold ExploreCardtext3'>$ 50.00</p>
                           <div class="overlayy">
                              <img className='ExploreCardImg' src={product3} />
                              <div class="poppins_semibold ExploreCardtext4">Add to cart</div>
                           </div>

                        </div>
                     </div>
                     <div className='col-md-4'>
                        <div className='ExploreCard'>
                           <p className='poppins_semibold newArrival'>New Arrival</p>

                           <img className='ExploreCardImg' src={product4} />
                           <p className='poppins_bold ExploreCardtext1'>Jet Pack OG</p>
                           <p className='poppins_regular ExploreCardtext2'>In Stock</p>
                           <p className='poppins_semibold ExploreCardtext3'>$ 40.00</p>
                           <div class="overlayy">
                              <img className='ExploreCardImg' src={product4} />
                              <div class="poppins_semibold ExploreCardtext4">Add to cart</div>
                           </div>

                        </div>
                     </div>
                     <div className='col-md-4'>
                        <div className='ExploreCard'>
                           <p className='poppins_semibold newArrival'>New Arrival</p>

                           <img className='ExploreCardImg' src={product5} />
                           <p className='poppins_bold ExploreCardtext1'>Purple Goddess</p>
                           <p className='poppins_regular ExploreCardtext2'>In Stock</p>
                           <p className='poppins_semibold ExploreCardtext3'>$ 40.00</p>
                           <div class="overlayy">
                              <img className='ExploreCardImg' src={product5} />
                              <div class="poppins_semibold ExploreCardtext4">Add to cart</div>
                           </div>

                        </div>
                     </div>
                     <div className='col-md-4'>
                        <div className='ExploreCard'>
                           <p className='poppins_semibold newArrival'>New Arrival</p>

                           <img className='ExploreCardImg' src={product6} />
                           <p className='poppins_bold ExploreCardtext1'>Wedding Cake</p>
                           <p className='poppins_regular ExploreCardtext2'>In Stock</p>
                           <p className='poppins_semibold ExploreCardtext3'>$ 40.00</p>
                           <div class="overlayy">
                              <img className='ExploreCardImg' src={product6} />
                              <div class="poppins_semibold ExploreCardtext4">Add to cart</div>
                           </div>

                        </div>
                     </div>
                  </div>
               </div>



            </section>
            {/* section4 end */}
            {/* section5 start */}


            {/* section7 end */}
            {/* section8 start */}



            <Footer />
            {/* section8 end */}

         </>

      )
   }

}
const mapStatetoProps = ({ auth }) => ({
   user: auth.user
})
const mapDispatchToProps = ({

})
Product.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(Product);

