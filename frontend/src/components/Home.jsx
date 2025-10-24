
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { div } from "framer-motion/client";
// import '../../src/App.css';
// import '../../src/index.css'
const Home = ({ darkMode }) => {



  const baseUrl = "https://res.cloudinary.com/dzyvwxh7n/image/upload/"


  const images = [

    { name: "v1758264688/Alvent_site_7_oyaxe0.png", heading: "Alvent", text: "A platform for easy event management — built with React, Node.js, and MongoDB " },
    { name: "v1758264821/Agro-tech-2_xn65ji.png", heading: "Clothing E-commerce App", text: "A simple e-commerce app for fashion — built with React, Tailwind CSS, and Firebase for authentication" },





  ]






  // const navigate =useNavigate();
  const portfolioRef = useRef(null);

  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="w-full bg-gradient-to-r flex items-center justify-between from-[hsl(172,90%,69%)] to-[#02c3bd] h-auto relative ">

      {/* <div className="items-center flex pr-10" > */}
      <div className=" border border-[red] lg:max-w-[55%]  ">



        {/* Hero Section */}
        <section className=" text-left  px-8 py-20">
          <motion.h2 className="text-4xl pl-5 font-bold font-poppins  text-white 
               [text-shadow:_2px_2px_0_#00c6a9]" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Hi, I'm <br /> Olaseinde Aduraleke Samuel
          </motion.h2>
          <p className={`${darkMode ? "text-red-950" : "text-red-900"} text-lg mt-4 font-semibold pl-5`}> | Senior Frontend Developer | </p>
          <p className="mb-5 pl-5">I design and build responsive, user-friendly web applications that solve <br />real-world problems and deliver seamless digital experiences.</p>


          <a href="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1758149762/Aduraleke-olaseinde_tech_cv_ygbjhz.pdf" className="text-center ml-5  px-5 mt-5 border rounded-md text-red-900" download="My_CV.pdf">
            Download My CV
          </a>


          <div className="  p-10">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <div className="grid gap-5 grid-cols-1  pb-10 flex lg:flex-col  ">



              <div className="lg:flex flex flex-col lg:flex-row gap-y-6 h-auto lg:gap-6  ">




                {images.map((img, i) => (
                  <div key={i} className=" shadow-[0_10px_30px_rgba(0,0,0,0.5)] lg:w-full       p-5 rounded-xl">
                    <h3 className="font-bold pb-3">{img.heading}</h3>
                    <img src={baseUrl + img.name} className="bg-gray-100 border w-full h-[150px] border-gray-500" alt="" />




                    <p >{img.text}</p>


                  </div>


                ))}



              </div>

              <div className="cursor-pointer max-w-[45%]" onClick={() => {
                window.location.href = "/#portfolio";    // ✅ navigate to same page different section
              }}>
                <button className="hover:font-bold  hover:text-red-950" >See more...</button>
                </div>
            </div>

          </div>


        </section>

        {/* Projects Section */}


        {/* Contact Section */}


      </div>


      <div className=" hidden border border-[black] lg:flex px-10 h-[400px]">
        <img src="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1761267461/Screenshot_20251024_015150_Instagram_jfiwoy.jpg" alt="" />
      </div>
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
        <path d="M0,0 Q50,10 100,0 L100,19 L0,10 Z"
          className="fill-[hsl(172,90%,69%)] dark:fill-gray-900"
        />
      </svg>
      {/* </div> */}
    </section>
  );
}


export default Home;