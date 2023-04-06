import React from 'react'
import Carousel from '../carousel/Carousel';
import FlashDeals from '../FlashDeals/FlashDeals';
import TopCate from '../top/TopCate';
import NewArrivals from '../newarrivals/NewArrivals';
import Discount from '../discount/Discount';
import Shop from '../Shop/Shop';
import Annu from '../annocuments/Annu';
import Wrapper from '../wrapper/Wrapper';

function Pages({ productItems,cartItem,addToCart,shopItems }) {
  return (
    <>
      <Carousel cartItem={cartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annu />
      <Wrapper />
    </>
  )
}

export default Pages;