import React from "react";
import Image from 'next/image'

const supportLinks = [
  "Help & Support",
  "Tearms & Conditions",
  "Privacy Policy",
  "Help",
];

const Footer = () => {
  return (
    <div className="flex overflow-hidden flex-col">
      {/* Top Section */}
      <div className="flex flex-col justify-center items-center p-16 w-full bg-white shadow-sm max-md:px-5">
        <div className="flex gap-5 justify-between items-start w-full max-w-[1320px] max-md:flex-col max-md:gap-8">
          {/* Brand Info */}
          <div className="flex flex-col items-start">
            <div className="flex gap-2 items-center text-2xl font-semibold leading-tight whitespace-nowrap text-slate-800">
              <Image
                src="/comfortylogo.png"
                alt="Comforty logo"
                className="object-contain shrink-0 w-10 aspect-square"
                width={500}
                height={500}
              />
              <div>Comforty</div>
            </div>
            <div className="mt-6 text-base leading-6 opacity-60 text-slate-800 max-md:text-sm">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis
              interdum. <br />
              Cras egestas purus.
            </div>
            <div className="flex gap-2 mt-6">
              {/* Social Icons */}
              {["/fb.png", "/twitter.png", "/insta.png", "/pinterest.png", "/yt.png"].map(
                (icon, index) => (
                  <Image
                    key={index}
                    src={icon}
                    alt="Social Icon"
                    className="object-contain aspect-square w-8 max-md:w-6"
                    width={500}
          height={500}
                  />
                )
              )}
            </div>
          </div>
  
          {/* Category Links */}
          <div className="flex flex-col leading-none">
            <div className="text-sm font-medium tracking-wider uppercase text-zinc-400">
              Category
            </div>
            <div className="flex flex-col mt-5 text-base text-slate-800 max-md:text-sm">
              {["Sofa", "Armchair", "Wing Chair", "Desk Chair", "Wooden Chair", "Park Bench"].map(
                (category, index) => (
                  <div key={index} className="mt-3 hover:text-cyan-700">
                    {category}
                  </div>
                )
              )}
            </div>
          </div>
  
          {/* Support Links */}
          <div className="flex flex-col leading-none">
            <div className="text-sm font-medium tracking-wider uppercase text-zinc-400">
              Support
            </div>
            <div className="flex flex-col mt-5 text-base text-slate-800 max-md:text-sm">
              {supportLinks.map((link, index) => (
                <div key={index} className="mt-3 first:mt-0">
                  {link}
                </div>
              ))}
            </div>
          </div>
  
          {/* Newsletter */}
          <div className="flex flex-col max-md:w-full">
            <div className="text-sm font-medium tracking-wider uppercase text-zinc-400">
              Newsletter
            </div>
            <form className="flex gap-3 mt-5 w-full max-md:flex-col">
              <label htmlFor="emailInput" className="sr-only">
                Your email
              </label>
              <input
                type="email"
                id="emailInput"
                placeholder="Your email"
                className="grow px-5 py-4 leading-none bg-white rounded-lg border border-zinc-200 text-zinc-400 max-md:mb-3"
                required
              />
              <button
                type="submit"
                className="px-6 py-3.5 font-semibold leading-none text-white capitalize bg-cyan-600 rounded-lg max-md:w-full"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-4 text-base leading-6 opacity-60 text-slate-800 max-md:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim.
            </div>
          </div>
        </div>
      </div>
  
      {/* Bottom Section */}
      <div className="flex flex-wrap gap-10 justify-between items-center py-6 px-72 w-full text-sm bg-white shadow-sm text-slate-800 max-md:flex-col max-md:gap-4 max-md:px-5">
        <div className="text-center max-md:text-sm">
          © 2025 - Blogy - Designed & Developed by{" "}
          <span className="text-slate-800">Ahmedonix</span>
        </div>
        <Image
          src="/paymentmethod.png"
          alt="Payment methods"
          className="object-contain w-48 max-md:w-40"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
  
};

export default Footer;
