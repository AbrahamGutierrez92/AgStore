"use client";

import Image from "next/image";
import company1 from "@/public/company-1.webp";
import company2 from "@/public/company-2.webp";
import company3 from "@/public/company-3.webp";
import company4 from "@/public/company-4.webp";
import company5 from "@/public/company-5.webp";
import company6 from "@/public/company-6.webp";
import company7 from "@/public/company-7.webp";
import company8 from "@/public/company-8.webp";
import bannerCircle from "@/public/banner-2-circle.png";
import bannerStar from "@/public/banner-star.svg";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

const Companys = [
  company1,
  company2,
  company3,
  company4,
  company5,
  company6,
  company7,
  company8,
];

const Companies = () => {
  return (
    <>
      <div className="px-[8%] py-20 pt-30 ">
        <div className="companies-banner py-20">
          <div className="company-shape hidden lg:block ">
            {/*
            <Image
            src={bannerCircle}
            alt="bannerCircle"
            width={200}
            height={200}
            />


            <Image
            src={bannerStar}
            alt="bannerStar"
            width={70}
            height={70}
            />
             */}

             <div className="px-[5%] md:px-[8%]">
              <h1 className="GolosText text-white sm:text-[15px] text-3xl  md:text-5xl  lg:text-7xl font-semibold w-full lg:w-[74%]">We're just keep mgrowind with 10.3k trusted companies</h1>
             </div>

            <div className="w-full md:mt-20 mt-10 overflow-hidden">
            <Splide
              options={{
                type: "loop", 
                perPage: 5,
                perMove: 1,
                gap: "2rem",    
                autoplay: true,
                pauseOnHover: false,
                resetProgress: false,
                arrows: false,
                pagination: false,
                drag: "free",
              }}
              extensions={{ AutoScroll }} 
                
            >   
              {Companys.map((company, index) => (
                <SplideSlide key={index} className="flex items-center justify-center ">
                  <div className="company-card cursor-poiter bg-white px-10 py-8 rounded-2xl">
                    <Image
                      src={company}
                      width={200}
                      height={200}
                      alt={`Company ${index + 1}`}      
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>  
                </SplideSlide>
              ))}  
            </Splide>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
export default Companies;
