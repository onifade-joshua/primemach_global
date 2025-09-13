import Link from "next/link";
import Image from "next/image";
import Logo from "../../assests/primemach.jpg";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-primary-600 p-2 rounded-lg flex-shrink-0">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center overflow-hidden">
                  <Image
                    src={Logo}
                    alt="PrimeMach Logo"
                    width={32}
                    height={32}
                    className="w-full h-full rounded object-cover"
                  />
                </div>
              </div>
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-bold">PrimeMach</h3>
                <p className="text-gray-400 text-sm">Global</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 text-sm sm:text-base leading-relaxed">
              Leading supplier of premium industrial and engineering equipment.
              Reliable shipping from USA and China to Nigeria and worldwide.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-400 hover:text-white text-sm sm:text-base transition-colors duration-200 block py-1"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-400 hover:text-white text-sm sm:text-base transition-colors duration-200 block py-1"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-white text-sm sm:text-base transition-colors duration-200 block py-1"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white text-sm sm:text-base transition-colors duration-200 block py-1"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white text-sm sm:text-base transition-colors duration-200 block py-1"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products/industrial-machinery"
                  className="text-gray-400 hover:text-white text-sm sm:text-base transition-colors duration-200 block py-1"
                >
                  Industrial Machinery
                </Link>
              </li>
              <li>
                <Link
                  href="/products/engineering-tools"
                  className="text-gray-400 hover:text-white text-sm sm:text-base transition-colors duration-200 block py-1"
                >
                  Engineering Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/products/safety-equipment"
                  className="text-gray-400 hover:text-white text-sm sm:text-base transition-colors duration-200 block py-1"
                >
                  Safety Equipment
                </Link>
              </li>
              <li>
                <Link
                  href="/products/automation"
                  className="text-gray-400 hover:text-white text-sm sm:text-base transition-colors duration-200 block py-1"
                >
                  Automation Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Info</h4>
            <div className="space-y-3">
              {/* Phone */}
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm sm:text-base min-w-0">
                  <p className="break-words">+1 (555) 123-4567</p>
                  <p className="break-words">+234 8154771130</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base break-all">
                  primemach.g@outlook.com
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm sm:text-base">
                  <p>123 Industrial Ave</p>
                  <p>Houston, TX 77001</p>
                  <p>United States</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2025 PrimeMach Global. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}