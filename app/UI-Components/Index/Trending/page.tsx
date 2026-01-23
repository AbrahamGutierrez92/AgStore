"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import ProductData from "@/app/jsonData/ProductsData.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const Trending = () => {

  const addTowiShlist = (product: any) => {
    const stored = localStorage.getItem("wishlist");
    let wishlist = stored ? JSON.parse(stored) : [];

    const exists = wishlist.find((item: any) => item.id === product.id);

    if(exists){
      toast.info("Product is already in your wishlist!");
      return
    }

    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    toast.success("Product added to your wishlist!");
  };

  const addToCart = (product: any) => {
    const stored = localStorage.getItem("cart");
    let cart = stored ? JSON.parse(stored) : [];

    const exists = cart.find((item: any) => item.id === product.id);

    if(exists){
      toast.info("Already in!");
      return
    }

    cart.push({ ...product, qty: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Added to cart!");
  };

  return (
    <>
      <div className="px-[8%] lg:px-[10%] py-20">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h2 className="text-5xl font-semibold Lufga">
              What's trending now
            </h2>
            <p className="GolosText text-lg mt-1">
              Discover the most trending products in ABStore
            </p>
          </div>

          <div>
            <button className="bg-black text-white cursor-pointer GolosText text-xl px-6 py-3 rounded-md transition-all duration-300">
              View All
            </button>
          </div>
        </div>

        <div className="trending-swiper py-20">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 1800,
            }}
            modules={[Autoplay]}
            breakpoints={{
              1200: { slidesPerView: 4 },
              991: { slidesPerView: 3 },
              575: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
          >
            {ProductData.slice(0, 8).map((item, index) => (
              <SwiperSlide key={index}>
                <div className="product-card cursor-pointer">
                  <div className="product-image rounded-2xl overflow-hidden">
                    <Image
                      className="w-full h-full shadow-lg rounded-lg object-cover "
                      src={item.image}
                      alt={item.name}
                      width={500}
                      height={500}
                    />
                    <span className="absolute top-3 left-3 px-4 py-1 GolosText bg-white rounded-full">
                      Get {item.offerPrice}% Off
                    </span>

                    <div className="absolute top-5 right-5 flex items-center flex-col gap-2">
                      <i onClick={() => addTowiShlist(item)} className="bi bi-balloon-heart product-icon w-10 h-10 flex items-center justify-center text-white bg-black/40 cursor-pointer rounded-full"></i>

                      <i onClick={() => addToCart(item)} className="bi bi-cart3 product-icon w-10 h-10 flex items-center justify-center text-white bg-black/40 cursor-pointer rounded-full"></i>
                    </div>

                    <div className="relative left-0 -bottom-1 lg:absolute lg:bottom-28 lg-left-18">
                      <Link href={`/UI-Components/Shop/${item.id}`}>
                        <button className="btn bg-black text-white cursor-pointer GolosText text-xl px-6 py-3 rounded-2xl w-full lg:w-auto lg:rounded-full border-3 border-white">
                          View Details
                        </button>
                      </Link>
                    </div>

                    <Link
                      className=""
                      href={`/app/UI-Components/Shop/${item.id}`}
                    >
                      <div className="product-content m-5 md:mt-9 z-10 ">
                        <div className="flex justify-between">
                          <h2 className="Lufga font-medium text-[20px] pr-5">
                            {item.name}
                          </h2>
                          <h3 className="GolosText font-semibold text-2xl">
                            {" "}
                            ${item.price}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={1500} />
    </>
  );
};

export default Trending;
