import React from 'react'
import TopCart from './TopCart';
import './top.css';

function TopCate() {
  return (
    <>
        <section className='topCat background'>
            <div className='container'>
                <div className='heading d_flex'>
                    <div className='heading-left f_flex'>
                        <i className='fa fa-border-all'></i>
                        <h2 className='font-bold'>Top Categories </h2>
                    </div>
                    <div className='heading-right d_flex'>
                        <span>View all</span>
                        <i className='fa fa-caret-right'></i>
                    </div>
                </div>
                <TopCart />
            </div>
        </section>
    </>
  )
}

export default TopCate;