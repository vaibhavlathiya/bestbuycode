import React from 'react'
import Sdata from './Sdata'; 
import Slider from 'react-slick';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'


function SlideCard() {

  const settings = ({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  });

  return (
    <>
    <Slider {...settings}>
    {Sdata.map((value,index) => {
        return (
               <div className='box d_flex top' key={index}>
                    <div className='left'>
                        <h1><b>{value.title}</b></h1>
                        <p>{value.desc}</p>
                        <button className='btn_primary'> Visit Collection </button>
                    </div>
                    <div className='right'>
                        <img src={value.cover} alt='' />
                    </div>
                </div>
                )
            })}
        </Slider>
    </>
  )
}

export default SlideCard;