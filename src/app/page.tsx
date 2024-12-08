import Navigation from "@/components/Navigation";
import Image from "next/image";

export default function Home() {
  return (
<div className="bg-[#FFFFFF] h-fit">
  {/* Header */}
  <div className="w-full lg:w-3/4 bg-[#F0F2F3] mx-auto rounded-bl-[48px] flex flex-col lg:flex-row justify-between px-4 lg:px-10 items-center py-6 lg:py-0">
    {/* Left Content */}
    <div className="text-[#272343] flex flex-col items-start gap-4 w-full lg:w-[557px] h-auto text-center lg:text-left">
      <div className="font-normal text-sm leading-3 font-[Inter]">Welcome To Chairy</div>
      <div className="font-bold text-3xl lg:text-6xl leading-snug lg:leading-[66px]">
        Best Furniture Collection for your interior.
      </div>
      <button className="w-full sm:w-[171px] h-[52px] rounded-lg bg-[#029fae] py-[14px] px-[24px] text-[#ffffff] font-[Inter]">
        Shop Now
      </button>
    </div>

    {/* Right Content */}
    <div className="w-full lg:w-[434px] h-auto flex justify-center items-center mt-6 lg:mt-0">
      <Image src="/Product image.png" alt="Product" width={300} height={250} className="object-contain" />
    </div>
  </div>

  {/* Logo Bar */}
  <div className="w-full lg:w-3/4 mx-auto flex flex-wrap justify-center md:justify-between lg:justify-between gap-4 lg:gap-8 items-center py-4">
    <span>
      <Image src="/1.png" alt="Logo 1" width={80} height={80} className="object-contain" />
    </span>
    <span>
      <Image src="/2.png" alt="Logo 2" width={80} height={80} className="object-contain" />
    </span>
    <span>
      <Image src="/3.png" alt="Logo 3" width={80} height={80} className="object-contain" />
    </span>
    <span>
      <Image src="/4.png" alt="Logo 4" width={80} height={80} className="object-contain" />
    </span>
    <span>
      <Image src="/5.png" alt="Logo 5" width={80} height={80} className="object-contain" />
    </span>
    <span>
      <Image src="/6.png" alt="Logo 6" width={80} height={80} className="object-contain" />
    </span>
    <span>
      <Image src="/7.png" alt="Logo 7" width={80} height={80} className="object-contain" />
    </span>
  </div>

  {/* Featured Products */}

  <div className="w-11/12 lg:w-9/12 mx-auto text-[32px] text-[#272343] font-[Inter] flex flex-col font-medium mt-4 py-4">
  <h2 className="mb-4 text-center lg:text-left">Featured Products</h2>
  
  {/* Product Grid */}
  <div className="w-full mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {/* Product Card */}
    <div className="w-full rounded-md flex flex-col bg-[#f9f9f9]">
      <div>
        <Image src="/i1.png" alt="Product" width={312} height={312} className="object-contain rounded-t-md" />
      </div>
      <div className="bg-[#ffffff] p-4 flex justify-between items-center gap-4 rounded-b-md">
        <div className="text-[16px] flex flex-col gap-2">
          <span>Library Stool Chair</span>
          <span>$20</span>
        </div>
        <button className="text-sm text-[#007580] font-medium">Cart</button>
      </div>
    </div>

    {/* Repeat Product Card */}
    <div className="w-full rounded-md flex flex-col bg-[#f9f9f9]">
      <div>
        <Image src="/i1.png" alt="Product" width={312} height={312} className="object-contain rounded-t-md" />
      </div>
      <div className="bg-[#ffffff] p-4 flex justify-between items-center gap-4 rounded-b-md">
        <div className="text-[16px] flex flex-col gap-2">
          <span>Library Stool Chair</span>
          <span>$20</span>
        </div>
        <button className="text-sm text-[#007580] font-medium">Cart</button>
      </div>
    </div>

    <div className="w-full rounded-md flex flex-col bg-[#f9f9f9]">
      <div>
        <Image src="/i1.png" alt="Product" width={312} height={312} className="object-contain rounded-t-md" />
      </div>
      <div className="bg-[#ffffff] p-4 flex justify-between items-center gap-4 rounded-b-md">
        <div className="text-[16px] flex flex-col gap-2">
          <span>Library Stool Chair</span>
          <span>$20</span>
        </div>
        <button className="text-sm text-[#007580] font-medium">Cart</button>
      </div>
    </div>

    <div className="w-full rounded-md flex flex-col bg-[#f9f9f9]">
      <div>
        <Image src="/i1.png" alt="Product" width={312} height={312} className="object-contain rounded-t-md" />
      </div>
      <div className="bg-[#ffffff] p-4 flex justify-between items-center gap-4 rounded-b-md">
        <div className="text-[16px] flex flex-col gap-2">
          <span>Library Stool Chair</span>
          <span>$20</span>
        </div>
        <button className="text-sm text-[#007580] font-medium">Cart</button>
      </div>
    </div>
  </div>
</div>

{/* Top Categories */}

<div className="w-11/12 lg:w-9/12 mx-auto text-[32px] text-[#272343] font-[Inter] flex flex-col font-medium mt-4 py-4">
  <h2 className="mb-4 text-center lg:text-left">Top Categories</h2>

  {/* Categories Container */}
  <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {/* Category Card */}
    <div className="relative">
      <Image src="/i1.png" alt="Product" width={413} height={800} className="object-cover w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-md" />
      <div className="text-[16px] h-20 font-medium absolute bg-[#000000B2] w-full text-[#ffffff] bottom-0 flex flex-col p-5 z-10">
        <span className="text-xl">Wooden Chair</span>
        <span className="text-sm text-slate-400">154 products</span>
      </div>
    </div>

    {/* Repeat Category Card */}
    <div className="relative">
      <Image src="/i1.png" alt="Product" width={413} height={800} className="object-cover w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-md" />
      <div className="text-[16px] h-20 font-medium absolute bg-[#000000B2] w-full text-[#ffffff] bottom-0 flex flex-col p-5 z-10">
        <span className="text-xl">Wooden Chair</span>
        <span className="text-sm text-slate-400">154 products</span>
      </div>
    </div>

    <div className="relative">
      <Image src="/i1.png" alt="Product" width={413} height={800} className="object-cover w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-md" />
      <div className="text-[16px] h-20 font-medium absolute bg-[#000000B2] w-full text-[#ffffff] bottom-0 flex flex-col p-5 z-10">
        <span className="text-xl">Wooden Chair</span>
        <span className="text-sm text-slate-400">154 products</span>
      </div>
    </div>
  </div>
</div>


{/* Hot Category */}
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
          src="/i1.png"
          alt="Orange modern chair"
          className="h-full w-full object-cover"
          width={500}
          height={500}
          priority
        />
      </div>

      {/* Other chairs (right side) */}
      <div className="grid grid-cols-2 gap-2 w-full md:w-[60%] lg:w-[48%]">
        <div className="aspect-square">
          <Image
            src="/i1.png"
            alt="White tufted chair"
            className="h-full w-full object-cover"
            width={500}
            height={500}
          />
        </div>
        <div className="aspect-square">
          <Image
            src="/i1.png"
            alt="Gray upholstered chair"
            className="h-full w-full object-cover"
            width={500}
            height={500}
          />
        </div>
        <div className="aspect-square">
          <Image
            src="/i1.png"
            alt="Vintage white chair"
            className="h-full w-full object-cover"
            width={500}
            height={500}
          />
        </div>
        <div className="aspect-square">
          <Image
            src="/i1.png"
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


<div className="flex justify-center items-center text-[32px] text-[#272343] font-[Inter] font-medium mt-10">
  Our Products
</div>


<div className="w-11/12 lg:w-9/12 mx-auto text-[32px] text-[#272343] font-[Inter] flex flex-col font-medium mt-4 py-4">
  
  {/* Product Grid */}
  <div className="w-full mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {/* Product Card */}
    <div className="w-full rounded-md flex flex-col bg-[#f9f9f9]">
      <div>
        <Image src="/i1.png" alt="Product" width={312} height={312} className="object-contain rounded-t-md" />
      </div>
      <div className="bg-[#ffffff] p-4 flex justify-between items-center gap-4 rounded-b-md">
        <div className="text-[16px] flex flex-col gap-2">
          <span>Library Stool Chair</span>
          <span>$20</span>
        </div>
        <button className="text-sm text-[#007580] font-medium">Cart</button>
      </div>
    </div>

    {/* Repeat Product Card */}
    <div className="w-full rounded-md flex flex-col bg-[#f9f9f9]">
      <div>
        <Image src="/i1.png" alt="Product" width={312} height={312} className="object-contain rounded-t-md" />
      </div>
      <div className="bg-[#ffffff] p-4 flex justify-between items-center gap-4 rounded-b-md">
        <div className="text-[16px] flex flex-col gap-2">
          <span>Library Stool Chair</span>
          <span>$20</span>
        </div>
        <button className="text-sm text-[#007580] font-medium">Cart</button>
      </div>
    </div>

    <div className="w-full rounded-md flex flex-col bg-[#f9f9f9]">
      <div>
        <Image src="/i1.png" alt="Product" width={312} height={312} className="object-contain rounded-t-md" />
      </div>
      <div className="bg-[#ffffff] p-4 flex justify-between items-center gap-4 rounded-b-md">
        <div className="text-[16px] flex flex-col gap-2">
          <span>Library Stool Chair</span>
          <span>$20</span>
        </div>
        <button className="text-sm text-[#007580] font-medium">Cart</button>
      </div>
    </div>

    <div className="w-full rounded-md flex flex-col bg-[#f9f9f9]">
      <div>
        <Image src="/i1.png" alt="Product" width={312} height={312} className="object-contain rounded-t-md" />
      </div>
      <div className="bg-[#ffffff] p-4 flex justify-between items-center gap-4 rounded-b-md">
        <div className="text-[16px] flex flex-col gap-2">
          <span>Library Stool Chair</span>
          <span>$20</span>
        </div>
        <button className="text-sm text-[#007580] font-medium">Cart</button>
      </div>
    </div>
  </div>
</div>

<div className="w-11/12 lg:w-9/12 mx-auto text-[32px] text-[#272343] font-[Inter] flex flex-col font-medium mt-4 py-4">
  
  {/* Product Grid */}
  <div className="w-full mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {/* Product Card */}
    <div className="w-full rounded-md flex flex-col bg-[#f9f9f9]">
      <div>
        <Image src="/i1.png" alt="Product" width={312} height={312} className="object-contain rounded-t-md" />
      </div>
      <div className="bg-[#ffffff] p-4 flex justify-between items-center gap-4 rounded-b-md">
        <div className="text-[16px] flex flex-col gap-2">
          <span>Library Stool Chair</span>
          <span>$20</span>
        </div>
        <button className="text-sm text-[#007580] font-medium">Cart</button>
      </div>
    </div>

    {/* Repeat Product Card */}
    <div className="w-full rounded-md flex flex-col bg-[#f9f9f9]">
      <div>
        <Image src="/i1.png" alt="Product" width={312} height={312} className="object-contain rounded-t-md" />
      </div>
      <div className="bg-[#ffffff] p-4 flex justify-between items-center gap-4 rounded-b-md">
        <div className="text-[16px] flex flex-col gap-2">
          <span>Library Stool Chair</span>
          <span>$20</span>
        </div>
        <button className="text-sm text-[#007580] font-medium">Cart</button>
      </div>
    </div>

    <div className="w-full rounded-md flex flex-col bg-[#f9f9f9]">
      <div>
        <Image src="/i1.png" alt="Product" width={312} height={312} className="object-contain rounded-t-md" />
      </div>
      <div className="bg-[#ffffff] p-4 flex justify-between items-center gap-4 rounded-b-md">
        <div className="text-[16px] flex flex-col gap-2">
          <span>Library Stool Chair</span>
          <span>$20</span>
        </div>
        <button className="text-sm text-[#007580] font-medium">Cart</button>
      </div>
    </div>

    <div className="w-full rounded-md flex flex-col bg-[#f9f9f9]">
      <div>
        <Image src="/i1.png" alt="Product" width={312} height={312} className="object-contain rounded-t-md" />
      </div>
      <div className="bg-[#ffffff] p-4 flex justify-between items-center gap-4 rounded-b-md">
        <div className="text-[16px] flex flex-col gap-2">
          <span>Library Stool Chair</span>
          <span>$20</span>
        </div>
        <button className="text-sm text-[#007580] font-medium">Cart</button>
      </div>
    </div>
  </div>
</div>
</div>


  );
}
