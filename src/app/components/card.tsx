import Image from "next/image";
import cardImg from "../../../public/main.jpeg"

type CardProps = {
    title: string;
    des: string;
    img: string;
  };
const Card = ({title,des,img}:CardProps) => {
  return (
    <>
    <div className='rounded shadow-lg bg-white flex flex-col items-center hover:scale-90'>
        <div className="w-full">
        <Image src={img} alt="card-img" className="w-full aspect-video rounded-e"></Image>
        </div>
        <div className="p-5 flex flex-col items-center">
        <h2 className="text-[#c4ef04] text-lg whitespace-nowrap">{title}</h2>
        <p className="text-center text-ellipsis line-clamp-2 h-12 overflow-hidden">{des}</p>
        </div>
    </div>
    </>
  )
}

export default Card;