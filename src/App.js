import React from 'react'
// Components
import Header from './components/Header'
import Heading from './components/Heading'
import PaymentIntervals from './components/PaymentIntervals'
import PaymentType from './components/PaymentType'
// Others
import './App.scss'

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className='App'>
        <Header />
        <Heading title='Customise your plan' />
        <PaymentIntervals />
        <PaymentType />
      </div>
    )
  }
}

export default App
