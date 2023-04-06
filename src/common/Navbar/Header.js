import React from 'react'
import Nav from './Nav';
import './Header.css';
import NavUp from './NavUp';
import Search from './Search';


function Header( {cartItem} ) {
  return (
    <>
      <NavUp />
      <Search cartItem={cartItem} />
      <Nav />
    </>
  )
}

export default Header;