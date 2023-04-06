import React from 'react'
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { registrationValidate } from './Validation'; 
// import convertToBase64 from './Convert';
// import { useState } from 'react'


// import avatar from '../Register/av1.jpg';  
import style from './Username.module.css';  

function Register() {

    // const [file, setFile] = useState();

    const formik = useFormik({
        initialValues : {
            username: '',
            email: '',
            password : ''
        },
        validate : registrationValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit : async values => {
            values = await Object.assign(values/*{ profile: file || '' }*/)
            console.log(values)
        }
    })

        /**    formik   

        const onUpload = async e => {
            const base64 = await convertToBase64(e.target.files[0]);
            setFile(base64);
        } */

  return (
    <div className='container mx-auto'>

        <Toaster position='top-center' reverseOrder={false}></Toaster>

        <div className='flex justify-center items-center h-screen'>
            <div className={style.glass1} style={{width:"35%"}}>
                <div className='title flex flex-col items-center'>
                    <h4 className='text-4xl font-bold'> Register </h4>
                    <span className='py-2 text-sm w-2/3 text-center text-gray-500'>
                        Happy To Join Us..!
                    </span>
                </div>

                <form className='py-3' onSubmit={formik.handleSubmit}>
                    {/* <div className='profile flex justify-center py-4'>
                        <label htmlFor='profile'>
                            <img src={file || avatar} className={style.profile_img} alt="avataer" />
                        </label>

                        <input type="file"onChange={onUpload} id='profile' name='profile' />

                    </div> */}

                    <div className='textbox flex flex-col items-center gap-3'>
                        <input {...formik.getFieldProps('username')} className={style.textbox} type="text" placeholder='Your Name*' />
                        <input {...formik.getFieldProps('email')} className={style.textbox} type="text" placeholder='Your Email*' />
                        <input {...formik.getFieldProps('password')} className={style.textbox} type="password" placeholder='Password*' />
                        <button className={style.btn} type='submit'> Register </button>
                    </div>

                    <div className='text-center py-4'>
                        <span className='text-gray-500'> Already Register? <Link className='text-red-500' to='/Username'>Log In Now</Link>  </span>
                    </div>

                </form>

            </div>
        </div>
    </div>
  )
}
export default Register;