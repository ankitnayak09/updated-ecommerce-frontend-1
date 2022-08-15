import { useEffect, useState,Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getSuperAdminShops, updateShopSuperAdmin } from "../../../actions/shopAction";
import AllShopsLoader from "../../loading/AllShopsLoader";
import SingleShopCard from "./SingleShopCard";



import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon,FilterIcon } from '@heroicons/react/solid'

const filters = [
  { name: 'All shops' },
  { name: 'pending' },
  { name: 'approved' },

]

const AllShops = () => {
  
  const [selected, setSelected] = useState()

  const dispatch=useDispatch();
  const {loading,error,shops,shopCount,page}=useSelector(state => state.superAdminShops)

  const {loading:updateShopLoading,error:updateShopError,success} = useSelector(state => state.superAdminShopUpdate)
  const [pageSize,setpageSize]=useState(8)

  useEffect(() => {
    if(error){
   toast.error(error);
   dispatch(clearErrors);
    }

    if(page==1){
   
      dispatch(getSuperAdminShops(page,pageSize,selected?.name))
        }

  // executedRef.current=true;
  }, [dispatch,error])



  useEffect(() => {
    if(selected){
    dispatch({type:"CLEAR_SUPER_ADMIN_SHOP"})
 
    dispatch(getSuperAdminShops(page=1,pageSize,selected?.name))
    }
  }, [selected])



    useEffect(() => {
        if(updateShopError){
            toast.error(updateShopError);
            dispatch(clearErrors())
        }
        if(success===true){
            dispatch({type:"SUPER_ADMIN_UPDATE_SHOP_RESET"})
            dispatch({type:"CLEAR_SUPER_ADMIN_SHOP"})
      
        dispatch(getSuperAdminShops(page=1,pageSize,selected?.name))

        }
    }, [dispatch,toast,updateShopError,success])

    const handleApprove=(shopId)=>{
        // e.preventDefault()
        const shopData={
            shopStatus:"approved",
            isActive:true
        }
        dispatch(updateShopSuperAdmin(shopData,shopId))
    }
    const handleReject=(shopId)=>{
        // e.preventDefault()
        const shopData={
            shopStatus:"rejected",
            isActive:false
        }
        dispatch(updateShopSuperAdmin(shopData,shopId))
    }

    const fetchMoreData = () => {
        // setpage(page+1),

      
        dispatch(getSuperAdminShops(page,pageSize,selected?.name))
        
        loading
      };

    return (
        <div className="bg-white  z-10 relative   rounded-t-primary shadow-myOrderTop -mt-10 pt-10 pb-24">

<div className="flex px-7 justify-between">

<h1 className=" text-3xl   font-bold tracking-tight text-pri-text-gray ">Shops</h1>

<div className="w-36 ">
  <Listbox value={selected} onChange={setSelected}>
    
        <div className="relative mt-1">
      
          <Listbox.Button className="relative flex w-full cursor-pointer rounded-full bg-sec-light-orange py-2 px-4 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="flex-grow my-auto text-pri-orange text-center text-lg font-bold ">{selected?selected.name:"Filter"}</span>
            <span className="">
              <FilterIcon
                className=" w-8 fill-pri-orange text-gray-400"
                aria-hidden="true"
              /> 
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white z-20 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filters.map((filter, filterIdx) => (
                <Listbox.Option
                  key={filterIdx}
                  className={({ active }) =>
                    `relative cursor-default  select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-gray-50 text-pri-orange' : 'text-gray-900'
                    }`
                  }
                  // value={filter.name==="All shops"?null:filter}
                  value={filter}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {filter.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-pri-orange">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>

      </div>


</div>
            
            <InfiniteScroll
          dataLength={shops.length}
          next={fetchMoreData}
          hasMore={shops.length!==shopCount}
          // loader={<AllShopsLoader/>}
        >
            <div className="my-6 grid grid-cols-1 gap-y-10 gap-x-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
{shops.map((shop) => (
  <SingleShopCard handleApprove={handleApprove} handleReject={handleReject} shop={shop} key={shop._id}/>
             
            ))}
              {loading===true&& <AllShopsLoader/>}

        </div>
</InfiniteScroll>
            
        </div>
    )
}

export default AllShops
