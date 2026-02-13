"use client";
import Image from "next/image";
import Link from "next/link";

import BlogsData from "@/app/jsonData/BlogsData.json";

const Footer = () => {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-20 pb-0">
        <div className="flex flex-col lg:flex-row justify-between gap-5 pb-5">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col lg:flex-row justify-between gap-5">
              <div className="w-full lg:w-1/2">
                <Link
                  href="/"
                  className={`text-4xl lg:text-5xl font-bold Audiowide `}
                >
                  AB<span className="text-(--second)">Store</span>
                </Link>
                <p className="mt-5 GolosText">
                  Address: 451 Wall Street,UK, London{" "}
                </p>
                <p className="mt-5 GolosText">Email: info@aggstore.com </p>
                <p className="mt-5 GolosText">Phone: +1 (555) 123-4567 </p>
                <h4 className="mt-10 GolosText font-semibold">
                  Subcribe to our newsletter
                </h4>

                <div className="mt-2 bg-yellow-100 px-4 py-2 rounded-md border">
                  <input
                    className="focus:outline-none w-full text-black GolosText"
                    type="text"
                    placeholder="Your Email Address.."
                  />
                </div>
              </div>

              <div className="w-full flex flex-col justify-between lg:w-1/2">
                {BlogsData.slice(0, 3).map((blog, index) => (
                  <div
                    key={index}
                    className="idx-blog-item hidden lg:flex background-white mb-4"
                  >
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={500}
                      height={500}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="ml-4">
                      <h4 className="GolosText ">{blog.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{blog.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div>
                <h2 className="GolosText mb-5 font-semibold text-2xl">Our Store</h2>

                <div className="flex flex-col gap-3">
                 <Link href="#" className="GolosText font-semibold hover:text-(--second) hover:ps-2 transition-all duration-300">New York</Link>

                 <Link href="#" className="GolosText font-semibold hover:text-(--second) hover:ps-2 transition-all duration-300">London SF</Link>

                 <Link href="#" className="GolosText font-semibold hover:text-(--second) hover:ps-2 transition-all duration-300">Edinburgh</Link>

                 <Link href="#" className="GolosText font-semibold hover:text-(--second) hover:ps-2 transition-all duration-300">Los Angeles</Link>

                 <Link href="#" className="GolosText font-semibold hover:text-(--second) hover:ps-2 transition-all duration-300">Chicago</Link>
                 
                </div>
              </div>

              <div>
                <h2 className="GolosText mb-5 font-semibold text-2xl">Useful Links</h2>

                <div className="flex flex-col gap-3">
                 <Link href="#" className="GolosText font-semibold hover:text-(--second) hover:ps-2 transition-all duration-300">Privacy Policy</Link>

                 <Link href="#" className="GolosText font-semibold hover:text-(--second) hover:ps-2 transition-all duration-300">Returns</Link>

                 <Link href="#" className="GolosText font-semibold hover:text-(--second) hover:ps-2 transition-all duration-300">Terms & Conditions</Link>

                 <Link href="#" className="GolosText font-semibold hover:text-(--second) hover:ps-2 transition-all duration-300">Contact Us</Link>

                 <Link href="#" className="GolosText font-semibold hover:text-(--second) hover:ps-2 transition-all duration-300">Latest News</Link>
                 
                </div>
              </div>

              <div>
                <h2 className="GolosText mb-5 font-semibold text-2xl">Quick Links</h2>

                <div className="flex flex-col gap-3">
                 <Link href="#" className="GolosText font-semibold hover:text-(--second) hover:ps-2 transition-all duration-300">Portafolio</Link>

                 <Link href="#" className="GolosText font-semibold hover:text-(--second) hover:ps-2 transition-all duration-300">About Me</Link>

                 <Link href="#" className="GolosText font-semibold hover:text-(--second) hover:ps-2 transition-all duration-300">Princing</Link>

                 <Link href="#" className="GolosText font-semibold hover:text-(--second) hover:ps-2 transition-all duration-300">Vouchers</Link>

                 <Link href="#" className="GolosText font-semibold hover:text-(--second) hover:ps-2 transition-all duration-300">Faq, S</Link>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-400 py-5 text-center">
          <p className="GolosText text-xl">
            &copy; 2024 ABStore. All rights reserved. Developer by <Link className="text-(--second) hover:text-orange-400" href="https://portafolioaigg.netlify.app/" target="_blank">Abraham Gutierrez</Link> Team.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
