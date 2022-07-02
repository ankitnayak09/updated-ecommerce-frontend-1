import { ChevronLeftIcon } from "@heroicons/react/solid"
import Link from "next/link"
import CategoryShopList from "../../../components/categories/CategoryShopList"

const category = () => {
    return (
        <div>
               <Link href={`/`}>
                   <div className="absolute cursor-pointer top-0 left-0 z-10 p-2 bg-sec-light-orange m-2 rounded-tr-[21px] rounded-bl-[21px] rounded-tl-small rounded-br-small drop-shadow-xl">
              <ChevronLeftIcon className="w-8 fill-pri-text-gray"/>
              </div>
              </Link>
            <CategoryShopList/>
        </div>
    )
}

export default category
