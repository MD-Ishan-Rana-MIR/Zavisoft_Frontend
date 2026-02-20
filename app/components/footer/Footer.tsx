"use client"

import { Facebook, Instagram, Twitter, Music2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    const item = [
        {
            name: "Runners", link: "Runners",
        },
        {
            name: "Sneakers", link: "Sneakers"
        },
        {
            name: "Basketball", link: "Basketball",
        },
        {
            name: "Outdoor", link: "Outdoor"
        },
        {
            name: "Golf", link: "Golf"
        },
        {
            name: "Hiking", link: "Hiking"
        }
    ]

    const itemTwo = [
        {
            name: "About", link: "About",
        },
        {
            name: "Contact", link: "Contact"
        },
        {
            name: "Blogs", link: "Blogs",
        },

    ]



    return (
        <div className=" " >
            <div className="w-full max-w-7xl mx-auto  flex justify-center bg-gradient-to-r from-[#4F6BFF] to-[#4A63E7] rounded-[48px]">
                <div className=" overflow-hidden ">

                    {/* ================= TOP BLUE SECTION ================= */}
                    <div className=" pt-16 pb-10 relative px-18 ">

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center ">

                            {/* LEFT CONTENT */}
                            <div className="max-w-xl">
                                <h2 className=" text-[#FFFFFF] font-semibold text-5xl ">
                                    JOIN OUR KICKSPLUS <br />
                                    CLUB & GET 15% OFF
                                </h2>

                                <p className=" text-white mt-4 font-semibold text-[20px] ">
                                    Sign up for free! Join the community.
                                </p>

                                <div className="flex gap-x-1 items-center mt-8">
                                    <div>
                                        <input type="text" placeholder="Email address"
                                            className=" border border-white hover:outline-0 focus:outline-0 py-3.5 px-4 rounded-2xl w-85.5 placeholder:text-[#E7E7E3]" />
                                    </div>

                                    <div>
                                        <button className="py-3.5 px-6 rounded-2xl text-white bg-[#232321] cursor-pointer font-medium ">
                                            SUBMIT
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT BIG LOGO */}
                            <div className="hidden md:block">
                                <Image src={"/logo/logo-1.png"} alt="logo-1" width={367} height={112} />
                            </div>
                        </div>
                    </div>

                    {/* ================= BLACK FOOTER SECTION ================= */}
                    <div className="bg-[#1F1F1F] text-white pt-10 px-10 relative rounded-[48px]  flex flex-col gap-y-24.25 ">

                        <div className=" flex justify-between   ">

                            {/* About */}
                            <div className=" w-[30%] " >
                                <h3 className="text-[#FFA52F]  font-semibold text-2xl mb-1 ">
                                    About us
                                </h3>
                                <p className="textColor  text-[20px] font-semibold leading-relaxed">
                                    We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.
                                </p>
                            </div>

                            {/* Categories */}
                            <div>
                                <h3 className="text-[#FFA52F]  font-semibold text-2xl mb-1">
                                    Categories
                                </h3>
                                <ul className="space-y-2 ">
                                    {
                                        item.map((item, i) => {
                                            return (
                                                <div key={i} >
                                                    <li className=" text-[#E7E7E3] text-[20px] font-semibold my-2 " >
                                                        <Link href={item?.link}>{item?.name}</Link>
                                                    </li>
                                                </div>
                                            )
                                        })
                                    }
                                </ul>
                            </div>

                            {/* Company */}
                            <div>
                                <h3 className="text-[#FFA52F]  font-semibold text-2xl mb-1">
                                    Company
                                </h3>
                                <ul className="space-y-2 ">
                                    {
                                        itemTwo.map((item, i) => {
                                            return (
                                                <div key={i} >
                                                    <li className=" text-[#E7E7E3] text-[20px] font-semibold my-2 " >
                                                        <Link href={item?.link}>{item?.name}</Link>
                                                    </li>
                                                </div>
                                            )
                                        })
                                    }
                                </ul>
                            </div>

                            {/* Social */}
                            <div>
                                <h3 className="text-[#FFA52F]  font-semibold text-2xl mb-1">
                                    Follow us
                                </h3>
                                <div className="flex gap-4 ">
                                    <Facebook className="w-5 h-5 cursor-pointer hover:text-white" />
                                    <Instagram className="w-5 h-5 cursor-pointer hover:text-white" />
                                    <Twitter className="w-5 h-5 cursor-pointer hover:text-white" />
                                    <Music2 className="w-5 h-5 cursor-pointer hover:text-white" />
                                </div>
                            </div>
                        </div>

                        {/* BIG BACKGROUND TEXT */}
                        <div className="  " >
                            <Image src={"/logo/logo-2.png"} width={1262} height={313} alt="logo-2" />
                        </div>
                    </div>

                </div>
            </div>
            <div className=" py-5 text-center" >
                <h1 className="text-[#232321] text-[16px] " >© All rights reserved   </h1>
            </div>
        </div>
    )
}