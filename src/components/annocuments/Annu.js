import React from 'react'
import ban1 from '../FlashDeals/ban1.png';
import ban2 from '../FlashDeals/ban2.png';
import './annu.css';

function Annu() {

    const mystyle = {
        width: '30%',
        height: '340px',
    }
    const mystyle1 = {
        width: '68%',
    }

  return (
    <>
        <section className='annouc background'>
            <div className='container box d_flex' >
                <div className='' style={mystyle}>
                    <img src={ban2} alt='' width='100%' height='100%' />
                </div>
                <div className='ba' style={mystyle1}>
                    <img src={ban1} alt='' width='100%' />
                </div>
            </div>
        </section>
    </>
  )
}

export default Annu;