import BrandFeature from '@/Components/BrandFeature';
import React from 'react'
import Image from 'next/image'

const aboutContent = {
    title: "About Us - Comforty",
    description: "At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.",
    buttonText: "View collection"
  };

  const imageProps = {
    src: "/i1.png",
    alt: "Comforty furniture collection showcase"
  };


const page = () => {
  return (
    <div>
    <div className="flex gap-5 max-md:flex-col mt-10">
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex overflow-hidden flex-col items-start px-16 py-14 mx-auto w-full bg-cyan-700 max-md:px-5 max-md:mt-7 max-md:max-w-full">
      <div className="flex flex-col max-w-full text-white w-[495px]">
        <h1 className="text-3xl font-bold">{aboutContent.title}</h1>
        <p className="mt-3 text-lg max-md:max-w-full">{aboutContent.description}</p>
      </div>
      <button 
        className="overflow-hidden gap-2.5 px-8 py-4 mt-36 text-base text-white bg-stone-50 bg-opacity-10 max-md:px-5 max-md:mt-10"
        tabIndex={0}
      >
        {aboutContent.buttonText}
      </button>
    </div>




      </div>
      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <Image
      src={imageProps.src}
      alt={imageProps.alt}
      className="object-contain grow w-full aspect-[1.3] max-md:mt-7 max-md:max-w-full"
      width={500}
          height={500}
    />


      </div>
    </div>
    <BrandFeature/>
  </div>
  )
}

export default page