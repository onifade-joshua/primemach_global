import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { OrderForm } from '../../components/OrderForm/OrderForm'

export default function OrderPage() {
  return (
    <main>
      <Header />
      <div className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Place Your Order
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to purchase? Fill out our order form and upload your payment proof. 
              We will confirm your order and provide tracking information within 24 hours.
            </p>
          </div>
          <OrderForm />
        </div>
      </div>
      <Footer />
    </main>
  )
}