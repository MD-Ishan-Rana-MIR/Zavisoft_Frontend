"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroProduct() {
  return (
    <div className="w-full flex justify-center p-4 rounded-[64px] ">
      <div className="relative w-full max-w-7xl overflow-hidden">

        {/* Background Image */}
        <Image
          src="/product/product-1.jpg" // your main image
          alt="Nike Air Max"
          width={100}
          height={700}
          className=" w-full h-157.5 rounded-[64px]  "
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-black/30 rounded-[64px] " />

        {/* LEFT CONTENT */}
        <div className="absolute bottom-10 left-10 z-10 max-w-md text-white">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
            NIKE AIR MAX
          </h1>

          <p className="text-sm md:text-base text-gray-200 mt-3">
            Nike introducing the new air max for your comfort
          </p>

          <Button className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full">
            SHOP NOW
          </Button>
        </div>

        {/* RIGHT THUMBNAILS */}
        <div className="absolute right-6 bottom-8 -translate-y-1/2 flex flex-col gap-4 z-10">
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
