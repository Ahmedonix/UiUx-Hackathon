import React from 'react'
import Image from 'next/image'

const products = [
    {
      id: 1,
      title: "Library Stool Chair",
      price: 20,
      imageUrl: "/i1.png",
      badgeText: "New",
      badgeColor: "bg-emerald-600",
      textColor: "text-cyan-700"
    },
    {
      id: 2,
      title: "Library Stool Chair",
      price: 20,
      originalPrice: 39,
      imageUrl: "/i5.png",
      badgeText: "Sales",
      badgeColor: "bg-orange-400"
    },
    {
      id: 3,
      title: "Library Stool Chair",
      price: 20,
      imageUrl: "/i6.png",
    },
    {
      id: 4,
      title: "Library Stool Chair",
      price: 20,
      imageUrl: "/i7.png",
    }
  ];


  const FeaturedProducts = () => {
    return (
      <div className="flex flex-col items-center px-5">
        {/* Featured Products Title */}
        <div className="flex items-center w-full justify-start max-md:px-5 mb-10">
          <div className="text-3xl font-semibold leading-none capitalize text-slate-800 max-md:text-2xl">
            Featured Products
          </div>
          <div className="flex shrink-0 self-stretch my-auto h-11 w-[106px]" />
        </div>
  
        {/* Product Cards and Info */}
        <div className="mt-10 w-full max-w-[1320px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col justify-between">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col w-3/12 max-md:w-full max-md:mb-6"
              >
                <div className="flex relative flex-col items-start px-5 pt-5 pb-24 w-full text-sm font-medium leading-none text-white capitalize whitespace-nowrap rounded-xl aspect-square max-md:pb-24 max-md:mt-6">
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    className="object-cover absolute inset-0 size-full rounded-xl"
                    width={500}
          height={500}
                  />
                  {product.badgeText && (
                    <div className={`relative gap-2.5 px-2.5 py-1.5 ${product.badgeColor} rounded`}>
                      {product.badgeText}
                    </div>
                  )}
                </div>
  
                {/* Product Info aligned to respective Product Card */}
                <div className="flex flex-col items-start mt-4 max-md:text-center">
                  <div className="text-base leading-tight">{product.title}</div>
                  <div className="flex gap-1 items-center self-start mt-2.5 leading-none whitespace-nowrap">
                    <div className="self-stretch my-auto text-lg font-semibold">${product.price}</div>
                    {product.originalPrice && (
                      <div className="self-stretch my-auto text-sm text-zinc-400">${product.originalPrice}</div>
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
  
  export default FeaturedProducts;
  