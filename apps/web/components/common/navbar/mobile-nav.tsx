"use client";

import { ChevronDown } from "lucide-react";
import MobileMenu from "./mobile-menu";
import { cn } from "@/lib/utils";
import useDropdownToggle from "@/hooks/dropdownToggle";

function MobileNav() {
  const { open, toggle } = useDropdownToggle();
  return (
    <div
      onClick={toggle}
      className="relative ml-8 flex cursor-pointer select-none items-center gap-2 lg:hidden"
    >
      <p className="text-sm text-slate-100">Browse</p>
      <ChevronDown
        className={cn(
          "text-slate-100 transition duration-200",
          `${open ? "rotate-180" : "rotate-0"}`,
        )}
      />
      <MobileMenu open={open} />
    </div>
  );
}

export default MobileNav;
