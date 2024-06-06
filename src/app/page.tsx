'use client'

import Header from "@/app/components/header/header";
import Image from "next/image";
import Intro from "./components/introductionProject/introductionProject";
import Appeal from "./components/appeal/appeal";

export default function Home() {
  return (
    <main className="flex  min-h-screen flex-col items-center relative">
      
      <Header />
      <div className="bg-gradient-to-b from-primary via-transparent to-[#070707] w-full static">
        <Intro />
      </div>
      <Appeal />
    </main>
  );
}
