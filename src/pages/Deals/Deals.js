import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Header from '../../component/Header'

import { Link, withRouter } from 'react-router-dom';
import { getDeal, getInventory, getCategory } from '../../store/actions/productAction';

import Footer from '../../component/Footer'

import sycrup from '../../assets/images/dashboard/section3/sycrup.svg'
class Deals extends Component {

   constructor(props) {
      super(props);
      this.state = {
         serverError: {},
         isLoading: false,
         dealList: [],
         inventoryList: [],
         categoryList: [],


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
    
   }
   renderDeals = () => {
      if (this.state.dealList && this.state.dealList.length < 1) {

         return () =>

            <p class="text-center" >   No Data To Display</p>



      }
      return this.state.dealList.map((item, i) =>
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
   onclickDealItem = (item) => {

      this.props.history.push('/dealdetail', { item: item })
  }
  
  onclickInventoryItem = (item) => {

   this.props.history.push('/productdetail', { item: item })
}




   render() {
      // const { t, i18n } = this.props
      const { t, i18n, location, user } = this.props
      const { isLoading, inventoryList } = this.state;
      if (isLoading) {
         return (
            <div className="loader-large"></div>
         )
      }
      return (
         <>
            <Header />
         
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
                     {this.renderDeals()}
            



                  </div>
               </div>
           

            </section>
            {/* section2 end */}
            {/* section3 start */}

       

           
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
   getDeal,
   getInventory,
   getCategory
})
Deals.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(Deals);

