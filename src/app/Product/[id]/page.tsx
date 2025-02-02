import ProductCorousel from '@/Components/ProductCorousel'
import React from 'react'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'

interface Details {
    id: string;
    title: string;
    products: number;
    imageUrl: string;
    price: number;
    description: string
  }



const page = async ({params: id}:{params:{id:string}}) => {
  const query =   `
  *[_type == "products" && defined(price) && defined(image)]{
"id":_id,
title,
price,
products,
description,
"imageUrl": image.asset->url
}[0]
  `
  const details = await client.fetch(query, {id})

  if(!details){
    return(
        <div><h1>
            Product Not Found</h1>
            </div>
    )
  }
  
  return (  
<div>
  <div className="flex gap-5 mt-12 max-md:flex-col">
      <div
        key={details.id}
        className="flex flex-col w-[56%] max-md:w-full"
      >
        <Image
          src={details.imageUrl}
          alt={`Image for ${details.title}`}
          className="object-contain w-full rounded-xl aspect-[1.11] max-md:mt-10"
          width={500}
          height={500}
        />
      </div>
       <div
         key={details.id}
         className="flex flex-col w-[44%] ml-5 max-md:w-full max-md:ml-0"
       >
         <div className="flex flex-col detailss-start w-full text-xl font-semibold leading-none text-slate-800 max-md:mt-10">
           <h1 className="text-6xl font-bold capitalize leading-[66px] max-md:text-4xl max-md:leading-[49px]">
             {details.title}
           </h1>
           <div className="px-3.5 py-3 mt-8 text-white bg-cyan-600 rounded-full">
             {details.price}
           </div>
           <div className="flex self-stretch mt-9 w-full h-px bg-zinc-300" />
           <p className="self-stretch mt-9 text-2xl leading-8 opacity-60 max-md:text-base max-md:leading-6">
             {details.description}
           </p>
           <button
             className="flex detailss-center justify-center gap-2.5 px-6 py-4 mt-12 text-white capitalize bg-cyan-600 rounded-lg min-h-[63px] max-md:mt-10 max-md:px-5"
             aria-label="Add to cart"
           >
             <Image
   
               src={"/cart.png"}
               alt="Cart icon"
               className="object-contain w-[29px] aspect-square"
               width={500}
           height={500}
             />
             <span>Add to cart</span>
           </button>
         </div>
       </div>
   </div>
  <ProductCorousel/>
</div>
  )
}

export default page