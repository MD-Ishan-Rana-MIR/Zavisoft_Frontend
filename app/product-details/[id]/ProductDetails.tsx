"use client"
import { useProductDetailsQuery } from '@/app/api/product-api/productApi'
import Image from 'next/image';
import React, { useState } from 'react'

const ProductDetails = ({ id }: { id: string }) => {

    const { data } = useProductDetailsQuery(id);

    console.log(data?.images)

    const colors = [
        { id: 1, name: 'Navy', hex: '#1F2937' },
        { id: 2, name: 'Green', hex: '#64756B' },
    ]

    const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 37, 36];

    const [selectedColor, setSelectedColor] = useState(1)
    const [selectedSize, setSelectedSize] = useState(38)


    return (
        <div className=' py-6 ' >

            <div className=' flex justify-between gap-x-4 ' >
                {/* left side  */}
                <div className='grid grid-cols-2  gap-5 w-[50%]  ' >
                    {
                        data?.images && (
                            data?.images.map((item: string, i: string) => {
                                return (
                                    <div key={i} className=' '  >
                                        <Image src={item} width={429} height={510} alt='name' />
                                    </div>
                                )
                            })
                        )
                    }
                </div>
                {/* right side  */}
                <div className={` w-[50%] `} >
                    <div>
                        <button className=' py-3 px-4 rounded-2xl text-sm font-semibold bg-[#4A69E2] text-white ' >New Release</button>
                        <h1 className=' text-[#232321] font-semibold text-[32px] ' >{data?.title} </h1>
                        <h1 className=' font-semibold text-2xl text-[#4A69E2] ' >${data?.price}</h1>
                    </div>
                    <div className="mt-8 ">

                        {/* COLOR SELECTION */}
                        <div>
                            <p className="font-semibold text-[#232321] text-[16px] mb-2 ">COLOR</p>
                            <div className="flex gap-3">
                                {colors.map((color) => (
                                    <button
                                        key={color.id}
                                        onClick={() => setSelectedColor(color.id)}
                                        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${selectedColor === color.id ? 'border-black' : 'border-transparent'
                                            }`}
                                        style={{ backgroundColor: color.hex }}
                                    >
                                        {selectedColor === color.id && (
                                            <div className="w-3 h-3 bg-white rounded-full" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* SIZE SELECTION */}
                        <div className=' mt-8 ' >
                            <div className="flex justify-between items-center mb-2">
                                <p className="font-semibold text-[#232321] text-[16px]">SIZE</p>
                                <a href="#" className="font-semibold text-[#232321] text-[16px]  underline">
                                    SIZE CHART
                                </a>
                            </div>
                            <div className=" flex flex-wrap gap-x-2 space-y-4 ">
                                {sizes.map((size) => {
                                    const isSelected = selectedSize === size
                                    const isDisabled = size <= 40
                                    return (
                                        <button
                                            key={size}
                                            onClick={() => !isDisabled && setSelectedSize(size)}
                                            disabled={isDisabled}
                                            className={`text-sm w-12.5 h-12 font-medium py-2 rounded-md border ${isSelected ? 'bg-black text-white border-black' : 'bg-white text-gray-800 border-gray-300'} ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
                                        >
                                            {size}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                        {/* add to cart button  */}
                        <div className=' flex justify-between items-center mt-8 gap-x-2 ' >
                            <button className=' uppercase bg-[#232321] py-4 px-4 rounded-2xl  w-[90%]  text-white font-medium cursor-pointer ' >Add to cart</button>
                            <button className=' uppercase bg-[#232321] py-5 px-4 rounded-2xl  w-[10%] flex justify-center items-center   text-white font-medium cursor-pointer ' ><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.0291 2.5C9.00032 2.5 8.00032 4.5 8.00032 4.5C8.00032 4.5 7.00032 2.5 4.97157 2.5C3.32282 2.5 2.01719 3.87937 2.00032 5.52531C1.96594 8.94187 4.71063 11.3716 7.71907 13.4134C7.80201 13.4699 7.9 13.5 8.00032 13.5C8.10063 13.5 8.19863 13.4699 8.28157 13.4134C11.2897 11.3716 14.0344 8.94187 14.0003 5.52531C13.9834 3.87937 12.6778 2.5 11.0291 2.5V2.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            </button>
                        </div>
                        <button className=' uppercase bg-[#4A69E2] py-4 px-4 rounded-2xl  w-full mt-2 text-white font-medium cursor-pointer ' >Buy it now</button>

                        <div>
                            <h1 className=' font-semibold text-[#232321] text-[16px] ' >About the product</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails