import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { Modal } from 'react-bootstrap';

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import Lock from '../../assets/images/sideCart/lock.png'


class Checkout extends Component {

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
                <section className='container'>
                    <div className='checkoutContainer'>
                        <div className='col-md-12 mt-mb-30 text-center'>
                            <p className='heading poppins_bold'>CHECKOUT <label className='primarycolor'>  PLACE </label>  YOUR ORDER</p>


                        </div>
                        <div className='col-md-12'>
                            <div className='row'>
                                <div className='col-md-7'>
                                    <div className='col-md-12'>

                                        <div className='BillingCard'>
                                            <div className='col-md-12'>
                                                <p className='poppins_bold BillingCardTitle'>Billing Address</p>
                                            </div>
                                            <div className='col-md-12 mt-3'>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <p className='poppins_regular BillingCardLabel'>First Name</p>
                                                        <input className='BillingCardInput' placeholder='Enter Here'></input>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <p className='poppins_regular BillingCardLabel'>Last Name</p>
                                                        <input className='BillingCardInput' placeholder='Enter Here'></input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-12 mt-3'>

                                                <p className='poppins_regular BillingCardLabel'>Email</p>
                                                <input className='BillingCardInput' placeholder='Enter Here'></input>

                                            </div>
                                            <div className='col-md-12 mt-3'>
                                                <p className='poppins_regular BillingCardLabel'>Street Address</p>
                                                <input className='BillingCardInput' placeholder='Enter Here'></input>
                                            </div>

                                            <div className='col-md-12 mt-3'>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <p className='poppins_regular BillingCardLabel'>State/Province</p>
                                                        <input className='BillingCardInput' placeholder='Enter Here'></input>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <p className='poppins_regular BillingCardLabel'>City</p>
                                                        <input className='BillingCardInput' placeholder='Enter Here'></input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-12 mt-3'>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <p className='poppins_regular BillingCardLabel'>Zip/Postal Code</p>
                                                        <input className='BillingCardInput' placeholder='Enter Here'></input>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <p className='poppins_regular BillingCardLabel'>Phone</p>
                                                        <input className='BillingCardInput' placeholder='Enter Here'></input>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-12'>

                                        <div className='PaymentCard'>
                                            <div className='col-md-12'>
                                                <p className='poppins_bold BillingCardTitle'>Payment Method</p>
                                            </div>

                                            <div className='col-md-12 mt-3'>
                                                <div className='PaymentInnerCard'>
                                                    <div className='col-md-12'>
                                                        <div className='row'>
                                                            <div className='col-3 my-auto'>
                                                                <input type="radio" name="COD" value="COD" /> <label className='RadioLabel'>COD</label>


                                                            </div>
                                                            <div className='col-9 my-auto'>
                                                                <p className='poppins_regular BillingCardLabel'>You will be paying money when the package is deliverd to your door step</p>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-12'>
                                                <p className='poppins_regular BillingCardLabel2'><img className='mr-3 lockimg' src={Lock} />We protect your payment information using encryption to provide bank-level security.</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-5'>
                                    <div className='OrderCard'>
                                        <div className='col-md-12'>
                                            <p className='poppins_bold BillingCardTitle '>Order Review</p>
                                        </div>
                                        <div></div>
                                        <div className='col-12'>

                                        <div className='CartItemCard'>
                                            <div className='col-12'>
                                                <div className='row'>
                                                  
                                                    <div className='col-12 my-auto'>
                                                        <p className='poppins_bold CartItemCardtext1'>God's Gift Indica</p>
                                                        <p className='poppins_semibold CartItemCardtext2'>$ 50.00</p>
                                                    </div>
                                                  
                                                </div>
                                            </div>

                                        </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </section>






                <Footer />

            </>

        )
    }

}
const mapStatetoProps = ({ auth }) => ({
    user: auth.user
})
const mapDispatchToProps = ({

})
Checkout.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(Checkout);

