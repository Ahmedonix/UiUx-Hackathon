import React from 'react'
import Image from 'next/image'

const productsData = [
    {
      image: "/i1.png",
      tag: { text: "New", color: "bg-emerald-600" },
      title: "Library Stool Chair",
      price: 20,
      alt: "Library stool chair with new tag"
    },
    {
      image: "/i2.png",
      tag: { text: "Sales", color: "bg-orange-400" },
      title: "Library Stool Chair",
      price: 20,
      originalPrice: 39,
      alt: "Library stool chair on sale"
    },
    {
      image: "/i3.png",
      title: "Library Stool Chair",
      price: 20,
      alt: "Library stool chair"
    },
    {
      image: "/i4.png",
      title: "Library Stool Chair",
      price: 20,
      alt: "Library stool chair"
    },
    {
      image: "/i5.png",
      tag: { text: "New", color: "bg-emerald-600" },
      title: "Library Stool Chair",
      price: 20,
      alt: "Library stool chair with new tag"
    },
    {
      image: "/i6.png",
      tag: { text: "Sales", color: "bg-orange-400" },
      title: "Library Stool Chair",
      price: 20,
      originalPrice: 39,
      alt: "Library stool chair on sale"
    },
    {
      image: "/i7.png",
      title: "Library Stool Chair",
      price: 20,
      alt: "Library stool chair"
    },
    {
      image: "/i1.png",
      title: "Library Stool Chair",
      price: 20,
      alt: "Library stool chair"
    }
  ];

  const OurProducts = () => {
    return (
      <div className="flex overflow-hidden flex-col">
        <div className="self-center text-3xl font-semibold leading-none capitalize text-slate-800">
          Our Products
        </div>
        {/* <ProductGrid products={productsData.slice(0, 4)} />*/}
  
        <div className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-6">
            {productsData.slice(0, 4).map((product, index) => (
              <div className="flex flex-col w-3/12 max-md:w-full" key={index}>
                <div className="flex flex-col relative w-full text-sm font-medium leading-none capitalize whitespace-nowrap rounded-xl aspect-square max-md:mt-6">
                  <div className="flex relative flex-col items-start px-5 pt-5 pb-64 w-full text-white">
                    <Image
                      src={product.image}
                      alt={product.alt || "Default alt text"}
                      className="object-cover absolute inset-0 size-full"
                      width={500}
          height={500}
                    />
                    {product.tag && (
                      <div className={`relative gap-2.5 px-2.5 py-1.5 ${product.tag.color} rounded`}>
                        {product.tag.text}
                      </div>
                    )}
                  </div>
                  {/* Product Info Section */}
                  <div className="flex flex-col w-full px-5 py-4 bg-white text-slate-800 rounded-b-xl mt-auto">
                    <div className="text-base leading-tight">{product.title}</div>
                    <div className="flex gap-1 items-center self-start mt-2.5 leading-none whitespace-nowrap">
                      <div className="text-lg font-semibold">${product.price}</div>
                      {product.originalPrice && (
                        <div className="text-sm text-zinc-400 line-through ml-2">
                          ${product.originalPrice}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        <div className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-6">
            {productsData.slice(4, 8).map((product, index) => (
              <div className="flex flex-col w-3/12 max-md:w-full" key={index}>
                <div className="flex flex-col relative w-full text-sm font-medium leading-none capitalize whitespace-nowrap rounded-xl aspect-square max-md:mt-6">
                  <div className="flex relative flex-col items-start px-5 pt-5 pb-64 w-full text-white">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      className="object-cover absolute inset-0 size-full"
                      width={500}
                      height={500}
                    />
                    {product.tag && (
                      <div className={`relative gap-2.5 px-2.5 py-1.5 ${product.tag.color} rounded`}>
                        {product.tag.text}
                      </div>
                    )}
                  </div>
                  {/* Product Info Section */}
                  <div className="flex flex-col w-full px-5 py-4 bg-white text-slate-800 rounded-b-xl mt-auto">
                    <div className="text-base leading-tight">{product.title}</div>
                    <div className="flex gap-1 items-center self-start mt-2.5 leading-none whitespace-nowrap">
                      <div className="text-lg font-semibold">${product.price}</div>
                      {product.originalPrice && (
                        <div className="text-sm text-zinc-400 line-through ml-2">
                          ${product.originalPrice}
                        </div>
                      )}
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
  
  export default OurProducts;
  
  