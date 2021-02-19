import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import StripeCheckout from 'react-stripe-checkout'
import { selectCurrentUser } from '../../Redux/Selectors/user.selector'

const StripeButton = ({ price, currentUser }) => {
    const priceForStripe = price * 100
    const publishableKey = "pk_test_51IMg5cEWBuEGxI75vmn9h5JK5EQd0oXQrib1MNukwpSGShmbfcK7V7KC8ax8pNvKunNU20kwFA413yM6wUkodHHP00bGVl3Q3W"

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }
    return (
        <StripeCheckout 
            label="Pay Now"
            name="Kidshop Clothing Inc."
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
            email={currentUser?.email}
        />
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(StripeButton)
