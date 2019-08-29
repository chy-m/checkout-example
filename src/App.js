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
    this.state = { paymentInterval: 'weekly', paymentType: '' }
  }

  onChangeState = (state, key) => {
    this.setState({ [state]: key })
  }

  render() {
    const { paymentInterval } = this.state
    return (
      <div className='App'>
        <Header />
        <div className='body'>
          <BackButton />
          <Heading title='Customise your plan' />
          <PaymentIntervals onChangeState={this.onChangeState} paymentInterval={paymentInterval} />
          <div className='payment-types'>
            {apiResponse
              .filter(type => type['interval'] === paymentInterval)
              .map(type => (
                <PaymentType onChangeState={this.onChangeState} type={type} />
              ))}
          </div>
        </div>
      </div>
    )
  }
}

export default App
