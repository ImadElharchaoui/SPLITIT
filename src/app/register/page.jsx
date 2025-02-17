"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import imgWallpaper from "@/image/wallpaper/Login_wallpaper.png";
import { handleRegister } from "@/controller/authentication/register";
import { useRouter } from "next/navigation"; // ✅ Correct import for Next.js 13+ (App Router)

const Page = () => {
    const router = useRouter(); // ✅ Moved inside the component

    useEffect(() => {
        const userExists = () => {
            if (localStorage.getItem("username")) {
                router.push("/");
            }
        };
        userExists();
    }, [router]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (username.length < 5 || email.length < 5 || password.length < 5) {
            alert("Please fill all the fields!");
            return;
        }

        try {
            const response = await handleRegister(username, email, password);

            if (!response || response.status >= 300) {
                alert("An error occurred while registering!");
            } else {
                alert("Registration successful!");
                router.push("/"); 
            }
        } catch (error) {
            console.error("Registration error:", error);
            alert("An error occurred while registering!");
        }
    };

    return (
        <div className="bg-gradient-to-r from-[#D1F8EF] to-[#A3D5F5] flex items-center justify-center h-screen">
            {/* Left Side - SignUp Form */}
            <div className="flex flex-col z-10 items-center justify-center bg-white p-10 w-[600px] h-[600px] rounded-tl-3xl rounded-bl-3xl shadow-lg">
                <h1 className="text-4xl font-extrabold text-[#1D4ED8]">Create An Account!</h1>
                <p className="text-gray-500 mt-2">Sign Up to continue</p>

                <form className="flex flex-col mt-6 w-full text-black" onSubmit={handleSubmit}>
                    <label className="text-gray-700 font-medium" htmlFor="username">
                        Username:
                    </label>
                    <input
                        id="username"
                        className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] transition-all"
                        type="text"
                        placeholder="Enter your username"
                    />

                    <label className="text-gray-700 font-medium mt-4" htmlFor="email">
                        Email:
                    </label>
                    <input
                        id="email"
                        className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] transition-all"
                        type="email"
                        placeholder="Enter your Email"
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
                        Sign Up
                    </button>

                    <p className="text-gray-500 text-sm mt-4">
                        Have an account? <Link className="text-[#1D4ED8] hover:underline" href="/login">Login</Link>
                    </p>
                </form>
            </div>

            {/* Right Side - Image */}
            <motion.div
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-[600px] h-[600px] rounded-tr-3xl rounded-br-3xl overflow-hidden shadow-lg z-0"
            >
                <Image src={imgWallpaper} alt="Register Wallpaper" layout="fill" objectFit="cover" />
            </motion.div>
        </div>
    );
};

export default Page;
