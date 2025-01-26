import React from "react";
import Image from 'next/image'

const brandFeatures = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d5490f79c605cf8a7e7fa40e368bee8855d8358542fa4b6374e47c5cd966a03c?placeholderIfAbsent=true&apiKey=ed68ddb7c9d5429f8cc2299e9df1d249",
    title: "Next day as standard",
    description: "Order before 3pm and get your order the next day as standard",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/17a4710a5e85ae7fe6a3f14828c66dab323482edce1e638ed9a4bf1d3ec27635?placeholderIfAbsent=true&apiKey=ed68ddb7c9d5429f8cc2299e9df1d249",
    title: "Made by true artisans",
    description:
      "Handmade crafted goods made with real passion and craftmanship",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ddfa751700efe2f5f7a195184a257a3ab653cd9c00f84a5882e29c8378a2cb3e?placeholderIfAbsent=true&apiKey=ed68ddb7c9d5429f8cc2299e9df1d249",
    title: "Unbeatable prices",
    description:
      "For our materials and quality you won't find better prices anywhere",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5ba63efe94d5da56144f48f37eed0b16bce010207479fafd6234ff6abdccf651?placeholderIfAbsent=true&apiKey=ed68ddb7c9d5429f8cc2299e9df1d249",
    title: "Recycled packaging",
    description:
      "We use 100% recycled to ensure our footprint is more manageable",
  },
];

const BrandFeature = () => {
  return (
    <div className="flex flex-col mt-14">
      <div className="self-center ml-10 text-3xl font-semibold leading-none capitalize text-slate-800 max-md:max-w-full">
        What makes our Brand Different
      </div>
      <div className="mt-12 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {brandFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
            >
              <div className="flex flex-col grow justify-center p-12 w-full text-cyan-700 bg-stone-50 max-md:px-5 max-md:mt-7">
                <div className="flex flex-col w-full">
                  <Image
                    src={feature.icon}
                    alt=""
                    className="object-contain w-6 bg-blend-multiply aspect-square fill-white"
                    width={500}
          height={500}
                  />
                  <div className="mt-3 text-xl leading-snug">
                    {feature.title}
                  </div>
                  <div className="mt-3 text-base leading-6">
                    {feature.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandFeature;
