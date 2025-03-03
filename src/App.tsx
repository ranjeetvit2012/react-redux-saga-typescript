import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from "./component/user/Register"
import Login from "./component/user/Login"
import {  Routes, Route } from "react-router-dom";
import Dashboard from './component/user/Dashbord';
import AuthLayout from './component/layout/AuthLayout';
import Layout from './component/layout/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      </Route>
        
        <Route element={<AuthLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
  </Route>
       
      </Routes>
   
    </div>
  );
}

export default App;
