import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import BottomNav from "../../components/layout/BottomNav"
import TopNavbar from "../../components/layout/TopNavbar"
import MyOrders from "../../components/myAccount/MyOrders"
import MyProfile from "../../components/myAccount/MyProfile"

const index = () => {
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
            <TopNavbar/>
       <MyProfile/>
            <MyOrders/>
            <BottomNav/>
        </div>
    )
}

export default index
