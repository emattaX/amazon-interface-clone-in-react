import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {

    const [{ cart, user },dispatch] = useStateValue()

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' 
                src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg' 
                alt='' 
                />
                <div className='checkout__title'>
                    <h3>Hi there👋  {user?.email} </h3>
                    <h2>Your Shopping Cart</h2>
                    {/* For each item in the cart render the CheckoutProduct component*/}
                    {cart.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
