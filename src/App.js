

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
import LandingPage from './components/landingPage/LandingPage.jsx';


function App() {
  return (


    <div>
<AppLayout>
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
      </AppLayout>
  <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
