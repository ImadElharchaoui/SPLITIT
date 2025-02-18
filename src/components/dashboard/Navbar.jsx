"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ImgLogo from "@/image/png/LOGO.png";
import ImgUser from "@/image/png/user_avatar.png";
import { useRouter } from "next/navigation";

const Navbar = (user) => {
  const router = useRouter();
  const [isOpenUser, setIsOpenUser] = useState(false);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const userDropdownRef = useRef(null);
  const addDropdownRef = useRef(null);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // ✅ Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setIsOpenUser(false);
      }
      if (addDropdownRef.current && !addDropdownRef.current.contains(event.target)) {
        setIsOpenAdd(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-primary border-b-2 border-accent py-4 px-10 flex justify-between items-center w-full">
      <Link href={"/dashboard"}>
        <div className="flex justify-center items-center h-full">
          <Image src={ImgLogo} width={30} height={30} alt="Image Logo" />
          <span className="text-accent text-xl font-bold font-Edu ml-2">Split It</span>
        </div>
      </Link>

      <div className="mr-40 flex justify-between text-sm items-center font-bold text-large space-x-4">
        <Link href={""}>Groups</Link>
        <Link href={""}>Friends</Link>
        <Link href={""}>Transactions</Link>
        <Link href={""}>Splits</Link>

        {/* ✅ Add Dropdown */}
        <div className="relative" ref={addDropdownRef}>
          <button onClick={() => setIsOpenAdd(!isOpenAdd)} className="flex items-center">
            Add <span className="text-3xl ml-2">+</span>
          </button>
          {isOpenAdd && (
            <ul className="absolute top-12 w-40 right-0 py-6 px-4 space-y-3 text-white bg-accent border-2 border-[#F9F9F9] text-sm font-bold">
              <li><Link href={"/dashboard/groups/create"}>New Group</Link></li>
              <li><Link href={"/dashboard/friends/addFriend"}>New Friend</Link></li>
              <li><Link href={""}>New Split</Link></li>
            </ul>
          )}
        </div>

        {/* ✅ User Dropdown */}
        <div className="relative" ref={userDropdownRef}>
          <button onClick={() => setIsOpenUser(!isOpenUser)}>
            <Image src={user.image || ImgUser} width={30} height={30} alt="User Avatar" />
          </button>
          {isOpenUser && (
            <ul className="absolute top-12 right-0 py-6 px-4 space-y-3 text-white bg-accent border-2 border-[#F9F9F9] text-sm font-bold">
              <li><Link href={""}>Profile</Link></li>
              <li><Link href={""}>Settings</Link></li>
              <li><button onClick={handleLogOut}>Log Out</button></li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
