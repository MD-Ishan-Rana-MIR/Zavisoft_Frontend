"use client";

import Link from "next/link";
import { Search, User, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-200 border-b border-gray-300">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">

        {/* LEFT MENU */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#" className="hover:text-black text-gray-700 flex items-center gap-1">
            New Drops 🔥
          </Link>
          <Link href="#" className="hover:text-black text-gray-700">Men</Link>
          <Link href="#" className="hover:text-black text-gray-700">Women</Link>
        </div>

        {/* CENTER LOGO */}
        <div className="text-2xl font-extrabold tracking-widest">
          KICKS
        </div>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="w-5 h-5" />
          </Button>

          <Button variant="ghost" size="icon">
            <User className="w-5 h-5" />
          </Button>

          {/* Cart Icon with Badge */}
          <div className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="w-5 h-5" />
            </Button>
            <Badge className="absolute -top-2 -right-2 px-1.5 py-0.5 text-xs">
              0
            </Badge>
          </div>
        </div>
      </div>
    </nav>
  );
}
