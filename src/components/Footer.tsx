import React from 'react';
import facebook from '../assets/footericons/facebook.svg';
import instagram from '../assets/footericons/instagram.svg';
import linkdin from '../assets/footericons/linkdin.svg';
import pintrest from '../assets/footericons/pintrest.svg';
import yt from '../assets/footericons/yt.svg';
import twitter from '../assets/footericons/twitter.svg';
const Footer: React.FC = () => {
  return (
    <footer className="bg-green-100 p-6 flex flex-col md:flex-row md:justify-between items-center">
      <div className="text-center md:text-left mb-6 md:mb-0">
        <h3 className="text-lg font-semibold text-gray-700">Get in touch</h3>
        <p className="text-sm text-gray-600">support@amrutam.co.in</p>
        <p className="text-sm text-gray-600">
          Amrutam Pharmaceuticals Pvt Ltd.,<br />
          Chitragupt Ganj, Nai Sadak, Lashkar,<br />
          Gwalior - 474001
        </p>
        <p className="text-sm text-gray-600">+91 9713171999</p>
      </div>

      <div className="text-center md:text-left mb-6 md:mb-0">
        <h3 className="text-lg font-semibold text-gray-700">Information</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li><a href="#" className="hover:underline">About Us</a></li>
          <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline">Shipping and Returns Policy</a></li>
          <li><a href="#" className="hover:underline">International Delivery</a></li>
          <li><a href="#" className="hover:underline">For Businesses, Hotels and Resorts</a></li>
        </ul>
      </div>

      <div className="text-center md:text-left mb-6 md:mb-0">
        <h3 className="text-lg font-semibold text-gray-700">Follow Us</h3>
        <div className="flex justify-center md:justify-start space-x-4 mt-2">
          <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-200">
            <img src={facebook} alt="Facebook" className="w-8 h-8" />
          </a>
          <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-200">
            <img src={instagram} alt="Instagram" className="w-8 h-8" />
          </a>
          <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-200">
            <img src={yt} alt="YouTube" className="w-8 h-8" />
          </a>
          <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-200">
            <img src={twitter} alt="Twitter" className="w-8 h-8" />
          </a>
          <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-200">
            <img src={linkdin} alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-200">
            <img src={pintrest} alt="Pinterest" className="w-8 h-8" />
          </a>
        </div>
      </div>

      <div className="text-center md:text-left">
        <h3 className="text-lg font-semibold text-gray-700">Subscribe to our Newsletter</h3>
        <div className="mt-2 flex justify-center md:justify-start">
          <input
            type="email"
            placeholder="Your Email Address"
            className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-green-400"
          />
          <button className="p-2 bg-black text-white rounded-r-md hover:bg-gray-800">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
