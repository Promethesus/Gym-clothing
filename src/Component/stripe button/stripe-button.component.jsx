import React from 'react'
import StripeCheckOut from 'react-stripe-checkout'

const StripeCheckOutButton = ({ price })=> {
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_51Jz9HIBDSrtPc4is4MctWvWWkota9IJEZAer3dEvABE58HRhvfZtTQb8laFBI1rw0CiZ9TwoXXQ8KY7Kuu6Py2W3003ZmjLa9c'

    const onToken = token => {
        console.log(token)
        alert("Payment Successful")
    }

    return ( 
        <StripeCheckOut 
            label= "Pay Now"
            name="Gym Gear ltd."
            billingAddress
            shippingAddress
            description={`Your Total is $${price}`}
            amount = {priceForStripe}
            panelLabel='Pay Now'
            token= {onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckOutButton