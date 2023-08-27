"use client";
import ContentPreview from "@/components/home/content-preview";
import Hero from "@/components/home/hero";
import React from "react";

type Props = {};

function Home({}: Props) {
  return (
    <div className="">
      <Hero />
      <ContentPreview />
    </div>
  );
}

export default Home;
