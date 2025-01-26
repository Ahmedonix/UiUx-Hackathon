import React from 'react'
import Image from 'next/image'


const Logos = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10 px-8 py-16 max-w-full">
  <Image
    src="/logo1.png"
    alt="logo1"
    className="object-contain w-[120px] max-md:w-[80px] self-stretch"
    width={500}
          height={500}
  />
  <Image
    src="/logo2.png"
    alt="logo2"
    className="object-contain w-[120px] max-md:w-[80px] self-stretch"
    width={500}
          height={500}
  />
  <Image
    src="/logo3.png"
    alt="logo3"
    className="object-contain w-[120px] max-md:w-[80px] self-stretch"
    width={500}
          height={500}
  />
  <Image
    src="/logo4.png"
    alt="logo4"
    className="object-contain w-[120px] max-md:w-[80px] self-stretch"
    width={500}
          height={500}
  />
  <Image
    src="/logo5.png"
    alt="logo5"
    className="object-contain w-[120px] max-md:w-[80px] self-stretch"
    width={500}
          height={500}
  />
  <Image
    src="/logo6.png"
    alt="logo6"
    className="object-contain w-[120px] max-md:w-[80px] self-stretch"
    width={500}
          height={500}
  />
  <Image
    src="/logo7.png"
    alt="logo7"
    className="object-contain w-[120px] max-md:w-[80px] self-stretch"
    width={500}
          height={500}
  />
</div>
  )
}

export default Logos