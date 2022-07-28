import {  ChevronLeftIcon } from "@heroicons/react/solid"
import Link from "next/link"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
// import BottomNav from "../../../components/layout/BottomNav"
import OrderDetails from "../../../components/myAccount/OrderDetails"




const orderId = () => {

    const {user,loading,isAuthenticated}=useSelector(state=>state.user)
    const router =useRouter()
    
    if (loading===true) {
      return <p>Loading...</p>
    }
    if (loading===false&&isAuthenticated===false) {
    router.push("/")
    return null
    }
 


    return (
        <div>
             <Link href={`/myAccount`}>
                   <div className="absolute cursor-pointer top-0 left-0 z-10 p-2 bg-sec-light-orange m-2 rounded-tr-[21px] rounded-bl-[21px] rounded-tl-small rounded-br-small drop-shadow-xl">
              <ChevronLeftIcon className="w-8 fill-pri-text-gray"/>
              </div>
              </Link>
            <OrderDetails/>
            {/* <BottomNav/> */}
        </div>
    )
}

export default orderId
