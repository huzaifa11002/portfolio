import Image from "next/image";
import main from "../../../public/main.jpeg"
const About = () => {
  return (
    <>
    <div className="max-w-[90%] xl:w-[1440px] mx-auto my-20">
        <h2 className="text-xl md:text-xl lg:text-2xl xl:text-3xl text-[#fff] font-bold text-center uppercase my-10">About US</h2>
        <div className="flex flex-col gap-5 sm:flex-row sm:my-10 xl:items-center xl:justify-around sm:my-20">
        <div className="w-full border-2 border-white rounded-md flex justify-center sm:w-1/2 xl:justify-inherit xl:w-fit">
          <Image src={main} alt="main-img" className="w-full rounded-md xl:w-[600px] xl:h-[600px] object-cover "></Image>
        </div>
          <div className="flex flex-col gap-5 text-[#fff] items-center sm:w-1/2 sm:items-start">
            <h3 className="text-[#c4ef04] text-lg md:text-lg lg:text-xl xl:text-2xl font-md">About me</h3>
            <p className="text-sm leading-6 text-center sm:text-start lg:leading-8 lg:text-base">I&apos;m a frontend web developer with a knack for creating visually appealing and interactive web pages.
               Over the past year, I&apos;ve honed my skills in HTML, CSS, and JavaScript, expanding into TypeScript, Tailwind CSS, React, and Next.js
                to create more dynamic and efficient projects. I enjoy exploring new technologies and am constantly working to improve my craft, 
                making websites that are both efficient and engaging for users. My portfolio showcases a variety of projects that highlight my 
                dedication to clean code and effective design.</p>
            <a href="/huzaifa.pdf" download="resume" className="text-[#232b2b] bg-[#c4ef04] font-bold rounded-3xl border-2 border-[#c4ef04] px-7 py-3 hover:text-[#c4ef04] hover:border-[#c4ef04] hover:bg-transparent">DownLoad CV</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default About