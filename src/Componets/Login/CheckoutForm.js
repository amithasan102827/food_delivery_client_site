import React, { useEffect, useState } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import './CheckoutForm.css';



import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Button } from 'bootstrap';

const CheckoutForm = ({total,cart} ) => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);




  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
        setError(error.message);
        setSuccess('');
    } else {
        setError('');
        setSuccess('PAYMENT SUCCESSFUL');
      console.log('[PaymentMethod]', paymentMethod);
    }
  };




const EmptyCart=()=>{
    cart.length=0;
}




  return (
      <div>
    <form  style={{marginLeft:"100px",marginRight:"100px",marginTop:"50px",invalid: {
        color: '#9e2146',
      }, }} onSubmit={handleSubmit}>
      <CardElement
         options={{
            style: {
              base: {
                fontSize: '22px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
      />
      <button  className='btnnn' style={{width:"100px", backgroundColor:"DarkCyan",border:"none",height:"30px", fontWeight:'bold',color:'white'}} type="submit" disabled={!stripe}>
        Pay${total}
      </button>
      
    </form>

    {
                error && <p style={{ color: 'red' }}>{error}</p>
            }
            {
                success && <p style={{ color: 'green' }}>{success}</p>
            }
   </div>
  );
};
export default CheckoutForm ;