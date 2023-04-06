import React from 'react'
import Cart from './Cart';

function NewArrivals() {
  return (
    <>
        <section className='newarrivals background'>
            <div className='container'>
                <div className='heading d_flex'>
                    <div className='heading-left f_flex'>
                    <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
                        <h2 className='font-semibold'> New Arrivals </h2>
                    </div>
                    <div className='heading-right d_flex'>
                        <span>View all</span>
                        <i className='fa fa-caret-right'></i>
                    </div>
                </div>
                <Cart />
            </div>
        </section>
    </>
  )
}

export default NewArrivals;