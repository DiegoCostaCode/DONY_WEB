"use client";

import Header from "@/app/components/header/header";
import Image from "next/image";
import Intro from "./components/introductionProject/introductionProject";
import Appeal from "./components/appeal/appeal";
import News from "./components/news/news";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="h-screen">
        <Header />
      </div>
      <div className="flex-1 h-screen">
        <Intro />
        <News />
        <Appeal />
      </div>
    </main>
  );
}
