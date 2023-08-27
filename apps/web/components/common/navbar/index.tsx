"use client";

import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";
import Account from "../account";
import { useEffect, useState } from "react";
import { TOP_OFFSET } from "./constants";
import { cn } from "@/lib/utils";

type Props = {};

function Navbar({}: Props) {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackground(window.scrollY >= TOP_OFFSET);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed z-50 w-full">
      <nav
        className={cn(
          "flex items-center px-4 py-6 transition duration-200 md:px-16",
          `${showBackground ? "bg-slate-950 bg-opacity-90" : "bg-transparent"}`,
        )}
      >
        <img src="/images/logo.png" className="h-4 lg:h-7" alt="logo" />

        <DesktopNav />
        <MobileNav />
        <Account />
      </nav>
    </header>
  );
}

export default Navbar;
