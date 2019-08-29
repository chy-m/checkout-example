import React from 'react'
// Components
import Header from './components/Header'
import Heading from './components/Heading'
import PaymentIntervals from './components/PaymentIntervals'
// Others
import './App.scss'

function App() {
  return (
    <div className='App'>
      <Header />
      <Heading title='Customise your plan' />
      <PaymentIntervals />
    </div>
  )
}

export default App
