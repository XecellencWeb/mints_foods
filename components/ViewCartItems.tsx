
import { ProductType } from "@/components/Products";
import { useCart } from "@/context/Cart";
import Image from "next/image";
import React from "react";
import flour from "@/images/logo_mint.png";

export type CartItemType = ProductType & {
  number:number
} 

const ViewCartItems = () => {
    const { cart, addToCart, removeFromCart,clearCart,totalPrice}: any = useCart();
    console.log(cart);
    const cartArr: any = Object.values(cart).filter(v=>v);
    return (
      <div className="min-h-screen">
        <div className="container px-8 mx-auto flex flex-col lg:flex-row-reverse lg:gap-10">
          <div className="border-2 p-4 border-gray-200 rounded-sm w-full lg:w-[40%] my-12 ">
            <span className=""><strong className="">Total:</strong> ${totalPrice}</span>
            <div className="flex flex-wrap gap-5 w-full py-4 ">
              <button onClick={clearCart} className="bg-gray-500 px-8 py-4 text-white">Clear cart</button>
              <button onClick={()=>{
                  window.alert('This feature is coming soon')
              }} className="bg-orange-500 px-8 py-4 text-white">Proceed to checkout</button>
            </div>
          </div>
          <div className="w-full">
            {cartArr.map((item:CartItemType) => (
              <div
                key={item._id}
                className="flex flex-wrap items-center my-12 border-2 gap-5 border-gray-200 rounded-sm"
              >
                <Image src={flour} alt="product image" className="w-[10rem]" />
                <div className="px-4">
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <p className="">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="mx-4 max-sm:mb-4 flex justify-between items-center p-4 border-2 border-gray-200 gap-2">
                  <button onClick={()=>removeFromCart(item._id)}>-</button>
                  <p className="">{item.number}</p>
                  <button onClick={()=>addToCart(item)}>+</button>
                </div>
                <div className="px-4 flex flex-col gap-2">
                  <span>{`${item.number} x $${item.price}`}</span>
                  <span>${item.number * item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default ViewCartItems
