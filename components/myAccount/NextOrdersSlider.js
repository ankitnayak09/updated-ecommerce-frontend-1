import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { clearErrors, myActiveOrders, myOrders } from "../../actions/orderAction";
import NextOrderCard from "./NextOrderCard";
import AllShopsLoader from "../loading/AllShopsLoader"

const NextOrdersSlider = () => {
const dispatch = useDispatch()
const {loading,error,activeOrders} = useSelector(state => state.myOrders)

    useEffect(() => {
        if(error){
            toast.error(error);
            dispatch(clearErrors())
            // console.log("mmmmmm")
        }
    }, [error])
    
    // const [nextOrders,setnextOrders]=useState([])
    // useEffect(() => {
        //     let nxtOrd=orders.filter((ord)=>ord.orderStatus=="accepted")
        //     // console.log(nxtOrd)
        //     setnextOrders(nxtOrd)
        // }, [orders])

    return (
        <div className="mb-5"> 
              <Carousel showStatus={false} showThumbs={false}>
           {loading===false?(activeOrders.map((ord)=>(
               <NextOrderCard key={ord._id} order={ord}/>
           )) ):(
        <AllShopsLoader/>
           )}
         
            </Carousel>
  


            {/* <div className="overflow-x-scroll flex bg-green-200 
            p-4 mx-16 w-60 h-24 text-justify snap-mandatory snap-x ">
              {nextOrders.map((ord)=>(
               <NextOrderCard key={ord._id} order={ord}/>
           ))}
         
        </div> */}




        </div>
    )
}

export default NextOrdersSlider
