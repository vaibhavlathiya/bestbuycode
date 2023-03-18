import toast from 'react-hot-toast';

/** validate login page username  */

export async function usernameValidate(values){
    const errors = usernameVerify({}, values);

    return errors;
}

/** validate password  */

export async function passwordValidate(values){
    const errors = passwordVerify({}, values);

    return errors;
}

/**  Validate  reset password  */

export async function resetPasswordValidate(values){
    const error = passwordVerify({}, values);

    if (values.password !== values.cnf_pwd){
        error.exist = toast.error("Password Does Not Matched..")
    }

    return error;
}

/**   Validate Registration Page  */

export async function registrationValidate(values){
    const error = usernameVerify({}, values);
    passwordVerify(error, values);
    emailVerify(error, values);

    return error;
}

/**  Validate Profile Picture  */

export async function profileValidate(values){
    const error = emailVerify({}, values);
    return error;
}


/******************************************************** */


/** Validate Password  */

function passwordVerify(error = {}, values){

    const specialChars = /[`!@#$%^&*()_+\\[\]{};':"|,.<>/?~]/;

    if(!values.password){
        error.password = toast.error('Password is Required..');
    }else if (values.password.includes(" ")){
        error.password = toast.error(" Wrong Password..");
    }else if (values.password.length < 6){
        error.password = toast.error(" Password Must Be More Than 6 Characters..");
    }else if (!specialChars.test(values.password)){
        error.password = toast.error(" Password Must Have Special Character..");
    }

    return error;
}

/** Validate Username  */

function usernameVerify(error = {}, values){
    if(!values.username){
        error.username = toast.error('User Name is Required..');
    }else if(values.username.includes(" ")){
        error.username = toast.error('Invalid User Name..');
    }

    return error;
}

/**  Validate Email  */

function emailVerify(error = {}, values){

    if(!values.email){
        error.email = toast.error('Email Required..');
    }else if(values.email.includes(" ")){
        error.email = toast.error('Wrong Email..');
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        error.email = toast.error('Invalid Email Address..');
    }

    return error;
}