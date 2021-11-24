import React from 'react'
import "./checkout-styles.scss"
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../Redux/cart/cart.selectors'
import CheckoutItem from '../../Component/checkout-item/checkout-item.component'
import StripeCheckOutButton from '../../Component/stripe button/stripe-button.component'


const CheckoutPage = ({cartItems, total}) => (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>PRODCUT</span>
                </div>
                <div className="header-block">
                    <span>DESCRIPTION</span>
                </div>
                <div className="header-block">
                    <span>QUANTITY</span>
                </div>
                <div className="header-block">
                    <span>PRICE</span>
                </div>
                <div className="header-block">
                    <span>REMOVE</span>
                </div>
            </div>
            {cartItems.map(cartItem=> (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))}
            <div className="total">
                    <span>Total: ${total}</span>
                </div>
                <div className='test-warning'>
                    *Please use the following credit card for test payments*
                    <br />
                    <br />
                    4242 4242 4242 4242 - Exp: 01/24 CVV: 123
                </div>
            <StripeCheckOutButton price={total}/>
        </div>
    )

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)