import Image from "next/image";
import main from "../../../public/main.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF,faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
const Herosection = () => {
  return (
    <>
    <div className="max-w-[1300px] mx-auto flex justify-between items-center my-20">
        <div className="flex flex-col gap-10 text-[#fff] w-1/2">
          <h1 className="text-3xl font-extrabold">Hello, I'm <span className="text-5xl text-[#c4ef04]">Huzaifa Khan</span></h1>
          <p className="text-lg font-semibold">Hi, I'm Huzaifa Khan, a passionate frontend developer with a strong foundation in modern web development.
             I specialize in building responsive, user-friendly websites using HTML, CSS, JavaScript, and TypeScript, and 
             have experience working with frameworks like React and Next.js.
              My focus is on crafting seamless digital experiences that are both functional and visually engaging.</p>
          <a href="#" className="w-fit text-[#232b2b] bg-[#c4ef04] font-bold rounded-3xl border-2 border-transparent px-7 py-3 hover:text-[#c4ef04] hover:border-[#c4ef04] hover:bg-transparent">Explore</a>
          <div className="flex flex-row gap-5">
            <a href="#" className="w-14 h-14 bg-white rounded-full text-[#c4ef04] flex justify-center items-center hover:scale-110"><FontAwesomeIcon icon={faFacebookF} className='h-8 w-8'/></a>
            <a href="#" className="w-14 h-14 bg-white rounded-full text-[#c4ef04] flex justify-center items-center hover:scale-110"><FontAwesomeIcon icon={faGithub} className='h-8 w-8'/></a>
            <a href="#" className="w-14 h-14 bg-white rounded-full text-[#c4ef04] flex justify-center items-center hover:scale-110"><FontAwesomeIcon icon={faLinkedinIn} className='h-8 w-8'/></a>
          </div>
        </div>
        <div className="w-1/2 h-fit flex justify-center">
          <Image src={main} alt="main-img" className="w-[450px] h-[450px]  border-[#fff] shadow-xl shadow-[#c4ef04] rounded-full border-2 border-white"></Image>
        </div>
      </div>
    </>
  )
}

export default Herosection;