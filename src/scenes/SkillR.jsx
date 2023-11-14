import { useEffect, useState } from "react";
// import SectionTitle from "../../Shared/SectionTitle";
// import './Skill.css'

const Skill = () => {
    const [skillsData, setSkillsData] = useState([]);
    useEffect(() => {
        fetch('skills.json')
            .then(res => res.json())
            .then(data => {

                setSkillsData(data[0]);
            })
    }, [skillsData])

    return (
        <div id="skills" className="lg:mt-14 lg:px-20 ">

            {/* <SectionTitle heading={"My Skills"}></SectionTitle> */}

            {
                Object.entries(skillsData).map(([category, skills]) => (
                    <div
                        key={category}
                        data-aos="fade-up"
                        className="w-full shadow-xl rounded-sm grid grid-cols-1 mx-auto gap-30"
                    >
                        <div className=" text-white mx-">

                            <h2 className=" text-white font-bold text-3xl text-center">{category}</h2>
                            <ul className="pt-10 flex flex-row items-center justify-evenly flex-wrap">
                                {
                                    skills.map((skill) => (
                                        <div
                                            key={skill._id}
                                            className="bg-white p-10 mb-6 rounded-lg z-4 cursor-pointer flex 
                                        items-center justify-center w-[150px] h-[180px] sm:w-[200px] sm:h-[200px]"
                                        >
                                            <div>
                                                <img
                                                    className="w-full"
                                                    src={skill.url}
                                                    alt={skill.alternativeText}
                                                />
                                                <p className="text-black text-center font-bold mt-3 text-lg">
                                                    {skill.name}
                                                    <span className="text-primary"></span>
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

export default Skill;