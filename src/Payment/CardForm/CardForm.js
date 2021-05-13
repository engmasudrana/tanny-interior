import React, {useState} from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import {Button} from "react-bootstrap";

const CardForm = ({handlePayment}) => {
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null)
    const [paymentSuccess, setPaymentSuccess] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            setPaymentSuccess(paymentMethod.id);
            console.log('[PaymentMethod]', paymentMethod);
            setPaymentError(null);
            handlePayment(paymentMethod.id)
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <Button variant="secondary" className="mt-3" type="submit" disabled={!stripe}>
                    Pay
                </Button>
            </form>
            {
                paymentError && <p style={{color: 'red'}}>{paymentError}</p>
            }
            {
                paymentSuccess && <p className="mt-2" style={{color: 'green'}}>your payment was successfully</p>
            }
        </div>
    );
};

export default CardForm;