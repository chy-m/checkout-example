import React from 'react'
// Components
import ContinueButton from './ContinueButton'
import EmptyPaymentType from './EmptyPaymentType'
import PaymentType from './PaymentType'

const PaymentTypes = ({
  calculateDate,
  calculatePayment,
  filteredApiResponse,
  onChangeState,
  paymentInterval,
  paymentType
}) => {
  const isEmpty = filteredApiResponse.length > 0
  return (
    <div className='payment-types'>
      {isEmpty ? (
        filteredApiResponse.map((type, index) => (
          <PaymentType
            key={index}
            calculateDate={calculateDate}
            calculatePayment={calculatePayment}
            onChangeState={onChangeState}
            paymentInterval={paymentInterval}
            paymentType={paymentType}
            type={type}
          />
        ))
      ) : (
        <EmptyPaymentType title='Sorry! There are no current plans within this criteria, please check out our other ones' />
      )}
      {paymentType !== '' && <ContinueButton />}
    </div>
  )
}

export default PaymentTypes
