import Image from "next/image"
import Link from "next/link"
import { HeartIcon,ShareIcon} from '@heroicons/react/outline'
import { StarIcon} from '@heroicons/react/solid'
import ShopShareModal from "./ShopShareModal"
import { useDispatch, useSelector } from "react-redux"
import { updateFavourites } from "../../actions/userAction"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const SingleShopCard = ({shop}) => {
  const {user}  = useSelector(state =>state.user)
  const dispatch = useDispatch()
  // console.log(shop)
    return ( 
        <div key={shop._id} className="group relative flex md:flex-col sm:w-full lg:flex-col">
        <div className="w-1/2 h-36  md:w-full md:h-72  aspect-w-1 aspect-h-1 rounded-medium overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none relative" >
          {/* <img
            src={shop?.images[0]?.url}
            alt={shop?.name}
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          /> */}

      
{/* <img
   
   src={shop?.images[0]?.url}
   alt={shop?.name}
 /> */}

<Image
   
  //  src={shop?.images[0]?.public_id}
  
   src={shop?.images[0]?.url}
  //  alt={shop?.name}
 layout="fill"
 objectFit="cover"
// height="80px"
// width="80px"
 />


  
        </div>
        <div className=" w-full pl-4 md:pl-0 md:pt-2 flex flex-col md:flex justify-center  ">
          <div className="flex justify-between">
            <div>
            
            <p className="text-base font-semibold text-primary-text-gray">
              <Link href={`/shop/${shop._id}`}>
              <a >
                {/* <span aria-hidden="true" className="absolute inset-0" /> */}
                {shop.name} 
              </a>
              </Link>
            </p>
            <p className="text-sm flex text-sec-text-gray">{shop.ratings} <StarIcon className="w-4 fill-pri-orange"/> </p>

            {/* <p  className="mt-1 text-sm text-gray-700">{shop.description}</p> */}
            <div className="flex flex-wrap ">
            {shop.categories.map((cat,i)=>{
              return(
              <p key={i} className="mt-1 text-sm text-gray-500">{cat} ,</p>
              )
            })}
            </div>
         

            </div>
          <div className="bg-sec-light-orange   px-2 py-1 rounded-full flex flex-col self-center justify-between">
            <HeartIcon onClick={(e)=>{e.preventDefault(),dispatch(updateFavourites(shop._id))}} className={classNames(
                    user?.favourites.includes(shop._id)&&"fill-pri-orange ","w-6 my-2 cursor-pointer text-sec-orange"
                  )}/>
            {/* <ShareIcon className="w-4 my-2 cursor-pointer text-sec-orange"/> */}
            <ShopShareModal shopId={shop._id}/>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SingleShopCard

