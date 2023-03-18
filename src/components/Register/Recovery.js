import React from 'react'

import { Toaster } from 'react-hot-toast'; 
  
import style from './Username.module.css';  

function Recovery() {

  return (
    <div className='container mx-auto'>

        <Toaster position='top-center' reverseOrder={false}></Toaster>

        <div className='flex justify-center items-center h-screen'>
            <div className={style.glass}>
                <div className='title flex flex-col items-center'>
                    <h4 className='text-4xl font-bold'> Recover Password </h4>
                    <span className='py-4 text-ml w-2/3 text-center text-gray-500'>
                        Enter OTP To Recover Password..
                    </span>
                </div>

                <form className='pt-10'>
                  
                    <div className='textbox flex flex-col items-center gap-6'>
                      <div className='input text-center'>
                      <span className='py-4 text-sm text-left text-gray-500'>
                        Enter 4 Digit OTP Sent To Your Email..
                      </span>
                        <input className={style.textbox} type="password" placeholder='OTP' />
                      </div>
                      
                        <button className={style.btn} type='submit'> Recover </button>
                    </div>

                    <div className='text-center py-4'>
                        <span className='text-gray-500'> Can't Get OTP? <button className='text-red-500'>Resend Now</button>  </span>
                    </div>

                </form>

            </div>
        </div>
    </div>
  )
}
export default Recovery;