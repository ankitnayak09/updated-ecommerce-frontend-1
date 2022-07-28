import { ChevronLeftIcon } from "@heroicons/react/solid"
import Link from "next/link"
import { useRouter } from "next/router"

const TopNavBar = () => {
    const router=useRouter()
    return (
        <div className="fixed justify-between hidden md:flex bg-white w-full rounded-b-primary p-1 border-b-2 drop-shadow-sm z-30">
            <div className="flex">
           
             <Link href={`/`}>
                   <button className=" cursor-pointer  p-2 bg-sec-light-orange m-2 rounded-tr-[21px] rounded-bl-[21px] rounded-tl-small rounded-br-small drop-shadow-xl">
              <ChevronLeftIcon className="w-8 fill-pri-text-gray"/>
              </button>
              </Link>
           
              <div className=" text-3xl px-6 self-center font-bold tracking-tight text-pri-text-gray">
  <span className="bg-clip-text text-transparent bg-gradient-to-br from-pri-orange via-mid-orange to-pri-yellow">
        Admin
  </span>

              </div>
              </div>
        <div className="flex self-center gap-x-6 mr-10">
            <Link href={`/${router.query.shopId}/admin/shopAccount`}>
                <a className={router.pathname.includes("shopAccount")?"text-pri-orange font-bold":""}>Shop account</a>
                
            </Link>
            <Link href={`/${router.query.shopId}/admin/orders`}>
                <a className={router.pathname.includes("orders")?"text-pri-orange font-bold":""}>Orders</a>
            </Link>
            <Link href={`/${router.query.shopId}/admin/menu`}>
                <a className={router.pathname.includes("menu")?"text-pri-orange font-bold":""}>Menu</a>
            </Link>
        </div>
        </div>
    )
}

export default TopNavBar
