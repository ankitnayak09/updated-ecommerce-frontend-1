import { Fragment, useEffect, useState } from 'react'
import { Combobox, Dialog, Transition } from '@headlessui/react'
import { SearchIcon,CheckIcon,XCircleIcon } from '@heroicons/react/solid'
import {

  ExclamationCircleIcon, PhotographIcon,

} from '@heroicons/react/outline'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, getSearchedShops } from '../../actions/shopAction'
import { toast } from 'react-toastify'
import Link from 'next/link'
import Image from 'next/image'
import ListLoader from '../loading/ListLoader'
// import SingleProductCard from './SingleProductCard'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const AdvSearch = () => {
    const [query, setQuery] = useState('')
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)

    const {loading,error,shops,shopCount,products,productCount}=useSelector(state => state.searchShops)
    
    useEffect(() => {
        const pageSize=10
        const page=1
        
        if(error){
          toast.error(error);
          dispatch(clearErrors());
           }
      if(query.length>1){
      
        let timer = setTimeout(() => {

      
          dispatch( getSearchedShops(page,pageSize,query))
  
      }, 1000)

          // dispatch( getSearchedShops(page,pageSize,query))
      }
      if(query.length<1){
          dispatch( {type:"CLEAR_SEARCH_SHOP"})
      }
      // console.log(query)
      return () => clearTimeout(timer)
    }, [dispatch,error,query])
  
    // const filteredItems =query === ''? []: items.filter((item) => {
    //     return item.name.toLowerCase().includes(query.toLowerCase())||item.description.toLowerCase().includes(query.toLowerCase())||item.categories.find(cat=>cat.toLowerCase().includes(query.toLowerCase()))
    // })
    // console.log(filteredItems)
   
    // const boldSearchString=(str, substr)=>{
    //   var strRegExp = new RegExp(substr, 'g');
    //   return str.replace(strRegExp, '<b>'+substr+'</b>');
    // }
  
    return (<>
     <div className=" flex mx-auto md:max-w-2xl lg:max-w-3xl items-center  justify-center">
        <div
        //   type="button"
          onClick={()=>{setOpen(true)}}
          className="cursor-pointer flex justify-between  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 
          w-full text-center border-dashed border-[3px] border-pri-orange rounded-3xl  py-3 px-3 mx-3 mb-8"
        >
            <p className="text-md font-bold text-pri-orange self-center">Search for shops,dishes...</p>
            <span className="bg-sec-light-orange pri-button rounded-small px-10 py-2 m-1">
          <SearchIcon className="w-6 fill-pri-orange   "/>
          </span>
        </div>
        
      </div>
      <Transition.Root show={open} as={Fragment} afterLeave={() => setQuery('')}>
        <Dialog as="div" className="fixed inset-0 z-30 overflow-y-auto p-4 sm:p-6 md:p-20" onClose={()=>{
            dispatch( {type:"CLEAR_SEARCH_SHOP"})
            setOpen(false)}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 my-backdrop-blur transition-opacity" />
          </Transition.Child>
  
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Combobox
              as="div"
              className="mx-auto max-w-xl transform divide-y  overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
              onChange={() => {}}
            //   onChange={(item) => (window.location = item)}
            >
              <div className="flex justify-between">
                <SearchIcon
                  className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
             
                <Combobox.Input
                  className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm" 
                  placeholder="Search for Products,Shops..."
                  onChange={(event) => setQuery(event.target.value)}
                />
                    <XCircleIcon onClick={()=>{setOpen(false)}}
                  className=" self-center mr-4 w-7 text-pri-orange"
        
                />
              </div>
  
              {/* {filteredItems.length > 0 && (
                <Combobox.Options static className="max-h-[600px] scroll-py-3 overflow-y-auto ">
                  {filteredItems.map((item) => (
                    <Combobox.Option
                      key={item._id}
                      value={item}
                      className={({ active }) =>
                        classNames('flex cursor-default select-none rounded-xl pt-3 pl-2')
                        // classNames('flex cursor-default select-none rounded-xl p-3', active && 'bg-gray-100')
                      }
                    >
                      {({ active }) => (
                        <>
                     
                           <SingleProductCard product={item}/>
                        </>
                      )}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              )} */}



                  {loading===true?(<ListLoader/>):( (products.length > 0||shops.length > 0) && (
                <Combobox.Options static className="max-h-[600px] scroll-py-3 overflow-y-auto ">
                      {shops.length > 0 &&shops.map((shop) => (
              <Link href={`/shop/${shop._id}`}  key={shop._id}>
              <Combobox.Option
               
                value={shop}
          
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-4 pl-0 pr-9',
                    // active ? 'bg-indigo-600 text-white' : 
                    'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <div className="flex items-center">
                      {/* <img src={shop.images[0]?.url} alt="" className="h-6 w-6 flex-shrink-0 rounded-full" /> */}
                      <div className="w-16 h-12 relative ">
                      <Image
                      src={shop.images[0]?.url}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-br-medium"
                      />
                      </div>
                      <div className="flex flex-col">
                      <span className={classNames('ml-3 truncate', selected && 'font-semibold')}>
                       {shop.name}</span>
                      <span className="font-thin ml-3">shop</span>
                      </div>
                    </div>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-indigo-600'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
             </Link>
            ))}




{products.length > 0 &&products.map((product) => (
   <Link href={`/shop/${product.shop}`}  key={product._id}>
              <Combobox.Option
               
                value={product}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-4 pl-0 pr-9',
                    // active ? 'bg-indigo-600 text-white' :
                     'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <div className="flex items-center">
                      {/* <img src={product.image?.url} alt="" className="h-6 w-6 flex-shrink-0 rounded-full" /> */}
                      <div className="w-16 h-12 relative flex justify-center ">
                     {product.image?.url ? (<Image
                      src={product.image?.url}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-br-medium"
                      />):(<PhotographIcon className="w-8 text-gray-300 self-center "/>)}
                      </div>
                      <div className="flex flex-col">
                      <span className={classNames('ml-3 truncate', selected && 'font-semibold')}>{product.name}</span>
                      <span className="font-thin ml-3">product</span>
                      </div>
                    </div>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-indigo-600'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
              </Link>
            ))}
                </Combobox.Options>
              ))}
  
              {query.length>1 &&loading==false &&products.length === 0 && shops.length === 0 && (
                <div className="py-14 px-6 text-center text-sm sm:px-14">
                  <ExclamationCircleIcon
                    type="outline"
                    name="exclamation-circle"
                    className="mx-auto h-6 w-6 text-gray-400"
                  />
                  <p className="mt-4 font-semibold text-gray-900">No results found</p>
                  <p className="mt-2 text-gray-500">No products/shops found for this search term. Please try again.</p>
                </div>
              )}
            </Combobox>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
  
  </>  )
}

export default AdvSearch