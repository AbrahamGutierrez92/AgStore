"use client";

import Image from "next/image";
import ProductData from "@/app/jsonData/ProductsData.json";
import Link from "next/link";

import Fallow from "../../Index/Follow/page";
import returnPolicy from "@/public/boat.png";
import packBox from "@/public/pack-box.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "next/navigation";

type ProductType = {
  id: number;
  name: string;
  price: number;
  image: string;
  offerPrice?: string;
  category?: string;
};

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = ProductData.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="text-center py-40 text-3xl font-semibold">
        Product Not Found
      </div>
    );
  }

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

  return <>Detalle Product {product?.name}</>;
};

export default ProductDetailPage;
