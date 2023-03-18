import React from 'react'
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { resetPasswordValidate } from './Validation'; 
 
import style from './Username.module.css';  

function Reset() {

    const formik = useFormik({
        initialValues : {
            password : '',
            cnf_pwd: ''
        },
        validate : resetPasswordValidate,
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
            <div className={style.glass} style={{width: "40%"}}>
                <div className='title flex flex-col items-center'>
                    <h4 className='text-4xl font-bold'> Reset </h4>
                    <span className='py-4 text-ml w-2/3 text-center text-gray-500'>
                        Enter New Password..
                    </span>
                </div>

                <form className='py-20' onSubmit={formik.handleSubmit}>

                    <div className='textbox flex flex-col items-center gap-6'>
                        <input {...formik.getFieldProps('password')} className={style.textbox} type="password" placeholder='New Password' />
                        <input {...formik.getFieldProps('cnf_pwd')} className={style.textbox} type="password" placeholder='Repeat Password' />
                        <button className={style.btn} type='submit'> Reset </button>
                    </div>

                </form>

            </div>
        </div>
    </div>
  )
}
export default Reset;