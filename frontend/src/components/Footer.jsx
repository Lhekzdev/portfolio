import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Footer = () => {

  const navigate =useNavigate()
  return (
    <footer className="bg-gray-500 h-auto text-gray-300  py-6">
      <div className="max-w-6xl mx-auto px-4 text-center flex-row   items-center justify-between">
        
   
     

         <div className="text-center gap-y-5 flex flex-col  md:gap-6 items-center py-10">
       <div className="text-2xl pb-4 md:pb-0 font-bold"> <h2 >Contact Me</h2></div>
       
          <div className="flex  place-content-center items-center space-x-6">
          <a href="https://github.com/Lhekzdev/portfolio" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub className="hover:text-white transition" />
          </a>
          <a href="https://www.linkedin.com/in/aduraleke-olaseinde-b35621205" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="hover:text-white transition" />
          </a>






          <a  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
           aria-label="Email">
            <FaEnvelope 
             className="hover:text-white transition" />
          </a>
        </div>
   

         <div className="text-sm text-center mb-4 md:mb-0"> <p >
          © 2026 Samuel — Frontend & Backend Developer
        </p></div>
   </div>
      </div>
    </footer>
  );
};

export default Footer;
