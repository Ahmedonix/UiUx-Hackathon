"use client"

import React from 'react'
import Image from 'next/image'
import { useCart } from '@/context/CartContext';


  const Cart = () => {
    const { cart } = useCart();
    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    const shipping = "Free";
    const total = subtotal;

    if(cart.length === 0){
      <div>
        <h1>Your Cart Is Empty</h1>
      </div>
    }
    console.log(cart)
  
    return (
<div>
  <div className="flex gap-5 max-md:flex-col max-md:items-center">
    {/* Left Section for Cart Items */}
    <div className="flex flex-col w-[74%] max-md:w-full max-md:items-center">
      <div className="flex flex-col grow mt-0 max-md:mt-9">
        <div className="self-start text-2xl font-medium text-neutral-900 mb-4 max-md:text-center">
          Bag
        </div>
        {cart.map((item, index) => (
          <div key={index} className="flex flex-col w-full max-md:w-full mb-6">
            <div className="flex items-start py-6 bg-white bg-opacity-0 max-md:flex-col max-md:items-center">
              <div className="flex flex-wrap gap-8 items-start w-full max-md:flex-col max-md:items-center">
                <Image
                  src={item.imageSrc}
                  alt={`${item.title} product image`}
                  className="object-contain shrink-0 aspect-square w-[150px] max-md:w-[120px]"
                  width={500}
          height={500}
                />
                <div className="flex flex-col items-start w-[70%] max-md:w-full max-md:text-center">
                  <div className="flex flex-wrap gap-10 items-start max-md:max-w-full">
                    <div className="flex flex-col text-neutral-500">
                      <div className="text-base leading-tight capitalize text-slate-800">
                        {item.title}
                      </div>
                      <div className="overflow-hidden pr-16 text-base leading-7 max-md:pr-5">
                        
                      </div>
                      <div className="flex items-start pr-5 whitespace-nowrap max-md:justify-center">
                        <div className="flex items-start gap-2 max-md:flex-col max-md:items-center">
                          <div className="text-base leading-7">Size</div>
                          <div className="overflow-hidden px-2.5 py-1.5 text-sm bg-white w-[67px] max-md:pr-5">
                            L
                          </div>
                        </div>
                        <div className="flex items-start gap-2 max-md:flex-col max-md:items-center">
                          <div className="text-base leading-7">Quantity</div>
                          <div className="overflow-hidden px-2.5 py-1.5 text-sm bg-white w-[58px] max-md:pr-5">
                            {item.quantity}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pr-1 pl-0.5 text-base leading-7 text-right text-neutral-900 max-md:text-center">
                      MRP: ${item.price}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 items-start pt-1 pb-1.5 mt-6 pr-5 max-md:pr-0">
                    <button aria-label="Remove item" tabIndex={0}>
                      <Image
    
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fb9642d8a4a93901b062e32ad6516797d3b8bd88f6aa250a872613e98442575?placeholderIfAbsent=true&apiKey=ed68ddb7c9d5429f8cc2299e9df1d249"
                        alt=""
                        className="object-contain shrink-0 w-6 aspect-square"
                        width={500}
          height={500}
                      />
                    </button>
                    <button aria-label="Save for later" tabIndex={0}>
                      <Image
    
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/95b8b62f81136db401f674c880929b9e20136f2223b080fd39a086bc1be91a76?placeholderIfAbsent=true&apiKey=ed68ddb7c9d5429f8cc2299e9df1d249"
                        alt=""
                        className="object-contain shrink-0 w-6 aspect-square"
                        width={500}
          height={500}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Right Section for Summary */}
    <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full text-neutral-900 max-md:mt-10">
        <div className="self-start text-xl font-medium leading-loose mb-4 max-md:text-center">
          Summary
        </div>
        <div className="flex gap-5 justify-between mt-6 w-full whitespace-nowrap max-md:mr-2.5 max-md:flex-col max-md:items-center">
          <div className="flex gap-2 text-base leading-7 max-md:justify-center">
            <div>Subtotal</div>
            <div className="flex shrink-0 w-3 h-7 bg-white" />
          </div>
          <div className="text-sm font-medium leading-6 text-right max-md:text-center">
            ${subtotal.toFixed(2)}
          </div>
        </div>
        <div className="flex gap-10 items-start mt-2 text-base leading-7 max-md:mr-1.5 max-md:flex-col max-md:items-center">
          <div>Estimated Delivery & Handling</div>
          <div className="text-right max-md:text-center">{shipping}</div>
        </div>
        <div className="flex gap-10 items-center py-4 pr-1 mt-5 text-sm text-right whitespace-nowrap border-t border-b border-neutral-200 max-md:flex-col max-md:items-center">
          <div className="self-stretch my-auto leading-7">Total</div>
          <div className="self-stretch my-auto font-medium leading-6">
            ${total.toFixed(2)}
          </div>
        </div>
        <button
          className="px-24 py-5 mt-8 text-base font-medium leading-relaxed text-center text-white bg-cyan-600 rounded-[30px] max-md:px-5 max-md:mr-1.5"
          tabIndex={0}
        >
          Member Checkout
        </button>
      </div>
    </div>
  </div>
</div>

    );
  };
  
  export default Cart;
  