import React from 'react'
import HeroProduct from './components/home/HeroProduct'
import Product from './components/product/Product'

const Page: React.FC = () => {
  return (
    <div>
      <HeroProduct />
      <Product />
    </div>
  )
}

export default Page