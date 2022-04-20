import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Header from '../../component/Header'
import section1img from '../../assets/images/dashboard/section1/1.png'

import section2img from '../../assets/images/dashboard/section2/1.png'
import product1 from '../../assets/images/dashboard/section4/1.png'
import product2 from '../../assets/images/dashboard/section4/2.png'
import product3 from '../../assets/images/dashboard/section4/3.png'
import product4 from '../../assets/images/dashboard/section4/4.png'
import product5 from '../../assets/images/dashboard/section4/5.png'
import product6 from '../../assets/images/dashboard/section4/6.png'
import TestimonialImg1 from '../../assets/images/dashboard/section6/1.png'
import TestimonialImg2 from '../../assets/images/dashboard/section6/2.png'
import TestimonialImg3 from '../../assets/images/dashboard/section6/3.png'
import slider1 from '../../assets/images/dashboard/section7/1.png'
import Logo from '../../assets/images/header/Logo.svg'


import sycrup from '../../assets/images/dashboard/section3/sycrup.svg'
class Dashboard extends Component {

   constructor(props) {
      super(props);
      this.state = {
         serverError: {},
         isLoading: false,

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
            {/* section1 */}
            <section className='container section1'>
               <div className='col-md-12 mt-mb-30'>
                  <div className='row'>
                     <div className='col-md-7'>
                        <p className='text1 poppins_regular'><label className='horizontal-Line'></label>All types of herbal products</p>
                        <p className='heading poppins_bold'>WE HELP <label className='primarycolor'> PEOPLE</label> ELEVATE THEIR HAPPINESS.</p>
                        <p className='text2 poppins_regular'>We strive to provide every customer with a great delivery experience, as well as pride ourselves in having a variety of THC and CBD products to choose from that can be delivered straight to you.</p>
                        <button className='btn primarycolor'>Buy Now</button>
                        <button className='btn primarycolor'>Explore More</button>

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
                     <p className='heading poppins_bold'>New Hours of <label className='primarycolor'> Operation</label>  starting 2/4/22 will be 7am - Midnight</p>
                     <p className='text2 poppins_light'>WE HELP PEOPLE ELEVATE THEIR HAPPINESS.</p>
                  </div>
               </div>
               <div className='col-md-12'>
                  <div className='row'>
                     <div className='col-md-6'>
                        <div className='col-md-12'>
                           <div className='deal-card'>

                              <div className='row'>
                                 <div className='col-md-4'>
                                    <img src={section2img} />

                                 </div>
                                 <div className='col-md-8'>
                                    <p className='deal-card-heading poppins_bold'>Tuesday Deals!</p>
                                    <p className='poppins_regular deal-card-text'>$10 off Any Top Shelf Eighth or Higher!
                                       $100 oz's On Our Good Deals Category!
                                       $75 OZ of Our Premium Shake!
                                       Edibles 4 for $50!</p>
                                    <div className='readmore'>Read more</div>

                                 </div>


                              </div>
                           </div>


                        </div>
                     </div>
                     <div className='col-md-6'>
                        <div className='col-md-12'>
                           <div className='deal-card'>

                              <div className='row'>
                                 <div className='col-md-4'>
                                    <img src={section2img} />

                                 </div>
                                 <div className='col-md-8'>
                                    <p className='deal-card-heading poppins_bold'>Tuesday Deals!</p>
                                    <p className='poppins_regular deal-card-text'>$10 off Any Top Shelf Eighth or Higher!
                                       $100 oz's On Our Good Deals Category!
                                       $75 OZ of Our Premium Shake!
                                       Edibles 4 for $50!</p>
                                    <div className='readmore'>Read more</div>

                                 </div>


                              </div>
                           </div>


                        </div>
                     </div>
                     <div className='col-md-6'>
                        <div className='col-md-12'>
                           <div className='deal-card'>

                              <div className='row'>
                                 <div className='col-md-4'>
                                    <img src={section2img} />

                                 </div>
                                 <div className='col-md-8'>
                                    <p className='deal-card-heading poppins_bold'>Tuesday Deals!</p>
                                    <p className='poppins_regular deal-card-text'>$10 off Any Top Shelf Eighth or Higher!
                                       $100 oz's On Our Good Deals Category!
                                       $75 OZ of Our Premium Shake!
                                       Edibles 4 for $50!</p>
                                    <div className='readmore'>Read more</div>

                                 </div>


                              </div>
                           </div>


                        </div>
                     </div>
                     <div className='col-md-6'>
                        <div className='col-md-12'>
                           <div className='deal-card'>

                              <div className='row'>
                                 <div className='col-md-4'>
                                    <img src={section2img} />

                                 </div>
                                 <div className='col-md-8'>
                                    <p className='deal-card-heading poppins_bold'>Tuesday Deals!</p>
                                    <p className='poppins_regular deal-card-text'>$10 off Any Top Shelf Eighth or Higher!
                                       $100 oz's On Our Good Deals Category!
                                       $75 OZ of Our Premium Shake!
                                       Edibles 4 for $50!</p>
                                    <div className='readmore'>Read more</div>

                                 </div>


                              </div>
                           </div>


                        </div>
                     </div>


                  </div>
               </div>
               <div className='col-md-12 text-center'>
                  <button className='ExploreBtn'>Explore More</button>
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
                              <p className='heading poppins_bold'>Haute Sauce THC Syrup 2000MG $40 </p>
                              <p className='poppins_regular text2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                              <button className='BuyNowBtn'>Buy Now</button>
                           </div>
                           <div className='col-md-4'>
                              <div className='section3InnerCard text-center'>
                                 <img className='w-100' src={sycrup} />

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

               <div className='col-md-12 text-center'>
                  <button className='ExploreBtn'>Explore More</button>
               </div>

            </section>
            {/* section4 end */}
            {/* section5 start */}

            <section className='container section5'>
               <div className='col-md-12 mt-mb-30 text-center'>
                  <div className='centerheading'>
                     <p className='text1 poppins_regular'><label className='horizontal-Line'></label> Categories! <label className='horizontal-Line'></label></p>
                     <p className='heading poppins_bold'>OUR MAIN   <label className='primarycolor'> CATEGORIES</label> </p>
                     <p className='text2 poppins_light'>WE HELP PEOPLE ELEVATE THEIR HAPPINESS.</p>
                  </div>
               </div>
               <div className='col-md-12'>
                  <div className='row'>
                     <div className='col-md-3'>
                        <div className='categoryCard'>
                           <p className='categoryCardtext1 poppins_semibold'>FLOWER</p>
                           <p className='categoryCardtext2 poppins_regular'>30 Products</p>
                           <p className='categoryCardtext3 poppins_light'>Shop Now</p>
                        </div>
                     </div>
                     <div className='col-md-3'>
                        <div className='categoryCard'>
                           <p className='categoryCardtext1 poppins_semibold'>WAX</p>
                           <p className='categoryCardtext2 poppins_regular'>41 Products</p>
                           <p className='categoryCardtext3 poppins_light'>Shop Now</p>
                        </div>
                     </div>
                     <div className='col-md-3'>
                        <div className='categoryCard'>
                           <p className='categoryCardtext1 poppins_semibold'>EDIBLE</p>
                           <p className='categoryCardtext2 poppins_regular'>30 Products</p>
                           <p className='categoryCardtext3 poppins_light'>Shop Now</p>
                        </div>
                     </div>
                     <div className='col-md-3'>
                        <div className='categoryCard'>
                           <p className='categoryCardtext1 poppins_semibold'>CLONES</p>
                           <p className='categoryCardtext2 poppins_regular'>0 Products</p>
                           <p className='categoryCardtext3 poppins_light'>Shop Now</p>
                        </div>
                     </div>
                     <div className='col-md-3'>
                        <div className='categoryCard'>
                           <p className='categoryCardtext1 poppins_semibold'>TOPICALS</p>
                           <p className='categoryCardtext2 poppins_regular'>30 Products</p>
                           <p className='categoryCardtext3 poppins_light'>Shop Now</p>
                        </div>
                     </div>
                     <div className='col-md-3'>
                        <div className='categoryCard'>
                           <p className='categoryCardtext1 poppins_semibold'>PRE-ROLLS</p>
                           <p className='categoryCardtext2 poppins_regular'>30 Products</p>
                           <p className='categoryCardtext3 poppins_light'>Shop Now</p>
                        </div>
                     </div>
                     <div className='col-md-3'>
                        <div className='categoryCard'>
                           <p className='categoryCardtext1 poppins_semibold'>CARTS</p>
                           <p className='categoryCardtext2 poppins_regular'>30 Products</p>
                           <p className='categoryCardtext3 poppins_light'>Shop Now</p>
                        </div>
                     </div>
                     <div className='col-md-3'>
                        <div className='categoryCard'>
                           <p className='categoryCardtext1 poppins_semibold'>MERCH</p>
                           <p className='categoryCardtext2 poppins_regular'>30 Products</p>
                           <p className='categoryCardtext3 poppins_light'>Shop Now</p>
                        </div>
                     </div>
                  </div>
               </div>


               <div className='col-md-12 text-center'>
                  <button className='ExploreBtn'>Explore More</button>
               </div>

            </section>
            {/* section5 end */}
            {/* section6 start */}
            <section className='container section6'>
               <div className='col-md-12 mt-mb-30'>
                  <div className='row'>
                     <div className='col-md-7'>
                        <p className='text1 poppins_regular'><label className='horizontal-Line'></label>Testimonials</p>
                        <p className='heading poppins_bold'>WHAT OUR VALUABLE <label className='primarycolor'> CLIENTS</label> SAY ABOUT US..</p>
      
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
                                  <img src={TestimonialImg1}/>

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
                                  <img src={TestimonialImg2}/>

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
                                  <img src={TestimonialImg3}/>

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
                        <p className='poppins_semibold text3'>We build trust and transparency between customer and our company.</p>
                        <p className='poppins_light text3'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

                     </div>
                   
                  </div>
               </div>
            </section>

            {/* section6 end */}
            {/* section7 start */}
            <section className='container section7'>
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
                                       <img className='carouselImg' src={slider1}/>
                                       <p className='poppins_bold carouselText '>Redeem 12 cards with your $25 order for your choice of one of the following</p>
                                  <p className='carouselText2 poppins_regular'>Read more</p>
                                    </div>
                                    <div className='carouselCard'>
                                       <img className='carouselImg' src={slider1}/>
                                       <p className='poppins_bold carouselText '>Redeem 12 cards with your $25 order for your choice of one of the following</p>
                                  <p className='carouselText2 poppins_regular'>Read more</p>
                                    </div>
                                    <div className='carouselCard'>
                                       <img className='carouselImg' src={slider1}/>
                                       <p className='poppins_bold carouselText '>Redeem 12 cards with your $25 order for your choice of one of the following</p>
                                  <p className='carouselText2 poppins_regular'>Read more</p>
                                    </div>
                                    <div className='carouselCard'>
                                       <img className='carouselImg' src={slider1}/>
                                       <p className='poppins_bold carouselText '>Redeem 12 cards with your $25 order for your choice of one of the following</p>
                                  <p className='carouselText2 poppins_regular'>Read more</p>
                                    </div>
                                   
                                </Carousel>

               </div>

             
            </section>
            {/* section7 end */}
             {/* section8 start */}


            <section className='container section8'>
               <div className='col-md-12 mt-mb-30 text-center'>
                  <div className='centerheading'>
                     <p className='text1 poppins_regular'><label className='horizontal-Line'></label> ABOUT US <label className='horizontal-Line'></label></p>
                     <p className='heading poppins_bold'>LET US KNOW ABOUT US MORE   <label className='primarycolor'> CATEGORIES</label> </p>
                     <p className='text2 poppins_light'>If you live, work or are just passing through the 760 High Desert area, call Route 66 Dispensary. Route 66 is the premier dispensary for miles around.
We strive to provide every customer with a great delivery experience, as well as pride ourselves in having a variety of THC and CBD products to choose from that can be delivered straight to you.
Our products are handpicked by our highly knowledgeable cannabis curators and we also offer accessories that compliment our cannabis for your experience.
We value integrity and quality in our products and are dedicated to providing the best quality cannabis products we can find for our consumer's medical needs and/or recreational experience.</p>
                
                  <img className='mt-5' src ={Logo}/>
                  </div>
               </div>
             

          

            </section>
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
Dashboard.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(Dashboard);

