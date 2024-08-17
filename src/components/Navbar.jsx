import React, { useEffect, useState } from "react"
import { FiAlignCenter } from "react-icons/fi";
import { HiAcademicCap } from "react-icons/hi";
import "../App.css"


const Navbar = () => {
  const[ sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    });
  });
  const[mobilemenu , setMobilemenu] = useState(false);
  const togglemenu = ()=>{
    mobilemenu? setMobilemenu(false) : setMobilemenu(true);
  }


  return (
    <>
    <nav className={`containerNav ${sticky ? 'dark-nav': ''}`}>
      <div className="logoDiv">
    <span><HiAcademicCap /></span><h1 className="logo">STUDYCORNER</h1>
    </div>
      <ul className={mobilemenu? '' : "hide-mobile-menu"}>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li >Campus</li>
        <li>Testominals</li>
        <li ><button className="navbtn">Contact us</button></li>
      </ul>
      <span onClick={togglemenu} className="menu-icon"><FiAlignCenter /></span>
    </nav>
    </>
  )
} 

export default Navbar