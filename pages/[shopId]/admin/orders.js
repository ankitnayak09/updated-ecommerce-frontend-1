import { useRouter } from "next/router"
import Script from "next/script"
import { useSelector } from "react-redux"
import BottomNavBar from "../../../components/admin/layout/BottomNavBar"
import TopNavBar from "../../../components/admin/layout/TopNavBar"
import Orders from "../../../components/admin/orders/Orders"



const orders = () => {

    const {user,loading,isAuthenticated}=useSelector(state=>state.user)
    const router =useRouter()
    
    if (loading===true) {
      return <p>Loading...</p>
    }
    if (loading===false&&isAuthenticated===false) {
    router.push("/")
    return null
    }
    if (user&&!user.admin.includes(router.query.shopId)) {
        router.push("/")
        return null
    }





    const onloadFunction=()=>{
  
        // console.log("loade pusher script")
      
        const beamsTokenProvider = new PusherPushNotifications.TokenProvider({
          url: `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/v1/pusher/beams-auth`,
          
      
        });
      
        const beamsClient = new PusherPushNotifications.Client({
          instanceId: process.env.NEXT_PUBLIC_INSTANCE_ID,
        });
       
      
        beamsClient.start()
          .then(() => beamsClient.setUserId(user._id,beamsTokenProvider))
      
          .then(() => console.log('Successfully registered and subscribed!'))
          .catch(console.error);
      }




    return (<>
    <Script
  src="https://js.pusher.com/beams/1.0/push-notifications-cdn.js"
 strategy="lazyOnload"
  onLoad={()=>{
    onloadFunction()} }
/>
        <div>
            <TopNavBar/>
            <Orders/>
            <BottomNavBar/>
        </div>
   </> )
}

export default orders
