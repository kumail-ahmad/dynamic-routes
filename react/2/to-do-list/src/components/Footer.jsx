import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="socials mb-6">
          <ul className="flex gap-6 justify-center items-center">
            <a href="/" className="text-white hover:text-blue-500">
              <li>
                <FaFacebookF size={20} />
              </li>
            </a>
            <a href="/" className="text-white hover:text-blue-400">
              <li>
                <FaLinkedinIn size={20} />
              </li>
            </a>
            <a href="/" className="text-white hover:text-blue-300">
              <li>
                <IoLogoTwitter size={20} />
              </li>
            </a>
            <a href="/" className="text-white hover:text-pink-400">
              <li>
                <FaInstagram size={20} />
              </li>
            </a>
          </ul>
        </div>

        <div className="details text-[12px] text-center">
          © 2024 Kumail Ahmad | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
