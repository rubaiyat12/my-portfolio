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
  <div data-aos="fade-up" className='text-white mx-auto font-semibold px-6 md:px-16'>
    <p className='text-center md:text-left'>Hello, I&apos;m Rubaiyat Razin Raha. I am a recent
      graduate in Computer Science and Engineering from Mawlana Bhashani Science and Technology University.
      I am a dedicated programmer with a passion for exploring new technologies and experimenting with innovative
      solutions. My focus lies in web development, particularly the MERN stack, which includes MongoDB,
      Express.js, React.js, and Node.js. I am actively seeking job opportunities or paid internships where
      I can apply my skills, acquire practical experience, and contribute to meaningful projects. I am enthusiastic
      about the prospects of advancing my career in web development!
    </p>

    <div className='pt-10'>
      <Tabs>
        <div className='max-w-3xl mx-auto text-center'>
          <TabList>
            <Tab>Personal Info</Tab>
            <Tab>Education And Certification</Tab>
            <Tab>Project Experience</Tab>
          </TabList>
        </div>

        <TabPanel>
          <div data-aos="zoom-in-down" className='text-gray-200 pt-10 space-y-3'>
            <h1 className='text-3xl font-bold'>Rubaiyat Razin Raha</h1>
            <h4><span className='font-semibold'>Date of Birth: </span>05-October-1998</h4>
            <h4><span className='font-semibold'>Phone Number: </span>+8801823291708</h4>
            <h4><span className='font-semibold'>Email: </span>rubaiyatraha12@gmail.com</h4>
            <h4><span className='font-semibold'>Language: </span>Bangla, English</h4>
            <h4><span className='font-semibold'>Home Town: </span>Noakhali, Bangladesh</h4>
            <h4><span className='font-semibold'>Current Town: </span>Nikunja, Dhaka, Bangladesh</h4>
            <h5><span className='font-semibold'>Nationality: </span>Bangladeshi</h5>
          </div>
        </TabPanel>

        <TabPanel>
          <div data-aos="zoom-in-down" className='text-gray-200 pt-10'>
            <h1 className='text-3xl font-bold mb-5'>Education</h1>
            <div>
              <h3 className='text-2xl font-bold'>B.Sc. (Engg.) in Computer Science and Engineering</h3>
              <p>Mawlana Bhashani Science and Technology University</p>
              <p>Session: 2017-18</p>
              <p>CGPA: 3.25</p>
              <p>Passing Year: 2023</p>
            </div>

            <div className='mt-5'>
              <h3 className='text-2xl font-bold'>Higher Secondary School Certificate</h3>
              <p>Govt. Laboratory High School and College, Dhaka</p>
              <p>Session: 2014-16</p>
              <p>GPA: 5.00</p>
              <p>Passing Year: 2016</p>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className='text-gray-200 pt-10 space-y-6'>
            <div className='text-2xl font-bold text-center border p-2 max-w-xs mx-auto rounded'>
              <h1 className='text-blue-700'>12+</h1>
              <h1>Completed projects</h1>
            </div>
            <div className='text-2xl font-bold text-center border p-2 max-w-xs mx-auto rounded'>
              <h1 className='text-blue-700'>1</h1>
              <h1>Years experiences</h1>
            </div>
            <div className='text-2xl font-bold text-center border p-2 max-w-xs mx-auto rounded'>
              <h1 className='text-blue-700'>1</h1>
              <h1>Companies worked</h1>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  </div>
</div>

        </section>
    );
};

export default AboutMe;