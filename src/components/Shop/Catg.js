import React from 'react';
import s1 from '../FlashDeals/s1.png';
import s3 from '../FlashDeals/s3.png';
import w1 from '../FlashDeals/w1.png';
import w2 from '../FlashDeals/w2.png';
import w3 from '../FlashDeals/w3.png';
import w4 from '../FlashDeals/w4.png';
import './shop.css';

function Catg() {

    const data = [
        {
            cateImg: s1,
            cateName: 'Branded Shirts'
        },
        {
            cateImg: s3,
            cateName: 'Local Shirts'
        },
        {
            cateImg: w1,
            cateName: 'Apple Watch'
        },
        {
            cateImg: w2,
            cateName: 'Smart Watch'
        },
        {
            cateImg: w3,
            cateName: 'Digital Watch'
        },
        {
            cateImg: w4,
            cateName: 'Samsung Watch'
        },
    ]

  return (
    <>
        <div className='category'>
            <div className='chead d_flex'>
                <h1 className='font-semibold'> Brands </h1>
                <h1> Shops </h1>
            </div>
            {
                data.map(value => {
                    return (
                        <div className='box f_flex'>
                            <img className='imge' src={value.cateImg} alt='' />
                            <span> {value.cateName} </span>
                        </div>
                    )
                })
            }
            <div className='box box2'>
                <button> View All Brands </button>
            </div>
        </div>
    </>
  )
}

export default Catg;