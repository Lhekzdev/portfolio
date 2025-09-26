import React from "react";

const Experience =()=>{

    return(
        <section  className="bg-[hsl(172,90%,69%)]   px-10 shadow-xl border border-[red] py-10 h-auto  dark:bg-gray-900">
        <div className=" shadow-2xl  rounded-3xl flex flex-col md:px-44    py-10 pt-5 gap-y-10">
   <h2 className="text-center text-[25px] bg-gray-900 px-5  w-[250px] py-2 text-white rounded-full items-center   font-bold">Work Experience</h2>
   <div className="grid grid-cols-2  py-4  ">
<div className="">
<p className="font-bold">Senior Frontend Developer – Alvent (2024–2025)</p>
<ul className="list-disc pl-5">
<li>Built reusable components with React and Tailwind</li>
<li>Integrated RESTful APIs and ensured UI responsiveness</li>
<li>I integrated API to fetch event data, and mange ticket sales and even management.</li>
<li>I implemented context API to ensure the display and review of inputed datas across different pages</li>
<li>I worked with the backend team, for API creation, and integration.</li>
</ul>
</div>


<div>

<p className="font-bold">Backend developer – Alvent (2025)</p>

<ul className="list-disc pl-5">

<li>Implemented secure user authentication and authorization</li>
<li>Optimized database queries for performance</li>
<li>Optimized database queries for performance</li>
</ul>
</div>
</div>


<div className=" flex flex-col  ">
<h2 className="text-center text-[25px] bg-gray-900 px-5  w-[200px] py-2 text-white rounded-full   mb-10 font-bold">Education</h2>
<div className=" grid grid-cols-2  " >
    <div className="border-b-2 pb-5">
      <span className="font-bold">Second degree: </span>  <p>B.Sc. (Ed.) in Computer Science </p>

<p>Adekunle Ajasin University – 2025</p>
</div>
<div><span className="font-bold">First degree: </span><p>  B.Sc. (Ed.) in Computer Science </p>

<p>Adeyemi University of Education – 2018</p>
</div>
</div>
</div>

<div>
<h4 className="font-bold">Certifications</h4>
<ul className="list-disc pl-5">
    <li>careerEx frontend cert.</li>
<li>careerEx backend cert.</li>
</ul>

</div>

<div >
    <h4 className="font-bold"> Online Courses</h4>
    <p>Full-Stack web development Bootcamp</p>
    <p>Complete React Developer(Redux,Hooks, GraphQL)</p>

</div>




</div>
</section>
    )
}

export default Experience ;