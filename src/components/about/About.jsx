import React from 'react'
import AboutImg from '../../assets/police_image/img2.jpeg';

function About() {
    return (
        <section id="about">
            <h2
                data-aos="fade-up"
                className=" text-center text-3xl underline underline-offset-4">About us</h2>
            <main className="bg-slate-100 dark:bg-slate-900 dark:text-white">

                <section className="container flex flex-col items-center justify-center py-10 md:h-[500px] ">

                    <div className="grid grid-cols-1 items-center gap-4  md:grid-cols-2">
                        <div
                            data-aos="fade-right"

                        >
                            <img
                                src={AboutImg}
                                alt="No image"
                                className="max-auto w-full hover:drop-shadow-md h-80"
                            />
                        </div>
                        <div

                            data-aos="fade-left"
                            // data-aos-duration="400"
                            // data-aos-once="true"
                            className="flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left "

                        >
                            
                            <h2 className=" text-2xl text-slate-500">Who we are</h2>
                            <p className="text-sm  dark:text-slate-400">
                                The Rwanda Investigation Bureau (RIB) is a specialized organ established 
                                by the law Nº12/2017 of 07/04/2017 and responsible for performing career 
                                investigative functions, and partners with other law enforcement agencies
                                 in ensuring law and order.
                            </p>
                            <div>
                                <h2 className=" text-2xl text-slate-500">Vision</h2>
                                <p className="text-sm  dark:text-slate-400">
                                    Professional Investigative Institution that upholds Rule of Law
                                     and Human Rights towards a Crime-free Nation
                                </p>
                            </div>
                            <div>


                                <h2 className=" text-2xl text-slate-500">Mission</h2>
                                <p className="text-sm  dark:text-slate-400">
                                    To prevent, detect, investigate and respond to current
                                     and emerging crime threats through the use of modern technology
                                      and building partnership in order to uphold the rule of law.
                                </p>
                            </div>
                            
                        </div>

                    </div>
                </section>
            </main>
        </section>
    )
}

export default About
