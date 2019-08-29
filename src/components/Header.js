import React from 'react'
// Icons
import cart from '../assets/cart.png'

const Header = () => (
  <div className='header'>
    <img src='http://www.ipswichcitymechanical.com.au/wp-content/uploads/2018/05/OPENPAY.png' alt='Openpay logo' />
    <div className='header__checkout'>
      <img src={cart} alt='Openpay logo' />
      <p>123.45</p>
    </div>
  </div>
)

export default Header
