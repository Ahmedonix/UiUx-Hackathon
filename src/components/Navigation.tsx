import Image from 'next/image'
import React from 'react'

const Navigation = () => {
  return (
<main className="w-full h-auto overflow-hidden">
  {/* Top Bar */}
  <div className="flex flex-col sm:flex-row justify-between items-center bg-[#272343] px-4 sm:px-8 lg:px-[300px] py-2 opacity-70">
    <div className="text-center text-xs sm:text-sm text-white mb-2 sm:mb-0">
      Free Shipping On All Orders Over $50
    </div>
    <ul className="flex justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-white">
      <li>Eng</li>
      <li>FAQs</li>
      <li>Need Help</li>
    </ul>
  </div>

  {/* Logo and Cart Section */}
  <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 lg:px-[300px] py-4 bg-[#F0F2F3] gap-4 sm:gap-0">
    {/* Logo */}
    <div className="font-[Inter] text-black text-xl sm:text-2xl font-medium">
      <Image src="/Logo.png" alt="Logo" width={100} height={100} />
    </div>

    {/* Cart Section */}
    <div className="flex items-center gap-3 w-auto py-2 px-4 rounded-lg bg-[#FFFFFF]">
      <div className="flex items-center gap-1">
        <span className="text-black font-medium">Cart</span>
      </div>
      <div className="bg-[#007580] w-5 h-5 rounded-full flex justify-center items-center text-white text-xs">
        2
      </div>
    </div>
  </div>

  {/* Navigation and Contact Section */}
  <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 lg:px-[300px] py-4 bg-white gap-4 sm:gap-0">
    {/* Navigation Links */}
    <ul className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-[#636270] font-medium text-xs sm:text-base">
      <li className="text-[#007580]">Home</li>
      <li>Shop</li>
      <li>Product</li>
      <li>Pages</li>
      <li>About</li>
    </ul>

    {/* Contact */}
    <div className="text-xs sm:text-sm text-center sm:text-right">
      <span className="font-normal text-[#636270]">Contact: </span>
      <span className="font-medium text-[#272343]">(808) 555-0111</span>
    </div>
  </div>
</main>

  )
}

export default Navigation
