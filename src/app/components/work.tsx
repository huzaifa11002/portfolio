import Image from "next/image";
import work1 from "../../../public/work1.png"
import work2 from "../../../public/work2.png"
import work3 from "../../../public/work3.png"
import work4 from "../../../public/work4.png"
const Work = () => {
  return (
    <>
      <div className="max-w-[1300px] mx-auto my-20">
      <h2 className="text-4xl text-[#fff] font-semibold text-center uppercase my-5">Work</h2>
      <div className="flex justify-between flex-col gap-10 my-20">
      <div className="flex flex-row gap-10">
        <a href="#" className="relative cursor-pointer border-2 box-border h-[500px] hover:scale-95 overflow-hidden rounded-lg hover:after:block after:content-[''] after:w-full after:h-full after:bg-gray-300 after:absolute after:top-0 after:opacity-50 after:hidden">
          <Image src={work1} alt="work-1" className="object-cover"></Image>
        </a>
        <a href="#" className="relative cursor-pointer border-2 box-border h-[500px] hover:scale-95 overflow-hidden rounded-lg hover:after:block after:content-[''] after:w-full after:h-full after:bg-gray-300 after:absolute after:top-0 after:opacity-50 after:hidden">
          <Image src={work2} alt="work-1" className="object-cover"></Image>
        </a>
        </div>
        <div className="flex flex-row gap-10 ">
        <a href="#" className="relative cursor-pointer border-2 box-border h-[500px] hover:scale-95 overflow-hidden rounded-lg hover:after:block after:content-[''] after:w-full after:h-full after:bg-gray-300 after:absolute after:top-0 after:opacity-50 after:hidden">
          <Image src={work3} alt="work-1" className="object-cover"></Image>
        </a>
        <a href="#" className="relative cursor-pointer border-2 box-border h-[500px] hover:scale-95 overflow-hidden rounded-lg hover:after:block after:content-[''] after:w-full after:h-full after:bg-gray-300 after:absolute after:top-0 after:opacity-50 after:hidden">
          <Image src={work4} alt="work-1" className="object-cover"></Image>
        </a>
        </div>
      </div>
      </div>
    </>
  )
}

export default Work;