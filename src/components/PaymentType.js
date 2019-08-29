import React from 'react'

const PaymentType = ({ calculatePayment, onChangeState, paymentInterval, paymentType, type }) => (
  <div
    className='payment-type-card'
    onClick={() => onChangeState('paymentType', `${type.interval}-${type.paymentCount}`)}
  >
    <div className='card__left'>
      <p className='primary-paragraph'>Finishes 10th of February</p>
      <p className='secondary-paragraph'>
        {type.paymentCount} x {calculatePayment(type.paymentCount)} · {paymentInterval} · Inc.fee
      </p>
    </div>
    {paymentType === `${type.interval}-${type.paymentCount}` && <p className='card__right'>✓</p>}
  </div>
)

export default PaymentType
