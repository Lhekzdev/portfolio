import React from "react";

const Experience = () => {

    return (
        <section className="bg-[hsl(172,90%,69%)]   px-10 shadow-xl border border-[red] py-10 h-auto  ">
            <div className=" shadow-2xl px-10 rounded-3xl py-5 flex flex-col  item   pt-5 gap-y-10">
                <h2 className="text-center text-[25px] bg-gray-500   w-[250px] py-1 text-white rounded-full  mx-auto  font-bold">Work Experience</h2>
                <div className="md:grid grid-cols-2 flex flex-col gap-y-6 py-4  ">
                    <div className="">
                        <p className="font-bold">
                            Senior Frontend Developer – Alvent (2024–2025)
                        </p>
                        <ul className="list-disc pl-5">
                            <li>Built reusable components with React and Tailwind</li>
                            <li>Integrated RESTful APIs and ensured UI responsiveness</li>
                            <li>I integrated API to fetch event data, and manage ticket sales and event management.</li>
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
                    <h2 className="text-center text-[25px]  bg-gray-500    w-[200px] py-1 text-white rounded-full mx-auto mb-10 font-bold">Education</h2>
                    <div className=" flex flex-col gap-y-6 md:grid grid-cols-2 border-b-2 " >
                        <div>
                            <span className="font-bold">First degree: </span><p>  B.Sc. (Ed.) in Agric-Sci. & Edu </p>

                            <p>Adeyemi University of Education – 2018</p>
                        </div>
                        <div className=" pb-5">
                            <span className="font-bold">Second degree: </span>  <p>B.Sc. (Ed.) in Computer Science </p>

                            <p>Adekunle Ajasin University – 2025</p>
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

export default Experience;