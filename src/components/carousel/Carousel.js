import React from 'react';
import Slider from "./Slider";
import './Carousel.css';
// import HeroSlider, { Slide } from 'hero-slider';

//  import bg1 from '../carousel/ecom1.png';
// import bg2 from '../carousel/ecom2.png';
// import bg3 from '../carousel/ecom3.png';
// import ecom from '../Register/ecom.jpg';

function Carousel() {
  return (
    // <HeroSlider
    //     slidingAnimation="left_to_right"
    //     oriation="horizontal"
    //     intialSlide={1}
    //     onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChange", previousSlide, nextSlide)}
    //     onChange={nextSlide => console.log("onChange", nextSlide)}
    //     onAfterChange={(nextSlide => console.log("onAfterChange", nextSlide))}
    //     style={{
    //         backgroundColor: "rgba(0,0,0,0.33)"
    //     }}
    //     settings={{
    //         SlidingDuration: 250,
    //         SlidingDelay: 100,
    //         Autoplay: true,
    //         shouldAutoplayButton: true,
    //         autoPlayDuration: 0.5,
    //         height: "100vh"
    //     }}
    // >
    //     <Slide 
    //         background={{
    //             //backgroundColor: 'blue', 
    //             backgroundImageSrc: bg1,
    //             backgroundAttachment: 'fixed'
    //         }}
    //     />
    //     <Slide 
    //         background={{
    //             backgroundColor: 'red',
    //             // backgroundImage: bg2,
    //             backgroundAttachment: 'fixed'
    //         }}
    //     />
    //     <Slide 
    //         background={{
    //             backgroundColor: 'green',
    //             // backgroundImage: bg3,
    //             backgroundAttachment: 'fixed'
    //         }}
    //     />
    // </HeroSlider>
    <>
        <section className='crousel'>
            <div className='container'>
                <Slider />
            </div>
        </section>
    </>
  )
}

export default Carousel;