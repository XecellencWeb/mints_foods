import React from "react";
import Image from "next/image";
import welcome from '@/images/welcome.png'
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-gray-200">
      <div className="container max-lg:block flex justify-between items-center mx-auto min-h-[35rem] relative overflow-clip isolate p-8">
      <Image src={welcome} width={700} alt="flour Image" className="absolute top-0 right-0 -z-10 max-lg:static  max-lg:bg-white max-lg:w-[75%] max-lg:top-28 max-lg:-right-28"/>
        <div className="max-w-2xl">
          <h2 className="text-7xl max-lg:hidden font-bold">Welcome to<br/>Mint Foods UK</h2>
          <h2 className="text-4xl lg:hidden font-bold mt-6">Welcome to Mint Foods UK</h2>
          <p className="mt-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
            consequuntur fugit architecto aliquid quae ab voluptatem alias
            maiores, provident, sed, necessitatibus voluptatum voluptate dolor
            nobis dolorum explicabo! Consequatur, quidem quia?
          </p>
          <div className="flex gap-5 mt-8">
            <Link href='' className="bg-orange-500 text-white px-4 py-2 lg:px-8 lg:py-4">Shop now</Link>
            <Link href='' className="bg-gray-500 text-white px-4 py-2 lg:px-8 lg:py-4">Contact us</Link>
          </div>
        </div>
           
      </div>
    </div>
  );
};

export default Hero;
