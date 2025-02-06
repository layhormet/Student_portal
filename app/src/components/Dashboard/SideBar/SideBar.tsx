"use client";
import { useState } from "react";
import Image from "next/image";

import { ChevronsLeft } from "lucide-react";
import SidebarNav from "./SidebarNav"; 

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div
      className={`bg-[#1B0D6C] text-white p-4 z-50 transition-all rounded-tr-[50px] duration-300 ${
        isOpen ? "w-72" : "w-24"
      }`}
      style={{ overflow: "hidden" }}
    >
      <div className="flex items-center justify-center relative mb-6">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={80}
          height={80}
          className="rounded-full"
        />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-4 text-white-900 p-2 shadow-lg transition-transform duration-300 hover:scale-110"
        >
          <ChevronsLeft className="w-9 h-8" />
        </button>
      </div>
      <SidebarNav isOpen={isOpen} /> 
    </div>
  );
};

export default Sidebar;
