import React from 'react';
import img from '../assets/me-removebg-preview.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { motion } from "framer-motion";



const AboutMe = () => {
    return (
        <section id="about" className="pt-32 pb-16">
             
      {/* HEADING */}
      <motion.div
        className="md:w-full  md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="font-playfair font-semibold  text-center  text-4xl mb-5 text-white">
          ABOUT ME
        </div>
        {/* <LineGradient width="mx-auto w-1/4" /> */}
</motion.div>
            
        <div className='lg:mt-14'>
           
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div data-aos="fade-up" className='mx-auto flex items-center justify-center'>
                    <img className='rounded lg:w-[700px] w-[620px] pb-10 md:py-0  hover:scale-90 transition' src={img} alt="" />
                </div>
                <div data-aos="fade-up" className='text-white mx-auto font-semibold'>
                    <p className='px-10'>Hello, I&apos;m Rubaiyat Razin Raha. I am a recent
                     graduate in Computer Science and Engineering from Mawlana Bhashani Science and Technology University.
                      I am a dedicated programmer with a passion for exploring new technologies and experimenting with innovative
                       solutions. My focus lies in web development, particularly the MERN stack, which includes MongoDB,
                        Express.js, React.js, and Node.js. I am actively seeking job opportunities or paid internships where
                         I can apply my skills, acquire practical experience, and contribute to meaningful projects. I am enthusiastic
                          about the
                     prospects of advancing my career in web development!</p>



                    <div className='pt-10 '>

                        <Tabs >
                            <div className='lg:w-[550px] px-6 md:p-0 mx-auto  text-center'>
                                <TabList>
                                    <Tab>Personal Info</Tab>
                                    <Tab>Education And Certification</Tab>
                                    <Tab>Project Experience</Tab>
                                </TabList>
                            </div>


                            <TabPanel>
                                <div data-aos="zoom-in-down" className='text-gray-200 px-10 pt-10  space-y-3'>

                                    <h1 className=' text-3xl font-bold'>Rubaiyat Razin Raha</h1>
                                    <h4><span className='font-semibold'>Date of Birth : </span><span>05-October-1998</span></h4>
                                    <h4><span className='font-semibold'>Phone Number : </span><span>+8801823291708</span></h4>
                                    <h4><span className='font-semibold'>Email : </span><span>rubaiyatraha12@gmail.com</span></h4>
                                    <h4><span className='font-semibold'>Language : </span><span>Bangla,  English</span></h4>
                                    <h4><span className='font-semibold'>Home Town : </span><span>Noakhali , Bangladesh</span></h4>
                                    <h4><span className='font-semibold'>Current Town : </span><span>Nikunja, Dhaka , Bangladesh</span></h4>
                                    <h5><span className='font-semibold'>Nationality : </span><span>Bangladeshi</span></h5>
                                </div>
                            </TabPanel>
                            {/* hdiufdhiu */}
                            <TabPanel>
                                <div data-aos="zoom-in-down" className='text-gray-200 px-10 pt-10 '>
                                    <div>
                                        <h1 className='text-bold text-3xl mb-5 title-name'>Education</h1>
                                        <div>
                                            <h3 className='font-bold text-2xl'>B.Sc. (Engg.) in Computer Science and Engineering</h3>
                                            <p>Mawlana Bhashani Science and Technology University</p>
                                            <p>Session: 2017-18</p>
                                            <p>CGPA: 3.25</p>
                                            <p>Passing Year: 2023</p>
                                        </div>

                                    </div>
                                    <div>
                                        <h1 className='text-bold text-2xl mt-5 '>Higher Secondary School Certificate</h1>
                                        <p>Govt. Laboratory High School and College, Dhaka</p>
                                        <p>Session: 2014-16</p>
                                        <p>GPA: 5.00</p>
                                        <p>Passing Year: 2016</p>

                                    </div>


                                </div>
                            </TabPanel>
                            <TabPanel>

                                <>

                                    <div className='text-gray-200 pt-10'>

                                        <ul className='list-disc space-y-6'>
                                            <div className='text-2xl font-bold text-center border mx-auto p-2 lg:w-[450px] w-[300px] rounded'>
                                                <h1 className='text-blue-700'>12+</h1>
                                                <h1>Completed projects</h1>
                                            </div>
                                            <div className='text-2xl font-bold text-center border mx-auto p-2 lg:w-[450px] w-[300px] rounded'>
                                                <h1 className='text-blue-700'>0+</h1>
                                                <h1>Years experiences</h1>
                                            </div>
                                            <div className='text-2xl font-bold text-center border mx-auto p-2 lg:w-[450px] w-[300px] rounded'>
                                                <h1 className='text-blue-700'>0+</h1>
                                                <h1>Companies worked</h1>
                                            </div>

                                        </ul>
                                    </div>
                                </>
                            </TabPanel>
                        </Tabs>

                    </div>

                </div>
            </div>


        </div>
        </section>
    );
};

export default AboutMe;