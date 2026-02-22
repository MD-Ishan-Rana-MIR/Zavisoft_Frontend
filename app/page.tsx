import React from 'react'
import HeroProduct from './components/home/HeroProduct'
import Product from './components/product/Product'
import Category from './components/category/Category'
const categories = [
  {
    id: 1,
    name: 'Lifestyle Shoes',
    slug: 'lifestyle-shoes',
    image: '/product/shoe-1.png',
  },
  {
    id: 2,
    name: 'Basketball Shoes',
    slug: 'basketball-shoes',
    image: '/product/shoe-2.png',
  },
  {
    id: 3,
    name: 'Running Shoes',
    slug: 'running-shoes',
    image: '/product/shoe-3.png',
  },
  {
    id: 4,
    name: 'Casual Shoes',
    slug: 'casual-shoes',
    image: '/product/shoe-4.png',
  },
  // add more categories...
]

const Page: React.FC = () => {
  return (
    <div>
      <HeroProduct />
      <Product />
      <Category categories={categories} itemsPerPage={2} />
    </div>
  )
}

export default Page