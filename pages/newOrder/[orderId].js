
import { ChevronLeftIcon } from "@heroicons/react/solid"
import Link from "next/link"
import BottomNav from "../../components/layout/BottomNav"
import NewOrderDetails from "../../components/myAccount/NewOrderDetails"

// import AllShopsLoader from "../loading/AllShopsLoader"


const orderId = () => {


    return (
        <div>
                   <Link href={`/myAccount`}>
                   <div className="absolute cursor-pointer top-0 left-0 z-10 p-2 bg-sec-light-orange m-2 rounded-tr-[21px] rounded-bl-[21px] rounded-tl-small rounded-br-small drop-shadow-xl">
              <ChevronLeftIcon className="w-8 text-pri-text-gray"/>
              </div>
              </Link>
            <NewOrderDetails/>
            <BottomNav/>
        </div>
    )
}

export default orderId
