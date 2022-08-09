import { TicketIcon, UserCircleIcon, HomeIcon } from "@heroicons/react/outline"
import { MenuAlt1Icon } from "@heroicons/react/solid"
import Link from 'next/link'
import { useRouter } from "next/router"

const BottomNavBar = () => {
    // const [shopId, setShopId] = useState()
    const router =useRouter()

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

    return (
               
        <div className="w-full md:hidden ">
            
            <section className="block fixed  inset-x-0 bottom-0 z-50 ">
 

        

       <div className="backdrop-blur-3xl border-t-2 bg-white/50 py-3 flex justify-between"> 

       <Link href="/" >
       <a className="w-full focus:text-pri-orange  justify-center inline-block text-center self-center">
        <HomeIcon className="inline-block mb-1 w-8"/>
        <span className="tab tab-home block text-xs">Home</span>
			</a>
            </Link>

{/* <Link href={`/${router.query.shopId}/admin`} >
       <a className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
        <CakeIcon className="inline-block mb-1 w-8"/>
        <span className="tab tab-home block text-xs">Dashboard</span>
			</a>
            </Link> */}

<Link href={`/${router.query.shopId}/admin/shopAccount`} >
       <a className="w-full focus:text-pri-orange  justify-center inline-block text-center self-center">
        <UserCircleIcon className={classNames(
                    router.pathname.includes("/shopAccount")?"text-pri-orange ":"","inline-block mb-1 w-8"
                  )}/>
        <span className="tab tab-home block text-xs">Shop Account</span>
			</a>
            </Link>

            <Link href={`/${router.query.shopId}/admin/orders`} >
       <a className="w-full focus:text-pri-orange  justify-center inline-block text-center self-center">
        <TicketIcon className={classNames(
                    router.pathname.includes("/orders")?"text-pri-orange ":"","inline-block mb-1 w-8"
                  )}/>
        <span className="tab tab-home block text-xs">Orders</span>
			</a>
            </Link>

            <Link href={`/${router.query.shopId}/admin/menu`}>
       <a className="w-full focus:text-pri-orange  justify-center inline-block text-center self-center">
        <MenuAlt1Icon className={classNames(
                    router.pathname.includes("/menu")?"text-pri-orange ":"","inline-block mb-1 w-8"
                  )}/>
        <span className="tab tab-home block text-xs">Menu</span>
			</a>
            </Link>
       </div>
            </section>
        </div>
  
    )
}

export default BottomNavBar
