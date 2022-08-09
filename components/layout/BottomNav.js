import { SearchIcon,UserCircleIcon, CakeIcon,LibraryIcon } from "@heroicons/react/outline"


import Link from 'next/link'
import { useRouter } from "next/router"

import { useSelector } from "react-redux"



const BottomNav = () => {
    const {cartItems,cartTotal,cartShopName} = useSelector(state => state.cart)

    const router=useRouter()

    function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
    }
 
    return (
       
        <div className="w-full md:hidden ">
            <section className="block fixed inset-x-0 bottom-0 z-10 ">
    
          {/* <div suppressHydrationWarning={true} className="text-center bg-slate-200">
          {cartItems.length!==0&&
          <Link href="/cart" >
              <a className="w-full " >go to cart</a>
             
          </Link>
          }</div> */}

            
            {/* <div suppressHydrationWarning={true}  className="flex shadow-test rounded-b-primary rounded-t-full bg-gradient-to-br from-pri-orange via-mid-orange to-pri-yellow  w-full z-10  px-20">
{cartItems.length!==0&&
              <Link href="/cart" >
                  <a className="flex justify-between w-full">
              <p className=" text-white font-semibold text-center" > Total - {cartTotal}</p>
              <p className=" text-white font-semibold text-center" >Go to cart</p>
              </a>
              </Link>  
              }
            </div> */}
             <div suppressHydrationWarning={true}>
            {cartItems.length!==0&&
              <Link href="/cart" >
            
            <div  className="flex shadow-test rounded-b-primary justify-between rounded-t-full bg-gradient-to-br from-pri-orange via-mid-orange to-pri-yellow  w-full  py-3 px-20">
              <p className=" text-white font-semibold text-center" > Total - {cartTotal} <span className="text-sm"> ({cartShopName})</span></p>
              <p className=" text-white font-semibold text-center" >Go to cart</p>
             
            </div>
            </Link>
            }
            </div>

       <div className="backdrop-blur-3xl bg-white/50 border-t-2 py-3 flex justify-between"> 
<Link href="/" >
       <a className="w-full focus:text-pri-orange  justify-center inline-block text-center self-center ">
        <CakeIcon className="inline-block mb-1 w-8"/>
        {/* <CakeIcon className="inline-block mb-1 w-8 "/> */}
        <span className="tab tab-home block text-xs">Food</span>
			</a>
            </Link>

            <Link href="/search" >
       <a className="w-full focus:text-pri-orange  justify-center inline-block text-center self-center ">
        <SearchIcon className={classNames(
                    router.pathname.includes("/search")?"text-pri-orange ":"","inline-block mb-1 w-8"
                  )}/>
        <span className="tab tab-home block text-xs">Search</span>
			</a>
            </Link>

              
            <Link href="/myAccount">
       <a className="w-full focus:text-pri-orange  justify-center inline-block text-center self-center ">
        <UserCircleIcon className={classNames(
                    router.pathname.includes("/myAccount")?"text-pri-orange ":"","inline-block mb-1 w-8"
                  )}/>
        <span className="tab tab-home block text-xs">Account</span>
			</a>
            </Link>



            <Link href="/superAdmin/shops" >
       <a className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center self-center ">
        <LibraryIcon className="inline-block mb-1 w-8"/>
        <span className="tab tab-home block text-xs">superAdmin</span>
			</a>
            </Link>
       </div>
            </section>
        </div>
    )
}

export default BottomNav
