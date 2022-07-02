import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getOrderDetails } from "../../actions/orderAction"
import AllShopsLoader from "../loading/AllShopsLoader"


const products = [
    {
      id: 1,
      name: 'Cold Brew Bottle',
      description:
        'This glass bottle comes with a mesh insert for steeping tea or cold-brewing coffee. Pour from any angle and remove the top for easy cleaning.',
      href: '#',
      quantity: 1,
      price: '$32.00',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-05-product-01.jpg',
      imageAlt: 'Glass bottle with black plastic pour top and mesh insert.',
    },
  ]


const OrderDetails = () => {
    const router=useRouter()
    const orderId=router.query.orderId
    const shopId=router.query.shopId


    const dispatch=useDispatch();
    const {loading,error,order}=useSelector(state => state.orderDetails)

    useEffect(() => {
      if(error){
     toast.error(error);
     dispatch(clearErrors());
      }
if(shopId) {
    dispatch(getOrderDetails(orderId,shopId));
    // dispatch(getShopProducts(shopId))
}  

    }, [dispatch,error,router])
   
    return (

        <>
            
            <main className="bg-white px-4 pt-16 pb-24 sm:px-6 sm:pt-24 lg:px-8 lg:py-32">
      <div className="max-w-3xl mx-auto">
        <div className="max-w-xl">
          <h1 className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Hope u like the food, Visit again😄!</h1>
          <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">{order.shopName}</p>
          <p className="mt-2 text-base text-gray-500">orderId - #{order.orderId}</p>

          {/* <dl className="mt-12 text-sm font-medium">
            <dt className="text-gray-900">Tracking number</dt>
            <dd className="text-indigo-600 mt-2">51547878755545848512</dd>
          </dl> */}
        </div>

        <section aria-labelledby="order-heading" className="mt-10 border-t border-gray-200">
          <h2 id="order-heading" className="sr-only">
            Your order
          </h2>

          <h3 className="sr-only">Items</h3>
          {loading===true?(<AllShopsLoader/>):(
              <>
          {loading===false&&order.orderItems.map((order) => (
            <div key={order._id} className="py-10 border-b border-gray-200 flex space-x-6">
          
              <div className="flex-auto flex flex-col">
                <div>
                  <h4 className="font-medium text-gray-900">
                    <a href="#">{order.name}</a>
                  </h4>
                  {/* <p className="mt-2 text-sm text-gray-600">{product.description}</p> */}
                </div>
                <div className="mt-6 flex-1 flex items-end">
                  <dl className="flex text-sm divide-x divide-gray-200 space-x-4 sm:space-x-6">
                    <div className="flex">
                      <dt className="font-medium text-gray-900">Quantity</dt>
                      <dd className="ml-2 text-gray-700">{order.quantity}</dd>
                    </div>
                    <div className="pl-4 flex sm:pl-6">
                      <dt className="font-medium text-gray-900">Price</dt>
                      <dd className="ml-2 text-gray-700">{order.price}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          ))}
        </>
    )}
          <div className="sm:ml-40 sm:pl-6">
            <h3 className="sr-only">Your information</h3>

      
            <h4 className="sr-only">Payment</h4>
            <dl className="grid grid-cols-2 gap-x-6 border-t border-gray-200 text-sm py-10">
              <div>
                <dt className="font-medium text-gray-900">Payment method</dt>
                <dd className="mt-2 text-gray-700">
                  <p>Apple Pay</p>
                  <p>Mastercard</p>
                  <p>
                    <span aria-hidden="true">•••• </span>
                    <span className="sr-only">Ending in </span>1545
                  </p>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">Order Time</dt>
                <dd className="mt-2 text-gray-700">
                  <p>DHL</p>
                  <p>on 12th </p>
                </dd>
              </div>
            </dl>

            <h3 className="sr-only">Summary</h3>

            <dl className="space-y-6 border-t border-gray-200 text-sm pt-10">
              <div className="flex justify-between">
                <dt className="font-medium text-gray-900">Subtotal</dt>
                <dd className="text-gray-700">${order.itemsPrice}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="flex font-medium text-gray-900">
                  Discount
                  <span className="rounded-full bg-gray-200 text-xs text-gray-600 py-0.5 px-2 ml-2">STUDENT50</span>
                </dt>
                <dd className="text-gray-700">-$18.00 (50%)</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-gray-900">Convenience Charge</dt>
                <dd className="text-gray-700">${order.conveniencePrice}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-gray-900">Total</dt>
                <dd className="text-gray-900">${order.totalPrice}</dd>
              </div>
            </dl>

            <div className="mt-6">
                <button
                 
                  className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                >
                    <Link  href={`/shop/${order.shop}`}><a>
                  Reorder
                  </a></Link>
                </button>
              </div>
          </div>
        </section>
      </div>
    </main>

        </>
    )
}

export default OrderDetails
