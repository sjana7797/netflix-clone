import Navbar from "@/components/common/navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
