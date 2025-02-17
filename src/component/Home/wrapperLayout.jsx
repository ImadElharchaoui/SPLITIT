"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/component/Home/navbar";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const hideNavbarOn = ["/login", "/register"];

  return (
    <>
      {/* Conditionally render the Navbar */}
      {!hideNavbarOn.includes(pathname) && <Navbar />}
      {children}
    </>
  );
}
