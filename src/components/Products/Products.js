import React from 'react'
import Filter from './Filter';
import ProductList from './ProductList';
import Sort from './Sort';

function Products({ shopItems, addToCart }) {
  return (
    <>
        <section className='pro background'>
            <div className='container d_flex'>
                <Filter />

                <div className='contentWidthd'>
                    <div className=''>
                        <Sort />
                    </div>

                    <div className='product-content grid1'>
                        <ProductList shopItems={shopItems} addToCart={addToCart} />
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}

export default Products;