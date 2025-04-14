"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("usuario verificado!");
  }, []);

  return (
    <div className="h-full flex items-center flex-col justify-center gap-[60px] ">
      <h2 className="text-[#000] text-[64px]">Dashboard</h2>
      <button className="text-[#F00] text-[24px]">logout</button>
    </div>
  );
}
