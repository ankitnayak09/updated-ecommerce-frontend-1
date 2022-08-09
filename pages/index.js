import { useEffect } from "react";
import HomeShopList from "../components/allShops/HomeShopList";
import AllCategories from "../components/categories/AllCategories";
import BottomNav from "../components/layout/BottomNav"
import Navbar from "../components/layout/Navbar";
// import ScriptLoader from "next/script";

import Script from 'next/script';
import { useSelector } from "react-redux";
import TopNavbar from "../components/layout/TopNavbar";

// import * as PusherPushNotifications from "@pusher/push-notifications-web";

export default function Home() {

  
    const {user} = useSelector(state => state.user)
// const onloadFunction=()=>{
  
//   // console.log("loade pusher script")

//   const beamsTokenProvider = new PusherPushNotifications.TokenProvider({
//     url: `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/v1/pusher/beams-auth`,
    

//   });

//   const beamsClient = new PusherPushNotifications.Client({
//     instanceId: process.env.NEXT_PUBLIC_INSTANCE_ID,
//   });
 

//   beamsClient.start()
//     .then(() => beamsClient.setUserId(user._id,beamsTokenProvider))

//     .then(() => console.log('Successfully registered and subscribed!'))
//     .catch(console.error);
// }


  

  return (
    <>
{/* <Script
  src="https://js.pusher.com/beams/1.0/push-notifications-cdn.js"
 strategy="lazyOnload"
  onLoad={()=>{
    onloadFunction()} }
/> */}

   <div>
   <TopNavbar/>
  
   <h2 className="text-2xl mx-auto max-w-2xl  lg:max-w-3xl lg:px-8 px-4 font-bold tracking-tight text-gray-900 mt-28 mb-4">What do u want...</h2>
<AllCategories/>
<HomeShopList/>
<BottomNav/>
</div>








</>

  )
}
