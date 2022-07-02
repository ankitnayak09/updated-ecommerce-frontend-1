import { ChevronDoubleLeftIcon } from "@heroicons/react/solid"
import Link from "next/link"
// import BottomNav from "../../../components/layout/BottomNav"
import OrderDetails from "../../../components/myAccount/OrderDetails"




const orderId = () => {

 


    return (
        <div>
             <Link href={`/myAccount`}>
              <ChevronDoubleLeftIcon className="w-8"/>
              </Link>
            <OrderDetails/>
            {/* <BottomNav/> */}
        </div>
    )
}

export default orderId
