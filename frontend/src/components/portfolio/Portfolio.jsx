import React, { useState } from "react";


const Portfolio = () => {




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


  return (

   <div className=" h-auto bg-gradient-to-r  px-10  py-10 bg-[hsl(172,90%,69%)] p-6 rounded shadow " >
      <div className="rounded-lg flex border flex-col  gap-y-5 shadow-2xl py-6"  >

        <div className="text-[25px] mx-auto bg-gray-500 rounded-full   w-[250px] py-1 ">
          <h2 className=" text-white text-center items-center   font-bold">Portfolio</h2>
        </div>
       <div className="grid grid-cols-2  md:grid-cols-3 gap-4 px-5">
  {images.map((img, i) => (
    <div
      key={i}
      className="relative   w-full aspect-[4/3] flex items-center justify-center bg-gray-100 rounded-md overflow-hidden group"
    >
      <img
       loading="lazy"
        src={baseUrl + img.name}
        alt={`img-${i}`}
        className="h-full w-full object-cover"
      />

      {/* Text overlay (appears on hover) */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 text-center">
        <span className="text-white text-[10px] sm:text-sm md:text-base font-semibold leading-snug break-words max-w-full">
          {img.text}
        </span>
      </div>
    </div>
  ))}
</div>


      </div>
    </div>
  );
}
export default Portfolio;
