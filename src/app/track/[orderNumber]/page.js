import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import { OrderTracking } from '../../../components/OrderTracking/OrderTracking'

export default function TrackOrderPage({ params }) {
  return (
    <main>
      <Header />
      <div className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Track Your Order
            </h1>
            <p className="text-xl text-gray-600">
              Monitor your order status and delivery progress
            </p>
          </div>
          <OrderTracking orderNumber={params.orderNumber} />
        </div>
      </div>
      <Footer />
    </main>
  )
}