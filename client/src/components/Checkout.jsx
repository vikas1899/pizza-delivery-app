import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useDispatch, useSelector } from 'react-redux'
import { placeOrder } from '../actions/orderActions'
import Loading from '../components/Loading';
import Success from '../components/Success';
import Error from '../components/Error'; // Ensure this component exists and is correctly imported


const Checkout = ({ subtotal }) => {

    const orderstate = useSelector((state) => state.placeOrderReducer)
    const { loading, error, success } = orderstate
    const dispatch = useDispatch()

    function tokenHandler(token) {
        console.log(token)
        dispatch(placeOrder(token, subtotal))
    }

    return (
        <div>

            {loading && (<Loading />)}
            {error && (<Error error="something went wrong" />)}
            {success && (<Success success="your order placed successfully" />)}

            <StripeCheckout
                amount={subtotal * 100}
                shippingAddress
                token={tokenHandler}
                stripeKey={'pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3'}
                currency="INR"
            >
                <button className='btn'>Pay Now</button>
            </StripeCheckout>
        </div>
    )
}

export default Checkout
