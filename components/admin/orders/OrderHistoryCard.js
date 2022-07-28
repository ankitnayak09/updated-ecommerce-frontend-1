import date from 'date-and-time';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const OrderHistoryCard = ({order}) => {
    return (
        <div
        // key={order._id}
        className="bg-white border border-gray-200 drop-shadow-xl rounded-medium mx-5  "
      >
        <h3 className="sr-only">
          Order placed on {order.createdAt}
     </h3>
 
     <div className=" flex justify-center"><span className="bg-pri-blue  font-bold text-white px-3 rounded-b-small pb-1"> {order.orderNumber}</span></div>

        <div className="flex  items-center px-6 pb-6 mx-4 border-dashed border-b-[4px] border-sec-orange">
          <dl className="flex-1  grid grid-cols-2 gap-x-6 text-sm ">
          <div>
                    <dt className="font-bold text-2xl text-pri-text-light-gray text-center">{order.orderInfo.wantFoodAt=="now"?"now": date.transform(order.orderInfo.wantFoodAt, 'HH:mm', 'h:mm A')}</dt>
                   
                  </div>
      

                  <div>
                    <dt className="font-bold text-2xl text-pri-text-light-gray text-center">₹{order.totalPrice}</dt>
                   
                  </div>
          </dl>

     
        </div>

   

        <div className=" divide-gray-200">
      
              <div className="flex  justify-center">
            
           
                      {/* <Link href={
                        {
                          pathname: `/myAccount/orders/${order._id}`,
                          query: { shopId: order.shop._id },
                        }
                      }>
                      <a > */}
                  <p className=" text-pri-text-light-gray px-3 pt-3 inline-grid grid-cols-2 gap-1">
                  {order.orderItems.map((product) => (
                      <span key={product._id} className="font-semibold text-black text-base">
                    <span className="font-semibold  text-sec-text-gray"> {product.quantity}x&nbsp; </span>    {product.name}  
                      </span>
                  ))}
                      </p>
                      {/* </a>
                      </Link> */}

              </div>

              <div className="mt-6 ">
     
                <div className="mt-6 mx-4  border-dashed  border-t-[4px] border-sec-orange py-5 px-7 flex justify-between   sm:mt-0  ">
                  <div className=" ">
                  
                    Order status : <br/> <span 
                    className={classNames(
                      order.orderStatus=="delivered"&& 'text-success-green' ,
                      order.orderStatus=="accepted"&& 'text-yellow-500' ,
                      order.orderStatus=="initiated"&& 'text-pri-orange' ,
                      ' text-xl font-bold'
                    )}
                    > {order.orderStatus}</span>

                  </div>
                  <div className=" flex justify-center">
                    
                     <button onClick={(e)=>{
                         e.preventDefault()
                        //  handleAcceptOrder(order._id)
                         }} className="bg-sec-light-orange font-bold text-pri-orange rounded-small  w-36 text-center self-center py-2 "> 
     Details
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

export default OrderHistoryCard
