import Image from "next/image"
import conimg from "../../../public/contact.png"
const Contact = () => {
    return (
        <>
            <div className="mx-auto max-w-[90%] xl:w-[1440px] my-20">
                <h2 className="text-xl md:text-xl lg:text-2xl xl:text-3xl text-[#fff] font-bold text-center uppercase my-10">Contact Us</h2>
                <div className="flex flex-col-reverse my-5 gap-10 sm:flex-row sm:gap-0 sm:items-center sm:justify-center md:gap-5 sm:my-20">
                    <form action="" className="flex flex-col gap-5 w-full sm:w-1/2">
                        <h3 className="text-[#c4ef04] text-lg md:text-lg lg:text-xl xl:text-2xl font-md my-5">Get In Touch</h3>
                        <div className="flex justify-between flex-col gap-3 sm:flex-row">
                            <div className="relative flex flex-col justify-start w-full gap-3">
                            <label className="absolute z-1 text-[#c4ef04] -top-3 bg-[#232b2b] mx-4 px-1">Name <span className="text-red-900">*</span></label>
                            <input type="text" className="w-full rounded p-3 text-white border-2 border-[#c4ef04] bg-transparent" placeholder="Enter Your Name" />
                            </div>
                            <div className="relative flex flex-col justify-start w-full gap-3">
                            <label className=" absolute z-1 text-[#c4ef04] -top-3 bg-[#232b2b] mx-4 px-1">Email <span className="text-red-900">*</span></label>
                            <input type="email" className="w-full rounded p-3 text-white border-2 border-[#c4ef04] bg-transparent" placeholder="Enter Your Email" />
                            </div>
                        </div>
        
                        <div className="flex justify-between flex-col gap-3 sm:flex-row">
                        <div className="relative flex flex-col justify-start w-full gap-3">
                            <label className=" absolute z-1 text-[#c4ef04] -top-3 bg-[#232b2b] mx-4 px-1">Phone<span className="text-red-900">*</span></label>
                            <input type="tel" className="w-full rounded p-3 text-white border-2 border-[#c4ef04] bg-transparent" placeholder="Enter Your Phone" />
                            </div>
                            <div className="relative flex flex-col justify-start w-full gap-3">
                            <label className=" absolute z-1 text-[#c4ef04] -top-3 bg-[#232b2b] mx-4 px-1">Subject<span className="text-red-900">*</span></label>
                            <input type="text" className="w-full rounded p-3 text-white border-2 border-[#c4ef04] bg-transparent" placeholder="Enter Your Subject" />
                            </div>
                        </div>
                        <div className="relative flex flex-col justify-start gap-3">
                        <label className=" absolute z-1 text-[#c4ef04] -top-3 bg-[#232b2b] mx-4 px-1">Message <span className="text-red-900">*</span></label>
                            <textarea className="w-full h-40 rounded p-3 text-white border-2 border-[#c4ef04] bg-transparent" placeholder="Enter Your Project Details"></textarea>
                        </div>
                        <button type="submit" className="w-fit text-[#232b2b] bg-[#c4ef04] font-bold rounded-3xl border-2 border-[#c4ef04] px-7 py-3 hover:text-[#c4ef04] hover:border-[#c4ef04] hover:bg-transparent">Send Message</button>
                    </form>
                    <div className="w-full sm:w-1/2">
                        <Image src={conimg} alt="contact-img" className="w-[400px] md:w-full"></Image>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;