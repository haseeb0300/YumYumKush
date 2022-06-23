import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Header from '../../component/Header'

import { Link, withRouter } from 'react-router-dom';
import { getCategory } from '../../store/actions/productAction';

import Footer from '../../component/Footer'

class Categories extends Component {

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
      this.props.getCategory().then((res) => {
         console.log(res)
         this.setState({
            categoryList: res.content,
         }
         )
      }).catch((err) => {
         console.log(err)

      })
    
   }
   renderCategory = () => {
      if (this.state.categoryList && this.state.categoryList.length < 1) {

         return () =>

            <p class="text-center" >   No Data To Display</p>



      }
      return this.state.categoryList.map((item, i) =>
      <>
           
      <div className='col-md-3'>
         <div className='categoryCard'onClick={() => this.onclickCategoryItem(item)}>
            <p className='categoryCardtext1 poppins_semibold'>{item.title}</p>
            <p className='categoryCardtext2 poppins_regular'>{item.Inventries.length} Products</p>
            <p className='categoryCardtext3 poppins_light'>Shop Now</p>
         </div>
      </div>
   </>
      )



   }
   onclickDealItem = (item) => {

      this.props.history.push('/dealdetail', { item: item })
  }
  
  onclickCategoryItem = (item) => {

   this.props.history.push('/categoryproduct', { item: item })
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
  
   getCategory
})
Categories.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(Categories);

