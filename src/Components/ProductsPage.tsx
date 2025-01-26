import React from "react";
import Image from 'next/image'

const products = [
  {
    title: "Library Stool Chair",
    price: 20,
    imageUrl:
      "/i2.png",
    badge: {
      text: "New",
      color: "bg-emerald-600",
    },
  },
  {
    title: "Library Stool Chair",
    price: 20,
    originalPrice: 39,
    imageUrl:
      "/i1.png",
    badge: {
      text: "Sales",
      color: "bg-orange-400",
    },
  },
  {
    title: "Library Stool Chair",
    price: 20,
    imageUrl:
      "/i5.png",
  },
  {
    title: "Library Stool Chair",
    price: 20,
    imageUrl:
      "/i4.png",
  },
  {
    title: "Library Stool Chair",
    price: 20,
    imageUrl:
      "/i2.png",
    badge: {
      text: "New",
      color: "bg-emerald-600",
    },
  },
  {
    title: "Library Stool Chair",
    price: 20,
    originalPrice: 39,
    imageUrl:
      "/i1.png",
    badge: {
      text: "Sales",
      color: "bg-orange-400",
    },
  },
  {
    title: "Library Stool Chair",
    price: 20,
    imageUrl:
      "/i5.png",
  },
  {
    title: "Library Stool Chair",
    price: 20,
    imageUrl:
      "/i7.png",
  },
  {
    title: "Library Stool Chair",
    price: 20,
    imageUrl:
      "/i2.png",
    badge: {
      text: "New",
      color: "bg-emerald-600",
    },
  },
  {
    title: "Library Stool Chair",
    price: 20,
    originalPrice: 39,
    imageUrl:
      "/i1.png",
    badge: {
      text: "Sales",
      color: "bg-orange-400",
    },
  },
  {
    title: "Library Stool Chair",
    price: 20,
    imageUrl:
      "/i5.png",
  },
  {
    title: "Library Stool Chair",
    price: 20,
    imageUrl:
      "/i6.png",
  },
];

const ProductsPage = () => {
  return (
    <div className="flex flex-col items-center overflow-hidden">
  {/* Header Section */}
  <div className="flex flex-wrap gap-10 justify-between items-center self-stretch px-72 w-full text-3xl font-semibold leading-none capitalize text-slate-800 max-md:px-5 max-md:flex-col max-md:gap-4">
    <div className="self-stretch my-auto text-center max-md:text-2xl">All Products</div>
    <div className="flex shrink-0 self-stretch my-auto h-11 w-[106px] max-md:hidden" />
  </div>

  {/* Products Section */}
  <div className="mt-10 w-full max-w-[1320px] max-md:max-w-full">
    <div className="flex flex-wrap gap-5 justify-center max-md:flex-col">
      {products.map((product, index) => (
        <div
          key={index}
          className="flex flex-col w-[23%] max-md:w-full max-md:ml-0"
        >
          {/* Product Card */}
          <div className="relative flex flex-col items-start px-5 pt-5 pb-64 w-full text-sm font-medium leading-none text-white capitalize whitespace-nowrap rounded-md aspect-square max-md:pb-24 max-md:mt-6">
            <Image
              src={product.imageUrl}
              alt={product.title}
              className="absolute inset-0 w-full h-full object-cover rounded-md"
              width={500}
          height={500}
            />
            {product.badge && (
              <div
                className={`relative px-2.5 py-1.5 ${product.badge.color} rounded`}
              >
                {product.badge.text}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col mt-4 capitalize">
            <div className="text-base leading-tight text-slate-800">
              {product.title}
            </div>
            <div className="flex gap-1 items-center self-start mt-2.5 leading-none whitespace-nowrap">
              <div className="text-lg font-semibold text-slate-800">
                ${product.price}
              </div>
              {product.originalPrice && (
                <div className="text-sm text-zinc-400 line-through">
                  ${product.originalPrice}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default ProductsPage;
