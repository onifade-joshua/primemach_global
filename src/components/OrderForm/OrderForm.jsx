'use client'
import { useState } from 'react'
import { ShoppingCart, Upload, CreditCard, Truck, CheckCircle } from 'lucide-react'

export function OrderForm() {
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    city: '',
    state: '',
    country: 'Nigeria',
    items: [{ product: '', quantity: 1, specifications: '' }],
    additionalNotes: '',
    paymentProof: null
  })
  
  const [orderSubmitted, setOrderSubmitted] = useState(false)
  const [orderNumber, setOrderNumber] = useState('')
  const [trackingUrl, setTrackingUrl] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleItemChange = (index, field, value) => {
    const newItems = [...formData.items]
    newItems[index][field] = value
    setFormData(prev => ({
      ...prev,
      items: newItems
    }))
  }

  const addItem = () => {
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, { product: '', quantity: 1, specifications: '' }]
    }))
  }

  const removeItem = (index) => {
    if (formData.items.length > 1) {
      const newItems = formData.items.filter((_, i) => i !== index)
      setFormData(prev => ({
        ...prev,
        items: newItems
      }))
    }
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    setFormData(prev => ({
      ...prev,
      paymentProof: file
    }))
  }

  const generateOrderNumber = () => {
    const timestamp = Date.now().toString(36)
    const random = Math.random().toString(36).substr(2, 5)
    return `ITS-${timestamp}-${random}`.toUpperCase()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Generate order number and tracking URL
    const orderNum = generateOrderNumber()
    const trackUrl = `${window.location.origin}/track/${orderNum}`
    
    setOrderNumber(orderNum)
    setTrackingUrl(trackUrl)
    setOrderSubmitted(true)
    
    // In a real app, this would submit to your backend
    console.log('Order submitted:', formData)
  }

  if (orderSubmitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Submitted Successfully!</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="text-lg font-semibold text-gray-900 mb-2">
              Order Number: <span className="text-primary-600">{orderNumber}</span>
            </p>
            <p className="text-gray-600 mb-4">
              We've received your order and payment information. Our team will review your payment proof and confirm your order within 24 hours.
            </p>
            <div className="bg-white p-4 rounded border-2 border-dashed border-primary-300">
              <p className="font-semibold text-gray-900 mb-2">Your Order Tracking URL:</p>
              <input 
                type="text" 
                value={trackingUrl}
                readOnly
                className="w-full p-2 border border-gray-300 rounded text-sm"
              />
              <button 
                onClick={() => navigator.clipboard.writeText(trackingUrl)}
                className="mt-2 text-primary-600 hover:text-primary-700 text-sm font-medium"
              >
                Copy URL
              </button>
            </div>
          </div>
          <div className="space-y-3">
            <a 
              href={trackingUrl}
              className="block btn-primary"
            >
              Track Your Order
            </a>
            <button 
              onClick={() => {
                setOrderSubmitted(false)
                setFormData({
                  customerName: '',
                  email: '',
                  phone: '',
                  company: '',
                  address: '',
                  city: '',
                  state: '',
                  country: 'Nigeria',
                  items: [{ product: '', quantity: 1, specifications: '' }],
                  additionalNotes: '',
                  paymentProof: null
                })
              }}
              className="block btn-secondary w-full"
            >
              Place Another Order
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <div className="flex items-center space-x-3 mb-8">
        <ShoppingCart className="w-8 h-8 text-primary-600" />
        <h2 className="text-3xl font-bold text-gray-900">Place Your Order</h2>
      </div>

      {/* Customer Information */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="customerName"
            placeholder="Full Name *"
            value={formData.customerName}
            onChange={handleInputChange}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleInputChange}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={handleInputChange}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name (Optional)"
            value={formData.company}
            onChange={handleInputChange}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>

      {/* Shipping Address */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Shipping Address</h3>
        <div className="grid grid-cols-1 gap-4">
          <textarea
            name="address"
            placeholder="Full Address *"
            value={formData.address}
            onChange={handleInputChange}
            rows="3"
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            required
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City *"
              value={formData.city}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State/Province *"
              value={formData.state}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              required
            />
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              required
            >
              <option value="Nigeria">Nigeria</option>
              <option value="Ghana">Ghana</option>
              <option value="Kenya">Kenya</option>
              <option value="South Africa">South Africa</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </div>

      {/* Order Items */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Order Items</h3>
        {formData.items.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <select
                value={item.product}
                onChange={(e) => handleItemChange(index, 'product', e.target.value)}
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              >
                <option value="">Select Product Category</option>
                <option value="Industrial Machinery">Industrial Machinery</option>
                <option value="Engineering Tools">Engineering Tools</option>
                <option value="Safety Equipment">Safety Equipment</option>
                <option value="Automation Systems">Automation Systems</option>
                <option value="Other">Other (Specify in notes)</option>
              </select>
              <input
                type="number"
                min="1"
                placeholder="Quantity"
                value={item.quantity}
                onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value))}
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={addItem}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  +
                </button>
                {formData.items.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeItem(index)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    −
                  </button>
                )}
              </div>
            </div>
            <textarea
              placeholder="Product specifications, model numbers, requirements..."
              value={item.specifications}
              onChange={(e) => handleItemChange(index, 'specifications', e.target.value)}
              rows="2"
              className="w-full mt-3 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        ))}
      </div>

      {/* Payment Information */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <CreditCard className="w-6 h-6" />
          <span>Payment Information</span>
        </h3>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
          <h4 className="font-semibold text-blue-900 mb-3">Bank Transfer Details:</h4>
          <div className="space-y-2 text-sm">
            <div><strong>Bank Name:</strong> First National Bank</div>
            <div><strong>Account Name:</strong> IndustrialTech Solutions LLC</div>
            <div><strong>Account Number:</strong> 1234567890</div>
            <div><strong>Routing Number:</strong> 123456789</div>
            <div><strong>SWIFT Code:</strong> FNBXUS33</div>
          </div>
          <p className="text-blue-700 text-sm mt-3">
            <strong>Note:</strong> Please include your order number in the transfer description once you receive it.
          </p>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Payment Proof (Bank Receipt/Transfer Screenshot) *
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={handleFileUpload}
              className="hidden"
              id="paymentProof"
              required
            />
            <label
              htmlFor="paymentProof"
              className="cursor-pointer bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700"
            >
              Choose File
            </label>
            {formData.paymentProof && (
              <p className="mt-2 text-sm text-green-600">
                File selected: {formData.paymentProof.name}
              </p>
            )}
            <p className="text-xs text-gray-500 mt-2">
              Supported formats: JPG, PNG, PDF (Max 5MB)
            </p>
          </div>
        </div>
      </div>

      {/* Additional Notes */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Additional Notes or Special Requirements
        </label>
        <textarea
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleInputChange}
          rows="4"
          placeholder="Any special instructions, delivery preferences, or additional information..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
      </div>

      <button
        type="submit"
        className="w-full btn-primary flex items-center justify-center space-x-2 text-lg py-4"
      >
        <ShoppingCart className="w-6 h-6" />
        <span>Submit Order</span>
      </button>
      
      <p className="text-xs text-gray-500 mt-4 text-center">
        By submitting this order, you agree to our terms and conditions. 
        We will confirm your order within 24 hours of payment verification.
      </p>
    </form>
  )
}