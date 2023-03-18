import React from 'react'
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { profileValidate } from './Validation'; 

import style from './Username.module.css';  

function Profile() {

    

    const formik = useFormik({
        initialValues : {
            firstname: '',
            lastname: '',
            mobile: '',
            email: '',
            address : ''
        },
        validate : profileValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit : async values => {
            values = await Object.assign(values)
            console.log(values)
        }
    })

        /**    formik   */


  return (
    <div className='container mx-auto'>

        <Toaster position='top-center' reverseOrder={false}></Toaster>

        <div className='flex justify-center items-center h-screen'>
            <div className={style.glass1} style={{width:"25%"}}>
                <div className='title flex flex-col items-center'>
                    <h4 className='text-4xl font-bold'> Profile </h4>
                    <span className='py-2 text-sm w-2/3 text-center text-gray-500'>
                        Upadate Your Profile..
                    </span>
                </div>

                <form className='py-4' onSubmit={formik.handleSubmit}>
                
                    <div className='textbox flex flex-col items-center gap-3'>

                      <div className='name flex w-3/4 gap-10'>
                        <input {...formik.getFieldProps('firstname')} className={style.textbox} type="text" placeholder='First Name' />
                        <input {...formik.getFieldProps('lastname')} className={style.textbox} type="text" placeholder='Last Name' />
                      </div>

                      <div className='name flex w-3/4 gap-10'>
                        <input {...formik.getFieldProps('mobile')} className={style.textbox} type="text" placeholder='Mobile Number' />
                        <input {...formik.getFieldProps('email')} className={style.textbox} type="text" placeholder='E Mail' />
                      </div>

                      
                        <input {...formik.getFieldProps('address')} className={style.textbox} type="text" placeholder='Address' />
                      
                        <button className={style.btn} type='submit'> Update </button>
                    </div>

                    <div className='text-center py-4'>
                        <span className='text-gray-500'> Come Back Later? <Link className='text-red-500' to='/Username' >Log Out</Link>  </span>
                    </div>

                </form>

            </div>
        </div>
    </div>
  )
}
export default Profile;