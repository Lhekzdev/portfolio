import Card from "../components/Card.jsx"

const Skills = () => {
    return (
 <section  className=" flex flex-col gap-y-9 bg-gray-500 bg-opacity-95  px-10  py-10 h-auto  ">
        <div className="w-full px-4  md:h-auto  relative flex md:gap-y-11 flex-col rounded-lg shadow-2xl py-6 ">
            <div className="text-[25px] mx-auto bg-teal-600    rounded-full   w-[250px] py-2">
         <h2 className=" text-white text-center items-center   font-bold">Skills</h2>
         </div>
                  
            {/* <h2 className="font-bold text-center text-[50px]">Skills</h2> */}
  <div className="  justify-items-center  py-7">
  
    {/* Frontend */}
<h1 className="text-[25px] text-purple-300 text-center font-bold">frontend</h1>




      
   

    <div className="grid text-white md:grid-cols-4 
    
     md:gap-5 gap-10 text-6xl p-6">

   {/* React */}
     <Card>
  <i className="devicon-react-original colored text-5xl"></i>
  <h4 className="text-xl font-bold mt-2">React</h4>
           < p className="text-center font-normal md:max-w-48 text-[15px]">
     I used React to build interactive and responsive user interfaces for my portfolio and event ticketing projects, managing states and components efficiently.
  </p>
   </Card>


      {/* Tailwind */}
     <Card>
          <i className="devicon-tailwindcss-plain colored text-5xl"></i>
        <h4 className="text-xl font-bold mt-2">Tailwind</h4>
         < p className="text-center font-normal md:max-w-48 text-[15px]"> I used Tailwind CSS to style my apps with clean, responsive, and reusable utility classes for faster development..</p>
   </Card>

      {/* HTML5 */}
    <Card>
        <i className="devicon-html5-plain colored"></i>
        <h4 className="text-xl font-bold mt-2">HTML5</h4>
         < p className="text-center font-normal md:max-w-48 text-[15px]">I used HTML5 to structure web pages and ensure accessibility, SEO-friendliness, and proper semantic markup</p>
   </Card>

      {/* CSS3 */}
         <Card>
        <i className="devicon-css3-plain colored"></i>
        <h4 className="text-xl mt-2">CSS3</h4>
         < p className="text-center font-normal md:max-w-48 text-[15px]">I used CSS3 to create visually appealing layouts, handle animations, and enhance the look and feel of my websites</p>
   </Card>

      {/* JavaScript */}
   <Card>
        <i className="devicon-javascript-plain colored"></i>
        <h4 className="text-xl font-bold mt-2">JavaScript</h4>
         < p className="text-center font-normal md:max-w-48 text-[15px]">I used JavaScript to add interactivity and functionality to my web applications, integrating APIs and managing logic.</p>
   </Card>

      {/* Next.js */}
    <Card>
  <img
    src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
    alt="Next.js"
    className="w-12 h-12"
  />
  <h4 className="text-xl font-bold mt-2">Next.js</h4>
  <p className="text-center font-normal md:max-w-48 text-[15px]"> I used Next.js for server-side rendering, optimized routing, and improved performance in my full-stack projects</p>
   </Card>

      {/* Figma */}
        <Card>
        <i className="devicon-figma-plain colored"></i>
        <h4 className="text-xl font-bold mt-2">Figma</h4>
       < p className="text-center font-normal md:max-w-48 text-[15px]"> I used Figma to design modern and user-friendly interfaces, then converted those designs into fully functional web pages.</p>
   </Card>

      {/* Sass */}
    <Card>
    <h4 className="text-xl font-bold mt-2">Sass</h4>
    <p className="text-center font-normal md:max-w-48 text-[15px]">
      I used Sass to organize and maintain scalable CSS with variables, mixins, and nested rules for cleaner styling.
    </p>
   </Card>
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
     <h1 className="text-[25px] text-purple-300 text-center font-bold">Backend</h1>
    
     
<div className="grid md:grid-cols-3 text-white lg:grid-cols-4 items-center md:gap-10 gap-5 lg:text-6xl p-6">
      {/* Node.js */}
     <Card>


        <i className="devicon-nodejs-plain colored"></i>
        <h4 className="text-xl font-bold mt-2">Node.js</h4>
  <p className="text-center font-normal md:max-w-48 text-[15px]">Built scalable backend servers with JavaScript runtime for applications</p>
      </Card>

      {/* Express.js (no colored icon, plain only) */}
           <Card>
        <i className="devicon-express-original"></i>
        <h4 className="text-xl font-bold mt-2">Express.js</h4>
     < p className="text-center font-normal md:max-w-48 text-[15px]">Created fast, lightweight APIs with routing and middleware support</p>
       </Card>

      {/* MongoDB */}
   <Card>
        <i className="devicon-mongodb-plain colored"></i>
        <h4 className="text-xl font-bold mt-2">MongoDB</h4>
       < p className="text-center font-normal md:max-w-48 text-[15px]">Stored, managed, and queried application data using NoSQL database</p>
      </Card>

      {/* Mongoose (use official SVG logo) */}
      <Card>
        <img
          src="https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png"
          alt="Mongoose"
          className="w-16 h-16 object-contain"
        />
        <h4 className="text-xl font-bold mt-2">Mongoose</h4>
        < p className="text-center font-normal md:max-w-48 text-[15px]">Helped organize MongoDB data into clear structures for easy use</p>
     </Card>

      {/* RESTful APIs (use a simple API icon) */}
      <Card>
        <img
           src="https://nordicapis.com/wp-content/uploads/Web-Service-What-is-REST-API-And-How-Does-it-Work-1024x576.png"
          alt="RESTful API"
          className="w-16 h-16 object-contain"
        />
        <h4 className="text-xl font-bold mt-2">RESTful APIs</h4>
       < p className="text-center font-normal md:max-w-48 text-[15px]">Enabled structured data exchange between frontend and backend services</p>
        </Card>

      {/* JWT & Auth Flows (JWT official logo) */}
     <Card>
        <img
          src="https://jwt.io/img/pic_logo.svg"
          alt="JWT"
          className="w-16 h-16 object-contain"
        />
        <h4 className="text-xl font-bold mt-2">JWT</h4>
     < p className="text-center font-normal md:max-w-48 text-[15px]">Implemented secure, token-based authentication for user access management.</p>
      </Card>
      {/* JWT & Auth Flows (JWT official logo) */}
      <Card>
        <img
          src="https://jwt.io/img/pic_logo.svg"
          alt="JWT"
          className="w-16 h-16 object-contain"
        />
        <h4 className="text-xl font-bold mt-2">JWT & Auth</h4>
     < p className="text-center font-normal md:max-w-48 text-[15px]">Handled authentication flows with JWT for protected routes access.</p>
        </Card>
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
 
      <h1 className="text-[25px] text-center text-purple-300 font-bold">Tools & Technologies</h1>
    <div>
    
<div className="grid text-white md:grid-cols-3 lg:grid-cols-4 items-center gap-10 text-6xl p-6">
      {/* Git */}
    <Card>

        <i className="devicon-git-plain colored"></i>
        <h4 className="text-xl font-bold mt-2">Git</h4>
   <p className="text-center font-normal md:max-w-48 text-[15px]">Tracked code changes, managed versions, and collaborated with teammates</p>
      </Card>

      {/* GitHub */}
   <Card>

        <i className="devicon-github-original"></i>
        <h4 className="text-xl font-bold mt-2">GitHub</h4>
        <p className="text-center font-normal md:max-w-48 text-[15px]">Hosted repositories, collaborated on projects, and deployed live demos</p>
   </Card>

      {/* Postman */}
   <Card>

        <i className="devicon-postman-plain colored"></i>
        <h4 className="text-xl font-bold mt-2">Postman</h4>
     <p className="text-center font-normal md:max-w-48 text-[15px]"> Tested APIs, validated endpoints, debugged requests, and documented workflows</p>
   </Card>

      {/* VS Code */}
   <Card>

        <i className="devicon-vscode-plain colored"></i>
        <h4 className="text-xl font-bold mt-2">VS Code</h4>
         <p className="text-center font-normal md:max-w-48 text-[15px]">Wrote, edited, debugged, and organized code efficiently with extensions</p>
   </Card>

      {/* Netlify */}
   <Card>

        <i className="devicon-netlify-plain colored"></i>
        <h4 className="text-xl font-bold mt-2">Netlify</h4>
     <p className="text-center font-normal md:max-w-48 text-[15px]">Deployed frontend projects quickly with automated builds and continuous integration</p>
   </Card>

      {/* Vercel */}
   <Card>
        <i className="devicon-vercel-original"></i>
        <h4 className="text-xl font-bold mt-2">Vercel</h4>
        <p className="text-center font-normal md:max-w-48 text-[15px]">Hosted Next.js apps, optimized performance, and managed seamless deployments</p>
   </Card>
  

      {/* Render (no devicon → use SVG) */}
   <Card>

        <img
          src="https://render.com/images/render-logo.svg"
          alt="Render"
          className="w-16 h-16 object-contain"
        />
        <h4 className="text-xl font-bold mt-2">Render</h4>
          <p className="text-center font-normal md:max-w-48 text-[15px]">Hosted backend servers, managed databases, and automated cloud deployments</p>
   </Card>

      {/* Firebase */}
   <Card>
        <i className="devicon-firebase-plain colored"></i>
        <h4 className="text-xl font-bold mt-2">Firebase</h4>
       <p className="text-center font-normal md:max-w-48 text-[15px]">Enabled authentication, stored user data, and hosted small apps</p>
   </Card>

      {/* NPM */}
   <Card>

        <i className="devicon-npm-original-wordmark colored"></i>
        <h4 className="text-xl font-bold mt-2">NPM</h4>
         <p className="text-center font-normal md:max-w-48 text-[15px]">Installed packages, managed dependencies, and streamlined project development workflows</p>
      </Card>

      {/* Yarn */}
   <Card>

        <i className="devicon-yarn-plain colored"></i>
        <h4 className="text-xl font-bold mt-2">Yarn</h4>
         <p className="text-center font-normal md:max-w-48 text-[15px]">Managed packages, improved install speed, and ensured consistent project dependencies</p>
       </Card>
    </div>
    </div>
  </div>
  
</div>
</section>


   

    )
}

export default Skills;