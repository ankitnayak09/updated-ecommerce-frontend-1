import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import Dashboard from "../../../components/admin/dashboard/Dashboard"
import BottomNavBar from "../../../components/admin/layout/BottomNavBar"
import TopNavBar from "../../../components/admin/layout/TopNavBar"

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
    if (user&&!user.admin.includes(router.query.shopId)) {
        router.push("/")
        return null
    }

    return (
        <div>
            <TopNavBar/>
             <Dashboard/>
             <BottomNavBar/>
        </div>
    )
}

export default index
