'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface Category {
    id: number
    name: string
    slug: string
    image: string
}

interface CategoryProps {
    categories: Category[]
    itemsPerPage?: number
}

const Category = ({ categories, itemsPerPage = 2 }: CategoryProps) => {
    const [page, setPage] = useState(1)
    const totalPages = Math.ceil(categories.length / itemsPerPage)

    const currentItems = categories.slice((page - 1) * itemsPerPage, page * itemsPerPage)

    return (
        <div className=' bg-[#232321] ' >
            <div className="max-w-7xl mx-auto ">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-white text-2xl font-bold uppercase">Categories</h2>

                    <div className="flex gap-2">
                        <button
                            disabled={page === 1}
                            onClick={() => setPage(page - 1)}
                            className="bg-gray-700 text-white px-3 py-2 rounded disabled:opacity-50"
                        >
                            &lt;
                        </button>
                        <button
                            disabled={page === totalPages}
                            onClick={() => setPage(page + 1)}
                            className="bg-gray-700 text-white px-3 py-2 rounded disabled:opacity-50"
                        >
                            &gt;
                        </button>
                    </div>
                </div>

                {/* Category Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {currentItems.map((category) => (
                        <div
                            key={category.id}
                            className="relative border-2 border-pink-500 rounded-tl-[28px] rounded-br-[28px] bg-gray-100 p-4 flex flex-col items-center justify-center cursor-pointer group"
                        >
                            <Image
                                src={category.image}
                                alt={category.name}
                                width={260}
                                height={200}
                                className="object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                            <h3 className="mt-4 text-lg font-semibold text-black text-center">
                                {category.name.toUpperCase()}
                            </h3>

                            <Button className="absolute bottom-4 right-4 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-800">
                                ↗
                            </Button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Category