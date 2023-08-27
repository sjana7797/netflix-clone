"use client";
import React from "react";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
};

function Root({ children }: Props) {
  return (
    <html lang="en" className={cn(inter.className, "h-full")}>
      <head></head>
      <body className="h-full overflow-x-hidden bg-slate-900 text-slate-200">
        {children}
      </body>
    </html>
  );
}

export default Root;
