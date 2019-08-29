import React from 'react'
// Components
import BackButton from './components/BackButton'
import ContinueButton from './components/ContinueButton'
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
    this.state = { paymentInterval: 'weekly', paymentType: '' }
  }

  onChangeState = (state, key) => {
    this.setState({ [state]: key })
  }

  render() {
    const { paymentInterval, paymentType } = this.state
    const filteredApiResponse = apiResponse.filter(type => type['interval'] === paymentInterval)
    return (
      <div className='App'>
        <Header />
        <div className='body'>
          <BackButton />
          <Heading title='Customise your plan' />
          <PaymentIntervals onChangeState={this.onChangeState} paymentInterval={paymentInterval} />
          <PaymentTypes
            filteredApiResponse={filteredApiResponse}
            onChangeState={this.onChangeState}
            paymentType={paymentType}
          />
          {paymentType !== '' && <ContinueButton />}
        </div>
      </div>
    )
  }
}

export default App
