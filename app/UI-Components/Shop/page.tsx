"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import ProductData from "@/app/jsonData/ProductsData.json";
import Link from "next/link";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ProductType = {
  id: number;
  name: string;
  price: number;
  image: string;
  offerPrice?: string;
  category?: string;
};

const Shop = () => {
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [isOpenCategory, setIsOpenCategory] = useState(false);

  const [selectedFilter, setSelectedFilter] = useState("Oldest");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const convertPrice = (price: string): number =>
    Number(price.replace("$", ""));

  const addTowiShlist = (product: ProductType): void => {
    const stored = localStorage.getItem("wishlist");
    let wishlist: ProductType[] = stored ? JSON.parse(stored) : [];

    const exists = wishlist.find((item: ProductType) => item.id === product.id);

    if (exists) {
      toast.info("Product is already in your wishlist!");
      return;
    }

    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    toast.success("Product added to your wishlist!");
  };

  const addToCart = (product: ProductType): void => {
    const stored = localStorage.getItem("cart");
    let cart: (ProductType & { qty: number })[] = stored
      ? JSON.parse(stored)
      : [];

    const exists = cart.find(
      (item: ProductType & { qty: number }) => item.id === product.id,
    );
    if (exists) {
      toast.info("Already in!");
      return;
    }

    cart.push({ ...product, qty: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Added to cart!");
  };

  const sortedData = useMemo(() => {
    let data = [...ProductData];

    if (selectedCategory !== "All") {
      data = data.filter((product) => product.category === selectedCategory);
    }

    switch (selectedFilter) {
      case "Latest":
        return data.sort((a, b) => b.id - a.id);
      case "Oldest":
        return data.sort((a, b) => a.id - b.id);
      case "Low to High":
        return data.sort(
          (a, b) => convertPrice(a.price) - convertPrice(b.price),
        );
      case "High to Low":
        return data.sort(
          (a, b) => convertPrice(b.price) - convertPrice(a.price),
        );

      default:
        return data;
    }
  }, [selectedFilter, selectedCategory]);

  const start = sortedData.length > 0 ? 1 : 0;
  const end = sortedData.length;

  const handleSorteoSelect = (value: any) => {
    setSelectedFilter(value);
    setIsOpenSort(false);
  };

  const handleCategorySelect = (value: any) => {
    setSelectedCategory(value);
    setIsOpenCategory(false);
  };

  return (
    <>
      <div className="page-section flex justify-center items-center text-center">
        <div className="z-10 flex flex-col justify-center items-center text-center">
          <h2 className="text-white text-8xl GolosText font-semibold">
            Our Shop
          </h2>
          <div className="flex mt-5 text-2xl items-center text-white">
            <Link className="hover:text-(--prim)" href="/">
              Home
            </Link>
            <i className="ri-arrow-right-wide-line pt-2 px-2"></i>
            <span>Shop</span>
          </div>
        </div>
      </div>

      <div className="px-[8%] lg:px-[16%] gap-5 py-30 pt-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-5">
          <p className="text-lg GolosText text-black/80">
            {" "}
            Showwing{" "}
            <span className="font-semibold">
              {start} - {end}
            </span>{" "}
            of {""} <span className="font-semibold">{ProductData.length}</span>
          </p>

          <div className="flex items-center gap-5">
            <div className="relative">
              <button
                onClick={() => setIsOpenSort(!isOpenSort)}
                className="px-6 py-3 bg-black text-white GolosText rounded-full flex items-center gap-3 cursor-pointer"
              >
                {selectedFilter}{" "}
                <i className="ri-arrow-down-s-line text-xl"></i>
              </button>

              {isOpenSort && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl overflow-hidden z-50">
                  <div
                    className="px-5 py-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSorteoSelect("Latest")}
                  >
                    Latest
                  </div>

                  <div
                    className="px-5 py-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSorteoSelect("Oldest")}
                  >
                    Oldest
                  </div>

                  <div
                    className="px-5 py-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSorteoSelect("Low to High")}
                  >
                    Low to High
                  </div>

                  <div
                    className="px-5 py-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSorteoSelect("High to Low")}
                  >
                    High to Low
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => setIsOpenCategory(!isOpenCategory)}
                className="px-6 py-3 bg-black text-white GolosText rounded-full flex items-center gap-3 cursor-pointer"
              >
                {selectedCategory}{" "}
                <i className="ri-arrow-down-s-line text-xl"></i>
              </button>

              {isOpenCategory && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl overflow-hidden z-50">
                  <div
                    className="px-5 py-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleCategorySelect("All")}
                  >
                    All
                  </div>

                  <div
                    className="px-5 py-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleCategorySelect("Dresses")}
                  >
                    Dresses
                  </div>

                  <div
                    className="px-5 py-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleCategorySelect("Jackets")}
                  >
                    Jackets
                  </div>

                  <div
                    className="px-5 py-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleCategorySelect("Outerwear")}
                  >
                    Outerwear
                  </div>

                  <div
                    className="px-5 py-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleCategorySelect("Tops")}
                  >
                    Tops
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sortedData.map((product, index) => (
            <div key={index} className="">
              <div className="product-card flex flex-col popular-product cursor-pointer">
                <div className="product-image relative rounded-2xl overflow-hidden">
                  <Image
                    className="w-full h-full shadow-lg rounded-lg object-cover "
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                  />
                  <span className="absolute top-3 left-3 px-4 py-1 GolosText bg-white rounded-full">
                    Get {product.offerPrice}% Off
                  </span>

                  <div className="absolute left-65 bottom-100 flex items-center flex-col gap-2">
                    <i
                      onClick={() => addTowiShlist(product)}
                      className="bi bi-balloon-heart product-icon w-10 h-10 flex items-center justify-center text-white bg-black/40 cursor-pointer rounded-full"
                    ></i>

                    <i
                      onClick={() => addToCart(product)}
                      className="bi bi-cart3 product-icon w-10 h-10 flex items-center justify-center text-white bg-black/40 cursor-pointer rounded-full"
                    ></i>
                  </div>

                  <Link
                    className=""
                    href={`/app/UI-Components/Shop/${product.id}`}
                  >
                    <div className="product-content m-5 md:mt-9 z-10 ">
                      <div className="flex justify-between">
                        <h2 className="Lufga font-medium text-[20px] pr-5">
                          {product.name}
                        </h2>
                        <h3 className="GolosText font-semibold text-2xl">
                          {" "}
                          ${product.price}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="  lg:bottom-28 lg-left-18">
                  <Link href={`/UI-Components/Shop/${product.id}`}>
                    <button className="btn bg-black text-white cursor-pointer GolosText text-xl px-6 py-3 rounded-2xl w-full lg:w-auto lg:rounded-full border-3 border-white">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
