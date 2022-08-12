import Link from "next/link"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import date from 'date-and-time';
import { useRouter } from "next/router";
import { updateOrder } from "../../../actions/orderAction";
const SingleOrderCard = ({order,}) => {
    const dispatch = useDispatch()
  const router=useRouter()
  const [clickConfirmed,setClickConfirmed]=useState(false)
  const shopId=router.query.shopId
    const handleDelivered=(orderId)=>{
      // e.preventDefault()
      const orderData={
          status:"delivered"
      }
      dispatch(updateOrder(orderData,shopId,orderId))
  }
  const handleCancel=(orderId)=>{
      // e.preventDefault()
      const orderData={
          status:"initiated"
      }
      dispatch(updateOrder(orderData,shopId,orderId))
  }

    return (
      

       
          <div
            
            className="bg-white border  flex-grow  border-gray-200 drop-shadow-xl rounded-medium mx-5  sm:border"
          >
            <div className=" flex justify-center"><span className="bg-pri-blue  font-bold text-white px-3 rounded-b-small pb-1"> {order.orderNumber}</span></div>
            <h3 className="sr-only">
              Order placed on {order.createdAt}
              {/* Order placed on <time dateTime={order.createdDatetime}>{order.createdDate}</time> */}
            </h3>

            <div className="flex items-center px-6 pb-6 mx-4 border-dashed border-b-[4px] border-sec-orange ">
              <dl className="flex-1  grid grid-cols-2 gap-x-6 text-sm ">
              <div>
                    <dt className="font-bold text-2xl text-pri-text-light-gray text-center">{order.orderInfo.wantFoodAt=="now"?"now": date.transform(order.orderInfo.wantFoodAt, 'HH:mm', 'h:mm A')}</dt>
                    {/* <dd className="mt-1 text-pri-text-light-gray text-center">Want at</dd> */}
                  </div>
                {/* <div className="hidden sm:block">
                  <dt className="font-medium text-gray-900">Date placed</dt>
                  <dd className="mt-1 text-gray-500">{order.createdAt}
                  </dd>
                </div> */}
               

               <div>
                    <dt className="font-bold text-2xl text-pri-text-light-gray text-center">₹{order.totalPrice}</dt>
                    {/* <dd className="mt-1 font-medium text-pri-text-light-gray text-center">Total amount</dd> */}
                  </div>
              </dl>

         
            </div>

            {/* Products */}
 
            <div className=" divide-gray-200">
            {/* <ul role="list" className="divide-y divide-gray-200"> */}
            
                {/* <li className=" "> */}
                  <div className="flex  justify-center">
                
               
                          {/* <Link href={
                            {
                              pathname: `/myAccount/orders/${order._id}`,
                              query: { shopId: order.shop._id },
                            }
                          }>
                          <a > */}
                      <p className=" text-pri-text-light-gray px-3 pt-3 inline-grid grid-cols-2 gap-x-6 gap-y-1">
                      {order.orderItems.map((product) => (
                          <span key={product._id} className="font-semibold text-black text-base">
                        <span className="font-semibold  text-sec-text-gray"> {product.quantity}x&nbsp; </span>    {product.name}  
                          </span>
                      ))}
                          </p>
                          {/* </a>
                          </Link> */}
                    {/* </div> */}
                  </div>

                  <div className="mt-6 ">
                  {order.orderInfo.description?(  
<p className="text-left px-4"> <span className="font-bold ">Suggestion:</span> {order.orderInfo.description}</p>):("")}  
                    {/* <div className="flex ml-4 items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-500" aria-hidden="true" />
                      <p className="ml-2 text-sm font-medium text-gray-500">
                        Delivered 
                      </p>
                    </div> */}

                    <div className="mt-1 mx-4  border-dashed  border-t-[4px] border-sec-orange py-5 px-4 flex justify-between ">
                      <div onClick={()=>handleCancel(order._id)} className="flex ">
                      
                        cancel
                      </div>
                      <div className=" flex justify-center">
                        {clickConfirmed?(
                         <button onClick={(e)=>{
                             e.preventDefault()
                             handleDelivered(order._id)}} className="pri-button w-36 text-center self-center py-2 "> 
          Click Again
          </button>):(
               <button onClick={()=>{
                setClickConfirmed(true)}} className="pri-button w-36 text-center self-center py-2 "> 
Delivered
</button>
          )}
                      </div>
                    </div>
                  </div>
                {/* </li> */}
             </div>
            {/* </ul> */}
          </div>
     
 

    )
}

export default SingleOrderCard
