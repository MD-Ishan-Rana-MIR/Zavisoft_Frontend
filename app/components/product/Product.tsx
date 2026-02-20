import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Product = () => {
    const products = [
        {
            id: 1,
            image: "/product/shoe-1.png",
            title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
            price: 125,
        },
        {
            id: 2,
            image: "/product/shoe-2.png",
            title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
            price: 125,
        },
        {
            id: 3,
            image: "/product/shoe-3.png",
            title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
            price: 125,
        },
        {
            id: 4,
            image: "/product/shoe-4.png",
            title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
            price: 125,
        },
    ]

    return (
        <div className="max-w-7xl mx-auto pt-24 pb-32">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="font-semibold text-[74px] max-w-147.25 leading-20  ">
                        Don’t miss out new drops
                    </h1>

                </div>

                <button className="bg-[#4A69E2] text-white font-medium text-sm px-8 py-3 cursor-pointer rounded-2xl hover:opacity-90 transition">
                    Shop New Drops
                </button>
            </div>
            <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">

                {products.map((product) => (
                    <div key={product.id} className="group">

                        {/* IMAGE CARD */}
                        <div className="relative bg-[#D9D9D9] rounded-[28px] p-6 flex items-center justify-center h-[280px]">

                            {/* NEW BADGE */}
                            <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-4 py-1 rounded-full font-medium">
                                New
                            </span>

                            <Image
                                src={product.image}
                                alt={product.title}
                                width={260}
                                height={200}
                                className="object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>

                        {/* TITLE */}
                        <h3 className="mt-5 text-lg font-semibold text-black leading-snug">
                            {product.title}
                        </h3>

                        {/* BUTTON */}
                        <Button className="w-full mt-4 bg-[#1F1F1F] hover:bg-black text-white font-medium py-6 rounded-xl flex justify-center">
                            VIEW PRODUCT
                            <span className="ml-2 text-orange-400 font-semibold">
                                - ${product.price}
                            </span>
                        </Button>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default Product