import React from "react";
import Image from "next/image";
import logo from "@/images/logo_mint.png";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="bg-white sticky top-0 z-10 shadow-sm shadow-slate-100 py-2">
      <div className="container flex justify-between items-center mx-auto px-8">
        <Link href='/'><Image src={logo}  alt="Site Logo " className="lg:w-[5rem] w-[3rem]" /></Link>
        <div className="w-fit flex justify-evenly gap-10 items-center">
        <div className="w-fit flex justify-evenly gap-10 max-lg:hidden">
          <Link
            href=""
            className="text-gray-600 hover:text-blue-700 no-underline"
          >Food stuffs</Link>
          <Link
            href=""
            className="text-gray-600 hover:text-blue-700 no-underline"
          >Services</Link>
          <Link
            href=""
            className="text-gray-600 hover:text-blue-700 no-underline"
          >Contact us</Link>
          <Link
            href=""
            className="text-gray-600 hover:text-blue-700 no-underline"
          >FAQs</Link>
          </div>
          <div className="flex justify-between items-center gap-2 lg:gap-5">
          <Link href='/cart' className="text-white bg-orange-500 px-4 py-2 lg:px-8 lg:py-4 ">Cart</Link>
          <Link href='' className="text-white bg-gray-500 px-4 py-2 lg:px-8 lg:py-4">Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
