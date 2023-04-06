import React from 'react'
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { usernameValidate } from './Validation'; 

// import avatar from '../Register/av1.jpg';  
import style from './Username.module.css';  

function Username() {

    const formik = useFormik({
        initialValues : {
            username : ''
        },
        validate : usernameValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit : async values => {
            console.log(values)
        }
    })
  return (
    <div className='container mx-auto'>

        <Toaster position='top-center' reverseOrder={false}></Toaster>

        <div className='flex justify-center items-center h-screen'>
            <div className={style.glass}>
                <div className='title flex flex-col items-center'>
                    <h4 className='text-4xl font-bold'> Hello Buyers! </h4>
                    <span className='py-4 text-ml w-2/3 text-center text-gray-500'>
                        Explor More Products With Us.
                    </span>
                </div>

                <form className='py-1' onSubmit={formik.handleSubmit}>
                    {/* <div className='profile flex justify-center py-4'>
                        <img src={avatar} className={style.profile_img} alt="avataer" />
                    </div> */}

                    <div className='textbox flex flex-col items-center gap-6'>
                        <input type='text' {...formik.getFieldProps('username')} className={style.textbox} placeholder='Username' />
                        <button className={style.btn} type='submit'> <Link className='' to='/Password'> Create </Link> </button>
                    </div>

                    <div className='text-center py-4'>
                        <span className='text-gray-500'> Not Register <Link className='text-red-500' to='/Register' >Register Now</Link>  </span>
                    </div>

                </form>

            </div>
        </div>
    </div>
  )
}
export default Username;