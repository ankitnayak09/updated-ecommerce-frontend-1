import { useRouter } from "next/router"
import { useEffect, useState,Fragment  } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { adminOrdersHistory, clearErrors } from "../../../actions/orderAction"

import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon,FilterIcon } from '@heroicons/react/solid'

import OrderHistoryCard from "./OrderHistoryCard"
import AllShopsLoader from "../../loading/AllShopsLoader"
import InfiniteScroll from "react-infinite-scroll-component"

const filters = [
    { name: 'last 24 hrs',days:"1" },
    { name: 'last 1 week',days:"7" },
    { name: 'last 1 month',days:"30" },
    { name: 'All orders' },
  
  ]

const OrderHistory = () => {
    const dispatch = useDispatch()
    const router=useRouter()

    const shopId=router.query.shopId

    const [selected, setSelected] = useState()
    const [pageSize,setpageSize]=useState(6)

    const {loading,error,orders,page,ordersCount} = useSelector(state => state.adminOrdersHistory)

    useEffect(() => {
        if(error){
            toast.error(error);
            dispatch(clearErrors())
        
        }
        if(shopId&&page==1){
     dispatch(adminOrdersHistory(page,pageSize,shopId,selected?.days))
        }
    }, [dispatch,toast,error,shopId,selected])

    useEffect(() => {
      if(selected){
      dispatch({type:"CLEAR_ADMIN_ORDERS_HISTORY"})
   
      dispatch(adminOrdersHistory(page=1,pageSize,shopId,selected?.days))
      }
    }, [selected])

    const fetchMoreData = () => {
      // setpage(page+1),
    
      dispatch(adminOrdersHistory(page,pageSize,shopId,selected?.days))
      
      loading
    };
    return (
        
             <div className="bg-white z-10 relative   rounded-t-primary shadow-myOrderTop border-b-2 border-gray-300 -mt-10">
                 <div className="flex px-6 py-9 justify-between">
                 <h1 className=" text-3xl  font-bold tracking-tight text-pri-text-gray ">Orders History</h1>




                 <div className=" ">
                     
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
            <Listbox.Options className="absolute right-0  mt-1 max-h-60  overflow-auto rounded-md bg-white z-20 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
          dataLength={orders.length}
          next={fetchMoreData}
          hasMore={orders.length!==ordersCount}
          loader={<AllShopsLoader/>}
        >
               <div className="grid grid-cols-1 gap-y-10  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-28 ">
               {/* <div className="max-w-2xl pb-28 mx-auto space-y-8 sm:px-4 lg:max-w-4xl lg:px-0"> */}
              {/* {loading===false?(orders.map((order)=>(
                <OrderHistoryCard key={order._id} order={order}/>
              ))):(<AllShopsLoader/>)} */}
                {orders.map((order) => (
     <OrderHistoryCard key={order._id} order={order}/>)
      )}
                  {/* {loading?(<div className="w-full px-6"> <AllShopsLoader/></div>):(orders.map((order) => (
     <OrderHistoryCard key={order._id} order={order}/>)
      ))} */}

            </div>
            </InfiniteScroll>
        </div>
    )
}

export default OrderHistory
