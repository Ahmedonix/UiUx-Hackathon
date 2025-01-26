import React from "react";
import Image from 'next/image'

const instagramImages = [
  { src: "/i1.png", alt: "Instagram product showcase 1" },
  { src: "/i2.png", alt: "Instagram product showcase 2" },
  { src: "/i3.png", alt: "Instagram product showcase 3" },
  { src: "/i4.png", alt: "Instagram product showcase 4" },
  { src: "/i5.png", alt: "Instagram product showcase 5" },
  { src: "/i6.png", alt: "Instagram product showcase 6" },
];

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center px-10 py-16 bg-gray-800 bg-opacity-10 max-md:px-5">
  <div className="flex flex-col w-full max-w-[760px] text-center">
    <div className="text-5xl font-medium capitalize text-black max-md:text-4xl">
      Or subscribe to the newsletter
    </div>
    {/* Form */}
    <form className="flex flex-wrap gap-7 mt-10 items-center max-md:flex-col max-md:gap-5">
      <div className="flex flex-col grow shrink-0 w-full max-w-[480px] font-semibold text-gray-800 text-opacity-50">
        <label htmlFor="emailInput" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="emailInput"
          placeholder="Email address..."
          className="w-full px-4 py-3 text-base bg-transparent border-b border-black outline-none"
          required
        />
      </div>
      <button
        type="submit"
        className="px-8 py-3 text-white bg-black rounded-lg text-base font-medium max-md:w-full"
      >
        SUBMIT
      </button>
    </form>
  </div>

  <div className="flex flex-col mt-16 w-full max-w-[1324px]">
    <div className="text-5xl font-medium text-center capitalize text-black max-md:text-4xl">
      Follow products and discounts on Instagram
    </div>
    <div className="flex flex-wrap gap-6 justify-center items-center mt-10">
      {instagramImages.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          className="rounded-md w-[200px] aspect-square max-md:w-[120px]"
          width={500}
          height={500}
        />
      ))}
    </div>
  </div>
</div>
  )
};

export default NewsLetter;
