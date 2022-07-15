import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { Modal } from 'react-bootstrap';

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import Lock from '../../assets/images/sideCart/lock.png'
import { createOrder } from '../../store/actions/orderAction';
import { geSingleInventory, geSingleDeal } from '../../store/actions/productAction';
import { addToCart, removeFromCart } from '../../store/actions/cartAction';

class Checkout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: {},

            serverError: {},
            isLoading: false,
            showModal: false,
            firstName: '',
            lastName: '',
            address: '',
            email: '',
            state: '',
            city: '',
            postalCode: '',
            phoneNum: '',
            price: '',
            productList: [],
            dealList: [],
            cartList: [],
            checkItemAvaibility: [],



        };
    }

    componentDidMount() {
        this.generateListProductAndDeals();
    }

    checkQuantityOfProductDeal = async () => {

        var tempList = []
        const promises = await this.props.cart.map(async (item, i) => {
            return new Promise(async (resolve, reject) => {
                var obj = {}
                if (item.InventryId) {
                    await this.props.geSingleInventory(item.InventryId).then((res) => {
                        if (res.content.totalQuantity !== 0 && (item.quantityToMinus * item.quantity) <= res.content.totalQuantity) {
                            obj = {
                                key: item.InventryId,
                                name: item.title,
                                status: true,
                            }
                            tempList.push(obj)
                        } else {
                            obj = {
                                key: item.InventryId,
                                name: item.title,
                                status: false,
                            }
                            tempList.push(obj)
                        }
                        resolve()
                    }).catch((err) => {
                        console.log(err)
                        reject(err)
                    })
                } else {
                    await this.props.geSingleDeal(item.DealId).then((res) => {
                        console.log('Deal :', res.content.totalQuantity)
                        if (res.content.totalQuantity !== 0 && item.quantity <= res.content.totalQuantity) {
                            obj = {
                                key: item.DealId,
                                name: item.dealName,
                                status: true,
                            }
                            tempList.push(obj)

                        } else {
                            obj = {
                                key: item.DealId,
                                name: item.dealName,
                                status: false,
                            }
                            tempList.push(obj)

                        }
                        resolve()
                    }).catch((err) => {
                        console.log(err)
                        reject(err)

                    })
                }
            })


        })
        await Promise.all(promises)


        console.log(tempList)
        let checkOutOfStock = tempList.some(item => item['status'] === false)
        if (checkOutOfStock) {
            this.setState({
                checkItemAvaibility: tempList
            }, () => { console.log(this.state.checkItemAvaibility) })
        } else {
            this.onClickOrder();
        }
    }


    componentWillMount() {


        if (this?.props?.location?.state?.total) {
            this.setState({

                price: this.props?.location?.state?.total
            })
        }

    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    generateListProductAndDeals = () => {
        this.props.cart.map((item, i) => {
            var productList = []
            var dealList = []
            this.props.cart.map((item, i) => {
                if (item.InventryId) {
                    productList.push(item)
                } else {
                    dealList.push(item)
                }
                this.setState({ productList: productList, dealList: dealList })
            }
            )
        })
    }

    onClickOrder = async () => {
        var obj = {
            // InventryId: this.state.InventryId,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            email: this.state.email,
            state: this.state.state,
            city: this.state.city,
            postalCode: this.state.postalCode,
            phoneNum: this.state.phoneNum,
            price: this.state.price,
            productList: this.state.productList,
            dealList: this.state.dealList,


        }

        this.setState({
            isLoading: true
        })

        var orderDetail = {}

        this.props.createOrder(obj).then((res) => {
            console.log(res)
            if (res.status) {
                console.log(res)
                // this.getUpdatedList()
                this.setState({
                    firstName: '',
                    lastName: '',
                    address: '',
                    email: '',
                    state: '',
                    city: '',
                    postalCode: '',
                    phoneNum: '',
                    price: '',
                    productList: '',

                })
                orderDetail = {
                    content: res.content,
                    cart: this.props.cart
                }
                this.props.history.push('/feedback', { 'item': orderDetail });

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
        const { isLoading, errors } = this.state;
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
                <section className=''>
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
                                                        <input
                                                            className='BillingCardInput'
                                                            placeholder='Enter Here'
                                                            name="firstName"
                                                            onChange={this.onChange}
                                                            value={this.state.firstName}
                                                        />
                                                        {errors.firstName && <div className="LoginError">{errors.firstName}</div>}

                                                    </div>
                                                    <div className='col-md-6'>
                                                        <p className='poppins_regular BillingCardLabel'>Last Name</p>
                                                        <input
                                                            className='BillingCardInput'
                                                            placeholder='Enter Here'
                                                            name="lastName"
                                                            onChange={this.onChange}
                                                            value={this.state.lastName}
                                                        />
                                                        {errors.lastName && <div className="LoginError">{errors.lastName}</div>}

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-12 mt-3'>

                                                <p className='poppins_regular BillingCardLabel'>Email</p>
                                                <input
                                                    className='BillingCardInput'
                                                    placeholder='Enter Here'
                                                    name="email"
                                                    onChange={this.onChange}
                                                    value={this.state.email}
                                                />
                                                {errors.email && <div className="LoginError">{errors.email}</div>}


                                            </div>
                                            <div className='col-md-12 mt-3'>
                                                <p className='poppins_regular BillingCardLabel'>Street Address</p>
                                                <input
                                                    className='BillingCardInput'
                                                    placeholder='Enter Here'
                                                    name="address"
                                                    onChange={this.onChange}
                                                    value={this.state.address}
                                                />
                                                {errors.address && <div className="LoginError">{errors.address}</div>}

                                            </div>

                                            <div className='col-md-12 mt-3'>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <p className='poppins_regular BillingCardLabel'>State/Province</p>
                                                        <input className='BillingCardInput'
                                                            placeholder='Enter Here'
                                                            name="state"
                                                            onChange={this.onChange}
                                                            value={this.state.state}
                                                        />
                                                        {errors.state && <div className="LoginError">{errors.state}</div>}

                                                    </div>
                                                    <div className='col-md-6'>
                                                        <p className='poppins_regular BillingCardLabel'>City</p>
                                                        <input
                                                            className='BillingCardInput'
                                                            placeholder='Enter Here'
                                                            name="city"
                                                            onChange={this.onChange}
                                                            value={this.state.city}
                                                        />
                                                        {errors.city && <div className="LoginError">{errors.city}</div>}

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-12 mt-3'>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <p className='poppins_regular BillingCardLabel'>Zip/Postal Code</p>
                                                        <input className='BillingCardInput' placeholder='Enter Here'
                                                            name="postalCode"
                                                            onChange={this.onChange}
                                                            value={this.state.postalCode}
                                                        />
                                                        {errors.postalCode && <div className="LoginError">{errors.postalCode}</div>}



                                                    </div>
                                                    <div className='col-md-6'>
                                                        <p className='poppins_regular BillingCardLabel'>Phone</p>
                                                        <input className='BillingCardInput'
                                                            placeholder='Enter Here'
                                                            name="phoneNum"
                                                            onChange={this.onChange}
                                                            value={this.state.phoneNum}
                                                        />
                                                        {errors.phoneNum && <div className="LoginError">{errors.phoneNum}</div>}

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
                                                            <div className='col-md-3 text-center my-auto'>
                                                                <input type="radio" name="COD" value="COD" /> <label className='RadioLabel'>COD</label>


                                                            </div>
                                                            <div className='col-md-9 text-center my-auto'>
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
                                        {this.props.cart.map((item, i) => {
                                            return (
                                                <div className='col-12'>
                                                    {item.DealId && (

                                                        <div className='CartItemCard'>
                                                            <div className='col-12'>
                                                                <div className='row'>

                                                                    <>

                                                                        <div className='col-12 my-auto'>
                                                                            <div className='row'>
                                                                                <div className='col-5'>
                                                                                    <img className=' CheckoutCartitemImg' src={item?.DealImages[0]?.imageUrl} />

                                                                                </div>
                                                                                <div className='col-7'>
                                                                                    <p className='poppins_bold '>{item?.dealName}</p>
                                                                                    <p className='poppins_semibold CartItemCardtext2'>{item.dealPrice * item?.quantity}</p>

                                                                                </div>
                                                                            </div>
                                                                        </div>


                                                                        {/* {item.InventryId && (

                                                                        <div className='col-12 my-auto'>
                                                                            <p className='poppins_bold '>{item.title}</p>
                                                                            <p className='poppins_semibold CartItemCardtext2'>{item.price}</p>
                                                                        </div>
                                                                    )} */}
                                                                    </>

                                                                </div>
                                                            </div>

                                                        </div>
                                                    )}
                                                    {item.InventryId && (

                                                        <div className='CartItemCard'>
                                                            <div className='col-12'>
                                                                <div className='row'>

                                                                    <>

                                                                        <div className='col-12 my-auto'>
                                                                            <div className='row'>
                                                                                <div className='col-5'>
                                                                                    <img className=' CheckoutCartitemImg' src={item?.InventryImages[0]?.imageUrl} />

                                                                                </div>
                                                                                <div className='col-7'>
                                                                                    <p className='poppins_bold '>{item.title}</p>
                                                                                    <p className='poppins_semibold CartItemCardtext2'>$ {item.price * item?.quantity}</p>

                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </>

                                                                </div>
                                                            </div>

                                                        </div>
                                                    )}

                                                </div>
                                            )
                                        })}
                                    </div>

                                    <div className='GrandTotalCard col-md-12'>
                                        <div className='col-12'>

                                            <div className='col-12'>


                                                <div className='col-12 my-auto'>
                                                    <div className='row'>
                                                        <div className='col-8'>
                                                            <p className='poppins_bold BillingCardTitle'>Grand Total </p>

                                                        </div>
                                                        <div className='col-4 text-right'>
                                                            <p className='poppins_semibold CartItemCardtext2'>$ {this.state.price}</p>

                                                        </div>
                                                    </div>


                                                </div>
                                                <div className='col-md-12'>
                                                    <div className='row'>
                                                        <div className='col-1 '>
                                                            <input type="checkbox" name="privacy" value="privacy" />


                                                        </div>
                                                        <div className='col-10 '>
                                                            <p className='poppins_regular BillingCardLabel'>Please check to acknowledge our<label className='primarycolor'>Privacy & Terms Policy</label> </p>

                                                        </div>
                                                    </div>
                                                </div>
                                                {this.state.checkItemAvaibility.length > 0 && this.state.checkItemAvaibility.map((item, i) => {
                                        return (
                                            <div>
                                                {!item.status && (
                                                <p className='notAvailble col-md-12'>{item.name} is not Available</p>
                                                )}
                                            </div>
                                        )
                                    })}
                                                <div className='col-md-12 text-center mt-3'>

                                                    <button className='Paynowbtn' onClick={() => this.checkQuantityOfProductDeal()}>Pay ${this.state.price}</button>
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
const mapStatetoProps = ({ auth, cart }) => ({
    user: auth.user,
    cart: cart?.cart

})
const mapDispatchToProps = ({
    addToCart,
    removeFromCart,
    createOrder,
    geSingleInventory,
    geSingleDeal
})
Checkout.propTypes = {
};
export default connect(mapStatetoProps, mapDispatchToProps)(Checkout);

