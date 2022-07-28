import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import BottomNavBar from "../../components/superAdmin/layout/BottomNavBar"
import TopNavBar from "../../components/superAdmin/layout/TopNavBar"
import AllShops from "../../components/superAdmin/shops/AllShops"
import AllShopsDetails from "../../components/superAdmin/shops/AllShopsDetails"

const shops = () => {


    const {user,loading,isAuthenticated}=useSelector(state=>state.user)
    const router =useRouter()
    
    if (loading===true) {
      return <p>Loading...</p>
    }
    if (loading===false&&isAuthenticated===false) {
    router.push("/")
    return null
    }
    if (user&&user.isSuperAdmin===false) {
        router.push("/")
        return null
    }

    return (
        <div>
            <TopNavBar/>
            <AllShopsDetails/>
            <AllShops/>
            <BottomNavBar/>
        </div>
    )
}

export default shops
