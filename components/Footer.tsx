import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-500 mt-20">
      <div className="container mx-auto px-8 justify-between pt-12 gap-5  flex flex-col md:flex-row-reverse">
        <form action="" className="lg:text-right">
          <textarea
            className="resize-none max-w-full block w-[15rem] h-[7rem] rounded-sm bg-gray-50 p-4"
            placeholder="Send us a message..."
            name=""
            id=""
          />
          <button className="border-2 border-gray-50 mt-4 text-gray-50 px-2 py-4 lg:px-8 lg:py-4">
            Send
          </button>
        </form>
        <div className="grid grid-cols-2 gap-10 mb-8 lg:grid-cols-4 w-full justify-between">
        <div className="flex flex-col">
          <h2 className="text-white font-bold">Lorem, ipsum.</h2>
          <a href="" className="text-white">
            Lorem.
          </a>
          <a href="" className="text-white">
            Veniam.
          </a>
          <a href="" className="text-white">
            Id?
          </a>
          <a href="" className="text-white">
            Deserunt.
          </a>
          <a href="" className="text-white">
            Ipsa?
          </a>
        </div>
        <div className="flex flex-col">
          <h2 className="text-white font-bold">Lorem, ipsum.</h2>
          <a href="" className="text-white">
            Lorem.
          </a>
          <a href="" className="text-white">
            Ducimus?
          </a>
          <a href="" className="text-white">
            Qui?
          </a>
          <a href="" className="text-white">
            Atque.
          </a>
          <a href="" className="text-white">
            Adipisci.
          </a>
        </div>
        <div className="flex flex-col">
          <h2 className="text-white font-bold">Lorem, ipsum.</h2>
          <a href="" className="text-white">
            Lorem.
          </a>
          <a href="" className="text-white">
            Veniam.
          </a>
          <a href="" className="text-white">
            Id?
          </a>
          <a href="" className="text-white">
            Deserunt.
          </a>
          <a href="" className="text-white">
            Ipsa?
          </a>
        </div>
        <div className="flex flex-col">
          <h2 className="text-white font-bold">Lorem, ipsum.</h2>
          <a href="" className="text-white">
            Lorem.
          </a>
          <a href="" className="text-white">
            Ducimus?
          </a>
          <a href="" className="text-white">
            Qui?
          </a>
          <a href="" className="text-white">
            Atque.
          </a>
          <a href="" className="text-white">
            Adipisci.
          </a>
        </div>
        </div>
      </div>
      <div className="container mx-auto px-8 py-2 text-white">
        Copywrite 2024 Xellence Tech
      </div>
    </div>
  );
};

export default Footer;
