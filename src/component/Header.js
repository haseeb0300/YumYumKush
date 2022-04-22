import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link, withRouter } from 'react-router-dom';

import Logo from '../assets/images/header/Logo.png'
import Cart from '../assets/images/header/Cart.svg'




class Contact extends Component {

   constructor(props) {
      super(props);
      this.state = {
         serverError: {},
         isLoading: false,
         newBookList: [],

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

            {/* header start */}

            {/* headerDesktop Start */}
            <div className='DesktopHeader'>
               <div className='col-md-12 pt-pb-30 backwhite'>
                  <div className='row'>
                     <div className='col-md-2 text-center'>
                        <Link to="/">
                           <img className='w-100' src={Logo} />
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
                                 <p className=' headerTabs'>Store</p>
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
                              <img src={Cart} />
                           </div>
                        </div>


                     </div>
                  </div>
               </div>
            </div>
            {/* headerDesktop End */}

            {/* header end */}
         </>


      )
   }

}
const mapStatetoProps = ({ auth }) => ({
   user: auth.user
})
const mapDispatchToProps = ({

})
Contact.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(Contact);

