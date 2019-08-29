import React from 'react'
// Components
import SecondaryHeading from './SecondaryHeading'

const intervalType = ['weekly', 'fortnightly', 'monthly']

const PaymentIntervals = () => (
  <div className='payment-intervals'>
    {intervalType.map(type => (
      <SecondaryHeading title={type} />
    ))}
  </div>
)

export default PaymentIntervals
