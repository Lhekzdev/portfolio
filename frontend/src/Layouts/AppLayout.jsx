import Footer from "../components/Footer"
import Navbar from "../components/Navbar";
import { useState } from "react";


const AppLayout = ({ children }) => {
      const [darkMode, setDarkMode] = useState(false);
        const [isOpen,setIsOpen] =useState(false)
    return (
        <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>
           <Navbar
           isOpen={isOpen}
           setIsOpen={setIsOpen}
      darkMode ={darkMode}
      setDarkMode ={setDarkMode}
   
      />

     
        <div className={`${isOpen ? 'hidden' : 'block'} md:block`}>
            <main className="flex-grow ">
                {children}
               
            </main>
             <Footer/>
             </div>
     
        </div>


    )
}

export default AppLayout;