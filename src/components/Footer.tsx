import React from "react";
import Image from "next/image";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 px-4  sm:px-12 md:px-28">
      <div className="mx-auto py-12">
        <div className="flex flex-wrap justify-between gap-8">
          {/* Brand Section */}
          <div className="flex flex-col w-full  md:w-[320px] items-start">
            <div className="flex items-center gap-2">
              <Image
                src="/Logo.png"
                alt="Comforty Logo"
                width={40}
                height={23.34}
                className="ml-3"
              />
            </div>
            <p className="mt-4 text-gray-500">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis
              interdum. Cras egestas purus.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
              >
                {/* <FaFacebookF /> */}
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
              >
                {/* <FaTwitter /> */}
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
              >
                {/* <FaInstagram /> */}
              </Link>
              <Link
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
              >
                {/* <FaPinterestP /> */}
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
              >
                {/* <FaYoutube /> */}
              </Link>
            </div>
          </div>

          {/* Category Section */}
          <div className="w-full md:w-1/4 lg:w-[105px]">
            <h4 className="text-lg font-semibold text-[#9A9CAA]">Category</h4>
            <ul className="mt-4 text-[#272343] space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Sofa
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Armchair
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Wing Chair
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Desk Chair
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Wooden Chair
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Park Bench
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="w-full md:w-1/4 lg:w-[156px]">
            <h4 className="text-lg font-semibold text-[#9A9CAA]">Support</h4>
            <ul className="mt-4 text-[#272343] space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Help & Support
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                >
                  Help
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="w-full md:w-1/4 lg:w-[424px]">
            <h4 className="text-lg font-semibold text-[#9A9CAA]">Newsletter</h4>
            <div className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full border text-[#9A9CAA] border-gray-300 rounded-l-md focus:outline-none"
              />
              <button className="bg-[#029FAE] text-white px-6 py-2 rounded-md hover:bg-teal-700">
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex justify-between items-center flex-wrap text-[#9A9CAA] border-t pt-8">
          <p>
            © 2021 - Blogy - Designed & Developed by{" "}
            <Link href="#" className="text-[#272343] hover:underline">
              Ahmedonix
            </Link>
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            {/* <FaCcMastercard size={40} /> */}
            {/* <FaPaypal size={40} /> */}
            {/* <FaCcAmex size={40} /> */}
            {/* <FaCcVisa size={40} /> */}
          </div>
        </div>
      </div>
    </footer>
  );
}