import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='bg-[#ffffff] w-full min-h-screen overflow-x-hidden overflow-y-auto'>
            <div className="w-11/12 lg:w-9/12 mx-auto text-[32px] text-[#272343] font-[Inter] flex flex-col font-medium mt-4 py-4 ">
  <h2 className="mb-4 text-center lg:text-left">Featured Products</h2>
  
  {/* Product Grid */}
  <div className="w-full mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-hidden">
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
    
  )
}

export default page
