import React from 'react'
import Slider from 'react-slick';
import { useState } from 'react';

function FlashCard( { productItems, addToCart } ) {

    const NextArrow = (props) => {
        const { onClick } = props
        return (
            <div className='control-btn' onClick={onClick}>
                <button className='next'>
                    <i className='fa fa-long-arrow-alt-right'></i>
                </button>
            </div>
        )
    }
    const PrevArrow = (props) => {
        const { onClick } = props
        return (
            <div className='control-btn' onClick={onClick}>
                <button className='prev'>
                    <i className='fa fa-long-arrow-alt-left'></i>
                </button>
            </div>
        )
    }

    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }


    const settings = ({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infiniteSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
      });
  return (
    
    <>
    <Slider {...settings}>
    { productItems.map( (productItems) => {
        return(

        <div className='box' key={productItems.id=6}>
            <div className='product mtop'>
                <div className='img'>
                    <span className='discount'> {productItems.discount}% off </span><br />
                    <img src={productItems.cover} alt='' />
                    <div className='product-like'>
                        <label>0</label> <br />
                        <i className='fa-regular fa-heart' onClick={increment} ></i>
                    </div>
                </div>
                <div className='product-details'>
                    <h3> {productItems.name} </h3>
                    <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                    </div>
                    <div className='price'>
                        <h4> {productItems.price}.00 </h4>
                        <button onClick={() =>addToCart(productItems)}>
                            <i className='fa fa-cart-shopping'></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        )})
    }
    </Slider>
    </>
  )
}

export default FlashCard;