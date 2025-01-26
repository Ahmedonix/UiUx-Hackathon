import FeaturedProducts from "@/Components/FeaturedProducts";
import HotCategory from "@/Components/HotCategory";
import Logos from "@/Components/Logos";
import OurProducts from "@/Components/OurProducts";
import TopCategories from "@/Components/TopCategories";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex flex-col justify-center items-start px-8 py-24 w-full bg-gray-100 max-w-full md:px-16 md:py-32">
        <div className="w-full max-w-[1141px] mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Left Section (Text) */}
            <div className="flex flex-col w-full md:w-[56%]">
              <div className="flex flex-col items-start text-slate-800">
                <div className="text-sm tracking-widest uppercase">
                  Welcome to Chairy
                </div>
                <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl md:leading-[66px]">
                  Best Furniture
                  <br />
                  Collection for your
                  <br />
                  interior
                </h1>
                <div className="mt-10">
                  <button className="flex gap-3 items-center px-6 py-3.5 text-base font-semibold text-white bg-[#007580] rounded-lg">
                    <span>Shop Now</span>
                    <Image
                      src="/rightarrow.png"
                      alt="Arrow"
                      className="w-5"
                      width={500}
          height={500}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Section (Image) */}
            <div className="flex w-full md:w-[44%]">
              <Image
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/28f39b3aface848ed62e13816dc0c9cddbd5adeec24afd21a4e3280a04b889e6?placeholderIfAbsent=true&apiKey=ed68ddb7c9d5429f8cc2299e9df1d249"
                alt="Furniture collection showcase"
                className="object-contain w-full "
                width={500}
          height={500}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Companies Logo */}
      <Logos />
      <FeaturedProducts />
      <TopCategories />
      <HotCategory />
      <OurProducts />
    </div>
  );
}
