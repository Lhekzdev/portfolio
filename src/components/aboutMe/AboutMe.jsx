import React from "react"
import { Navigate, useNavigate } from "react-router-dom"

const AboutMe =()=>{
 

    const navigate =useNavigate()
    return(
       <div href="#contact"> <section className="bg-[hsl(172,90%,69%)]  px-10 py-24 h-auto dark:bg-gray-900">
           
        <div className="relative px-7 flex shadow-2xl rounded-xl flex-col gap-y-4 py-4">
<h2 className="text-center text-[25px] bg-gray-900 px-5 mx-auto  w-[200px] py-2 text-white rounded-full items-center mb-8  font-bold">About Me</h2> 
{/* image section */}
  <div className="flex w-full justify-between">
             <div className="w-full">
                <img src="" alt="About-Me img" />
            </div>
          
<div className=" flex flex-col gap-y-5">
   <div> 
<h4 className="text-[20px] font-bold">Background</h4> 
<p>I'm a self-driven frontend developer with a growing passion for backend technologies. I started my journey building interfaces with HTML, CSS, and JavaScript, and gradually evolved into building full-stack web applications using the MERN stack.</p>




<h2 className="text-[20px] font-bold"> Career Goals</h2>
To grow as a full-stack developer, work with innovative teams on real-world projects, and contribute to scalable and accessible web applications. I'm passionate about clean code, intuitive design, and continuous learning.


</div>
<a className="cursor-pointer" onclick= {()=>(navigate('contact'))}> 
    <button  className="text-[20px] font-bold border text-center h-10 text-slate-700 border-cyan-950 w-auto px-6 rounded-lg ">Contact Me</button>
</a>
</div>
</div>


 
        </div>
   
        </section></div>
    )
}
export default AboutMe