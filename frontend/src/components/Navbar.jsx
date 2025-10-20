import React, { useState } from "react"

import { Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import {Menu, X} from "lucide-react"


import { Image } from 'cloudinary-react';

{/* <Image
  cloudName="your-cloud-name"
  publicId="folder/image-name.jpg"
  width="300"
  crop="scale"
/> */}


const Navbar =({darkMode,setDarkMode,isOpen,setIsOpen})=>{



    return(

    
      <nav className= "flex md:px-10 w-full justify-between items-center z-50 bg-cyan-50  shadow-md">
     
     <ul className="flex items-center"> 
        <img src="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1752846190/Ondev_Apps__1_-removebg-preview_tz8vnf.png" className="w-20 h-20" alt="" />
        <h1 className="text-xl font-bold">My Portfolio</h1>
       </ul>
      
        
{/* https://res.cloudinary.com/dzyvwxh7n/image/upload/v1752846190/Ondev_Apps__1_-removebg-preview_tz8vnf.png */}
   
<div className="flex items-center gap-2">
  <ul className="  hidden md:flex font-bold  text-[20px] space-x-6 ">
  
    <li cla > <a href="#landingPage"  className="hover:text-blue-500 hover:pl-5 cursor-pointer">Home </a></li>
    <li > <a href="#portfolio"  className="hover:text-blue-500 cursor-pointer">Portfolio </a></li>
    <li><a href="#AboutMe" className="hover:text-blue-500 cursor-pointer">About </a> </li>
    <li><a href="#skills"  className="hover:text-blue-500 cursor-pointer">Skills </a></li>
    {/* <li><a href ="#Projects"className="hover:text-blue-500 cursor-pointer">Projects </a> </li> */}
    <li><a href="#experience" className="hover:text-blue-500 cursor-pointer">Experience </a> </li>
    {/* <li><Link to ="#Contact" className="hover:text-blue-500 cursor-pointer">Contact </Link> </li> */}

  </ul>
  <div className="md:hidden">
<button className="px-5" onClick={()=>{setIsOpen(!isOpen)}}>
{ isOpen? <X size={24}/> : <Menu size={24}/>}

</button>
 </div>
{isOpen && (
  <div className="">

 <ul className=" w-full  bg-cyan-50  md:hidden absolute  font-bold text-[20px] border  shadow shadow-2xl  mt-10 flex flex-col gap-y-5 h-screen py-5 left-0 pl-6  ">
  
    <a   href="#landingPage"  onClick={()=>{setIsOpen(false)}}   className="hover:text-blue-500 hover:pl-5  cursor-pointer">Home </a>
    <a href="#portfolio" onClick={()=>{setIsOpen(false)}} className="hover:text-blue-500 hover:pl-5 cursor-pointer">Portfolio  </a>
    <a href="#AboutMe" onClick={()=>{setIsOpen(false)}}  className="hover:text-blue-500 hover:pl-5 cursor-pointer">About </a>
     <a href ="#skills" onClick={()=>{setIsOpen(false)}} className="hover:text-blue-500 hover:pl-5 cursor-pointer">Skills </a>
     <a href="#experience" onClick={()=>{setIsOpen(false)}}  className="hover:text-blue-500 hover:pl-5 cursor-pointer">Experience </a>
     {/* <a href="#Contact" onClick={()=>{setIsOpen(false)}}  className="hover:text-blue-500 cursor-pointer">Contact </a> */}

  
</ul>


  </div>
 )

}
{/* 
         <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button> */}
         </div>
      </nav>



    )

}

export default Navbar;