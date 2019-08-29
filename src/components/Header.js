import React from 'react'
// Icons
import cart from '../assets/cart.png'
import logo from '../assets/logo.png'

const Header = ({ cartTotal }) => (
  <div className='header'>
    <img className='header__logo' src={logo} alt='openpay logo' />
    <div className='header__checkout'>
      <img className='checkout__cart' src={cart} alt='cart logo' />
      <p>${cartTotal}</p>
    </div>
  </div>
)

export default Header
