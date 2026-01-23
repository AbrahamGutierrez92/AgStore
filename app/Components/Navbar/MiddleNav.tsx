"use client";
import Link from "next/link";
import Image from "next/image";
import callImg from "@/public/nav-contact.svg";
import { useState } from "react";

const MiddleNav = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full bg-(--prim) border-b border-gray-300 relative">
      <div className="flex items-center justify-between py-3 px-[8%] lg:px-[10%] ">
        <Link
          href="/"
          className="text-4xl lg:text-5xl font-bold Audiowide text-black"
        >
          AB<span className="text-(--second)">Store</span>
        </Link>

        <div className="relative flex flex-col flex-1 ms-6 mx-0 bg-white rounded-lg lg:max-w-2xl">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search for a Product or Brand"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 px-4 py-4 outline-none rounded-l-lg"
            />

            <button className="px-3 text-2xl cursor-pointer">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Image src={callImg} alt="Call Icon" width={50} height={50} />
          <div className="flex flex-col">
            <h2 className="GolosText text-xs ps-2 font-semibold">
              24/7 SUPPORT
            </h2>
            <h1 className="GolosText font-semibold">+505 7878-9696</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleNav;
