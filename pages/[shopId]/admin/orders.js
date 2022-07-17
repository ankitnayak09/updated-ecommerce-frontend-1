import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import BottomNavBar from "../../../components/admin/layout/BottomNavBar"
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



    return (
        <div>
            <Orders/>
            <BottomNavBar/>
        </div>
    )
}

export default orders
