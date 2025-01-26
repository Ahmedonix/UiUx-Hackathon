import React from 'react'
import Image from 'next/image'

const products = [
    { imageSrc: "/i5.png", title: "Library Stool Chair", price: 99 },
    { imageSrc: "/i6.png", title: "Library Stool Chair", price: 99 },
    { imageSrc: "/i3.png", title: "Library Stool Chair", price: 99 },
    { imageSrc: "/i4.png", title: "Library Stool Chair", price: 99 },
    { imageSrc: "/i2.png", title: "Library Stool Chair", price: 99 }
  ];

const ProductCorousel = () => {
  return (
    <div className="flex flex-col mt-16">
  {/* Header Section */}
  <div className="flex flex-wrap justify-between gap-5 w-full font-bold text-black max-w-[1424px] max-md:max-w-full">
    <div className="text-3xl uppercase tracking-[5.6px] max-md:text-2xl">
      Featured Products
    </div>
    <div className="flex flex-col self-start text-lg">
      <button className="max-md:mr-1">View all</button>
      <div className="shrink-0 mt-2 h-0.5 border-2 border-black border-solid" />
    </div>
  </div>

  {/* Carousel Section */}
  <div className="mt-16 w-full max-md:mt-10 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col max-md:gap-6">
      {/* Product Cards */}
      {products.map((product, index) => (
        <div
          key={index}
          className="flex flex-col w-[30%] max-md:w-full gap-4 max-md:gap-6"
        >
          {/* Image */}
          <div className="relative pb-2 w-full rounded-md aspect-square">
            <Image
              src={product.imageSrc}
              alt={product.title}
              className="object-cover absolute inset-0 size-full rounded-xl"
              width={500}
          height={500}
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between items-start gap-3 max-md:gap-4">
            <div className="text-base leading-tight capitalize text-slate-800">
              {product.title}
            </div>
            <div className="text-sm font-bold text-black">${product.price}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  )
}

export default ProductCorousel