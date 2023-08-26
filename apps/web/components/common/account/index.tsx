"use client";

import { cn } from "@/lib/utils";
import { Bell, ChevronDown, Search } from "lucide-react";
import AccountMenu from "./account-menu";
import useDropdownToggle from "@/hooks/dropdownToggle";

type Props = {};

function Account({}: Props) {
  const { open, toggle } = useDropdownToggle();

  return (
    <div className="ml-auto flex select-none items-center gap-7 text-slate-200">
      <Search className="h-5 w-5 cursor-pointer transition-colors duration-200 hover:text-primary-500" />

      <Bell className="h-5 w-5 cursor-pointer transition-colors duration-200 hover:text-primary-500" />

      <div
        onClick={toggle}
        className="relative flex cursor-pointer items-center gap-2"
      >
        <div className="h-6 w-6 overflow-hidden rounded-md lg:h-10 lg:w-10">
          <img src="/images/default-blue.png" alt="profile" />
        </div>
        <ChevronDown
          className={cn(
            "text-slate-100 transition duration-200",
            `${open ? "rotate-180" : "rotate-0"}`,
          )}
        />
        <AccountMenu open={open} />
      </div>
    </div>
  );
}

export default Account;
