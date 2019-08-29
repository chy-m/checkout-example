import React from 'react'
// Components
import BackButton from './components/BackButton'
import Header from './components/Header'
import Heading from './components/Heading'
import PaymentIntervals from './components/PaymentIntervals'
import PaymentType from './components/PaymentType'
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
    this.state = { paymentInterval: 'weekly' }
  }

  onChangeInterval = interval => {
    this.setState({ paymentInterval: interval })
  }

  render() {
    const { paymentInterval } = this.state
    return (
      <div className='App'>
        <Header />
        <div className='body'>
          <BackButton />
          <Heading title='Customise your plan' />
          <PaymentIntervals onChangeInterval={this.onChangeInterval} paymentInterval={paymentInterval} />
          <div className='payment-types'>
            <PaymentType />
            <PaymentType />
            <PaymentType />
          </div>
        </div>
      </div>
    )
  }
}

export default App
