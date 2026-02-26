import React from "react";

const Experience = () => {

    return (
        <section className="bg-[hsl(172,90%,69%)]   px-10 shadow-xl  py-10 h-auto  ">
            <div className=" shadow-2xl px-10 rounded-3xl py-5 flex flex-col  item   pt-5 gap-y-10">
                <h2 className="text-center text-[25px] bg-gray-500   w-[250px] py-1 text-white rounded-full  mx-auto  font-bold">Work Experience</h2>
                <div className=" md:grid gap-x-10  grid-cols-2 ">
                    <div className=" flex flex-col w-full  gap-y-6  ">

                        <p className="font-bold">
                            Alvent ( Event and Ticketing ) |Frontend Developer |July 2024 – Dec. 2025
                        </p>
                        <ul className="list-disc pl-5">
                            <li>Designed and implemented responsive UI components for an event and ticketing
                                platform using React and CSS/SCSS.</li>
                            <li>Developed dynamic forms for event creation, ticket booking, and user registration
                                with Formik and built-in form validation.</li>
                            <li>Integrated API calls to fetch and update event and ticket data using Axios/Fetch.</li>
                            <li>I integrated API to fetch event data, and manage ticket sales and event management.</li>
                            <li>Integrated API calls to fetch and update event and ticket data using Axios/Fetch.</li>
                            <li>I worked with the backend team, for API creation, and integration.</li>
                            <li>Added loading states, notifications, and UI feedback to improve interactivity and
                                user engagement.</li>
                        </ul>


                    </div>


                    <div className="w-full h-auto">

                        <p className="font-bold">SkillZonet ( Artisans Search platform ) |Backend Developer |Dec 2025 – current</p>

                        <ul className="list-disc pl-5">

                            <li>Architected and developed a scalable backend system using Node.js, Express, and
                                TypeScript, exposing REST and GraphQL APIs.</li>
                            <li>Implemented secure JWT authentication with refresh token rotation, Redisbacked
                                session control, and role-based access.</li>
                            <li>Designed geo-spatial job matching using PostgreSQL, PostGIS, Prisma, and hybrid
                                Haversine distance calculations.</li>
                            <li> Integrated Redis caching, BullMQ background jobs, real-time communication
                                (Socket.IO), payment processing (Paystack), API security best practices, and
                                centralized logging.</li>
                        </ul>

                    </div>


                </div>



                <div className=" flex flex-col  ">
                    <h2 className="text-center text-[25px]  bg-gray-500    w-[200px] py-1 text-white rounded-full mx-auto mb-10 font-bold">Education</h2>
                    <div className=" flex flex-col md:gap-x-10 gap-y-6 md:grid grid-cols-2 border-b-2 " >
                        <div className="w-full h-auto">
                            <span className="font-bold">First degree: </span><p>  B.Sc. (Ed.) in Agric-Sci. & Edu </p>

                            <p>Adeyemi University of Education – 2018</p>
                        </div>
                        <div className=" pb-5 w-full h-auto">
                            <span className="font-bold">Second degree: </span>  <p>B.Sc. (Ed.) in Computer Science </p>

                            <p>Adekunle Ajasin University </p>
                        </div>

                    </div>
                </div>
                {/*  */}
                <div>
                    <h4 className="font-bold">Certifications</h4>
                    <ul className="list-disc pl-5">
                        <li>careerEx frontend cert.</li>
                        <li>careerEx backend cert.</li>
                        <li>Full Stack Web Development
                            — (Udemy platform)
                        </li>
                        <li>Next.js App Router
                            Fundamentals (vercel)</li>
                    </ul>

                </div>

                <div >
                    <h4 className="font-bold"> Online Courses</h4>
                    <p>Full-Stack web development Bootcamp</p>
                    <p>Complete React Developer(Redux,Hooks, GraphQL)</p>
                    <p>Tutorial on Next.js</p>

                </div>




            </div>
        </section>
    )
}

export default Experience;