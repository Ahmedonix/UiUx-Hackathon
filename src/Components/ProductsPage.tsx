import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

const getProducts = async () => {
  const products = await client.fetch(
    `
    *[_type == "products" && defined(price) && defined(image)]{
  "id":_id,
  title,
  description,
  price,
  "imageUrl": image.asset->url
}

    `
  );
  return products;
};

const ProductsPage = async () => {
  const products = await getProducts();

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
          {products && products.length > 0 ? (
            products.map((product: Product, index: number) => (
              <div key={index} className="flex flex-col w-[23%] max-md:w-full max-md:ml-0">
                {/* Product Card */}
                <div className="relative flex flex-col items-start px-5 pt-5 pb-64 w-full text-sm font-medium leading-none text-white capitalize whitespace-nowrap rounded-md aspect-square max-md:pb-24 max-md:mt-6">
                  <Link href={`Product/${products.id}`}>
                  <Image
                    src={product.imageUrl || "/i1.png"}
                    alt={product.title || "Product Image"}
                    className="absolute inset-0 w-full h-full object-cover rounded-md"
                    width={500}
                    height={500}
                  />
                  </Link>
                </div>
                {/* Product Info */}
                <div className="flex flex-col mt-4 capitalize">
                  <div className="text-base leading-tight text-slate-800">{product.title || "Product Not Found"}</div>
                  <div className="flex gap-1 items-center self-start mt-2.5 leading-none whitespace-nowrap">
                    <div className="text-lg font-semibold text-slate-800">${product.price || "Product Not Found"}</div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No products available.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
