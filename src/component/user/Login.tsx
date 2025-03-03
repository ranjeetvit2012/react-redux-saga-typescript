import { Navigate ,NavLink } from "react-router-dom";
// import { useEffect } from "react";
import {Card,Container,Row,Col,Form, } from 'react-bootstrap';
import { Button } from 'flowbite-react';

import { useFormik } from "formik";

import { toast, ToastContainer } from "react-toastify";
import { useContext, useEffect } from "react";
import {  useSelector,useDispatch } from 'react-redux'
import {userLoginRequest,userClearState} from "../../redux/action/userAction"
import {LoderSpinner} from "../../utils/Utils"
import { UserContext } from "../context/UserContext";


import { useForm } from "react-hook-form";
import '../../App.css';

const Login =() =>{
  const userContext = useContext(UserContext)

   
  const dispatch = useDispatch()
  const userData = useSelector((state: any) => state.user);
  console.log("userData --state",userData)
  const loader = useSelector((state: any) => state.user.loader);
  if(userData?.status==201){
    toast.success(userData?.message);
    dispatch(userClearState());
    <Navigate to="/" />
  }

  useEffect(()=>{
    console.log("userContext.user",userContext.user)
    if(userContext.user){
      <Navigate to="/dashboard" />
    }
  },[])
 
  type loginForm = {
    email: string;
    password: string;
   
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginForm>();

  const onSubmit = (data: loginForm) => {
    dispatch(userLoginRequest(data))
    userContext.setUser(data)
    console.log("Form Data Submitted:", data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="bg-white/90 shadow-lg backdrop-blur-lg rounded-2xl border border-gray-200 px-10 py-8 max-w-sm w-full">
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>
    
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Email Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          {...register("email", { required: "Email is required", pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: "Invalid email" } })}
          className="w-full h-12 px-4 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      {/* Password Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          {...register("password", { required: "Password is required", minLength: { value: 6, message: "Must be at least 6 characters" } })}
          className="w-full h-12 px-4 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
      </div>

      {/* Submit Button */}
      <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 font-bold rounded-lg hover:shadow-xl transition-all transform hover:scale-105">
        Login
      </button>
    </form>
    
    {/* Extra Links */}
    <p className="text-center text-sm text-gray-600 mt-4">
      Don't have an account? <NavLink to="/register" className="text-blue-500">Register</NavLink>
    </p>
  </div>
</div>

    // <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
    //   <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Login</h2>
    //   <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
       

    //     <div>
    //       <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
    //       <input
    //         type="email"
    //         {...register("email", { required: "Email is required", pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: "Invalid email" } })}
    //         className="w-full h-10 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
    //       />
    //       {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
    //     </div>

    //     <div>
    //       <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
    //       <input
    //         type="password"
    //         {...register("password", { required: "Password is required", minLength: { value: 6, message: "Must be at least 6 characters" } })}
    //         className="w-full h-10 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
    //       />
    //       {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
    //     </div>

        
    //     <button type="submit" className="w-full bg-blue-500 text-white py-2 font-bold rounded-lg hover:bg-blue-600 shadow-md transition">
    //       Login
    //     </button>
    //   </form>
    // </div>
  );
}


export default Login;