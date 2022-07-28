import { SearchIcon,UserIcon,CakeIcon } from "@heroicons/react/outline"
import Link from 'next/link'
import { useRouter } from "next/router"

const BottomNavBar = () => {
    const router =useRouter()

    return (
        <div className="w-full md:hidden s z-40">
        <section className="block fixed inset-x-0 bottom-0 z-50 ">


    

   <div className="backdrop-blur-xl bg-white/60  py-1 flex justify-between"> 

   <Link href="/" >
   <a className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
    <CakeIcon className="inline-block mb-1 w-8"/>
    <span className="tab tab-home block text-xs">Home</span>
        </a>
        </Link>

<Link href={`/superAdmin/analytics`} >
   <a className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
    <CakeIcon className="inline-block mb-1 w-8"/>
    <span className="tab tab-home block text-xs">Analytics</span>
        </a>
        </Link>

<Link href={`/superAdmin/shops`} >
   <a className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
    <CakeIcon className="inline-block mb-1 w-8"/>
    <span className="tab tab-home block text-xs">All shops</span>
        </a>
        </Link>

    
   </div>
        </section>
    </div>
    )
}

export default BottomNavBar
