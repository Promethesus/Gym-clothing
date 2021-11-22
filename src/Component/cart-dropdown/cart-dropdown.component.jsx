import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { withRouter } from "react-router-dom";
import "./cart-dropdown-styles.scss"
import CartItem from "../cart-item/cart-item.component";
import {connect} from 'react-redux'
import { selectCartItems } from "../../Redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../Redux/cart/cart.actions";

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ? 
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
                :
                <span className="empty-message">No Items In Cart</span>
            }
        </div>
        <CustomButton 
            onClick={()=> {
                history.push('/checkout');
                dispatch(toggleCartHidden())
        }}>
        GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))