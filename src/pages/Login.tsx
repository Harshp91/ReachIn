import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    useEffect(()=>{
        // localStorage.removeItem("reachinbox-auth");
        // localStorage.removeItem("reachinbox-auth-firstname");
        // localStorage.removeItem("reachinbox-auth-lastname");
        // localStorage.removeItem("reachinbox-auth-email");
    },[])
  return (
    <div className='bg-black max-w-[1440px] h-screen m-auto text-white  flex flex-col justify-between'>
        <div className=" w-full h-16 flex justify-center items-center border border-slate-800">
            <img src="https://media.licdn.com/dms/image/D560BAQEmo1aZIhVtlQ/company-logo_200_200/0/1700158687336/reachinbox_ai_logo?e=2147483647&v=beta&t=2eGcwWsFtdBcUVJGGHkBxWHYFN86D-c5zfyr4s3DsNw" alt="reachinbox-logo" className="h-7 pr-2" />
            <h1>REACHINBOX</h1>
        </div>
        <div className='w-full  flex justify-center items-center '>
            <div className=' m-auto w-[460px] h-auto md:h-[312px]  bg-[#111214] rounded-2xl border border-gray-700  py-6  px-10 '>
                <div className=' w-[380px] m-auto'>
                    <p  className=' text-xl mb-6'>Create new account</p>
                    <div className='rounded border border-gray-500 h-12 flex justify-center items-center gap-2.5  mb-12'>
                        <img src="https://static.vecteezy.com/system/resources/previews/013/760/951/non_2x/colourful-google-logo-in-dark-background-free-vector.jpg" alt=""  className='bg-black rounded-full h-5 mt-0.5'/>
                        <Link  to="https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reachinbox-frontend.netlify.app/desktop" className='text-sm text-gray-400 cursor-pointer'> Sign Up with Google </Link>
                        {/* <Link  to="https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000/desktop" className='text-sm text-gray-400 cursor-pointer'> Sign Up with Google </Link> */}
                    </div>
                    <p className='w-[195px] h-12 bg-[#4B63DD] rounded m-auto text-center pt-2.5 mb-6 cursor-pointer'>Create an account</p>
                    <p className='text-base text-gray-500'>Already have an account? <span>Sign In</span></p>
                </div>

            </div>
        </div>
        <div className=" w-full h-8 flex justify-center items-center border border-slate-800">
            <p className='h-5 text-gray-600 text-xs'> ©️ 2023 Reachinbox. All rights reserved.</p>
        </div>
    </div>
    
  )
}

export default Login