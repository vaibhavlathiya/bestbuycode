import React from 'react'
import './footer.css';

function Footer() {
  return (
    <>
        <footer className=''>
            <div className='container grid2'>
                <div className='box'>
                    <h1> Best Buy </h1>
                    <p> Worth It. To Buy Our Best Quality Products. </p>
                    <div className='icon d_flex'>
                        <div className='img d_flex'>
                            <i className='fa-brands fa-google-play'></i>
                            <span> Google Play </span>
                        </div>
                        <div className='img d_flex'>
                            <i className='fa-brands fa-app-store-ios'></i>
                            <span> App Store </span>
                        </div>
                    </div>
                    <p> Cooming Soon...!!! </p>
                </div>
            
                <div className='box'>
                    <h2> About Us </h2>
                    <ul>
                        <li> Careers </li>
                        <li> Our Stores </li>
                        <li> Our Cares </li>
                        <li> Terms & Conditions </li>
                        <li> Privacy Policy </li>
                    </ul>
                </div>

                <div className='box'>
                    <h2> Customer Cares </h2>
                    <ul>
                        <li> Help Center </li>
                        <li> How To Buy </li>
                        <li> Track Your Order </li>
                        <li> Corporate & Bulk Purchasing </li>
                        <li> Returns & Refund </li>
                    </ul>
                </div>

                <div className='box'>
                    <h2> Contact Us </h2>
                    <ul>
                        <li> 77, Royal Palace, Near VIP Circle, Vesu, Surat. </li>
                        <li> Email : bestbuy@support.com </li>
                        <li> Phone : +91 99 99 97 77 77 </li>
                    </ul>
                </div>

            </div>
        </footer>
    </>
  )
}

export default Footer;