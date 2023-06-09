

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../Login/CheckoutForm';


const Payment = ({ total }) => {

    const stripePromise = loadStripe('pk_test_51KxWYHBy9VrJHNnA0epQ67Ex0RPr5SnDtvsTAtLpnxyhBp7o4CB43PhafWKbNSrPjd8QIG7eubJNAMkIWDtMD4Sm00zxZqOC7L')


    return (
        <div >

            <h1 style={{ marginTop: "80px", color: "red" }}>PAYMENT SYSTEM</h1>
            <h2>Pay: ${total}</h2>


            {/* <CheckoutForm>

         </CheckoutForm> */}

            <Elements stripe={stripePromise}>
                <CheckoutForm total={total} />
            </Elements>
        </div>
    );
};

export default Payment;