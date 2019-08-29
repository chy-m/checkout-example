import React from 'react'

const intervalType = ['weekly', 'fortnightly', 'monthly']

const PaymentIntervals = ({ onChangeState, paymentInterval }) => (
  <div className='payment-intervals'>
    {intervalType.map(type => (
      <button
        className={paymentInterval === type ? 'button button--active' : 'button'}
        onClick={() => onChangeState('paymentInterval', type)}
      >
        {type}
      </button>
    ))}
  </div>
)

export default PaymentIntervals
