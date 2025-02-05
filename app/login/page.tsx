"use client";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaGoogle, FaLinkedinIn } from "react-icons/fa";
const UserIconSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    role="img"
    aria-label="User Icon"
  >
    <path
      fill="#fff"
      d="M12 12.25a3.75 3.75 0 1 1 3.75-3.75A3.75 3.75 0 0 1 12 12.25m0-6a2.25 2.25 0 1 0 2.25 2.25A2.25 2.25 0 0 0 12 6.25m7 13a.76.76 0 0 1-.75-.75c0-1.95-1.06-3.25-6.25-3.25s-6.25 1.3-6.25 3.25a.75.75 0 0 1-1.5 0c0-4.75 5.43-4.75 7.75-4.75s7.75 0 7.75 4.75a.76.76 0 0 1-.75.75"
    />
  </svg>
);

const PasswordIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
  >
    <path
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M8 10V8c0-2.761 1.239-5 4-5c2.094 0 3.313 1.288 3.78 3.114M3.5 17.8v-4.6c0-1.12 0-1.68.218-2.107a2 2 0 0 1 .874-.875c.428-.217.988-.217 2.108-.217h10.6c1.12 0 1.68 0 2.108.217a2 2 0 0 1 .874.874c.218.428.218.988.218 2.108v4.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C18.98 21 18.42 21 17.3 21H6.7c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3.5 19.481 3.5 18.921 3.5 17.8m8.5-2.05v-.5m4 .5v-.5m-8 .5v-.5"
    />
  </svg>
);

const LoginPage = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gradient-to-r from-purple-700 to-red-500 flex flex-col justify-center items-center text-white relative p-10">
        <h1 className="text-5xl font-bold mb-2">WELCOME TO</h1>
        <div className="w-[150px] h-1 bg-white mb-64 mr-[140px]"></div>
        <div className="absolute inset-0">
          <img
            src="/images/background-login.png"
            alt="background-login"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
      </div>
      <div className="flex gap-4 mb-4 absolute top-0 mt-64 ml-64 ">
          <SocialButton Icon={FaFacebookF} />
          <SocialButton Icon={FaTwitter} />
          <SocialButton Icon={FaGoogle} />
          <SocialButton Icon={FaLinkedinIn} />
        </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="700"
          height="700"
          viewBox="0 0 24 24"
        >
          <path fill="#1b0d6c" d="M13.5 15.808L9.692 12L13.5 8.192z" />
        </svg>
      </div>

      <div className="w-1/2 bg-[#1b0d6c] flex flex-col justify-center items-center text-white p-10 relative">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="w-[202px] h-[202px]  mb-4"
        />
        <h1 className="text-5xl font-semibold mb-4">
          {" "}
          បណ្ឌិត្យសភានគរបាលកម្ពុជា{" "}
        </h1>
        <h2 className="text-xl font-semibold mb-10">
          POLICE ACADEMY OF CAMBODIA
        </h2>

        <InputField type="text" placeholder="Username" SvgIcon={UserIconSvg} />
        <InputField
          type="password"
          placeholder="Password"
          SvgIcon={PasswordIcon}
        />

        <div className="flex justify-between w-[94%] px-4 pb-12 text-sm text-gray-300">
          <label className="flex items-center text-lg mr-10">
            <input type="checkbox" className="mr-2 w-6 h-6 " />
            Remember Me
          </label>

          <a href="#" className="hover:underline">
            Forgot Password?
          </a>
        </div>

        <Link href="/dashboard" className="mt-3 border-2 border-white text-white px-6 py-2 rounded-full flex items-center justify-center gap-2 w-[680px]">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="1.5">
      <path strokeLinejoin="round" d="M2.001 11.999h14m0 0l-3.5-3m3.5 3l-3.5 3"/>
      <path d="M9.002 7c.012-2.175.109-3.353.877-4.121C10.758 2 12.172 2 15 2h1c2.829 0 4.243 0 5.122.879C22 3.757 22 5.172 22 8v8c0 2.828 0 4.243-.878 5.121C20.242 22 18.829 22 16 22h-1c-2.828 0-4.242 0-5.121-.879c-.768-.768-.865-1.946-.877-4.121"/>
    </g>
  </svg>
  LOGIN
</Link>
      </div>
    </div>
  );
};

const SocialButton = ({ Icon }: any) => (
  <button className="px-3 py-3 border-[#a59ae7] border-2 shadow-[0_4px_6px_rgba(255,255,255,0.5)] hover:bg-gray-300 mt-60 bg-[#82365c] text-white">
    <Icon size={20} />
  </button>
);

const InputField = ({ type, placeholder, SvgIcon }: any) => (
  <div className="flex items-center text-white w-[680px] px-6 py-2  rounded-full mb-5 border-2 border-white">
    {SvgIcon && <span className="mr-3 text-lg">{SvgIcon}</span>}
    <input
      type={type}
      placeholder={placeholder}
      className="outline-none w-full bg-transparent text-lg text-white placeholder-white"
    />
  </div>
);

export default LoginPage;
