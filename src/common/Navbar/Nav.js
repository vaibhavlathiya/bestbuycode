import React, {useState} from 'react';
// import logo from './images/logo1.jpg';
import { Link } from 'react-router-dom';


function Nav() {

  const [MobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='categories d_flex'>
            <span className='fa-solid fa-border-all'></span>
            <h4>
              Categories<i className='fa fa-chevron-down'></i>
            </h4>
          </div>

          <div className='nav-link'>
            <ul className={MobileMenu? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              <li>
                <Link to='/'> MEN'S </Link>
              </li>
              <li>
                <Link to='/pages'> WOMEN'S </Link>
              </li>
              <li>
                <Link to='/user'> KIDS </Link>
              </li>
              <li>
                <Link to='/track'> ACCESORIES </Link>
              </li>
              <li>
                <Link to='/contact'> CONTACT </Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {
                MobileMenu?
                <i className='fas fa-times close home-btn'></i> :
                <i className='fa-solid fa-bars open'></i>
              }
            </button>

          </div>
        </div>
      </header>
    </>
  )
}

export default Nav;
