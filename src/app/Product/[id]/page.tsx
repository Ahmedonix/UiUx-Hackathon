import ProductCorousel from '@/Components/ProductCorousel'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import ProductDetails from '@/Components/ProductDetails';

export interface Details {
  id: string;
  title: string;
  products: number;
  imageUrl: string;
  price: number;
  description: string;
}

function items(details: Details) {
  return {
    id: details.id,
    title: details.title,
    products: details.products,
    imageUrl: details.imageUrl,
    price: details.price,
    description: details.description,
  };
}

const page = async ({ params }: { params: { id: string } }) => {
  const query = ` 
    *[_type == "products" && _id == $id]{
      "id": _id,
      title,
      price,
      products,
      description,
      "imageUrl": image.asset->url
    }[0]
  `;
  
  const details: Details | null = await client.fetch(query, { id: params.id });

  if (!details) {
    return <div>Loading...</div>; // Show loading state if data hasn't been fetched
  }


  return (  
    <div>
    <ProductDetails details={details}/>
    <ProductCorousel/>
    </div>
  )
}

export default page