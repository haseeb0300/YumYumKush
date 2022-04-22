import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { Modal } from 'react-bootstrap';

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import Lock from '../../assets/images/sideCart/lock.png'


class Feedback extends Component {

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
                <section className=''>
                    <div className='col-md-12'>
                        <div className='row'>
                            <div className='col-md-2'></div>
                            <div className='col-md-8'>
                                <div className='FeedBackContainer'>
                                    <div className='FeedBackCard'>
                                        <p className='poppins_bold FeedBackCardHeading'>CONGRATULATION</p>
                                        <p className='poppins_regular FeedBackCardText'>Your order has been placed! Rate our services</p>
                                        <p className='poppins_regular BillingCardLabel'>Customer FeedBack</p>
                                        <textarea className='BillingCardTextArea' placeholder='Enter Here'></textarea>
                                        <button className='Paynowbtn'>Submit FeedBack</button>
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
Feedback.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(Feedback);

