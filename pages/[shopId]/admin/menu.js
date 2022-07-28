import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import BottomNavBar from "../../../components/admin/layout/BottomNavBar"
import TopNavBar from "../../../components/admin/layout/TopNavBar"
import Menu from "../../../components/admin/menu/Menu"


const menu = () => {

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
        <div >
               {/* <div className="absolute w-full h-full z-30 bg-black/80 flex justify-center">
                <h1 className="text-white text-4xl self-center font-bold p-3">This page will be active after your shop is approved </h1>
            </div> */}
         <TopNavBar/>
            <Menu/>
            <BottomNavBar/>
        </div>
    ) 
}

export default menu
