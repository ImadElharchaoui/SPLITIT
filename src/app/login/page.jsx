"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import imgWallpaper from "@/image/wallpaper/Login_wallpaper.png";

const Page = () => {
  return (
    <div className="bg-gradient-to-r from-[#D1F8EF] to-[#A3D5F5] flex items-center justify-center h-screen">
      {/* Left Side - Image */}
      <div className="relative w-[450px] h-[450px] rounded-tl-3xl rounded-bl-3xl overflow-hidden shadow-lg">
        <Image src={imgWallpaper} alt="Login Wallpaper" layout="fill" objectFit="cover" />
      </div>

      {/* Right Side - Login Form */}
      <div className="flex flex-col items-center justify-center bg-white p-10 w-[450px] h-[450px] rounded-tr-3xl rounded-br-3xl shadow-lg">
        <h1 className="text-4xl font-extrabold text-[#1D4ED8]">Welcome Back!</h1>
        <p className="text-gray-500 mt-2">Sign in to continue</p>

        <form className="flex flex-col mt-6 w-full text-black">
          <label className="text-gray-700 font-medium " htmlFor="username">
            Username or Email:
          </label>
          <input
            id="username"
            className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] transition-all"
            type="text"
            placeholder="Enter your username"
          />

          <label className="text-gray-700 font-medium mt-4 " htmlFor="password">
            Password:
          </label>
          <input
            id="password"
            className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] transition-all"
            type="password"
            placeholder="Enter your password"
          />

          <button className="mt-6 p-3 bg-[#1D4ED8] text-white font-semibold rounded-lg hover:bg-[#153E75] transition-all shadow-md">
            Login
          </button>

          <p className="text-gray-500 text-sm mt-4">
            Don't have an account? <a className="text-[#1D4ED8] hover:underline" href="#">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Page;
