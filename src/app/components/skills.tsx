"use client";
import "./component.css";
import { useState } from "react";
const Skills = () => {



    const skillTabs = [
        {
            title: "HTML & CSS",
            description: "As an experienced HTML and CSS developer, I have a strong foundation in creating visually appealing and responsive web designs. My expertise lies in translating ideas into clean, functional layouts that work seamlessly across devices. I am passionate about using modern web practices to bring creative visions to life, ensuring each project is both user-friendly and technically sound. With a keen eye for detail and a commitment to quality, I strive to make each website an engaging experience for users."
        },
        {
            title: "JavaScript",
            description: "With a strong foundation in HTML and CSS, along with a basic understanding of JavaScript, I enjoy building responsive and visually appealing websites. I bring together clean design and functionality to create user-friendly interfaces, with a focus on seamless navigation and effective layouts. As I continue to deepen my JavaScript skills, I am excited to integrate interactive features and improve user experiences on the web."
        },
        {
            title: "React & NextJs",
            description: "With a strong foundation in HTML, CSS, and a growing knowledge of JavaScript, React, and Next.js, I’m passionate about building responsive and interactive websites. I focus on creating clean, efficient designs that provide a smooth user experience across all devices. Eager to expand my skills in modern web technologies, I strive to bring creativity and attention to detail to every project"
        },
        {
            title: "Bootstrap",
            description: "With extensive experience in HTML, CSS, and the Bootstrap framework, I specialize in developing responsive, mobile-first websites. I leverage Bootstrap’s powerful tools to create clean, professional designs that adapt seamlessly across devices. My work focuses on delivering efficient, visually appealing layouts with a user-centered approach, ensuring both functionality and style in every project."
        },
        {
            title: "Tailwind CSS",
            description: "With a solid foundation in HTML, CSS, and Bootstrap, and a beginner-level understanding of Tailwind CSS, I enjoy creating responsive, visually appealing websites. My experience with frameworks like Bootstrap and Tailwind CSS allows me to build modern, adaptable designs that focus on user experience and aesthetic appeal. I’m continually expanding my skills in these frameworks to deliver efficient, clean, and user-friendly interfaces."
        }
    ];

    let [activeTab, setTab] = useState(0);

    const clickHandle = (index: any) => {
        setTab(index);
    }

    return (
        <>
            <div className="mx-auto max-w-[90%] xl:w-[1440px] my-20">
                <h2 className="text-xl md:text-xl lg:text-2xl xl:text-3xl text-[#fff] font-bold text-center uppercase my-10">Skills</h2>
                <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between xl:gap-40 xl:justify-around sm:my-20">
                    <div className="flex gap-5 flex-col text-[#fff] w-full sm:w-3/12 lg:w-full">
                        <div className="flex flex-col gap-3 sm:gap-1">
                            <h4 className="whitespace-nowrap">HTML & CSS</h4>
                            <div className="relative w-full h-5 rounded bg-gray-500">
                                <div className="absolute top-0 left-0 w-[90%] h-5 rounded flex items-center justify-end html font-bold">90%</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 sm:gap-1">
                            <h4 className="whitespace-nowrap">JavaScript</h4>
                            <div className="relative w-full h-5 rounded bg-gray-500">
                                <div className="absolute top-0 left-0 w-[80%] h-5 rounded bg-[#f0db4f] flex items-center justify-end font-bold">80%</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 sm:gap-1">
                            <h4 className="whitespace-nowrap">React & Next Js</h4>
                            <div className="relative w-full h-5 rounded bg-gray-500">
                                <div className="absolute top-0 left-0 w-[60%] h-5 rounded bg-[#61dbfb] flex items-center justify-end font-bold">60%</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 sm:gap-1">
                            <h4 className="whitespace-nowrap">Bootstrap</h4>
                            <div className="relative w-full h-5 rounded bg-gray-500">
                                <div className="absolute top-0 left-0 w-[70%] h-5 rounded bootstrap flex items-center justify-end font-bold">70%</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 sm:gap-1">
                            <h4 className="whitespace-nowrap">Tailwind CSS</h4>
                            <div className="relative w-full h-5 rounded bg-gray-500">
                                <div className="absolute top-0 left-0 w-[60%] h-5 rounded bg-[#06b6d4] flex items-center justify-end font-bold">60%</div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="sm:contents">
                        <div className="bg-white border-gray-500 border-2 rounded-lg p-5 box-border w-full sm:w-9/12 lg:w-full">
                            <div className="flex flex-row gap-5 py-5 border-b-2 overflow-x-auto">
                                {
                                    skillTabs.map((tab, i) => {
                                        return (
                                            <div key={i}>
                                                <a className={`whitespace-nowrap cursor-pointer px-5 py-3 text-[#c4ef04] rounded border-2 border-[#c4ef04] hover:bg-[#c4ef04] hover:border-2 hover:border-[#c4ef04] hover:text-white ${activeTab === i ? "tab-val" : ""}`} onClick={() => clickHandle(i)}>{tab.title}</a>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                                {
                                    skillTabs.map((data, i) => {
                                        return (
                                            <div key={i} className={`bg-white border-gray-500 border-2 rounded-lg p-5 box-border w-full h-[235px] my-5 overflow-y-auto  ${activeTab === i ? "" : "hidden"}`}>
                                                <h3 className="text-xl font-bold my-2 text-[#c4ef04]">{data.title}</h3>
                                                <p className="text-sm leading-6 lg:leading-8 lg:text-base">{data.description}</p>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Skills;