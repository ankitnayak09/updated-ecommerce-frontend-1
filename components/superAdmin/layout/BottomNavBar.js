import { CakeIcon, PresentationChartBarIcon, HomeIcon } from "@heroicons/react/outline"
import Link from 'next/link'
import { useRouter } from "next/router"

const BottomNavBar = () => {
    const router =useRouter()
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

    return (
        <div className="w-full md:hidden s z-40">
        <section className="block fixed inset-x-0 bottom-0 z-50 ">

     
    

   <div className="backdrop-blur-3xl border-t-2 bg-white/50  py-3 flex justify-between"> 

   <Link href="/" >
   <a className="w-full focus:text-pri-orange  justify-center inline-block text-center self-center">
    <HomeIcon className="inline-block mb-1 w-8"/>
    <span className="tab tab-home block text-xs">Home</span>
        </a>
        </Link>

<Link href={`/superAdmin/analytics`} >
   <a className="w-full focus:text-pri-orange  justify-center inline-block text-center self-center">
    <PresentationChartBarIcon className={classNames(
                    router.pathname.includes("/analytics")?"text-pri-orange ":"","inline-block mb-1 w-8"
                  )}/>
    <span className="tab tab-home block text-xs">Analytics</span>
        </a>
        </Link>

<Link href={`/superAdmin/shops`} >
   <a className="w-full focus:text-pri-orange  justify-center inline-block text-center self-center">
    <CakeIcon className={classNames(
                    router.pathname.includes("/shops")?"text-pri-orange ":"","inline-block mb-1 w-8"
                  )}/>
    <span className="tab tab-home block text-xs">All shops</span>
        </a>
        </Link>

    
   </div>
        </section>
    </div>
    )
}

export default BottomNavBar
