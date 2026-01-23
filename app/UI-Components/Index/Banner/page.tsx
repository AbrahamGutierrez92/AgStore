"use client";
import Image from "next/image";
import circleText from "@/public/banner-shop-circle.png";
import playIcon from "@/public/banner-play-icon.png";
import startShape from "@/public/banner-star.svg";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import { Pagination } from "swiper/modules";

const Banner = () => {
  const Categories = [
    "Shorts",
    "T-Shirt",
    "Jeans",
    "Jacket",
    "Shirt",
    "Blazer",
    "Pants",
    "Watch",
  ];
  return (
    <>
      <div className="banner relative">
        <div>
          <Image
            src={circleText}
            alt="circleText"
            width={300}
            height={300}
            className="banner-shop-img"
          />

          <Image
            src={playIcon}
            alt="playIcon"
            width={100}
            height={100}
            className="banner-play-img"
          />
        </div>

        <div className="w-full overflow-hidden splide-slide-texts">
          <Splide
            options={{
              type: "loop",
              grag: "free",
              focus: "center",
              arrows: false,
              Pagination: false,
              autoWidth: true,
              gap: "40px",
              speed: 1,
              AutoScroll: {
                speed: 1,
                pauseOnHover: false,
                pauseOnFocus: false,
              },
            }}
            extensions={{ AutoScroll }}
          >
            {Categories.map((item, index) =>(
                <SplideSlide key={index} className="">
                  <h2 className="text-2xl flex items-center gap-3 font-semibold">
                    <Image src={startShape} alt="startShape" width={60} height={60} />
                    {item}
                  </h2>
                </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default Banner;
