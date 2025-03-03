import React from "react";
import "./Header.css";
import {   Link } from "react-router-dom";


const HeaderWithoutLogin: React.FC = () => {
  return (
    <header className="site-header">
    <div className="site-identity">
    <img 
        src="/Screenshot_6.png" 
        alt="Site Logo" 
        width="50" 
        height="50"
      />
    </div>  
    <nav className="site-navigation">
      <ul className="nav">
        <li><Link to="/">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  </header>
);


};

export default HeaderWithoutLogin;