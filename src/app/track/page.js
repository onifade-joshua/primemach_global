'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Search, Package } from 'lucide-react'

export default function TrackPage() {
  const [orderNumber, setOrderNumber] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (orderNumber.trim()) {
      router.push(`/track/${orderNumber.trim()}`)
    }
  }

  return (
    <main>
      <Header />
      <div className="section-padding bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Package className="w-16 h-16 text-primary-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Track Your Order
            </h1>
            <p className="text-xl text-gray-600">
              Enter your order number to check the status of your shipment
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="orderNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Order Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="orderNumber"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    placeholder="Enter your order number (e.g., ITS-ABC123-DEF45)"
                    className="w-full p-4 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                  <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center space-x-2 text-lg py-4"
              >
                <Search className="w-6 h-6" />
                <span>Track Order</span>
              </button>
            </form>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-3">Need Help?</h3>
              <ul className="text-sm text-blue-800 space-y-2">
                <li>• Your order number was sent to your email after order confirmation</li>
                <li>• Order numbers start with "ITS-" followed by alphanumeric characters</li>
                <li>• If you can't find your order number, contact our support team</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}