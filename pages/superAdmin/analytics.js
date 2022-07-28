import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import Analytics from "../../components/superAdmin/analytics/Analytics"

import BottomNavBar from "../../components/superAdmin/layout/BottomNavBar"
import TopNavBar from "../../components/superAdmin/layout/TopNavBar"
const analytics = () => {



    
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
        <div className="relative h-screen">
            <TopNavBar/>
         
            <Analytics/>
            
     <BottomNavBar />
         
        </div>
    )
}

export default analytics
