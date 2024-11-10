const Header = () => {
  return (
    <>
    <header className="w-full">
        <nav className="flex justify-between items-center max-w-[1300px] mx-auto py-5">
            <div>
                <a href="#" className="text-[#c4ef04] text-2xl font-extrabold">LOGO</a>
            </div>
            <div className="flex gap-5">
                <a href="/" className="text-[#fff] rounded-3xl border-2 px-7 py-3 hover:text-[#c4ef04] hover:border-[#c4ef04]">Home</a>
                <a href="/about" className="text-[#fff] rounded-3xl border-2 px-7 py-3 hover:text-[#c4ef04] hover:border-[#c4ef04]">About</a>
                <a href="/skills" className="text-[#fff] rounded-3xl border-2 px-7 py-3 hover:text-[#c4ef04] hover:border-[#c4ef04]">Skills</a>
                <a href="/work" className="text-[#fff] rounded-3xl border-2 px-7 py-3 hover:text-[#c4ef04] hover:border-[#c4ef04]">Work</a>
                <a href="/contact" className="text-[#fff] rounded-3xl border-2 px-7 py-3 hover:text-[#c4ef04] hover:border-[#c4ef04]">Contact</a>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Header;