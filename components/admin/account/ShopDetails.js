import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from '@headlessui/react'
import { toast } from "react-toastify";
import { adminShopDetails, clearErrors, getShopDetails, updateShop } from "../../../actions/shopAction";
import EditShopModal from "../shops/EditShopModal";
import { StarIcon } from "@heroicons/react/solid";

const ShopDetails = () => {
    const dispatch = useDispatch()
    const router=useRouter()

    const shopId=router.query.shopId

    const {loading,error,shop} = useSelector(state => state.shopDetails)
    const {orders} = useSelector(state => state.adminOrdersHistory)

    const [enabled, setEnabled] = useState(true)


    useEffect(() => {
        if(error){
            toast.error(error);
            dispatch(clearErrors())
         
        }
        if(shopId){
     dispatch(adminShopDetails(shopId))
        }
    }, [dispatch,toast,error,shopId])

    useEffect(() => {
        setEnabled(shop.isActive)
      }, [shop])


      const updateShopActive=(e)=>{
          

        setEnabled(!enabled)
        const shopData={
          isActive:!enabled
        }
        dispatch(updateShop(shopData,shopId))
         
        }

    return (
       
             <div className="sticky top-0  bg-gradient-to-br pb-16 from-pri-orange via-mid-orange md:pt-24 to-pri-yellow">
                 <div className="flex  justify-between p-4">

            <EditShopModal/>
            <div className="flex"> <h1 className=" text-xl self-center  mr-4 font-bold  text-sec-light-orange ">{shop.name}</h1>

            <Switch
        checked={enabled}
        // checked={enabled}
        onChange={updateShopActive}
        // onChange={setEnabled}
        className={`${enabled ? 'bg-success-green' : 'bg-slate-300'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
</div>
            </div>

        <div className="flex w-96   mx-auto p-4 bg-pri-orange/40 rounded-tr-medium rounded-bl-medium rounded-tl-small rounded-br-small justify-between my-8 text-white"> 
        <span className="font-bold text-center text-3xl  flex flex-col">12 <p className="font-light text-base">Active Orders</p> </span>
  
        <span className=" border-x-2 px-7 font-bold text-center text-3xl  flex flex-col"><p className="flex"> {shop.ratings} <StarIcon className="w-9 "/> </p> <p className="font-light text-base">{shop?.reviews?.length} ratings</p> </span>

        <span className="font-bold text-center text-3xl  flex flex-col">{orders.length} <p className="font-light text-base">Total orders</p> </span>

      
        </div>


            </div>
     
    )
}

export default ShopDetails
