import Image from "next/image";
import Link from "next/link";
import heroshap1 from "@/public/hero-shape1.svg";
import HeroImg from "@/public/Hero.webp";
import Herosmall from "@/public/hero-small-1.webp";
import Herotest1 from "@/public/hero-test1.webp";
import Herotest2 from "@/public/hero-test2.webp";
import Herotest3 from "@/public/hero-test3.webp";

const Hero = () => {
  return (
    <>
      <div className="px-[8%] lg:px-[10%] lg:ps-[16%] py-10">
        <div className="flex flex-col lg:flex-row gap-5 justify-between items-center relative">
          <div className="hero-shape3"></div>
          <div className="hero-shape4"></div>

          <div className="w-full lg:w-1/2">
            <div className="hero-content">
              <h1 className="GolosText text-6xl md:text-8xl lg:text-[6rem] font-semibold">
                Your Ultimate
              </h1>

              <div className="flex items-center gap-2">
                <Image src={heroshap1} alt="Hero Shape 1" />
                <h1 className="GolosText text-6xl md:text-8xl lg:text-[5rem] font-semibold text-(--second)">
                  Online Store
                </h1>
              </div>

              <h1 className="GolosText text-5xl md:text-7xl lg:text-[4.5rem] font-semibold">
                for All Your Needs.
              </h1>
              <p className="mt-3 text-xl md:text-2xl GolosText">
                No code need. Plus free shipping on{" "}
                <span className="text-(--second) font-semibold">$99+ </span>
                Orders
              </p>

              <div className="flex items-center gap-5 mt-5">
                <Link href="/UI-Components/Shop">
                  <button className="btn bg-black text-white cursor-pointer GolosText text-xl px-6 py-3 rounded-md transition-all duration-300">
                    Our Shop
                  </button>
                </Link>

                <Link href="/UI-Components/Shop/12">
                  <button className="btn border border-black hover:bg-black hover:text-white cursor-pointer GolosText text-xl px-6 py-3 rounded-md transition-all duration-300">
                    Wiew Details
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="hero-image">
              <div className="hero-shape1"></div>
              <div className="hero-shape2"></div>

              <div className="border-shap1"></div>
              <div className="border-shap2"></div>

              <div className="star-shape"></div>
              <div className="star-shape3"></div>
              <div className="star-shape2"></div>
              <div className="star-shape3"></div>

              <div className="absolute top-90 right-0 shadow-2xl bg-[#ffffffcb] backdrop-blur-2xl px-3 py-2 rounded-2xl flex items-center gap-2">
                <Image
                  className="rounded-2xl"
                  src={Herosmall}
                  alt="Harosmall"
                />

                <div className="w-full lg:w-[50%] relative">
                  <h2 className="GalosText font-semibold">
                    Cazy Knit Cardigan
                  </h2>

                  <div className="flex items-center justify-between mt-2">
                    <h1 className="GolosText font-semibold text-(--second) nt-2">
                      $29.99
                    </h1>
                    <i className="bi bi-basket -bottom-2 ring-0 bg-(--second) hover:bg-(--prim) hover:text-black cursor-pointer text-white px-3 py-2 rounded-full transition-all duration-300"></i>
                  </div>
                </div>
              </div>

              <div className="hero-text-wrap absolute top-120 -left-10 z-10 shadow-2xl bg-[#ffffff8e] backdrop-blur-2xl px-5 py-5 rounded-2xl flex items-center gap-2">
                <i className="bi bi-balloon-heart text-2xl bg-(--second) hover:bg-(--prim) hover:text-black cursor-pointer text-white px-3 py-2 rounded-full transition-all duration-300"></i>

                <div className="flex ms-2">
                  <Image
                    className="rounded-full border border-white object-contain"
                    src={Herotest1}
                    width={60}
                    height={60}
                    alt="Hero Image"
                  />

                  <Image
                    className="rounded-full border-2 border-white object-contain -translate-x-2"
                    src={Herotest2}
                    width={60}
                    height={60}
                    alt="Hero Image"
                  />

                  <Image
                    className="rounded-full border-2 border-white object-contain -translate-x-2"
                    src={Herotest3}
                    width={60}
                    height={60}
                    alt="Hero Image"
                  />
                </div>
              </div>

              <Image
                className="w-full md:w-[80%] lg:w-[80%]"
                src={HeroImg}
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
