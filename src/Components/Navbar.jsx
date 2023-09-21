

const Navbar = () => {
  return (
    <nav className="w-full h-20 grid place-items-center px-1 py-2 grid-cols-2 bg-blue-600 text-slate-100 sm:gap-4 ">
     <h1> PDF Convertor </h1>
    <div className="nav-links flex gap-3 lg:gap-[10rem] sm:gap-[6rem]">
        <a className="text-slate-100 uppercase text-lg lg:text-3xl sm:text-xl  font-bold" href="/">PDF</a>
        <a className="text-slate-100 uppercase text-lg lg:text-3xl sm:text-xl  font-bold" href="/">Text</a>
        <a className="text-slate-100 uppercase text-lg lg:text-3xl sm:text-xl  font-bold" href="/">Excel</a>
    </div>
    </nav>
  )
}

export default Navbar