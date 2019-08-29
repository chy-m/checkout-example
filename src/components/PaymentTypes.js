import React from 'react'
// Components
import EmptyPaymentType from './EmptyPaymentType'
import PaymentType from './PaymentType'

const PaymentTypes = ({ filteredApiResponse, onChangeState, paymentType }) => {
  const isEmpty = filteredApiResponse.length > 0
  return (
    <div className='payment-types'>
      {isEmpty ? (
        filteredApiResponse.map(type => (
          <PaymentType onChangeState={onChangeState} paymentType={paymentType} type={type} />
        ))
      ) : (
        <EmptyPaymentType title='Sorry! There are no current plans within this criteria, please check out our other ones' />
      )}
    </div>
  )
}

export default PaymentTypes
