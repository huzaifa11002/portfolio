"use client"
import Link from "next/link"
import Image from "next/image"
import logo from "../../../public/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
const Header = () => {
  let [isOpen, setOpen] = useState(false)
  const toggleMenu = () => {
    setOpen(!isOpen)
  }
  return (
    <>
      <header className="w-full">
        <nav className={`relative ${isOpen ? "" : "border-b-2 border-[#c4ef04]"} w-full`}>
          <div className="mx-auto py-8 max-w-[90%] xl:w-[1440px] sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-5">
            <div className="w-full flex justify-between items-center">
              <Link href="/" className="w-1/2 sm:w-full md:w-[10rem] lg:w-[15rem] cursor-pointer"><Image src={logo} alt="logo" className="w-full"></Image></Link>
              <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className='h-8 w-8 text-white cursor-pointer sm:hidden' onClick={toggleMenu} />
            </div>
            <div className="hidden sm:block">
              <ul className="flex gap-1 text-[#fff] text-sm md:text-lg lg:gap-5">
                <li>
                  <Link href="/" className="rounded-3xl px-3 py-1 border-2 hover:text-[#c4ef04] hover:border-[#c4ef04] md:px-3 md:py-2 lg:px-5 lg:py-3">Home</Link>
                </li>
                <li>
                  <Link href="/about" className="rounded-3xl px-3 py-1 border-2 hover:text-[#c4ef04] hover:border-[#c4ef04] md:px-3 md:py-2 lg:px-5 lg:py-3">About</Link>
                </li>
                <li>
                  <Link href="/skills" className="rounded-3xl px-3 py-1 border-2 hover:text-[#c4ef04] hover:border-[#c4ef04] md:px-3 md:py-2 lg:px-5 lg:py-3">Skills</Link>
                </li>
                <li>
                  <Link href="/work" className="rounded-3xl px-3 py-1 border-2 hover:text-[#c4ef04] hover:border-[#c4ef04] md:px-3 md:py-2 lg:px-5 lg:py-3">Work</Link>
                </li>
                <li>
                  <Link href="/blog" className="rounded-3xl px-3 py-1 border-2 hover:text-[#c4ef04] hover:border-[#c4ef04] md:px-3 md:py-2 lg:px-5 lg:py-3">Blog</Link>
                </li>
                <li>
                  <Link href="/contact" className="rounded-3xl px-3 py-1 border-2 hover:text-[#c4ef04] hover:border-[#c4ef04] md:px-3 md:py-2 lg:px-5 lg:py-3">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={`z-50 w-full text-[#fff] ${isOpen ? "border-b-2 border-[#c4ef04] opacity-100" : "-top-[500px] opacity-100"} transition-all ease-in-out duration-500 absolute bg-[#232b2b] sm:hidden`}>
            <ul>
              <li className="flex justify-center my-3">
                <Link href="/" className="rounded-3xl border-2 py-1 px-3 hover:text-[#c4ef04] hover:border-[#c4ef04]">Home</Link>
              </li>
              <li className="flex justify-center my-3">
                <Link href="/about" className="rounded-3xl border-2 py-1 px-3 hover:text-[#c4ef04] hover:border-[#c4ef04]">About</Link>
              </li>
              <li className="flex justify-center my-3">
                <Link href="/skills" className="rounded-3xl border-2 py-1 px-3 hover:text-[#c4ef04] hover:border-[#c4ef04]">Skills</Link>
              </li>
              <li className="flex justify-center my-3">
                <Link href="/work" className="rounded-3xl border-2 py-1 px-3 hover:text-[#c4ef04] hover:border-[#c4ef04]">Work</Link>
              </li>
              <li className="flex justify-center my-3">
                <Link href="/blog" className="rounded-3xl border-2 py-1 px-3 hover:text-[#c4ef04] hover:border-[#c4ef04]">Blog</Link>
              </li>
              <li className="flex justify-center my-3">
                <Link href="/contact" className="rounded-3xl border-2 py-1 px-3 hover:text-[#c4ef04] hover:border-[#c4ef04]">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header;