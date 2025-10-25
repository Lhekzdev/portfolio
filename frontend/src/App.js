
import React,{Suspense,lazy} from 'react';
import AboutMe from './components/aboutMe/AboutMe.jsx';

import AppLayout from './Layouts/AppLayout.jsx';
import { Route ,Routes } from 'react-router-dom';
// import Skills from './components/Skills.jsx';
// import Projects from './components/Projects.jsx';
// import Contact from './components/contactMe/Contact.jsx';
// import Experience from './components/Experience .jsx';
// import Home from './components/landingPage/LandingPage.jsx';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Portfolio from './components/portfolio/Portfolio.jsx';
const LandingPage = lazy(() => import("./components/landingPage/LandingPage.jsx"));


function App() {
  return (


    <div>
<AppLayout>
<Suspense fallback={<div className="flex justify-center items-center h-screen">
  <span className="animate-spin rounded-full h-12 w-12 border-4 border-gray-400 border-t-blue-600"></span>
</div>}>
      <Routes>
          <Route  path="/" element={<LandingPage/>}/>
          {/* <Route  path="/portfolio" element={<Portfolio/>}/> */}
      
          {/* <Route  path="aboutMe" element={<AboutMe/>}/> */}
          {/* <Route  path="Projects" element={<Projects/>}/> */}
          {/* <Route  path="Skills" element={<Skills/>}/> */}
          {/* <Route  path="Contact" element={<Contact/>}/> */}
          {/* <Route  path="Experience" element={<Experience/>}/> */}
          {/* <Route  path="" element={<Home/>}/> */}
      
      
        </Routes>
        </Suspense>
      </AppLayout>
  <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
