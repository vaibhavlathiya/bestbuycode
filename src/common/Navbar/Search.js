import React from 'react';
// import logo from "../assets/images/logo1.jpg"
import { Link } from 'react-router-dom';


function Search( {cartItem} ) {

    window.addEventListener("scroll",function () {
        const search = document.querySelector(".search")
        search.classList.toggle("active", window.scrollY > 100)
    })


  return (
    <>
        <section className='search'>
            <div className='container c_flex'>
                <div className='logo width'>
                    {/* <img alt='' className='logo' /> */}
                    <h1> Logo </h1>
                </div>

                <div className='search-box f_flex'>
                    <i className='fa fa-search'></i>
                    <input type='text' placeholder='Search And Hit Enter...' />
                    <span> All Category </span>
                </div>

                <div className='icon f_flex width'>
                    <div className='user'>
                        <Link to ='/Username'>
                        <i className='fa fa-user icon-circle'></i>
                        </Link>
                    </div>
                    <div className='cart'>
                        <Link to='/Cart'>
                            <i className='fa fa-shopping-bag icon-circle'></i>
                            <span>{cartItem.length === 0 ? "0" : cartItem.length}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Search;