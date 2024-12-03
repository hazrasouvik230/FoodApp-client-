import React from 'react'
import { useNavigate } from 'react-router-dom'
import PaymentSelection from '../components/PaymentSelection';

const Payment = ({total}) => {
    const navigate = useNavigate();
  return (
    <div className='payment'>
        <div className="paymentHeading">
            <i class="fa-solid fa-arrow-left" onClick={() => navigate("/checkout")}></i>
            <span>Choose and Pay</span>
        </div>
        <PaymentSelection total={total} />
    </div>
  )
}

export default Payment