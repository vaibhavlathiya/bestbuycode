import React from 'react'
import FlashCard from './FlashCard';
import './FlashDeals.css';

function FlashDeals( { productItems, addToCart } ) {
  return (
    <>
        <section className='flash background'>
            <div className='container'>
                <div className='heading items-center f_flex'>
                    <i className='text-3xl fa fa-bolt'></i>
                    <h1 className='text-4xl font-bold'> Flash Deals !!.. </h1>
                </div>
                <FlashCard productItems={productItems} addToCart={addToCart} />    
            </div>
        </section>
    </>
  )
}

export default FlashDeals;