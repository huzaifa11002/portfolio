import Image from "next/image";
import main from "../../../public/main.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF,faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
const Herosection = () => {
  return (
    <>
    <div className="mx-auto max-w-[90%] xl:w-[1440px] flex flex-col mt-5 sm:flex-row-reverse sm:justify-between sm:items-center sm:gap-3 lg:my-10 xl:gap-20">
    <div className="flex justify-center w-full">
          <Image src={main} alt="main-img" className="max-w-[600px] max-h-[600px] w-[250px] h-[250px] sm:min-w-[300px] sm:min-h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] border-[#fff] shadow-xl shadow-[#c4ef04] rounded-full border-2 border-white"></Image>
        </div>
        <div className="flex flex-col items-center text-[#fff] my-5 gap-3 sm:w-full sm:items-start xl:gap-5 lg:py-20">
          <h1 className="text-xl font-extrabold md:text-xl lg:text-2xl xl:text-3xl">Hello, I&apos;m <span className="text-2xl text-[#c4ef04] md:text-3xl lg:text-4xl xl:text-5xl">Huzaifa Khan</span></h1>
          <p className="text-sm leading-6 text-center sm:text-start lg:leading-8 lg:text-base">Hi, I&apos;m Huzaifa Khan, a passionate frontend developer with a strong foundation in modern web development.
             I specialize in building responsive, user-friendly websites using HTML, CSS, JavaScript, and TypeScript, and 
             have experience working with frameworks like React and Next.js.
              My focus is on crafting seamless digital experiences that are both functional and visually engaging.</p>
          <a href="#" className="text-[#232b2b] bg-[#c4ef04] font-bold rounded-3xl border-2 border-[#c4ef04] px-7 py-3 hover:text-[#c4ef04] hover:border-[#c4ef04] hover:bg-transparent">Explore</a>
          <div className="flex flex-row gap-3">
            <a href="#" className="w-10 h-10 bg-white rounded-full text-[#c4ef04] flex justify-center items-center hover:scale-110"><FontAwesomeIcon icon={faFacebookF} className='h-7 w-7'/></a>
            <a href="#" className="w-10 h-10 bg-white rounded-full text-[#c4ef04] flex justify-center items-center hover:scale-110"><FontAwesomeIcon icon={faGithub} className='h-7 w-7'/></a>
            <a href="#" className="w-10 h-10 bg-white rounded-full text-[#c4ef04] flex justify-center items-center hover:scale-110"><FontAwesomeIcon icon={faLinkedinIn} className='h-7 w-7'/></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Herosection;