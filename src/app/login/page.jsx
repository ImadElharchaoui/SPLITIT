"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import imgWallpaper from "@/image/wallpaper/Login_wallpaper.png";
import { handleLogin } from "@/controller/authentication/login";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter(); 

    useEffect(() => {
        const userExists = () => {
            if (localStorage.getItem("user")) {
                router.push("/dashboard");
            }
        };
        userExists();
    }, [router]);

    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username.length < 5 || password.length < 5) {
            alert("Please fill all the fields!");
            return;
        }

        try {
            const response = await handleLogin(username, password);

            if (!response || response.status >= 300) {
                alert("An error occurred while logging in!");
            } else {
                alert("Login successful!");
                router.push("/dashboard"); 
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("An error occurred while logging in!");
        }
    };

    return (
        <div className="bg-gradient-to-r from-[#D1F8EF] to-[#A3D5F5] flex items-center justify-center h-screen">
            {/* Left Side - Image */}
            <motion.div
                initial={{ x: 500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-0 w-[600px] h-[600px] rounded-tl-3xl rounded-bl-3xl overflow-hidden shadow-lg"
            >
                <Image src={imgWallpaper} alt="Login Wallpaper" layout="fill" objectFit="cover" />
            </motion.div>

            {/* Right Side - Login Form */}
            <div className="flex flex-col z-10 items-center justify-center bg-white p-10 w-[600px] h-[600px] rounded-tr-3xl rounded-br-3xl shadow-lg">
                <h1 className="text-4xl font-extrabold text-[#1D4ED8]">Welcome Back!</h1>
                <p className="text-gray-500 mt-2">Sign in to continue</p>

                <form className="flex flex-col mt-6 w-full text-black" onSubmit={handleSubmit}>
                    <label className="text-gray-700 font-medium" htmlFor="username">
                        Username or Email:
                    </label>
                    <input
                        id="username"
                        className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] transition-all"
                        type="text"
                        placeholder="Enter your username"
                    />

                    <label className="text-gray-700 font-medium mt-4" htmlFor="password">
                        Password:
                    </label>
                    <input
                        id="password"
                        className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] transition-all"
                        type="password"
                        placeholder="Enter your password"
                    />

                    <button className="mt-6 p-3 bg-[#1D4ED8] text-white font-semibold rounded-lg hover:bg-[#153E75] transition-all shadow-md" type="submit">
                        Login
                    </button>

                    <p className="text-gray-500 text-sm mt-4">
                        Don't have an account? <Link className="text-[#1D4ED8] hover:underline" href="/register">Sign Up</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Page;
