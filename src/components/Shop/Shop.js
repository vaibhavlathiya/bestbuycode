import React from 'react'
import Catg from './Catg';
import ShopCart from './ShopCart';
import './shop.css';

function Shop({ shopItems, addToCart }) {
  return (
    <>
        <section className='shop background'>
            <div className='container d_flex'>
                <Catg />

                <div className='contentWidthd'>
                    <div className='heading d_flex'>
                        <div className='heading-left f_flex'>
                            <h2 className='font-semibold'> Shirts </h2>
                        </div>
                        <div className='heading-right d_flex'>
                            <span>View all</span>
                            <i className='fa fa-caret-right'></i>
                        </div>
                    </div>

                    <div className='product-content grid1'>
                        <ShopCart shopItems={shopItems} addToCart={addToCart} />
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}

export default Shop;