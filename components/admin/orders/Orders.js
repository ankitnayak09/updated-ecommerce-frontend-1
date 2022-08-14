import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { DotsVerticalIcon } from '@heroicons/react/outline'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { clearErrors, adminAllOrders, updateOrder, pushNewOrder, updateStartCookingOrders } from '../../../actions/orderAction'
import Link from 'next/link'
import { useRouter } from 'next/router'

import date from "date-and-time"

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import io from "socket.io-client"
import NotYetAcceptedOrderCard from './NotYetAcceptedOrderCard'
import SingleOrderCard from './SingleOrderCard'
import NewOrderModal from './NewOrderModal'
import QrModal from './QrModal'
import OrdersSearchModal from './OrdersSearchModal'
import AllShopsLoader from '../../loading/AllShopsLoader'





const ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_HOST;
var socket

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

const Orders = () => {

 
  const dispatch=useDispatch()
  const router=useRouter()
  const shopId=router.query.shopId

  // const notificationSound=new Audio("/audio/notification.mp3/")

const [socketConnected, setSocketConnected] = useState(false)
const [open, setOpen] = useState(false)
const [qrOpen, setQrOpen] = useState(false)
const [newOrder, setNewOrder] = useState()



// socket.io implementation
  useEffect(() => {  
     
   
    socket=io(ENDPOINT);

     
    socket.emit("setup",shopId); 
   
    socket.on("connect",()=>{
      
    setSocketConnected(true)      
    }
  )
  
    socket.on("newOrder",(order)=>{
       

    setNewOrder(order)
    setOpen(true);
        
     
    dispatch(pushNewOrder(order))
 
    })
  
  }, [])   

  const {loading,error,startCookingOrders,futureOrders,notYetAcceptedOrders} = useSelector(state => state.adminAllOrders)

  

 
  // here set time out for running updated orders agin and again
  useEffect(() => {

    // if(futureOrders.length!==0){  
   

    const interval = setInterval(() => {
      console.log("runned setInterval to update orders in Order.js") 
      const nowDate=new Date()
      // console.log(futureOrders)
     futureOrders.forEach((rev)=>{
     
        let wantAt= date.parse(date.format(nowDate, 'MMM DD YYYY') +" "+rev.orderInfo.wantFoodAt, 'MMM DD YYYY HH:mm')
        let timeDiff=date.subtract(wantAt,nowDate).toMinutes()
       
        if(rev.cookingTime>=timeDiff){
          // console.log("aaaa aaaaa")
          dispatch(updateStartCookingOrders(rev))
        }
      
        
    })   

    }, 120000);

    if(futureOrders.length===0){
      // console.log("hh") 
      clearInterval(interval)
    }
  // }
  
    return () => clearInterval(interval);
  




  }, [futureOrders]);

    
   
    
 
    const {loading:updateOrderLoading,error:updateOrderError,isUpdated,orderStatus} = useSelector(state => state.adminOrder)
    const {user} = useSelector(state => state.user)      
    
     

     
  
    useEffect(() => {
    if(error){
        toast.error(error); 
        dispatch(clearErrors())
        // console.log("mmmmmm")
    }
    if(shopId){
    dispatch(adminAllOrders(shopId))
    }
    }, [dispatch,toast,error,shopId])
 
    useEffect(() => {
        if(updateOrderError){
            toast.error(updateOrderError);
            dispatch(clearErrors())
            // console.log("mmmmmm")
        } 
        if(isUpdated===true){   
          toast.success("order status updated as "+orderStatus)
          dispatch({type:"UPDATE_ORDER_RESET"}) 
        dispatch(adminAllOrders(shopId)) 

        }
    }, [dispatch,toast,updateOrderError,isUpdated])

    // const handleDelivered=(orderId)=>{
    //     // e.preventDefault()
    //     const orderData={
    //         status:"delivered"
    //     }
    //     dispatch(updateOrder(orderData,shopId,orderId))
    // }
    // const handleCancel=(orderId)=>{
    //     // e.preventDefault()
    //     const orderData={
    //         status:"initiated"
    //     }
    //     dispatch(updateOrder(orderData,shopId,orderId))
    // }

 

    return (
      // <div className="bg-white rounded-t-primary shadow-myOrderTop -mt-10">
      <div className="pb-16 md:pb-0  ">
          <NewOrderModal open={open} setOpen={setOpen} order={newOrder} />   
      
            <div className="sticky top-0 md:pt-24 bg-gradient-to-br pt-10 pb-24 from-pri-orange via-mid-orange to-pri-yellow">

         
  
          {/* <div className="mt-4"> */}
            <h2 className="sr-only">Recent order</h2>
            <div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
              <div className="flex justify-between pb-7">
                {notYetAcceptedOrders.length===0?(<h1 className=" text-3xl my-4 ml-6  font-bold tracking-tight text-sec-light-orange ">No new orders</h1>):(
            <h1 className=" text-3xl my-4 ml-6  font-bold tracking-tight text-sec-light-orange ">New orders</h1>)}
            <div className="flex">
              <OrdersSearchModal items={startCookingOrders}/>
            <QrModal qrOpen={qrOpen} setQrOpen={setQrOpen} />
            </div>
            </div>

            <div className="max-w-lg  mx-auto ">
            <Carousel infiniteLoop={true} showStatus={false} showThumbs={false}> 
        


              {loading?(<div className="w-full px-6"> <AllShopsLoader/></div>):(notYetAcceptedOrders.map((order)=>(
                <NotYetAcceptedOrderCard key={order._id} order={order}/>
              )))}
              {/* {notYetAcceptedOrders&&notYetAcceptedOrders.map((order)=>(
                <NotYetAcceptedOrderCard key={order._id} order={order}/>
                ))} */}
    

               </Carousel>

            </div>

 
 </div>
 </div>
 <div className="bg-white z-10 relative pb-10  rounded-t-primary shadow-myOrderTop border-b-2 border-gray-300 -mt-10">

 <h1 className=" text-3xl px-7 py-10  font-bold tracking-tight text-pri-text-gray ">Start Cooking Now orders</h1>


              <div className="grid grid-cols-1 gap-y-10  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
              {/* <div className="max-w-2xl pb-28 mx-auto space-y-8 sm:px-4 lg:max-w-4xl lg:px-0"> */}

           

                {loading?(<div className="w-full h-96 px-6"> <AllShopsLoader/></div>):(startCookingOrders.map((order) => (
      <SingleOrderCard   key={order._id}  order={order}/>)
      ))}
              </div>
              
              </div>

          <div className="relative z-30 bg-white pb-10">    
          <div className="bg-black/40 z-40 absolute w-full h-full top-0"></div>
             
            <h1 className=" text-3xl px-7 py-10  font-bold tracking-tight text-pri-text-gray ">Future Orders</h1>

              <div className="grid grid-cols-1 gap-y-10  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {/* {futureOrders.map((order) => (
      <SingleOrderCard  key={order._id}  order={order}/>
      ))} */}
          {loading?(<div className="w-full px-6"> <AllShopsLoader/></div>):(futureOrders.map((order) => (
      <SingleOrderCard   key={order._id}  order={order}/>)
      ))}
              </div>
         
         
            
              </div>
         
            
            
          </div>
        // </div>
    //   </div>
    )
}

export default Orders
