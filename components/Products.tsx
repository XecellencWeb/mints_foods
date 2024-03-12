

import Image from 'next/image'
import React from 'react'
import flour from '@/images/flour_1.png'
import sugar from '@/images/sugar_1.png'
import milk from '@/images/milk_1.png'
import { useCart } from '@/context/Cart'

export type ProductType = {
    _id:number | string,
    name: string,
    image: any,
    price: number,
}
const Product = ({product}:{
    product:ProductType
}) => {
    const {addToCart}:any = useCart()
    
    return <div className="flex max-md:flex-col flex-row-reverse justify-between items-center shadow-inner px-8 py-4">
        <Image src={product.image} alt='Product pics' className='md:w-1/4'/>
        <div className="w-full">
            <h2 className="text-2xl font-semibold">{product.name} for sale</h2>
            <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem optio soluta labore possimus accusantium quidem? Mollitia ad provident et dolore!</p>
            <button onClick={()=>addToCart(product)} className="px-8 py-4 bg-orange-500 text-white mt-4">Add to cart ${product.price}</button>
        </div>
        
    </div>
}
const Products = () => {
  return (
    <div className='container px-8  mx-auto'>
        <h2 className="text-center text-3xl font-bold">Our Products</h2>
        <p className="text-center text-gray-600 mb-4">Enjoy getting the best from us</p>
      <div className="flex flex-col gap-10">
        {
            [
            {
                _id:1,
                name:"Flour",
                image:flour,
                price: 50,
            },
                {
                _id:2,
                name:"Sugar",
                image:sugar,
                price: 25,
            },
                {
                _id:3,
                name:"Milk",
                image:milk,
                price: 10
            },
        ].map((product,i)=>(
                <Product product={product} key={i}/>
            ))
        }
      </div>
    </div>
  )
}

export default Products
