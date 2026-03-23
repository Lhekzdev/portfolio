import React, { useState } from "react";
import { motion } from "framer-motion";

const Portfolio = () => {

const [showMore, setShowMore] = useState(false);
const [showMoreTwo, setShowMoreTwo] = useState(false);


  const baseUrl = "https://res.cloudinary.com/dzyvwxh7n/image/upload/"


  const images = [

    { name: "v1758264820/Agro_-project-1_eo5uv6.png", text: "Developed using React, Tailwind, Vite, Recoil, Formik, Yup, Axios, and Cloudinary" },
    { name: "v1758264688/Alvent_site_7_oyaxe0.png", text: "Modern homepage showcasing featured events with responsive design, intuitive navigation, and an engaging user experience " },
    { name: "v1758264685/sporting_site_6_tze156.png", text: "Full-stack Firebase clothing e-commerce app showcasing collections, authentication, responsive design, and seamless navigation" },
    { name: "v1758264821/Agro-tech-2_xn65ji.png", text: "Developed using React, Tailwind, Vite, Recoil, Formik, Yup, Axios, and Cloudinary" },
    { name: "v1758264687/alvent_site_9_k3g61h.png", text: "Sign-up page developed with MongoDB backend integration, secure authentication, and responsive validation for seamless onboarding." },
    { name: "v1758264688/sporting_site_3_pfpwua.png", text: "Dynamic Firebase product display highlighting sporting kits with images, prices, and cart management using Context API." },
    { name: "v1758264685/alvent_site_8_cg8a1m.png", text: "Event creation page integrated with MongoDB, enabling users to efficiently add, manage, and publish events." },
    { name: "v1758264686/sporting_site_5_d0i4nu.png", text: "A modern clothing app built with React, Firebase, and Paystack — featuring Cloudinary image uploads, Context API, and responsive CSS design." }






  ]


  return (

    <section className=" h-auto bg-gradient-to-r  px-10  py-10 bg-slate-600 p-6 rounded shadow " >

      <div className="rounded-lg flex border flex-col  gap-y-5 shadow-2xl "  >

        <div className="text-[25px] mx-auto bg-teal-600 rounded-full   w-auto px-5 py-2 mt-3 ">
          <h2 className=" text-white text-center items-center   font-bold">Portfolio</h2>
        </div>
        <div className="grid grid-cols-2  md:grid-cols-3 gap-4 px-5">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative   w-full  flex items-center justify-center bg-gray-100 rounded-md overflow-hidden group"
            >
              <motion.img
                loading="lazy"
                src={baseUrl + img.name}
                alt={`img-${i}`}
                className="h-full w-full object-contain p-1"
                 
                    initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, delay: i * 0.2 }}
  viewport={{ once: false }}
                    />
              
              

              {/* Text overlay (appears on hover) */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 text-center">
                <span className="text-white text-[8px] md:text-[9px] leading-tight lg:leading-none lg:text-base font-semibold  break-words max-w-full">
                  {img.text}
                </span>
              </div>
            </div>
          ))}
        </div>



        <h1  className=" px-5 text-white md:text-xl text-center bg-teal-600 mx-auto   py-3 my-4 rounded-2xl font-semibold mt-2">
          
          More about my projects </h1>
        <div className=" w-full flex flex-col md:flex-row gap-y-4 md:gap-x-5 px-10 md:flex">
          <div className="md:w-[50%]">
            <h2 className="font-bold text-white">💼 Senior Frontend Developer | May 2024 </h2>
      
                  
                  <div className="md:max-full text-white md:flex md:flex-col md:gap-y-5">

              <p>Built a fully responsive, high-performance portfolio website designed to showcase my work and allow direct communication between users (including recruiters and potential employers) and myself through a real-time messaging system.</p>
              <div className="px-5">
                <h1 className="font-bold">✨ UI / UX Features</h1>
                
                    <ul className="list-disc pl-5 space-y-1">
                <li>Modern responsive design optimized for all screen sizes (mobile, tablet, desktop) </li>
                <li>Smooth page transitions and animations using Framer Motion</li>
                <li>Interactive AI-powered chat assistant for portfolio inquiries</li>
                <li>Scroll-based navigation with active section highlighting</li>
                <li>Clean, recruiter-focused UI with minimal distractions</li>
            
            {!showMore && (
    <button
      onClick={() => setShowMore(true)}
        className="text-white bg-green-950 px-3 py-1 rounded-2xl font-semibold mt-2"
    >
      See more
    </button>
  )} {showMore && ( 
    <>
                <li>Toast/feedback system for user actions (message sent, errors, etc.)</li>
                <li>Loading states and skeleton UI for better user experience</li>
                <li>Floating “Back to Top” button for easy navigation</li>


                <li >Section-based layout (Home, Portfolio,AI Assistant, About, Skills, Experience, Contact)</li>
              </>)}
              </ul>



   
               {/* 🔥 HIDDEN CONTENT  */}
      {showMore && (
      <div className="px-5 mt-3">
                    <h1 className="font-bold">⚙️ Frontend Technologies</h1>

                <p>React, React Native, Tailwind CSS, Apollo Client, Framer Motion, Figma, Yup, Lucide-react, PostCSS, Netlify
                </p>
                <h2 className="font-bold">🔧 Backend Technologies
                </h2>
                <p>Node.js, Express, MongoDB, Mongoose, Cloudinary, Multer, Nodemailer, Resend, CORS, dotenv</p>

                     <button
        onClick={() => setShowMore(false)}
       className="text-white bg-teal-600 px-3 py-1 rounded-2xl font-semibold mt-2"
      >
        See less
      </button>
          
              </div>
  )}
  </div>
