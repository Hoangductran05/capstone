/* eslint-disable no-unused-vars */
import { useState } from "react"
import React from 'react'
import { Firestore } from "firebase/firestore";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { createStripeCustomer } from "../firebase";

const Checkout = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', phone: '', address: '', city: ''});
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const stripe = useStripe()
  const elements = useElements()

  const handleChange = (e) => {
     setForm({ ...form, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = async (e) => {
     e.preventDefault();
     // submission logic here
     setLoading(true)
     setError(null)

     if (!stripe || !elements) {
      setError("Please reload the page and try again.")
      return;
     }

     const cardElement = elements.getElement(CardElement)

     if (!cardElement) {
      setError("Please enter your payment details")
      return;
     }

     const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
     })

     if (error) {
      setError(error.message)
      return;
     }
     try {
      const { data } = await createStripeCustomer({ email: form.email });
      const customerId = data.customerId;

      // Create the charge on Stripe's servers - this will charge the user's card
      await stripe.confirmCardPayment(paymentMethod.id, {
          payment_method: paymentMethod.id,
          amount: 1000, // 10 USD
          currency: "usd",
      });

      // Save the customer ID to Firestore
      await Firestore.collection("customers").add({ customerId });

      // Clear the form and show a success message
      setForm({ name: '', email: '', password: '', phone: '', address: '', city: '' });
      setError(null);
      setLoading(false);
  } catch (error) {
      setError(error.message);
      setLoading(false);
  }


  };
  return (
    <div className=' text-stone-500 h-[100vh] flex justify-center items-center'> 
    <div className=' bg-stone-800 border border-stone-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-20 relative '>
    <h1 className='text-4x1 text-stone-600 font-bold text-center mb-6'>Checkout</h1>
    <form onSubmit={handleSubmit}>
      
      <div className=' relative my-4'>
      <input
        className=' block w-72 py-2.3 px-0 text-sm text-primary bg-transparent border-0 border-b-2 border-x-gray-300 appearance-none dark:focus:border-stone-500 focus:outline-none focus:ring-0 focus:text-primary focus:border-stone-500 peer'
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      </div>

      <div className=" relative my-4">
      <input
        className=' block w-72 py-2.3 px-0 text-sm text-primary bg-transparent border-0 border-b-2 border-x-gray-300 appearance-none dark:focus:border-stone-500 focus:outline-none focus:ring-0 focus:text-primary focus:border-stone-500 peer'
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      </div>

      <div className=" relative my-4">
      <input
        className=' block w-72 py-2.3 px-0 text-sm text-primary bg-transparent border-0 border-b-2 border-x-gray-300 appearance-none dark:focus:border-stone-500 focus:outline-none focus:ring-0 focus:text-primary focus:border-stone-500 peer'
        type="tel"
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
        required
      />
      </div>

      <div className=" relative my-4">
      <input
        className=' block w-72 py-2.3 px-0 text-sm text-primary bg-transparent border-0 border-b-2 border-x-gray-300 appearance-none dark:focus:border-stone-500 focus:outline-none focus:ring-0 focus:text-primary focus:border-stone-500 peer'
        type="text"
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handleChange}
        required
      />
      </div>

      {/* button */}
      <div className=" relative my-4">
      <CardElement />
      <button type="submit" disabled={!stripe}
        className='w-full mb-4 text-[18px] mt-6 rounded-full bg-neutral-400 text-neutral-600 hover:bg-neutral-200 hover:text-stone-700 py-2'
      >
        Pay
      </button>
      </div>

    
    
    </form>
    </div>
  </div>
  )
}

export default Checkout