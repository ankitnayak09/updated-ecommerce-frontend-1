import { ChevronLeftIcon } from "@heroicons/react/solid"
import Link from "next/link"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { allFavourites, clearErrors } from "../../actions/userAction";
import ShopList from "../allShops/ShopList";
import AllShopsLoader from "../loading/AllShopsLoader";

const Favourites = () => {
const dispatch = useDispatch()

const {error,favourites,user}=useSelector(state => state.user)

    useEffect(() => {
        if(error){
       toast.error(error);
       dispatch(clearErrors());
        }
   
    
          dispatch(allFavourites())
            
    
      }, [dispatch,error,user.favourites])

    return (
        <div>
             <Link href={`/myAccount`}>
                
                <button className="fixed z-30   top-0 left-0 p-2 bg-sec-light-orange m-2 rounded-tr-[21px] rounded-bl-[21px] rounded-tl-small rounded-br-small drop-shadow-xl">
           <ChevronLeftIcon className="w-8 fill-pri-text-gray"/>
           </button>
          
           </Link>


           <h1 className="text-3xl px-4 pt-28 font-bold  text-gray-900 ">Favourites</h1>
           <div className="px-4 pb-36">
          {favourites?( <ShopList shops={favourites}/>):(<AllShopsLoader/>)}
          </div>
        </div>
    )
}

export default Favourites