</div>
</div>





 <div className="md:w-[50%]">
  <h2 className="font-bold text-white">
    💼 Frontend Developer | July 2024 – Dec. 2025
  </h2>

  <div className="md:max-w-full text-white md:flex md:flex-col md:gap-y-5">

    <p>
      This application is an event management and ticketing platform that allows users to create events, browse available events, and purchase or reserve tickets...
    </p>

    <div className="px-5">
      <h1 className="font-bold">✨ UI / UX Features</h1>

      <ul className="list-disc pl-5 space-y-1">
        <li>Designed and implemented responsive UI components...</li>
        <li>Developed dynamic forms for event creation...</li>
        <li>Implemented state management...</li>
        <li>Integrated API calls...</li>
        <li>Added loading states and notifications...</li>
      </ul>

      {/* ✅ SEE MORE BUTTON */}
      {!showMore && (
        <button
          onClick={() => setShowMore(true)}
            className="text-white bg-green-950 px-3 py-1 rounded-2xl font-semibold mt-2"
    
        >
          See more
        </button>
      )}
    </div>

    {/* 🔥 HIDDEN CONTENT */}
    {showMore && (
      <div className="px-5 mt-3">
        <h1 className="font-bold">⚙️ Frontend Technologies</h1>

        <p>
          React, React Native, Tailwind CSS, Apollo Client, Framer Motion,
          Figma, Yup, Lucide-react, PostCSS, Netlify
        </p>

        <h1 className="font-bold mt-2">Technologies used</h1>

        <p>
          React, React-Native, Micro-frontend, MongoDB, Netlify,
          Google auth, passport, GitHub, Expo, Tailwind CSS,
          Apollo-Client, Figma, Cloudinary.
        </p>

        {/* ✅ FIXED SEE LESS */}
        <button
          onClick={() => setShowMore(false)}
          className="text-white bg-teal-600 px-3 py-1 rounded-2xl font-semibold mt-2"
        >
          See less
        </button>
      </div>
    )}
  </div>
 
</div>







       
        </div>
<div className="text-center mx-10 px-10 py-5 bg-teal-600 text-white rounded-xl">
    <p>To see more of my projects kindly downoload my CV, other details *gitHub link, linkedIn, * can be found in the footer section. A direct message can also be sent via the contact me section </p>
  </div>
      </div>
 
    </section>
  );
}
export default Portfolio;
