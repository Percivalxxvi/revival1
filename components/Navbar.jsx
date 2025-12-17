import React, { useState } from "react";
import { Menu, X, Globe, Church, Radio, Video, Phone } from "lucide-react";

const Navbar = ({page}) => {
    const [open, setOpen] = useState(false);
    const [select, setSelect]=useState()

  return (
    <header className="lg:sticky fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* <Church className="text-[#150f33] w-7 h-7" /> */}
          <img
            onClick={() => (window.location.href = "/")}
            className="lg:h-12 h-15 lg:rounded-full rounded-xl"
            src="https://ik.imagekit.io/percival26/ChatGPT%20Image%20Dec%2017,%202025,%2012_45_59%20PM.png?updatedAt=1765971997238"
            alt=""
          />
          <span className="font-bold text-2xl text-gray-800">
            Revival Network Commission
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-md font-medium text-gray-500">
          <a
            style={{ color: page === "home" ? "#150f33" : "" }}
            href="/"
            className="hover:text-[#150f33] cursor-pointer"
          >
            Home
          </a>
          <a
            style={{ color: page === "about" ? "#150f33" : "" }}
            href="/about"
            className="hover:text-[#150f33] cursor-pointer"
          >
            About
          </a>
          <a className="hover:text-[#150f33] cursor-pointer">Sermons</a>
          {/* <a className="hover:text-[#150f33] cursor-pointer">Live</a> */}
          <a className="hover:text-[#150f33] cursor-pointer">Contact</a>
        </ul>

        {/* CTA */}
        {/* <button className="hidden md:flex items-center gap-2 bg-[#150f33] text-white px-5 py-2 rounded-full text-sm hover:bg-[#2d2365] cursor-pointer transition">
          <Globe size={16} />
          Watch Live
        </button> */}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t z-50">
          <ul className="flex flex-col gap-4 px-6 py-6 text-sm font-medium text-gray-700">
            <a href="/" className="hover:text-[#150f33]">
              Home
            </a>
            <a href="/about" className="hover:text-[#150f33]">
              About
            </a>
            <li className="hover:text-[#150f33]">Sermons</li>
            <li className="hover:text-[#150f33]">Live</li>
            <li className="hover:text-[#150f33]">Contact</li>

            {/* <button className="mt-4 flex items-center justify-center gap-2 bg-[#150f33] text-white px-5 py-3 rounded-full">
              <Radio size={16} />
              Watch Live
            </button> */}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
