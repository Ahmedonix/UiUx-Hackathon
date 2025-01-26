import React from 'react'
import Image from 'next/image'

const services = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a78db668b54cbedb234be712209fb7fd29af590e6fc9abe238ef527fa473f9f?placeholderIfAbsent=true&apiKey=ed68ddb7c9d5429f8cc2299e9df1d249",
      title: "High Quality",
      description: "crafted from top materials"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/70016cbb3baa9951200cbc633ad2c08d0850f489ae18d06b70308cf8111f7168?placeholderIfAbsent=true&apiKey=ed68ddb7c9d5429f8cc2299e9df1d249",
      title: "Warranty Protection",
      description: "Over 2 years"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/74ec76ad8558a2aea19bd04c77d120568fed032c5fc5837118d1becdb06a2ed1?placeholderIfAbsent=true&apiKey=ed68ddb7c9d5429f8cc2299e9df1d249",
      title: "24 / 7 Support",
      description: "Dedicated support"
    }
  ];

const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center py-24 bg-zinc-100">
      <div className="flex flex-wrap gap-10 justify-between items-center max-w-full w-[1188px]">
        {services.map((service, index) => (

<div className="flex gap-2.5 items-center self-stretch my-auto min-w-[240px]">
      <Image
        src={service.icon}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[60px]"
        width={500}
          height={500}
      />
      <div className="flex flex-col self-stretch my-auto min-w-[240px]">
        <div className="text-2xl font-semibold text-neutral-800">
          {service.title}
        </div>
        <div className="text-xl font-medium text-zinc-500">
          {service.description}
        </div>
      </div>
    </div>
        ))}


      </div>
    </div>
  )
}

export default Services