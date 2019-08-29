import React from 'react'

const intervalType = ['weekly', 'fortnightly', 'monthly']

const PaymentIntervals = ({ onChangeInterval, paymentInterval }) => (
  <div className='payment-intervals'>
    {intervalType.map(type => (
      <button
        className={paymentInterval === type ? 'button button--active' : 'button'}
        onClick={() => onChangeInterval(type)}
      >
        {type}
      </button>
    ))}
  </div>
)

export default PaymentIntervals
