"use client";
import { usePathname } from "next/navigation"; // Import usePathname
import { useState, useEffect } from "react";
import { CircleUserRound, Search, ChevronRight } from "lucide-react";

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setSearch] = useState(true);
  const pathname = usePathname(); 

  useEffect(() => {
    if (pathname !== "/dashboard") { 
      setSearch(false);
    } else {
      setSearch(true);
    }
  }, [pathname]); 

  return (
    <nav className="bg-[#1940A1] text-white flex items-center justify-end px-6 w-full top-0 left-0 fixed py-4 shadow-md z-40 ">
      {showSearch && (
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-[20px] bg-white text-black focus:outline-none"
          />
          <Search className="absolute left-3 top-2 text-gray-500" />
        </div>
      )}

      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 bg-white text-black px-8 py-2 rounded-[20px] ml-11 shadow-md hover:shadow-lg transition-all duration-200">
          <div className="cursor-pointer flex justify-end items-center w-full">
            <img
              src="/images/Flag_of_Cambodia.svg 1.png"
              alt="Khmer"
              className="w-8 h-5 "
            />
            <ChevronRight className="text-black ml-5" />
          </div>
        </button>

        <div className="">
          <button
            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-[20px] ml-6"
            onClick={() => setIsOpen(!isOpen)}
          >
            <CircleUserRound className="border-4 rounded-[20px] border-[#D9D9D9]-50" />
            <span>Chamrouen</span>
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg py-2">
              <a href="#" className= "block px-4 py-2 hover:bg-gray-200">
                Profile
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Settings
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;