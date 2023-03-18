import React from 'react'
import Nav from './Nav';
import './Header.css';
import NavUp from './NavUp';
import Search from './Search';


function Header() {
  return (
    <>
      <NavUp />
      <Search />
      <Nav />
    </>
  )
}

export default Header;