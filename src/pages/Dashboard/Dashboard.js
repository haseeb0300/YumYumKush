import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Header from '../../component/Header'
import section1img from '../../assets/images/dashboard/section1/1.png'


import TestimonialImg1 from '../../assets/images/dashboard/section6/1.png'
import TestimonialImg2 from '../../assets/images/dashboard/section6/2.png'
import TestimonialImg3 from '../../assets/images/dashboard/section6/3.png'
import slider1 from '../../assets/images/dashboard/section7/1.png'
import Logo from '../../assets/images/header/Logo.png'
import envolpe from '../../assets/images/dashboard/section7/envolpe.png'
import { Link, withRouter } from 'react-router-dom';
import { getDeal, getInventory, getCategory } from '../../store/actions/productAction';
import { addToCart, removeFromCart } from '../../store/actions/cartAction';
import { getAboutUs } from '../../store/actions/feedbackAction';

import Footer from '../../component/Footer'

import sycrup from '../../assets/images/dashboard/section3/sycrup.svg'
class Dashboard extends Component {

   constructor(props) {
      super(props);
      this.state = {
         serverError: {},
         isLoading: false,
         dealList: [],
         inventoryList: [],
         categoryList: [],
         showModal: false,
         aboutusList:{},
         dealDescriptionObj:{},
         testimonialObj:{},
         objectiveObj:{},



      };
   }

   componentDidMount() {
      this.props.getDeal().then((res) => {
         console.log(res)
         this.setState({
            dealList: res.content,
         }
         )
      }).catch((err) => {
         console.log(err)

      })
      this.props.getInventory().then((res) => {
         console.log(res)
         this.setState({
            inventoryList: res.content,
         }
         )
      }).catch((err) => {
         console.log(err)

      })
      this.props.getCategory().then((res) => {
         console.log(res)
         this.setState({
            categoryList: res.content,
         }
         )
      }).catch((err) => {
         console.log(err)

      })
      this.props.getAboutUs("1").then((res) => {
         console.log(res)
         this.setState({
            aboutusList: res.content,
         }
         )
      }).catch((err) => {
         console.log(err)

      })
      this.props.getAboutUs("2").then((res) => {
         console.log(res)
         this.setState({
            testimonialObj: res.content,
         }
         )
      }).catch((err) => {
         console.log(err)

      })
      this.props.getAboutUs("4").then((res) => {
         console.log(res)
         this.setState({
            dealDescriptionObj: res.content,
         }
         )
      }).catch((err) => {
         console.log(err)

      })
      this.props.getAboutUs("3").then((res) => {
         console.log(res)
         this.setState({
            objectiveObj: res.content,
         }
         )
      }).catch((err) => {
         console.log(err)

      })


      
   }
   renderDeals = () => {
      if (this.state.dealList && this.state.dealList.length < 1) {

         return () =>

            <p class="text-center" >   No Data To Display</p>



      }
      return this.state.dealList.slice(0, 4).map((item, i) =>
         <>
            <div className='col-md-6'>
               <div className='col-md-12'>
                  <div className='deal-card'  onClick={() => this.onclickDealItem(item)}>

                     <div className='row'>
                        <div className='col-md-4'>
                           <img className='dealImg' src={item.DealImages[0]?.imageUrl} />

                        </div>
                        <div className='col-md-8'>
                           <p className='deal-card-heading poppins_bold'>{item.dealName}</p>
                           <p className='poppins_regular deal-card-text'>{item.dealPrice}
                              {item.dealDescription}</p>
                           <div className='readmore'>Read more</div>

                        </div>


                     </div>
                  </div>


               </div>
            </div>

         </>
      )



   }
   onclickCategoryItem = (item) => {

      this.props.history.push('/categoryproduct', { item: item })
   }
   
