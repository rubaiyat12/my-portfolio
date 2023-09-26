import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import skills from '../assets/skills-image.png'
import { motion } from "framer-motion";
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">PROJECTS</span>
          </p>
          <LineGradient width="w-1/3" />
          
          {/* <p className=" mt-10 mb-7 text-sm text-center md:text-start">
          My skills include proficiency in programming languages,
          along with a foundational understanding of web development technologies, version control,
           and a passion for continuous learning and problem-solving.
          </p> */}
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              {/* <img
                alt="skills"
                className="z-10"
                src={skills}
              /> */}
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-20">
            <div className="z-10">
              {/* <p className="font-playfair font-semibold text-5xl">#</p> */}
              <p className="font-playfair font-semibold text-3xl mt-2">
              Fitness Exercise App
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 absolute right-0 top-0 z-[-1]" />
          </div>
          <img src= {project1} alt="" />


         

       
          <p className="mt-5">
           
            
          Access a comprehensive collection of exercises with step-by-step guides.
Recommend a selection of YouTube videos related to the gym that you have searched for.
Offer workouts of a similar nature to those available at the gym you have looked up.

          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-20">
            <div className="z-10">
              {/* <p className="font-playfair font-semibold text-5xl">02</p> */}
              <p className="font-playfair font-semibold text-3xl mt-3">
              Expert Garage Care
              </p>
            </div>
            {/* <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" /> */}
          </div>
          <img src= {project2} alt="" />
          <p className="mt-5">
          At Expert Garage Care Website, your vehicle deserves the highest level of attention and expertise when it comes to maintenance
and repair.

Select the services you require and enjoy a premium experience.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-20">
            <div className="z-10">
              {/* <p className="font-playfair font-semibold text-5xl">03</p> */}
              <p className="font-playfair font-semibold text-3xl mt-3">
                Convention Hall
              </p>
            </div>
            {/* <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" /> */}
          </div>
          <img src= {project3} alt="" />
          <p className="mt-5">
          The convention hall website provides comprehensive information about upcoming events, 
          floor plans, and booking options for a seamless and informative user experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;