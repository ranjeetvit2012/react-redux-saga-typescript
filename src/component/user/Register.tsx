import { Navigate ,NavLink } from "react-router-dom";
import {Card,Container,Row,Col,Form, } from 'react-bootstrap';
import { Button } from 'flowbite-react';

import { useFormik } from "formik";
import * as Yup from "yup";
// import { apiCall } from "../../utils/Utils";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";
import {  useSelector,useDispatch } from 'react-redux'
import {userRegisterRequest,userClearState} from "../../redux/action/userAction"
import {LoderSpinner} from "../../utils/Utils"


import { useForm } from "react-hook-form";

const Register =() =>{
  
  const dispatch = useDispatch()
  const userData = useSelector((state: any) => state.user);
  console.log("userData --state",userData)
  const loader = useSelector((state: any) => state.user.loader);
  if(userData?.status==201){
    toast.success(userData?.message);
    dispatch(userClearState());
    <Navigate to="/" />
  }

  type RegisterForm = {
    name: string;
    email: string;
    password: string;
    mobile: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>();

  const onSubmit = (data: RegisterForm) => {
    dispatch(userRegisterRequest(data))
    console.log("Form Data Submitted:", data);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full h-10 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required", pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: "Invalid email" } })}
            className="w-full h-10 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required", minLength: { value: 6, message: "Must be at least 6 characters" } })}
            className="w-full h-10 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
          <input
            type="tel"
            {...register("mobile", { required: "Mobile number is required", pattern: { value: /^[0-9]{10,15}$/, message: "Invalid mobile number" } })}
            className="w-full h-10 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
          />
          {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>}
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 font-bold rounded-lg hover:bg-blue-600 shadow-md transition">
          Register
        </button>
      </form>
    </div>
  );
}

   

export default Register;