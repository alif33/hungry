import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline"
import toast, { Toaster } from 'react-hot-toast';
const Login = () => {
    // Submit Form 
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify(data)
        }).then(() => {
            console.table(data);
            toast.success(
                "Login successfull"
            );

        }).catch((error) => {
            console.error({ Login: error });
            toast.success("Loggin Error")
        })
    }
    const [toggle, setToggle] = useState(false)
    const passwordToggle = () => {
        const password = document.querySelector(".password_input")
        password.type = "password"
        setToggle(!toggle)
        if (toggle) {
            password.type = "password"
        }
        if (!toggle) {
            password.type = "text"
        }

    }
    return (
        <div className='w-full h-screen flex justify-center items-center flex-col bg-gray-100'>
            <Toaster reverseOrder={false} />
            <img src='/image/logo.png' className='text-center  mb-6 w-20 mx-auto -mt-10 ' alt='logo'></img>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col  justify-center w-[350px]  space-y-3 bg-cyan-300 h-[300px] px-6 rounded-md  shadow-lg '>

                <label className="flex flex-col space-y-1 ">
                    <span>Username</span>
                    <input {...register("username", { required: true })} type="text" name="username" placeholder='Admin username' className={`px-3 py-2 bg-gray-200 rounded-md w-full cursor-pointer hover:bg-gray-300 outline-none shadow ${errors.username && "ring ring-red-400"}`} minLength={3} autoComplete="off" />
                </label>
                <label className="flex flex-col space-y-1  relative">
                    <span>Password</span>
                    <input {...register("password", { required: true })} type="password" name="password" placeholder='Password' className={`px-3 py-2 rounded-md bg-gray-200 outline-none cursor-pointer hover:bg-gray-300 shadow password_input ${errors.password && "ring ring-red-400"}`} minLength={8} autoComplete="off" />
                    {
                        toggle ? <EyeIcon className='h-6 absolute top-8 cursor-pointer right-3 z-50' onClick={passwordToggle} /> : <EyeOffIcon className='h-6 absolute top-8 cursor-pointer right-3 z-50' onClick={passwordToggle} />
                    }
                </label>
                <input className='bg-blue-700 text-white py-1.5 rounded-md hover:bg-blue-500 cursor-pointer shadow' type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login