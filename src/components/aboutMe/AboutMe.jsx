import React from "react"
import { Navigate, useNavigate } from "react-router-dom"

const AboutMe =()=>{



  const baseUrl = "https://res.cloudinary.com/dzyvwxh7n/image/upload/"


  const images = [

    { name:"v1758264820/Agro_-project-1_eo5uv6.png", text:"Developed using React, Tailwind, Vite, Recoil, Formik, Yup, Axios, and Cloudinary" },
    {name:"v1758264688/Alvent_site_7_oyaxe0.png", text:"Modern homepage showcasing featured events with responsive design, intuitive navigation, and an engaging user experience " },
    { name:"v1758264685/sporting_site_6_tze156.png", text:"Full-stack Firebase clothing e-commerce app showcasing collections, authentication, responsive design, and seamless navigation" },
    { name:"v1758264821/Agro-tech-2_xn65ji.png", text:"Developed using React, Tailwind, Vite, Recoil, Formik, Yup, Axios, and Cloudinary" },
    { name:"v1758264687/alvent_site_9_k3g61h.png", text:"Sign-up page developed with MongoDB backend integration, secure authentication, and responsive validation for seamless onboarding." },
    {name:"v1758264688/sporting_site_3_pfpwua.png", text:"Dynamic Firebase product display highlighting sporting kits with images, prices, and cart management using Context API."},
    {name:"v1758264685/alvent_site_8_cg8a1m.png", text:"Developed responsive frontend with React, MUI, Tailwind, Redux, Formik, Stripe, Cloudinary, and Leaflet; integrated APIs with backend team" },
    {name:"v1758264686/sporting_site_5_d0i4nu.png", text:"Event creation page integrated with MongoDB, enabling users to efficiently add, manage, and publish events." }






  ]





 

    const navigate =useNavigate()
    return(
    //    <div href="#contact">
         <section href="#contact" className="   bg-[hsl(172,90%,69%)]  px-10 py-24 h-auto ">
           
        <div className="relative px-7 flex  shadow-2xl rounded-xl flex-col gap-y-4 py-4">
<h2 className="text-center text-[25px] bg-gray-500  mx-auto  w-[200px] py-1 text-white rounded-full items-center mb-8  font-bold">About Me</h2> 
{/* image section */}
  <div className="flex w-full justify-between">
             <div className="hidden md:flex w-full">
                <img src="" alt="About-Me img" />
            </div>
          
<div className=" flex flex-col gap-y-8">
   <div className="flex flex-col gap-y-4"> 
<h4 className="text-[20px] font-bold">Background</h4> 
<p>I'm a self-driven frontend developer with a growing passion for backend technologies. I started my journey building interfaces with HTML, CSS, and JavaScript, and gradually evolved into building full-stack web applications using the MERN stack.</p>




<h2 className="text-[20px] font-bold"> Career Goals</h2>
To grow as a full-stack developer, work with innovative teams on real-world projects, and contribute to scalable and accessible web applications. I'm passionate about clean code, intuitive design, and continuous learning.


</div>
<a className="cursor-pointer" 

 onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}> 
    <button  className="text-[20px] font-bold border text-center h-10 text-slate-700 border-cyan-950 w-auto px-6 rounded-lg ">Contact Me</button>
</a>
</div>
</div>


 
        </div>
   
        </section>
        // </div>
    )
}
export default AboutMe