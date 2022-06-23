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

import section1img from '../../assets/images/dashboard/section1/1.png'

import { v4 } from 'uuid';

import Footer from '../../component/Footer'
import { getInventory } from '../../store/actions/productAction';
import { addToCart, removeFromCart } from '../../store/actions/cartAction';


import sycrup from '../../assets/images/dashboard/section3/sycrup.svg'
class CategoryProduct extends Component {

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
         InventoryList: [],
         InventryId: "",
         CategoryId: "",
         total: 0,
         categoryList: [],
         checkedBoxes: [],
         isLoading: false,
         showModal: false,
         productList: [],


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
   onclickInventoryItem = (item) => {

    this.props.history.push('/productdetail', { item: item })
}
   componentWillMount() {

      if (this.props != null && this.props.location.state != null && this.props.location.state.item) {
         console.log(this.props.location.state.item)

         const { CategoryId, title, description,Inventries,  InventoryList } = this.props?.location?.state?.item
         this.setState({
            CategoryId: CategoryId,
            title: title,
            description: description,
            InventoryList: Inventries
         }, () => { console.log(this.state.InventoryList) })
      }
   }
 
   renderInventory = () => {
      if (this.state.InventoryList && this.state.InventoryList.length < 1) {

         return () =>

            <p class="text-center" >   No Data To Display</p>



      }
      return this.state.InventoryList.map((item, i) =>
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

   handleTotal = () => {
      var tempTotal = 0
      for (var i = 0; i < this.state.checkedBoxes.length; i++) {
         tempTotal = tempTotal + parseInt(this.state.checkedBoxes[i].price)
      }
      this.setState({ total: tempTotal })
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
      this.setState({showModal: false})
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
            handleCloseModal= {this.handleCloseModal}
            history = {this.props.history}

             />
          


            {/* section4 start */}


            <div className='ProductDetailContainer container section4'>
            <div className='col-md-12 mt-mb-30 text-center'>
                  <div className='centerheading'>
                     <p className='text1 poppins_regular'><label className='horizontal-Line'></label> Category! <label className='horizontal-Line'></label></p>
                     <p className='heading poppins_bold'>  <label className='primarycolor'> {this.state.title}</label> </p>
                     <p className='text2 poppins_light'>Products of {this.state.title}</p>

                  </div>
               </div>
               <div className='col-md-12'>
                  <div className='text-center'>
                  </div>
                  <div className='col-md-12 mt-5 mb-5'>
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
CategoryProduct.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(CategoryProduct);

