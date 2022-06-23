import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { Modal } from 'react-bootstrap';

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import Lock from '../../assets/images/sideCart/lock.png'
import { createFeedback } from '../../store/actions/feedbackAction';
import { sendMail } from '../../store/actions/orderAction';

class Feedback extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serverError: {},
            isLoading: false,
            showModal: false,
            customerName: '',
            feedback: '',
            errors: ''
        };
    }

    componentDidMount() {

    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onclickFeedback = () => {
        var obj = {
            // InventryId: this.state.InventryId,
            name: this.state.customerName,
            feedback: this.state.feedback,



        }
        console.log(obj)

        this.setState({
            isLoading: true
        })

        this.props.createFeedback(obj).then((res) => {
            console.log(res)
            if (res.status) {
                console.log(res)
                // this.getUpdatedList()
                this.setState({
                    name: '',
                    feedback: '',

                })
                this.props.history.push('/');

                // this.getTitle(this.state.Chapter_ID)


            }
        }).catch((err) => {

            this.setState({ isLoading: false })
            var validationError = {}
            var serverError = []
            console.log(err.hasOwnProperty('validation'))

            if (err.hasOwnProperty('validation')) {
                console.log(err)

                err.validation.map(obj => {
                    if (obj.hasOwnProperty('param')) {
                        validationError[obj["param"]] = obj["msg"]
                    } else {
                        serverError = [...serverError, obj]
                    }
                    console.log(obj["msg"])
                });
                this.setState({ errors: validationError });
                this.setState({ serverError: serverError });
            } else {
                this.setState({ serverError: [{ "msg": "server not responding" }] })
            }
        });
        console.log(obj)
    }

    render() {
        // const { t, i18n } = this.props
        const { t, i18n, location, user, } = this.props
        const { isLoading, customerName, feedback, errors } = this.state;
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
                                    <div className='FeedBackCard checkoutContainer'>
                                        <p className='poppins_bold FeedBackCardHeading'>CONGRATULATION</p>
                                        <p className='poppins_regular FeedBackCardText'>Your order has been placed! Rate our services</p>
                                        <p className='poppins_regular BillingCardLabel'>Customer Name</p>
                                        <input className='BillingCardInput'
                                            placeholder='Enter Here'
                                            name="customerName"
                                            onChange={this.onChange}
                                            value={this.state.customerName}
                                        />
                                        {errors.name && <div className="LoginError1">{errors.name}</div>}

                                        <p className='poppins_regular BillingCardLabel'>Customer FeedBack</p>
                                        <textarea
                                            className='BillingCardTextArea'
                                            placeholder='Enter Here'
                                            name="feedback"
                                            onChange={this.onChange}
                                            value={this.state.feedback}

                                        ></textarea>
                                        {errors.feedback && <div className="LoginError1">{errors.feedback}</div>}

                                        <button className='Paynowbtn' onClick={() => this.onclickFeedback()}>Submit FeedBack</button>
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
    createFeedback,
    sendMail
})
Feedback.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(Feedback);

