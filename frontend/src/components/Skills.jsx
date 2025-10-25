const Skills = () => {
    return (
 <section  className="bg-[hsl(172,90%,69%)] flex flex-col gap-y-9  px-10  py-10 h-auto  ">
        <div className="w-full px-4  md:h-auto  relative flex md:gap-y-11 flex-col rounded-lg shadow-2xl py-6 ">
            <div className="text-[25px] mx-auto bg-gray-500    rounded-full   w-[250px] py-2">
         <h2 className=" text-white text-center items-center   font-bold">Skills</h2>
         </div>
                  
            {/* <h2 className="font-bold text-center text-[50px]">Skills</h2> */}
  <div className="  justify-items-center  py-7">
  
    {/* Frontend */}
<h1 className="text-[20px]  text-center font-bold">frontend</h1>




      
   

    <div className="grid md:grid-cols-3 md:gap-24 gap-10 text-6xl p-6">

      {/* Tailwind */}
      <div className="flex flex-col items-center">
        <i className="devicon-tailwindcss-plain colored"></i>
        <h4 className="text-xl font-bold mt-2">Tailwind</h4>
         < p className="text-center font-normal max-w-48 text-[15px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, pariatur.</p>
      </div>

      {/* HTML5 */}
      <div className="flex flex-col items-center">
        <i className="devicon-html5-plain colored"></i>
        <h4 className="text-xl font-bold mt-2">HTML5</h4>
         < p className="text-center font-normal max-w-48 text-[15px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, pariatur.</p>
      </div>

      {/* CSS3 */}
      <div className="flex flex-col font-bold items-center">
        <i className="devicon-css3-plain colored"></i>
        <h4 className="text-xl mt-2">CSS3</h4>
         < p className="text-center font-normal max-w-48 text-[15px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, pariatur.</p>
      </div>

      {/* JavaScript */}
      <div className="flex flex-col items-center">
        <i className="devicon-javascript-plain colored"></i>
        <h4 className="text-xl font-bold mt-2">JavaScript</h4>
         < p className="text-center font-normal max-w-48 text-[15px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, pariatur.</p>
      </div>

      {/* Next.js */}
  <div className="flex flex-col items-center">
  <img
    src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
    alt="Next.js"
    className="w-12 h-12"
  />
  <h4 className="text-xl font-bold mt-2">Next.js</h4>
  <p className="text-center font-normal max-w-48 text-[15px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, pariatur.</p>
</div>

      {/* Figma */}
      <div className="flex flex-col items-center">
        <i className="devicon-figma-plain colored"></i>
        <h4 className="text-xl font-bold mt-2">Figma</h4>
       < p className="text-center font-normal max-w-48 text-[15px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, pariatur.</p>
      </div>
    </div>
</div>

  
    
    {/* <div>
      <h3 className="text-lg font-semibold mb-2">Frontend</h3>
      <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200">
        <li>Tailwind CSS</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript (ES6+)</li>
        <li>Next.js</li>
        <li>Responsive Design</li>
        <li>Figma-to-code conversion</li>
      </ul>
    </div> */}

    {/* Backend */}

    <div>
     <h1 className="text-[20px] text-center font-bold">Backend</h1>
    
     
<div className="grid md:grid-cols-3 lg:grid-cols-4 items-center md:gap-10 gap-5 lg:text-6xl p-6">
      {/* Node.js */}
      <div className="flex flex-col items-center">
        <i className="devicon-nodejs-plain colored"></i>
        <h4 className="text-xl font-bold mt-2">Node.js</h4>
  <p className="text-center font-normal max-w-48 text-[15px]">Built scalable backend servers with JavaScript runtime for applications</p>
      </div>

      {/* Express.js (no colored icon, plain only) */}
      <div className="flex flex-col items-center">
        <i className="devicon-express-original"></i>
        <h4 className="text-xl font-bold mt-2">Express.js</h4>
     < p className="text-center font-normal max-w-48 text-[15px]">Created fast, lightweight APIs with routing and middleware support</p>
      </div>

      {/* MongoDB */}
      <div className="flex flex-col items-center">
        <i className="devicon-mongodb-plain colored"></i>
        <h4 className="text-xl font-bold mt-2">MongoDB</h4>
       < p className="text-center font-normal max-w-48 text-[15px]">Stored, managed, and queried application data using NoSQL database</p>
      </div>

      {/* Mongoose (use official SVG logo) */}
      <div className="flex flex-col items-center">
        <img
          src="https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png"
          alt="Mongoose"
          className="w-16 h-16 object-contain"
        />
        <h4 className="text-xl font-bold mt-2">Mongoose</h4>
        < p className="text-center font-normal max-w-48 text-[15px]">Helped organize MongoDB data into clear structures for easy use</p>
      </div>

      {/* RESTful APIs (use a simple API icon) */}
      <div className="flex flex-col items-center">
        <img
           src="https://nordicapis.com/wp-content/uploads/Web-Service-What-is-REST-API-And-How-Does-it-Work-1024x576.png"
          alt="RESTful API"
          className="w-16 h-16 object-contain"
        />
        <h4 className="text-xl font-bold mt-2">RESTful APIs</h4>
       < p className="text-center font-normal max-w-48 text-[15px]">Enabled structured data exchange between frontend and backend services</p>
      </div>

      {/* JWT & Auth Flows (JWT official logo) */}
      <div className="flex flex-col items-center">
        <img
          src="https://jwt.io/img/pic_logo.svg"
          alt="JWT"
          className="w-16 h-16 object-contain"
        />
        <h4 className="text-xl font-bold mt-2">JWT</h4>
     < p className="text-center font-normal max-w-48 text-[15px]">Implemented secure, token-based authentication for user access management.</p>
      </div>
      {/* JWT & Auth Flows (JWT official logo) */}
      <div className="flex flex-col items-center">
        <img
          src="https://jwt.io/img/pic_logo.svg"
          alt="JWT"
          className="w-16 h-16 object-contain"
        />
        <h4 className="text-xl font-bold mt-2">JWT & Auth</h4>
     < p className="text-center font-normal max-w-48 text-[15px]">Handled authentication flows with JWT for protected routes access.</p>
      </div>
    </div>

      </div>
      {/* <ul className="list-disc list-inside space-y-1 text-gray-800 dark:text-gray-200">
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>RESTful APIs</li>
        <li>JWT & Auth flows</li>
      </ul>
       */}



   {/* Tools & Technologies */}
<div>
 
      <h1 className="text-[20px] text-center font-bold">Tools & Technologies</h1>
    <div>
    
<div className="grid md:grid-cols-3 lg:grid-cols-4 items-center gap-10 text-6xl p-6">
      {/* Git */}
      <div className="flex flex-col items-center">
        <i className="devicon-git-plain colored"></i>
        <h4 className="text-xl font-bold mt-2">Git</h4>
   <p className="text-center font-normal max-w-48 text-[15px]">Tracked code changes, managed versions, and collaborated with teammates</p>
      </div>

      {/* GitHub */}
      <div className="flex flex-col items-center">
        <i className="devicon-github-original"></i>
        <h4 className="text-xl font-bold mt-2">GitHub</h4>
        <p className="text-center font-normal max-w-48 text-[15px]">Hosted repositories, collaborated on projects, and deployed live demos</p>
      </div>

      {/* Postman */}
      <div className="flex flex-col items-center">
        <i className="devicon-postman-plain colored"></i>
        <h4 className="text-xl font-bold mt-2">Postman</h4>
     <p className="text-center font-normal max-w-48 text-[15px]"> Tested APIs, validated endpoints, debugged requests, and documented workflows</p>
      </div>

      {/* VS Code */}
      <div className="flex flex-col items-center">
        <i className="devicon-vscode-plain colored"></i>
        <h4 className="text-xl font-bold mt-2">VS Code</h4>
         <p className="text-center font-normal max-w-48 text-[15px]">Wrote, edited, debugged, and organized code efficiently with extensions</p>
      </div>

      {/* Netlify */}
      <div className="flex flex-col items-center">
        <i className="devicon-netlify-plain colored"></i>
        <h4 className="text-xl font-bold mt-2">Netlify</h4>
     <p className="text-center font-normal max-w-48 text-[15px]">Deployed frontend projects quickly with automated builds and continuous integration</p>
      </div>

      {/* Vercel */}
      <div className="flex flex-col items-center">
        <i className="devicon-vercel-original"></i>
        <h4 className="text-xl font-bold mt-2">Vercel</h4>
        <p className="text-center font-normal max-w-48 text-[15px]">Hosted Next.js apps, optimized performance, and managed seamless deployments</p>
        </div>
  

      {/* Render (no devicon → use SVG) */}
      <div className="flex flex-col items-center">
        <img
          src="https://render.com/images/render-logo.svg"
          alt="Render"
          className="w-16 h-16 object-contain"
        />
        <h4 className="text-xl font-bold mt-2">Render</h4>
          <p className="text-center font-normal max-w-48 text-[15px]">Hosted backend servers, managed databases, and automated cloud deployments</p>
      </div>

      {/* Firebase */}
      <div className="flex flex-col items-center">
        <i className="devicon-firebase-plain colored"></i>
        <h4 className="text-xl font-bold mt-2">Firebase</h4>
       <p className="text-center font-normal max-w-48 text-[15px]">Enabled authentication, stored user data, and hosted small apps</p>
      </div>

      {/* NPM */}
      <div className="flex flex-col items-center">
        <i className="devicon-npm-original-wordmark colored"></i>
        <h4 className="text-xl font-bold mt-2">NPM</h4>
         <p className="text-center font-normal max-w-48 text-[15px]">Installed packages, managed dependencies, and streamlined project development workflows</p>
      </div>

      {/* Yarn */}
      <div className="flex flex-col items-center">
        <i className="devicon-yarn-plain colored"></i>
        <h4 className="text-xl font-bold mt-2">Yarn</h4>
         <p className="text-center font-normal max-w-48 text-[15px]">Managed packages, improved install speed, and ensured consistent project dependencies</p>
      </div>
    </div>
    </div>
  </div>
  
</div>
</section>


   

    )
}

export default Skills;