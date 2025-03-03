import React from "react";
import "./Header.css";
import {   Link } from "react-router-dom";

const Header: React.FC = () => {
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
        
        <li><Link to="/dashboard">Dashboard</Link></li>
        {/* <li><a href="#">About</a></li> 
        <li><a href="#">News</a></li> 
        <li><a href="#">Contact</a></li>  */}
      </ul>
    </nav>
  </header>
);


};

export default Header;