   onclickDealItem = (item) => {

      this.props.history.push('/dealdetail', { item: item })
  }
   onclickInventoryItem = (item) => {

      this.props.history.push('/productdetail', { item: item })
  }
   renderInventory = () => {
      if (this.state.inventoryList && this.state.inventoryList.length < 1) {

         return () =>

            <p class="text-center" >   No Data To Display</p>



      }
      return this.state.inventoryList.slice(0, 6).map((item, i) =>
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
   renderCategory = () => {
      if (this.state.categoryList && this.state.categoryList.length < 1) {

         return () =>

            <p class="text-center" >   No Data To Display</p>



      }
      return this.state.categoryList.slice(0, 8).map((item, i) =>
         <>
            <div className='col-md-3'>
               <div className='categoryCard' onClick={() => this.onclickCategoryItem(item)}>
                  <p className='categoryCardtext1 poppins_semibold'>{item.title}</p>
                  <p className='categoryCardtext2 poppins_regular'>{item.Inventries.length} Products</p>
                  <p className='categoryCardtext3 poppins_light'>Shop Now</p>
               </div>
            </div>
         </>
      )



   }
   onClickCart = (product) => {
      var obj = {
         ...product,
         price: this.state.total
      }
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
      const { isLoading, inventoryList,aboutusList ,testimonialObj,dealDescriptionObj,objectiveObj} = this.state;
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
            {/* section1 */}
            <section id="Home" className='container section1'>
               <div className='col-md-12 mt-mb-30'>
                  <div className='row'>
                     <div className='col-md-7'>
                        <p className='text1 poppins_regular'><label className='horizontal-Line'></label>All types of herbal products</p>
                        <p className='heading poppins_bold'>{objectiveObj.heading}</p>
                        <p className='text2 poppins_regular'>{objectiveObj.description}</p>
                        <Link to="/product">

                           <button className='btn primarycolor' >Buy Now</button>
                        </Link>
                        <Link to="/product">

                           <button className='btn primarycolor'>Explore More</button>
                        </Link>

                     </div>
                     <div className='col-md-5'>
                        <img className='w-100' src={section1img} />

                     </div>
                  </div>
               </div>

            </section>
            {/* section1 end */}
            {/* section2 */}
            <section className='container section2'>
               <div className='col-md-12 mt-mb-30 text-center'>
                  <div className='centerheading'>
                     <p className='text1 poppins_regular'><label className='horizontal-Line'></label> Our Deals <label className='horizontal-Line'></label></p>
                     <p className='heading poppins_bold'>{dealDescriptionObj.heading}</p>
                     <p className='text2 poppins_light'>{dealDescriptionObj.description}</p>
                  </div>
               </div>
               <div className='col-md-12'>
                  <div className='row'>
                     {this.renderDeals()}
                  </div>
               </div>
               <div className='col-md-12 text-center'>
                  <Link to="/deals">

                     <button className='ExploreBtn'>Explore More</button>
                  </Link>
               </div>

            </section>
            {/* section2 end */}
            {/* section3 start */}

            <section className='container section3'>
               <div className='col-md-12'>
                  <div className='Section3Card'>
                     <div className='col-md-12'>
                        <div className='row'>
                           <div className='col-md-8'>
                              <p className='text1 poppins_regular'><label className='horizontal-Line'></label> FEATURED PRODUCT <label className='horizontal-Line'></label></p>
                              <p className='heading poppins_bold'>{inventoryList[0]?.title} </p>
                              <p className='poppins_regular text2'>{inventoryList[0]?.description}</p>
                              <p className='poppins_regular heading'>${inventoryList[0]?.InventryParams[0]?.price}</p>

                              <button className='BuyNowBtn' onClick={() => this.onclickInventoryItem(inventoryList[0])}>Buy Now</button>
                           </div>
                           <div className='col-md-4'>
                              <div className='section3InnerCard text-center'>
                                 <img className='w-100 featureImg' src={inventoryList[0]?.InventryImages[0]?.imageUrl} />

                              </div>
                           </div>
                        </div>
                     </div>



                  </div>
                  



               </div>

            </section>
            {/* section3 end */}
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
                     {this.renderInventory()}
                    
                  </div>
               </div>

               <div className='col-md-12 text-center'>
                  <Link to="/product">

                     <button className='ExploreBtn'>Explore More</button>
                  </Link>
               </div>

            </section>
            {/* section4 end */}
            {/* section5 start */}

            <section id="Category" className='container section5'>
               <div className='col-md-12 mt-mb-30 text-center'>
                  <div className='centerheading'>
                     <p className='text1 poppins_regular'><label className='horizontal-Line'></label> Categories! <label className='horizontal-Line'></label></p>
                     <p className='heading poppins_bold'>OUR MAIN   <label className='primarycolor'> CATEGORIES</label> </p>
                     <p className='text2 poppins_light'>WE HELP PEOPLE ELEVATE THEIR HAPPINESS.</p>
                  </div>
               </div>
               <div className='col-md-12'>
                  <div className='row'>
                     {this.renderCategory()}
                  </div>
               </div>
               <div className='col-md-12 text-center'>
                  <Link to="/categories">
                     <button className='ExploreBtn'>Explore More</button>
                  </Link>
               </div>
            </section>
            {/* section5 end */}
            {/* section6 start */}
            <section id="Feedback" className='container section6'>
               <div className='col-md-12 mt-mb-30'>
                  <div className='row'>
                     <div className='col-md-7'>
                        <p className='text1 poppins_regular'><label className='horizontal-Line'></label>Testimonials</p>
                        <p className='heading poppins_bold'>{testimonialObj.heading}</p>


                     </div>

                  </div>
               </div>

               <div className='col-md-12 mt-mb-30'>
                  <div className='row'>
                     <div className='col-md-6'>
                        <div className='testimoninalCard'>
                           <div className='col-12'>
                              <div className='row'>
                                 <div className='col-4 my-auto text-center'>
                                    <img src={TestimonialImg1} />

                                 </div>
                                 <div className='col-8  my-auto'>
                                    <p className='poppins_medium testimoninalCardText1'>Emma White</p>
                                    <p className='poppins_medium testimoninalCardText2 '>Social Media Manager, Uber</p>

                                 </div>
                              </div>
                           </div>

                        </div>
                        <div className='testimoninalCard'>
                           <div className='col-12'>
                              <div className='row'>
                                 <div className='col-4 my-auto text-center'>
                                    <img src={TestimonialImg2} />

                                 </div>
                                 <div className='col-8  my-auto'>
                                    <p className='poppins_medium testimoninalCardText1'>Danial Smith</p>
                                    <p className='poppins_medium testimoninalCardText2 '>Developer, Foodpanda</p>

                                 </div>
                              </div>
                           </div>

                        </div>
                        <div className='testimoninalCard'>
                           <div className='col-12'>
                              <div className='row'>
                                 <div className='col-4 my-auto text-center'>
                                    <img src={TestimonialImg3} />

                                 </div>
                                 <div className='col-8  my-auto'>
                                    <p className='poppins_medium testimoninalCardText1'>Chris Brown</p>
                                    <p className='poppins_medium testimoninalCardText2 '>Lead actor, Hollywood</p>

                                 </div>
                              </div>
                           </div>

                        </div>
                     </div>
                     <div className='col-md-6 mt-3'>
                        <p className='poppins_light text3'>{testimonialObj.description}</p>

                     </div>

                  </div>
               </div>
            </section>

            {/* section6 end */}
            {/* section7 start */}
            <section id="Rewards" className='container section7'>
               <div className='col-md-12 mt-mb-30'>
                  <div className='row'>
                     <div className='col-md-7'>
                        <p className='text1 poppins_regular'><label className='horizontal-Line'></label>Reward System</p>
                        <p className='heading poppins_bold'>CUSTOMER   <label className='primarycolor'> REWARDS</label> PROGRAM.</p>

                     </div>

                  </div>
               </div>
               <div className='col-md-12'>
                  <Carousel autoPlay infiniteLoop>
                     <div className='carouselCard'>
                        <img className='carouselImg' src={slider1} />
                        <p className='poppins_bold carouselText '>Redeem 12 cards with your $25 order for your choice of one of the following</p>
                        <p className='carouselText2 poppins_regular'>Read more</p>
                     </div>
                     <div className='carouselCard'>
                        <img className='carouselImg' src={slider1} />
                        <p className='poppins_bold carouselText '>Redeem 12 cards with your $25 order for your choice of one of the following</p>
                        <p className='carouselText2 poppins_regular'>Read more</p>
                     </div>
                     <div className='carouselCard'>
                        <img className='carouselImg' src={slider1} />
                        <p className='poppins_bold carouselText '>Redeem 12 cards with your $25 order for your choice of one of the following</p>
                        <p className='carouselText2 poppins_regular'>Read more</p>
                     </div>
                     <div className='carouselCard'>
                        <img className='carouselImg' src={slider1} />
                        <p className='poppins_bold carouselText '>Redeem 12 cards with your $25 order for your choice of one of the following</p>
                        <p className='carouselText2 poppins_regular'>Read more</p>
                     </div>

                  </Carousel>

               </div>


            </section>
            {/* section7 end */}
            {/* section8 start */}


            <section id="About" className='container section8'>
               <div className='col-md-12 mt-mb-30 text-center'>
                  <div className='centerheading'>
                     <p className='text1 poppins_regular'><label className='horizontal-Line'></label> ABOUT US <label className='horizontal-Line'></label></p>
                     <p className='heading poppins_bold'>{aboutusList.heading}    </p>
                     <p className='text2 poppins_light'>{aboutusList.description} </p>

                     <img className='mt-5 logoimg1 ' src={Logo} />
                  </div>
               </div>




            </section>
            {/* section8 end */}
            {/* section9 start */}


            <section id="Contact" className='container section8'>
               <div className='col-md-12 mt-mb-30 text-center'>
                  <div className='centerheading'>
                     <p className='text1 poppins_regular'><label className='horizontal-Line'></label> SUBSCRIBE NOW <label className='horizontal-Line'></label></p>
                     <p className='heading poppins_bold'>Subscribe for latest news!  </p>
                     <p className='text2 poppins_light'>WE HELP PEOPLE ELEVATE THEIR HAPPINESS.</p>
                     <div className='col-md-12'>
                        <img className='envopleImg' src={envolpe} />
                        <input className='subscribeInput' placeholder='Enter email address'></input>
                        <button className='subscribebtn'>SUBCRIBE NOW</button>
                     </div>
                  </div>
               </div>




            </section>
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
   getDeal,
   getInventory,
   getCategory,
   addToCart,
   removeFromCart,
   getAboutUs
})
Dashboard.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(Dashboard);

