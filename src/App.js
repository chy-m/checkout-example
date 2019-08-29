import React from 'react'
// Components
import BackButton from './components/BackButton'
import Header from './components/Header'
import Heading from './components/Heading'
import PaymentIntervals from './components/PaymentIntervals'
import PaymentTypes from './components/PaymentTypes'
// Others
import './App.scss'

const apiResponse = [
  {
    interval: 'weekly',
    paymentCount: 6
  },
  {
    interval: 'weekly',
    paymentCount: 8
  },
  {
    interval: 'weekly',
    paymentCount: 12
  },
  {
    interval: 'monthly',
    paymentCount: 2
  },
  {
    interval: 'monthly',
    paymentCount: 3
  }
]

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { cartTotal: 123.45, paymentInterval: 'weekly', paymentType: '' }
  }

  onChangeState = (state, key) => {
    this.setState({ [state]: key })
  }

  calculatePayment = length => `$${(this.state.cartTotal / length).toFixed(2)}`

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
