import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { Modal } from 'react-bootstrap';

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Header from '../../component/Header'


import { getInventory } from '../../store/actions/productAction';

import Footer from '../../component/Footer'


import sycrup from '../../assets/images/dashboard/section3/sycrup.svg';
import { addToCart, removeFromCart } from '../../store/actions/cartAction';

class Product extends Component {

   constructor(props) {
      super(props);
      this.state = {
         serverError: {},
         isLoading: false,
         showModal: false,
         inventoryList: []


      };
   }

   componentDidMount() {
      this.props.getInventory().then((res) => {
         console.log(res)
         this.setState({
            inventoryList: res.content,
         }
         )
      }).catch((err) => {
         console.log(err)

      })
   }
   handleClose = () => {
      this.setState({ showModal: false })
   }

   onClickCart = (product) => {
      console.log(product)
      console.log(this.props.cart)

      let items = this.props.cart.find(item => {
         console.log(item)
          return item.InventryId === product.InventryId
      })
      if (!items)
          this.props.addToCart(product)
      else {
      }
      this.setState({showModal: true})
  }
  onclickInventoryItem = (item) => {

   this.props.history.push('/productdetail', { item: item })
}

   renderInventory = () => {
      if (this.state.inventoryList && this.state.inventoryList.length < 1) {

         return () =>

            <p class="text-center" >   No Data To Display</p>



      }
      return this.state.inventoryList.map((item, i) =>
         <>
            <div className='col-md-4'>
               <div className='ExploreCard'  onClick={() => this.onclickInventoryItem(item)}>
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
            {/* section4 start */}
            <section className=' section4'>
               
               <div className="col-md-12 productPage">

                  <div className='row'>
                     <div className='col-md-3'>
                        <div className='FilterCategory'>
                           <p className='poppins_medium heading'>Search Filter</p>
                           <p className='poppins_light tilte'>Search by your prefference</p>
                           <div className='mt-5'>
                              <p className='poppins_medium heading'>Category</p>
                              <div class="form-group mt-2 mb-2">
                                 <input className="" type="checkbox" id="Categories" />
                                 <label className=" tilte poppins_light mt_4px" for="Categories">Flower</label>

                              </div>
                              <div class="form-group mt-2 mb-2">
                                 <input className="" type="checkbox" id="Categories" />
                                 <label className=" tilte poppins_light mt_4px" for="Categories">Carts</label>
                              </div>
                              <div class="form-group mt-2 mb-2">
                                 <input className="" type="checkbox" id="Categories" />
                                 <label className=" tilte poppins_light mt_4px" for="Categories">Wax</label>
                              </div>
                              <div class="form-group mt-2 mb-2">
                                 <input className="" type="checkbox" id="Categories" />
                                 <label className=" tilte poppins_light mt_4px" for="Categories">Edible</label>
                              </div>
                              <div class="form-group mt-2 mb-2">
                                 <input className="" type="checkbox" id="Categories" />
                                 <label className=" tilte poppins_light mt_4px" for="Categories">Merch</label>
                              </div>


                           </div>
                           <div className='mt-5'>
                              <p className='poppins_medium heading'>Category</p>
                              <div class="form-group mt-2 mb-2">
                                 <input className="" type="checkbox" id="Categories" />
                                 <label className=" tilte poppins_light mt_4px" for="Categories">All Deals</label>

                              </div>
                              <div class="form-group mt-2 mb-2">
                                 <input className="" type="checkbox" id="Categories" />
                                 <label className=" tilte poppins_light mt_4px" for="Categories">Friday Deals</label>

                              </div>




                           </div>
                        </div>
                     </div>
                     <div className='col-md-9'>
                     <div className='col-md-12 mt-mb-30 text-center'>
                  <div className='centerheading'>
                     <p className='text1 poppins_regular'><label className='horizontal-Line'></label> EXPLORE! <label className='horizontal-Line'></label></p>
                     <p className='heading poppins_bold'>EXPLORE OUR  <label className='primarycolor'> PRODUCTS</label> </p>
                     <p className='text2 poppins_light'>WE HELP PEOPLE ELEVATE THEIR HAPPINESS.</p>
                  </div>
               </div>
                        <div className='col-md-12'>
                           <div className='row'>
                              {this.renderInventory()}
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
const mapStatetoProps = ({ auth, cart }) => ({
   user: auth.user,
   cart: cart?.cart
})
const mapDispatchToProps = ({
   getInventory,
   addToCart,
   removeFromCart,
})
Product.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(Product);

