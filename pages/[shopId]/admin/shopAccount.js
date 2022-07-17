import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import ShopDetails from "../../../components/admin/account/ShopDetails"
import BottomNavBar from "../../../components/admin/layout/BottomNavBar"
import OrderHistory from "../../../components/admin/orders/OrderHistory"

const shopAccount = () => {

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

    return (
        <div>
           <ShopDetails/>
            <OrderHistory/>
            <BottomNavBar/>
        </div>
    )
}

export default shopAccount
