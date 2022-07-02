import BottomNav from "../../components/layout/BottomNav"
import MyOrders from "../../components/myAccount/MyOrders"
import MyProfile from "../../components/myAccount/MyProfile"

const index = () => {
    return (
        <div>
       <MyProfile/>
            <MyOrders/>
            <BottomNav/>
        </div>
    )
}

export default index
