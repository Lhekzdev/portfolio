
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
// import '../../src/App.css';
// import '../../src/index.css'
const Home = ({darkMode}) => {
// const navigate =useNavigate();
const portfolioRef = useRef(null);

  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-gradient-to-r flex from-[hsl(172,90%,69%)] to-[#02c3bd] h-screen  relative">
  

   
      {/* Hero Section */}
      <section className=" text-left px-8 py-20">
        <motion.h2 className="text-4xl  font-bold font-poppins  text-white 
               [text-shadow:_2px_2px_0_#00c6a9]" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Hi, I'm <br/> Olaseinde Aduraleke Samuel
        </motion.h2>
        <p className={darkMode ? "text-red-950 text-lg " : "text-lg mt-4 text-red-900"}> | Senior Frontend Developer | </p>
        <p className="mb-5">I design and build responsive, user-friendly web applications that solve real-world problems and deliver seamless digital experiences.</p>
     
   
     <a href="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1758149762/Aduraleke-olaseinde_tech_cv_ygbjhz.pdf" className="text-center px-5 mt-5 border rounded-md text-red-900" download="My_CV.pdf">
  Download My CV
</a>


  <section className=" p-10">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-5 border rounded-lg shadow-lg">
            <h3 className="font-semibold">Project 1</h3>
            <p>Short description of your project.</p>
          </div>
          <div className="p-5 border rounded-lg shadow-lg">
            <h3 className="font-semibold">Project 2</h3>
            <p>Short description of your project.</p>
          </div>
         <div className="cursor-pointer "   onClick={() => {
    window.location.href = "/#portfolio";    // ✅ navigate to same page different section
  }}> <button className="hover:font-bold hover:text-red-950" >See more...</button></div> 
        </div>

      </section>
     

      </section>

      {/* Projects Section */}
    

      {/* Contact Section */}
     
  <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
    <path d="M0,0 Q50,10 100,0 L100,19 L0,10 Z" 
 className="fill-[hsl(172,90%,69%)] dark:fill-gray-900"
     />
  </svg> 
    </div>
  );
}


export default Home;