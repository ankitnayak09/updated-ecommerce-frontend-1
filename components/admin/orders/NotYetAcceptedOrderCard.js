import Link from "next/link"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { updateOrder } from "../../../actions/orderAction"

import date from 'date-and-time';

const NotYetAcceptedOrderCard = ({order,setOpen}) => {

const dispatch = useDispatch()

// const {loading:updateOrderLoading,error:updateOrderError,isUpdated} = useSelector(state => state.adminOrder)

// useEffect(() => {
//   if(updateOrderError){
//       toast.error(updateOrderError);
//       dispatch(clearErrors())
//       // console.log("mmmmmm")
//   }
//   if(isUpdated){
//   dispatch(adminAllOrders(shopId))
//   }
// }, [dispatch,toast,updateOrderError,isUpdated])


  const handleAcceptOrder=(orderId)=>{
    // e.preventDefault()
    const orderData={
        status:"accepted"
    }
    dispatch(updateOrder(orderData,order.shop,orderId))
    if(setOpen){
      setOpen(false)
    }
    
}
  const handleRejectOrder=(orderId)=>{
    // e.preventDefault()
    const orderData={
        status:"rejected"
    }
    dispatch(updateOrder(orderData,order.shop,orderId))
    if(setOpen){
      setOpen(false)
    }
}


    return (
      
            <div
            
              className="bg-white border border-gray-200 drop-shadow-xl rounded-medium mx-5  sm:border "
            >
              <h3 className="sr-only">
                Order placed on {order.createdAt}
                {/* Order placed on <time dateTime={order.createdDatetime}>{order.createdDate}</time> */}
              </h3>
              <div className=" flex justify-center"><span className="bg-pri-blue  font-bold text-white px-3 rounded-b-small pb-1"> {order.orderNumber}</span></div>


              <div className="flex items-center px-6 pb-6 mx-4 border-dashed border-b-[4px] border-sec-orange ">
                <dl className="flex-1  grid grid-cols-2 gap-x-6 text-sm ">
                  <div>
                    <dt className="font-bold text-2xl text-pri-text-light-gray text-center">{order.orderInfo.wantFoodAt=="now"?"now": date.transform(order.orderInfo.wantFoodAt, 'HH:mm', 'h:mm A')}</dt>
                   
                  </div>
                  {/* <div className="hidden sm:block">
                    <dt className="font-medium text-gray-900">Date placed</dt>
                    <dd className="mt-1 text-gray-500">{order.createdAt}
                    </dd>
                  </div> */}
                 

                  <div>
                    <dt className="font-bold text-2xl text-pri-text-light-gray text-center">₹{order.totalPrice}</dt>
                  
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
                        <p className=" text-pri-text-light-gray px-3 pt-3  inline-grid grid-cols-2 gap-x-6 gap-y-1">
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
           

                      <div className="mt-6 mx-4 p-4 border-dashed  border-t-[4px] border-sec-orange  flex justify-between   ">
                        <button onClick={(e)=>{
                               e.preventDefault()
                               handleRejectOrder(order._id)
                               }} className=" self-center rounded-md  text-center py-2 w-36  bg-sec-light-orange text-pri-orange font-bold cursor-pointer">
                        
                          Reject
                        </button>
                        <div className=" flex justify-center">
                          
                           <button onClick={(e)=>{
                               e.preventDefault()
                               handleAcceptOrder(order._id)
                               }} className="pri-button w-36 text-center self-center py-2 "> 
           Accept
            </button>
                        </div>
                      </div>
                    </div>
                  {/* </li> */}
               </div>
              {/* </ul> */}
            </div>
         
    )
}

export default NotYetAcceptedOrderCard
