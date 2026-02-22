'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useGetProductsQuery } from '@/app/api/product-api/productApi'
import { ProductType } from '@/lib/type/productType'
import { useRouter } from 'next/navigation'

const Product = () => {
    const [page, setPage] = useState(1)
    const limit = 8

    // ⚠️ Since Escuela API does not return total count,
    // we simulate total pages. Change if needed.
    const totalPages = 20

    const { data, isLoading, isError } = useGetProductsQuery({
        page,
        limit,
    })

    // Scroll to top when page changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [page])

    // Pagination logic (Amazon-style)
    const getPagination = () => {
        const delta = 1
        const range: number[] = []
        const rangeWithDots: (number | string)[] = []

        for (
            let i = Math.max(2, page - delta);
            i <= Math.min(totalPages - 1, page + delta);
            i++
        ) {
            range.push(i)
        }

        if (page - delta > 2) {
            rangeWithDots.push(1, '...')
        } else {
            rangeWithDots.push(1)
        }

        rangeWithDots.push(...range)

        if (page + delta < totalPages - 1) {
            rangeWithDots.push('...', totalPages)
        } else if (page + delta === totalPages - 1) {
            rangeWithDots.push(totalPages)
        }

        return rangeWithDots
    }

    const router = useRouter();
    const navigateProductDetails = (id: number) => {
        router.push(`/product-details/${id}`)
    }

    if (isLoading)
        return <p className="text-center py-20 text-lg">Loading...</p>

    if (isError)
        return (
            <p className="text-center py-20 text-lg text-red-500">
                Error loading products
            </p>
        )



    return (
        <div className="max-w-7xl mx-auto pt-24 pb-32">
            {/* HEADER */}
            <div className="flex justify-between items-center">
                <h1 className="font-semibold text-[74px] leading-20">
                    Don’t miss out new drops
                </h1>

                <button className="bg-[#4A69E2] text-white font-medium text-sm px-8 py-3 rounded-2xl hover:opacity-90 transition">
                    Shop New Drops
                </button>
            </div>

            {/* PRODUCTS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-8 mt-8">
                {data?.map((product: ProductType) => (
                    <div key={product.id} className="  ">
                        <div className="relative bg-[#D9D9D9] rounded-[28px] flex items-center justify-center h-79.5 ">
                            <button className="absolute top-5 left-2 bg-[#4A69E2]  text-white text-xs px-6 py-2.5 text-center items-center block font-semibold  rounded-tl-[24px] rounded-br-[24px]  ">
                                New
                            </button>

                            <Image
                                src={
                                    product.images?.[0] ||
                                    '/placeholder.png' // fallback image
                                }
                                alt={product.title}
                                width={325}
                                height={325}
                                className="object-contain px-2 transition-transform duration-300 group-hover:scale-105 rounded-[28px]  "
                            />
                        </div>

                        <div className='  ' >
                            <h3 className="mt-4 text-2xl h-16  font-semibold text-[#232321] ">
                                {product.title}
                            </h3>

                            <Button onClick={() => { navigateProductDetails(product.id) }} className="w-full cursor-pointer mt-4 bg-[#1F1F1F] hover:bg-black text-white font-medium  text-sm py-5  rounded-xl flex justify-center">
                                VIEW PRODUCT
                                <span className="ml-2 text-[#FFA52F] text-sm font-medium">
                                    - ${product.price}
                                </span>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            {/* PROFESSIONAL PAGINATION */}
            <div className="flex justify-center items-center gap-2 mt-16 flex-wrap">
                {/* Previous */}
                <button
                    disabled={page === 1}
                    onClick={() => setPage((prev) => prev - 1)}
                    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-40"
                >
                    Prev
                </button>

                {getPagination().map((item, index) =>
                    item === '...' ? (
                        <span key={index} className="px-3 text-gray-500">
                            ...
                        </span>
                    ) : (
                        <button
                            key={index}
                            onClick={() => setPage(Number(item))}
                            className={`px-4 py-2 rounded transition ${page === item
                                ? 'bg-black text-white'
                                : 'bg-gray-200 hover:bg-gray-300'
                                }`}
                        >
                            {item}
                        </button>
                    )
                )}

                {/* Next */}
                <button
                    disabled={page === totalPages}
                    onClick={() => setPage((prev) => prev + 1)}
                    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-40"
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Product