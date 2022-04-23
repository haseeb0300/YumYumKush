import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link, withRouter } from 'react-router-dom';

import footer from '../assets/images/footer/footer.png'
import footerlogo from '../assets/images/header/Logo.png'
import socialMedia1 from '../assets/images/footer/1.png'
import socialMedia2 from '../assets/images/footer/2.png'
import socialMedia3 from '../assets/images/footer/3.png'
import socialMedia4 from '../assets/images/footer/4.png'


class Footer extends Component {

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

            {/* footer start */}

            <footer>
               <div className='col-md-12 p-0'>
                  <img className='w-100 footerTop' src={footer} />
                  <div className='col-md-12 footerMid p-0'>

                     <div className='footerMid'>
                        <div className='col-md-12 pb-5'>
                           <div className='row'>
                              <div className='col-md-5 text-center'>
                                 <img className='footerlogo' src={footerlogo} />
                                 <p className='footerText1 poppins_regular'>support@yumyumkush.com</p>
                                 <button className='socialMediaContainer'>
                                    <img src={socialMedia1} />
                                 </button>
                                 <button className='socialMediaContainer'>
                                    <img src={socialMedia2} />

                                 </button>
                                 <button className='socialMediaContainer'>
                                    <img src={socialMedia3} />

                                 </button>
                                 <button className='socialMediaContainer'>
                                    <img src={socialMedia4} />

                                 </button>

                              </div>
                              <div className='col-md-2'></div>
                              <div className='col-md-5'>
                                 <div className='row'>
                                    <div className='col-md-6'>
                                       <p className='poppins_semibold footerNav'>Navigation</p>
                                       <p className='poppins_regular footerNavItem'>Home</p>
                                       <p className='poppins_regular footerNavItem'>Store</p>
                                       <p className='poppins_regular footerNavItem'>Contact us</p>
                                       <p className='poppins_regular footerNavItem'>About us</p>
                                       <p className='poppins_regular footerNavItem'>Customer Feedback</p>
                                      

                                    </div>
                                    <div className='col-md-6'>
                                    <p className='poppins_semibold footerNav'>Extra</p>
                                       <p className='poppins_regular footerNavItem'>Explore</p>
                                       <p className='poppins_regular footerNavItem'>Liquid</p>
                                       <p className='poppins_regular footerNavItem'>Weed</p>
                                       <p className='poppins_regular footerNavItem'>Medication</p>
                                       <p className='poppins_regular footerNavItem'>Products</p>
                                    </div>
                                 </div>


                              </div>
                           </div>
                        
                        </div>
                        <div className='col-md-12 text-center'>
                           <div className='footerLine'></div>
                              <p className='poppins_regular footerCopyRight mb-0'>© NextisHost 2022 | All right reserves Yum Yum Kush 2022</p>

                           </div>

                     </div>

                  </div>
               </div>
            </footer>

            {/* footer end */}
         </>


      )
   }

}
const mapStatetoProps = ({ auth }) => ({
   user: auth.user
})
const mapDispatchToProps = ({

})
Footer.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(Footer);

