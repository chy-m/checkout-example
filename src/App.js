import React from 'react'
// Packages
import moment from 'moment'
// Components
import BackButton from './components/BackButton'
import Header from './components/Header'
import Heading from './components/Heading'
import PaymentIntervals from './components/PaymentIntervals'
import PaymentTypes from './components/PaymentTypes'
// Others
import './App.scss'
import { apiResponse } from './constants/apiResponse'

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { cartTotal: 123.45, paymentInterval: 'weekly', paymentType: '' }
  }

  onChangeState = (state, key) => {
    this.setState({ [state]: key })
  }

  calculatePayment = length => `$${(this.state.cartTotal / length).toFixed(2)}`

  calculateDate = length => {
    const { paymentInterval } = this.state
    if (paymentInterval === 'weekly') {
      return moment()
        .add(length, 'weeks')
        .format('Do of MMMM YYYY')
    } else if (paymentInterval === 'fortnightly') {
      return moment()
        .add(length * 2, 'weeks')
        .format('Do of MMMM YYYY')
    } else {
      return moment()
        .add(length, 'months')
        .format('Do of MMMM YYYY')
    }
  }

  render() {
    const { cartTotal, paymentInterval, paymentType } = this.state
    const filteredApiResponse = apiResponse.filter(type => type['interval'] === paymentInterval)
    return (
      <div className='App'>
        <Header cartTotal={cartTotal} />
        <div className='body'>
          <BackButton />
          <Heading title='Customise your plan' />
          <PaymentIntervals onChangeState={this.onChangeState} paymentInterval={paymentInterval} />
          <PaymentTypes
            calculateDate={this.calculateDate}
            calculatePayment={this.calculatePayment}
            filteredApiResponse={filteredApiResponse}
            onChangeState={this.onChangeState}
            paymentInterval={paymentInterval}
            paymentType={paymentType}
          />
        </div>
      </div>
    )
  }
}

export default App
