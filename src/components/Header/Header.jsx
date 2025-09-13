'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@industrialtech.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>Shipping: USA • China • Nigeria</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-primary-600 p-2 rounded-lg">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="font-bold text-primary-600">IT</span>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">IndustrialTech</h1>
                <p className="text-sm text-gray-600">Solutions</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium">
                Home
              </Link>
              <div className="relative">
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 font-medium"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  <span>Products</span>
                  <ChevronDown size={16} />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
                    <Link href="/products/industrial-machinery" className="block px-4 py-2 hover:bg-gray-50">
                      Industrial Machinery
                    </Link>
                    <Link href="/products/engineering-tools" className="block px-4 py-2 hover:bg-gray-50">
                      Engineering Tools
                    </Link>
                    <Link href="/products/safety-equipment" className="block px-4 py-2 hover:bg-gray-50">
                      Safety Equipment
                    </Link>
                    <Link href="/products/automation" className="block px-4 py-2 hover:bg-gray-50">
                      Automation Systems
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/services" className="text-gray-700 hover:text-primary-600 font-medium">
                Services
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary-600 font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary-600 font-medium">
                Contact
              </Link>
              <Link href="/quote" className="btn-primary">
                Get Quote
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium">
                  Home
                </Link>
                <Link href="/products" className="text-gray-700 hover:text-primary-600 font-medium">
                  Products
                </Link>
                <Link href="/services" className="text-gray-700 hover:text-primary-600 font-medium">
                  Services
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-primary-600 font-medium">
                  About
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-primary-600 font-medium">
                  Contact
                </Link>
                <Link href="/quote" className="btn-primary w-fit">
                  Get Quote
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}