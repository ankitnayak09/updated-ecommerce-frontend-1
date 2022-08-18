import BottomNav from "../../components/layout/BottomNav"
import TopNavbar from "../../components/layout/TopNavbar"
import Favourites from "../../components/myAccount/Favourites"

const myFavourites = () => {
    return (
        <div>
            <TopNavbar/>
            <Favourites/>
            <BottomNav/>
        </div>
    )
}

export default myFavourites
