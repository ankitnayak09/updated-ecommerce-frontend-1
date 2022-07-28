import { ChevronLeftIcon } from "@heroicons/react/solid"
import Link from "next/link"
import { useRouter } from "next/router"
import CategoryShopList from "../../../components/categories/CategoryShopList"

const category = () => {
    const router=useRouter()
    return (
        <div>
               {/* <Link href={`/`}>
                   <div className="sticky top-0 bg-white">
                   <button className="sticky z-30 cursor-pointer top-0 left-0 p-2 bg-sec-light-orange m-2 rounded-tr-[21px] rounded-bl-[21px] rounded-tl-small rounded-br-small drop-shadow-xl">
              <ChevronLeftIcon className="w-8 fill-pri-text-gray"/>
              </button>
              </div>
              </Link> */}

<div className="fixed top-0 justify-between hidden md:flex bg-white w-full rounded-b-primary p-1 border-b-2 drop-shadow-sm z-30">
            <div className="flex">
           
             <Link href={`/`}>
                   <button className=" cursor-pointer  p-2 bg-sec-light-orange m-2 rounded-tr-[21px] rounded-bl-[21px] rounded-tl-small rounded-br-small drop-shadow-xl">
              <ChevronLeftIcon className="w-8 fill-pri-text-gray"/>
              </button>
              </Link>
           
              <div class=" text-3xl px-6 self-center font-bold tracking-tight text-pri-text-gray">
  <span class="bg-clip-text text-transparent bg-gradient-to-br from-pri-orange via-mid-orange to-pri-yellow">
        {router.query.category}
  </span>

              </div>
              </div>
     
        </div>

     <CategoryShopList/>
        </div>
    )
}

export default category
