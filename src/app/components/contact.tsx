import Image from "next/image"
import conimg from "../../../public/contact.png"
const Contact = () => {
    return (
        <>
            <div className="max-w-[1300px] mx-auto my-20">
                <h2 className="text-4xl text-[#fff] font-semibold text-center uppercase my-5">Contact Us</h2>
                <div className="flex justify-between items-center my-20">
                    <form action="" className="flex flex-col gap-5 w-full">
                        <h3 className="text-[#c4ef04] text-xl font-bold">Get In Touch</h3>
                        <div className="flex justify-between flex-row gap-3">
                            <div className="flex flex-col justify-start w-full gap-3">
                            <label className=" text-white">Name <span className="text-red-900">*</span></label>
                            <input type="text" className="w-full rounded p-3 text-black placeholder:text-gray-500" placeholder="Enter Your Name" />
                            </div>
                            <div className="flex flex-col justify-start w-full gap-3">
                            <label className=" text-white">Email <span className="text-red-900">*</span></label>
                            <input type="email" className="w-full rounded p-3 text-black placeholder:text-gray-500" placeholder="Enter Your Email" />
                            </div>
                        </div>
        
                        <div className="flex justify-between flex-row gap-3">
                        <div className="flex flex-col justify-start w-full gap-3">
                            <label className=" text-white">Phone<span className="text-red-900">*</span></label>
                            <input type="tel" className="w-full rounded p-3 text-black placeholder:text-gray-500" placeholder="Enter Your Phone" />
                            </div>
                            <div className="flex flex-col justify-start w-full gap-3">
                            <label className=" text-white">Subject<span className="text-red-900">*</span></label>
                            <input type="text" className="w-full rounded p-3 text-black placeholder:text-gray-500" placeholder="Enter Your Subject" />
                            </div>
                        </div>
                        <div className="flex flex-col justify-start gap-3">
                        <label className=" text-white">Message <span className="text-red-900">*</span></label>
                            <textarea className="w-full h-40 p-3 rounded text-black placeholder:text-gray-500" placeholder="Enter Your Project Details"></textarea>
                        </div>
                        <button type="submit" className="w-fit text-[#232b2b] bg-[#c4ef04] font-bold rounded-3xl border-2 border-transparent px-7 py-3 hover:text-[#c4ef04] hover:border-[#c4ef04] hover:bg-transparent">Send Message</button>
                    </form>
                    <div>
                        <Image src={conimg} alt="contact-img" className="max-w-[600px]"></Image>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;