"use client";

import Header from "@/app/components/header/header";
import Image from "next/image";
import Intro from "./components/introductionProject/introductionProject";
import Appeal from "./components/appeal/appeal";
import Materials from "./components/materials/materials";
import LatestsNews from "./components/latestsnews/latestsnews";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="h-screen">
        <Header />
      </div>
      <div className="flex-1 bg-gradient-to-b from-primary via-transparent to-[#070707] ">
        <Intro />
        <Materials />
        <LatestsNews />
        <Appeal />
      </div>

    </main>
  );
}
