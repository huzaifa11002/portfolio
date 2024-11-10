import Image from "next/image";
import main from "../../../public/main.jpeg"
const About = () => {
  return (
    <>
    <div className="max-w-[1300px] mx-auto my-20">
        <h2 className="text-4xl text-[#fff] font-semibold text-center uppercase my-5">About US</h2>
        <div className="flex justify-between items-center py-10 gap-5 my-20">
          <div className="w-full">
            <Image src={main} alt="main-img" className="w-full rounded-lg"></Image>
          </div>
          <div className="flex flex-col gap-5 text-[#fff] w-full">
            <h3 className="text-[#c4ef04] text-xl font-bold">About me</h3>
            <p className="text-lg leading[2rem]">I'm a frontend web developer with a knack for creating visually appealing and interactive web pages.
               Over the past year, I've honed my skills in HTML, CSS, and JavaScript, expanding into TypeScript, Tailwind CSS, React, and Next.js
                to create more dynamic and efficient projects. I enjoy exploring new technologies and am constantly working to improve my craft, 
                making websites that are both efficient and engaging for users. My portfolio showcases a variety of projects that highlight my 
                dedication to clean code and effective design.</p>
            <a href="/huzaifa.pdf" download="resume" className="w-fit text-[#232b2b] bg-[#c4ef04] font-bold rounded-3xl border-2 border-transparent px-7 py-3 hover:text-[#c4ef04] hover:border-[#c4ef04] hover:bg-transparent">DownLoad CV</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default About