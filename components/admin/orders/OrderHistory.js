import { useRouter } from "next/router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { adminOrdersHistory, clearErrors } from "../../../actions/orderAction"

import OrderHistoryCard from "./OrderHistoryCard"


const OrderHistory = () => {
    const dispatch = useDispatch()
    const router=useRouter()

    const shopId=router.query.shopId

    const {loading,error,orders} = useSelector(state => state.adminOrdersHistory)

    useEffect(() => {
        if(error){
            toast.error(error);
            dispatch(clearErrors())
        
        }
        if(shopId){
     dispatch(adminOrdersHistory(shopId))
        }
    }, [dispatch,toast,error,shopId])
    return (
        
             <div className="bg-white z-10 relative   rounded-t-primary shadow-myOrderTop border-b-2 border-gray-300 -mt-10">
                 <h1 className=" text-3xl px-6 py-9 font-bold tracking-tight text-pri-text-gray ">Orders History</h1>

               <div className="grid grid-cols-1 gap-y-10  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
               {/* <div className="max-w-2xl pb-28 mx-auto space-y-8 sm:px-4 lg:max-w-4xl lg:px-0"> */}
              {orders&&orders.map((order)=>(
                <OrderHistoryCard key={order._id} order={order}/>
              ))}
            </div>
        </div>
    )
}

export default OrderHistory
