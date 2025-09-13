'use client'
import { useState, useEffect } from 'react'
import { Package, Truck, CheckCircle, Clock, MapPin, Calendar } from 'lucide-react'

export function OrderTracking({ orderNumber }) {
  const [orderData, setOrderData] = useState(null)
  const [loading, setLoading] = useState(true)

  // Simulate order status data (in real app, this would fetch from your API)
  const getOrderStatus = (orderNum) => {
    const statuses = {
      'pending': { step: 1, label: 'Payment Verification', color: 'yellow' },
      'confirmed': { step: 2, label: 'Order Confirmed', color: 'blue' },
      'processing': { step: 3, label: 'Processing Order', color: 'blue' },
      'shipped': { step: 4, label: 'Shipped', color: 'green' },
      'delivered': { step: 5, label: 'Delivered', color: 'green' }
    }
    
    // Simulate different order statuses
    const randomStatus = ['confirmed', 'processing', 'shipped'][Math.floor(Math.random() * 3)]
    
    return {
      orderNumber: orderNum,
      status: randomStatus,
      customerName: 'John Doe',
      orderDate: '2024-01-15',
      estimatedDelivery: '2024-01-25',
      trackingNumber: 'TRK-' + orderNum.slice(-8),
      items: [
        { name: 'Industrial Machinery', quantity: 1, specs: 'Heavy duty motor, 50HP' },
        { name: 'Safety Equipment', quantity: 5, specs: 'Hard hats, safety vests' }
      ],
      timeline: [
        {
          status: 'pending',
          date: '2024-01-15 10:30 AM',
          description: 'Order placed and payment proof uploaded',
          completed: true
        },
        {
          status: 'confirmed',
          date: '2024-01-15 02:45 PM',
          description: 'Payment verified and order confirmed',
          completed: statuses[randomStatus].step >= 2
        },
        {
          status: 'processing',
          date: '2024-01-16 09:00 AM',
          description: 'Order is being prepared for shipping',
          completed: statuses[randomStatus].step >= 3
        },
        {
          status: 'shipped',
          date: randomStatus === 'shipped' ? '2024-01-18 03:20 PM' : null,
          description: 'Package dispatched from warehouse',
          completed: statuses[randomStatus].step >= 4
        },
        {
          status: 'delivered',
          date: null,
          description: 'Package delivered to destination',
          completed: statuses[randomStatus].step >= 5
        }
      ],
      currentStatus: statuses[randomStatus]
    }
  }

  useEffect(() => {
    // Simulate API call delay
    setTimeout(() => {
      const data = getOrderStatus(orderNumber)
      setOrderData(data)
      setLoading(false)
    }, 1000)
  }, [orderNumber])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (!orderData) {
    return (
      <div className="text-center py-12">
        <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Order Not Found</h3>
        <p className="text-gray-600">Please check your order number and try again.</p>
      </div>
    )
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <Clock className="w-6 h-6" />
      case 'confirmed': return <CheckCircle className="w-6 h-6" />
      case 'processing': return <Package className="w-6 h-6" />
      case 'shipped': return <Truck className="w-6 h-6" />
      case 'delivered': return <CheckCircle className="w-6 h-6" />
      default: return <Clock className="w-6 h-6" />
    }
  }

  const getStatusColor = (completed, current = false) => {
    if (completed) return 'text-green-600 bg-green-100 border-green-200'
    if (current) return 'text-blue-600 bg-blue-100 border-blue-200'
    return 'text-gray-400 bg-gray-100 border-gray-200'
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Order Header */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Order #{orderData.orderNumber}
            </h2>
            <p className="text-gray-600">Customer: {orderData.customerName}</p>
          </div>
          <div className="mt-4 lg:mt-0 text-right">
            <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${
              orderData.currentStatus.color === 'green' ? 'bg-green-100 text-green-800' :
              orderData.currentStatus.color === 'blue' ? 'bg-blue-100 text-blue-800' :
              'bg-yellow-100 text-yellow-800'
            }`}>
              {getStatusIcon(orderData.status)}
              <span className="font-medium">{orderData.currentStatus.label}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-3">
            <Calendar className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-600">Order Date</p>
              <p className="font-semibold">{orderData.orderDate}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Truck className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-600">Tracking Number</p>
              <p className="font-semibold">{orderData.trackingNumber}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-600">Est. Delivery</p>
              <p className="font-semibold">{orderData.estimatedDelivery}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Order Timeline */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Order Timeline</h3>
        <div className="space-y-6">
          {orderData.timeline.map((event, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className={`flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center ${
                getStatusColor(event.completed, !event.completed && index === orderData.timeline.findIndex(e => !e.completed))
              }`}>
                {getStatusIcon(event.status)}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-gray-900">{event.description}</h4>
                    {event.date && (
                      <p className="text-sm text-gray-600 mt-1">{event.date}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Items */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Order Items</h3>
        <div className="space-y-4">
          {orderData.items.map((item, index) => (
            <div key={index} className="flex justify-between items-start p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-semibold text-gray-900">{item.name}</h4>
                <p className="text-gray-600 text-sm">{item.specs}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">Qty: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}