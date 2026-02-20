"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroProduct() {
  return (
    <div className="w-full flex justify-center p-4">
      <div className="relative w-full max-w-7xl rounded-[64px] overflow-hidden">

        {/* Background Image */}
        <Image
          src="/product/product-1.jpg"
          alt="Nike Air Max"
          width={1600}
          height={700}
          className="w-full h-212.5 object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* TOP BADGE */}
        <div className="absolute top-1/4  z-20">
          <button className="bg-[#232321] font-semibold backdrop-blur-md text-white px-20 rounded-b-4xl -rotate-90 -ml-34 py-5  ">
            Nike product of the year
          </button>
        </div>

        {/* LEFT CONTENT */}
        <div className="absolute bottom-10 left-10 z-20 text-white">
          <h1 className="text-4xl md:text-[74px] font-semibold tracking-wide">
            NIKE AIR MAX
          </h1>

          <p className="text-sm md:text-2xl text-gray-200 font-semibold mt-3 max-w-xl">
            Nike introducing the new air max for everyone comfort
          </p>

          <Button className="mt-6 bg-[#4A69E2] px-8 py-2 font-medium text-sm cursor-pointer">
            SHOP NOW
          </Button>
        </div>

        {/* RIGHT THUMBNAILS */}
        <div className="absolute right-6 bottom-10 flex flex-col gap-4 z-20">
          <div className="bg-white/20 backdrop-blur-md p-1 rounded-xl border border-white/30">
            <Image
              src="/product/product-2.jpg"
              alt="thumb"
              width={80}
              height={80}
              className="rounded-lg"
            />
          </div>

          <div className="bg-white/20 backdrop-blur-md p-1 rounded-xl border border-white/30">
            <Image
              src="/product/product-3.jpg"
              alt="thumb"
              width={80}
              height={80}
              className="rounded-lg"
            />
          </div>
        </div>

      </div>
    </div>
  );
}