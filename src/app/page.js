// app/page.js
'use client'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { ArrowRight, Shield, Truck, Clock, Star, CheckCircle, Globe, Wrench, Factory, HardHat } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Shipping',
      description: 'Reliable shipping from USA and China to Nigeria and worldwide'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quality Guaranteed',
      description: 'All products undergo strict quality control and testing'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Fast Delivery',
      description: 'Express shipping options with real-time tracking'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer service and technical support'
    }
  ]

  const products = [
    {
      title: 'Industrial Machinery',
      description: 'Heavy-duty machinery for manufacturing and production',
      image: 'https://images.unsplash.com/photo-1565089324422-7cbc5d8d4b4e?w=400',
      icon: <Factory className="w-6 h-6" />
    },
    {
      title: 'Engineering Tools',
      description: 'Precision tools and instruments for engineering applications',
      image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400',
      icon: <Wrench className="w-6 h-6" />
    },
    {
      title: 'Safety Equipment',
      description: 'Comprehensive safety gear and protective equipment',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
      icon: <HardHat className="w-6 h-6" />
    }
  ]

  const testimonials = [
    {
      name: 'Adebayo Johnson',
      company: 'Lagos Manufacturing Ltd',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      text: 'Excellent service and quality products. The machinery we ordered arrived on time and exceeded our expectations.'
    },
    {
      name: 'Sarah Chen',
      company: 'Tech Solutions Inc',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      text: 'IndustrialTech has been our trusted partner for 3 years. Their engineering tools are top-notch.'
    },
    {
      name: 'Michael Rodriguez',
      company: 'Construction Pro',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      text: 'Fast shipping from China to Nigeria. Great communication throughout the entire process.'
    }
  ]

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Premium Industrial Equipment
                <span className="block text-yellow-400">Worldwide Shipping</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Your trusted partner for industrial and engineering equipment. 
                We ship quality products from USA and China directly to Nigeria and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/order" className="btn-primary flex items-center justify-center space-x-2">
                  <span>Place Order</span>
                  <ArrowRight size={20} />
                </Link>
                <Link href="/products" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary-800">
                  Browse Products
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800"
                  alt="Industrial Equipment"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-primary-900 p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-semibold">4.9/5 Rating</span>
                </div>
                <p className="text-sm">500+ Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose IndustrialTech Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine global reach with local expertise to deliver the best industrial equipment solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-primary-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Product Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of industrial equipment to meet all your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-primary-600 text-white p-2 rounded-lg">
                    {product.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <Link href="/products" className="text-primary-600 hover:text-primary-700 font-semibold flex items-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">50+</div>
              <div className="text-primary-100">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">10K+</div>
              <div className="text-primary-100">Products Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">24/7</div>
              <div className="text-primary-100">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Place your order now and get premium industrial equipment delivered to your doorstep. 
            Track your order every step of the way with our advanced tracking system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/order" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              Place Order Now
            </Link>
            <Link href="/track" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
              Track Your Order
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}