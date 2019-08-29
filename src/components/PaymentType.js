import React from 'react'

const PaymentType = ({ onChangeState, type }) => (
  <div
    className='payment-type-card'
    onClick={() => onChangeState('paymentType', `${type.interval}-${type.paymentCount}`)}
  >
    <div className='card__left'>
      <p className='primary-paragraph'>Finishes 10th of February</p>
      <p className='secondary-paragraph'>8 x $27.50 · Fortnightly · Inc.fee</p>
    </div>
    <p className='card__right'>✓</p>
  </div>
)

export default PaymentType
