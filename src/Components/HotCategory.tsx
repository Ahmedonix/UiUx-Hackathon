import Image from 'next/image'
import React from 'react'

const HotCategory = () => {
  return (
    <header className="w-11/12 mx-auto px-4 py-12 lg:py-16">
<div className="relative grid grid-cols-1 gap-2 md:grid-cols-[120px_1fr] items-center">
    {/* Vertical text */}
    <div className="writing-mode-vertical hidden text-2xl font-medium tracking-wider text-[#272343] md:flex items-center justify-center -rotate-90 whitespace-nowrap  bg-[#ffffff] w-full">


      EXPLORE NEW AND POPULAR STYLES
    </div>

    {/* Mobile text version */}
    <div className="text-center text-xl font-medium tracking-wider text-[#272343] md:hidden">
      EXPLORE NEW AND POPULAR STYLES
    </div>

    {/* Images section */}
    <div className="flex flex-col md:flex-row items-center gap-2">
      {/* Orange chair (left side) */}
      <div className="w-full md:w-[48%]">
        <Image
          src="/i4.png"
          alt="Orange modern chair"
          className="h-full w-full object-cover"
          width={500}
          height={500}
        />
      </div>

      {/* Other chairs (right side) */}
      <div className="grid grid-cols-2 gap-2 w-full md:w-[60%] lg:w-[48%]">
        <div className="aspect-square">
          <Image
            src="/i7.png"
            alt="White tufted chair"
            className="h-full w-full object-cover"
            width={500}
            height={500}
          />
        </div>
        <div className="aspect-square">
          <Image
            src="/i2.png"
            alt="Gray upholstered chair"
            className="h-full w-full object-cover"
            width={500}
            height={500}
          />
        </div>
        <div className="aspect-square">
          <Image
            src="/i5.png"
            alt="Vintage white chair"
            className="h-full w-full object-cover"
            width={500}
            height={500}
          />
        </div>
        <div className="aspect-square">
          <Image
            src="/i6.png"
            alt="Vintage white chair duplicate"
            className="h-full w-full object-cover"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  </div>
</header>

  )
}

export default HotCategory