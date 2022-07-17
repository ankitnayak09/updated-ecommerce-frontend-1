import { SearchIcon,UserIcon,CakeIcon } from "@heroicons/react/outline"
import Link from 'next/link'
import { useRouter } from "next/router"

const BottomNavBar = () => {
    // const [shopId, setShopId] = useState()
    const router =useRouter()

    return (
               
        <div className="w-full md:hidden ">
            <section className="block fixed inset-x-0 bottom-0 z-10 ">
  

        

       <div className="backdrop-blur-xl bg-white/60 py-1 flex justify-between"> 

       <Link href="/" >
       <a className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
        <CakeIcon className="inline-block mb-1 w-8"/>
        <span className="tab tab-home block text-xs">Home</span>
			</a>
            </Link>

<Link href={`/${router.query.shopId}/admin`} >
       <a className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
        <CakeIcon className="inline-block mb-1 w-8"/>
        <span className="tab tab-home block text-xs">Dashboard</span>
			</a>
            </Link>

<Link href={`/${router.query.shopId}/admin/shopAccount`} >
       <a className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
        <CakeIcon className="inline-block mb-1 w-8"/>
        <span className="tab tab-home block text-xs">Shop Account</span>
			</a>
            </Link>

            <Link href={`/${router.query.shopId}/admin/orders`} >
       <a className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
        <SearchIcon className="inline-block mb-1 w-8"/>
        <span className="tab tab-home block text-xs">Orders</span>
			</a>
            </Link>

            <Link href={`/${router.query.shopId}/admin/menu`}>
       <a className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
        <UserIcon className="inline-block mb-1 w-8"/>
        <span className="tab tab-home block text-xs">Menu</span>
			</a>
            </Link>
       </div>
            </section>
        </div>
  
    )
}

export default BottomNavBar
