import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearErrors, getOrderDetails } from "../../actions/orderAction"
import AllShopsLoader from "../loading/AllShopsLoader"

import {toast} from "react-toastify"
import { clearCartLocalStorage } from "../../actions/cartAction"


const NewOrderDetails = () => {

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


    }, [dispatch,error,router])
   

    useEffect(() => {
        if(router.query.clearCart==="true"){
           
            dispatch(clearCartLocalStorage())
        }
        if(shopId) {
            dispatch(getOrderDetails(orderId,shopId));
        
        }  
    }, [shopId])

    return (
        <>
             
            <main className="bg-white px-4 pt-20  pb-24 sm:px-6 sm:pt-24 lg:px-8 lg:py-32">
      <div className="max-w-3xl mx-auto">
        <div className="max-w-xl">
          <h1 className="text-sm font-bold uppercase tracking-wide text-pri-orange">Yaay, your order has been placed😄!</h1>
          <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">{order.shopName}</p>
          <p className="mt-2 text-base text-gray-500">orderId - #{order.orderId}</p>
          <p className="mt-2 text-base text-gray-500">order number - {order.orderNumber}</p>

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
          {loading===true?(
          <AllShopsLoader/>
          ):(
              <>
          {loading===false&&order.orderItems?.map((item) => (
    
         
            <div key={item._id} className="flex justify-between my-4"> 
              <p className="">{item.name} &nbsp;  &nbsp;  <span className="text-sec-text-gray font-bold"> x{item.quantity}</span> </p>

              <p className="font-bold">₹{item.price}</p>
            </div>
         ))}
   
          {/* <div className="sm:ml-40 sm:pl-6"> */}
            <h3 className="sr-only">Your information</h3>

      
            <h4 className="sr-only">Payment</h4>
            <dl className="grid grid-cols-2 gap-x-6 border-t border-gray-200 text-sm py-10">
              <div>
                <dt className="font-bold text-gray-900">Ordered for(time)</dt>
                <dd className="mt-2 text-gray-700">
                  {/* <p>{order.orderInfo?.wantFoodAt&& order?.orderInfo?.wantFoodAt==="now"?"now": date.transform(order?.orderInfo?.wantFoodAt, 'HH:mm', 'h:mm A')}</p> */}
                 <p>
                   {order.orderInfo?.wantFoodAt}
                 </p>
                </dd>
              </div> 
              <div>
                <dt className="font-bold text-gray-900">Order placed at</dt>
                <dd className="mt-2 text-gray-700">
                  <p>
                {order.createdAt}
                  </p>
                
                </dd>
              </div>
            </dl>
       
            </>
    )}

            <h3 className="sr-only">Summary</h3>

            <dl className="space-y-6 border-dashed border-y-4 border-sec-orange text-sm py-10">
              <div className="flex justify-between">
                <dt className="font-medium text-gray-900">Subtotal</dt>
                <dd className="text-gray-700">₹{order.itemsPrice}</dd>
              </div>
          
              <div className="flex justify-between">
                <dt className="font-medium text-gray-900">Convenience Charge</dt>
                <dd className="text-gray-700">₹{order.conveniencePrice}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-bold text-lg text-gray-900 ">Total</dt>
                <dd className="text-gray-900 font-bold text-lg">₹{order.totalPrice}</dd>
              </div>
            </dl>

            <div className="mt-6">
                <button
                 
                  className="w-full  bg-gradient-to-br from-pri-orange via-mid-orange to-pri-yellow border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 "
                >
                    <Link  href={`/myAccount/`}><a>
                  See all orders
                  </a></Link>
                </button>
              </div>
          {/* </div> */}
        </section>
      </div>
    </main>

        </>
    )
}

export default NewOrderDetails
