import React from 'react'
import Dcard from './Dcard';

function Discount() {
  return (
    <>
        <section className='disc background newarrivals'>
            <div className='container'>
                <div className='heading d_flex'>
                    <div className='heading-left f_flex'>
                    <img src='https://img.icons8.com/windows/32/fa314a/gift.png' />
                        <h2 className='font-semibold'> Big Discounts </h2>
                    </div>
                    <div className='heading-right d_flex'>
                        <span>View all</span>
                        <i className='fa fa-caret-right'></i>
                    </div>
                </div>
                <Dcard />
            </div>
        </section>
    </>
  )
}

export default Discount;