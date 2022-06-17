import { useRouter } from "next/router"
import { useSelector,useDispatch } from "react-redux"
import { useEffect,useState } from "react"

import { toast } from "react-toastify"
import { clearErrors, getShopDetails } from "../../actions/shopAction"
// import { getShopProducts } from "../../actions/productActions"
import SingleProductCard from "../../components/products/SingleProductCard"
import { Disclosure,Popover } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { usePopper } from 'react-popper';

const Shop = () => {
    const router=useRouter();
    const shopId=router.query.shopId


    const dispatch=useDispatch();
    const {loading,error,shop,groupProducts,categories}=useSelector(state => state.shopDetails)
    // const {loading:shopLoading,error:shopError,products}=useSelector(state => state.products)
 
    useEffect(() => {
      if(error){
     toast.error(error);
     dispatch(clearErrors());
      }
if(shopId) {
    dispatch(getShopDetails(shopId));
    // dispatch(getShopProducts(shopId))
}  

    }, [dispatch,error,shopId])



    // this is for popper.js for menu placement
    let [referenceElement, setReferenceElement] = useState()
    let [popperElement, setPopperElement] = useState()
    let { styles, attributes } = usePopper(referenceElement, popperElement,{placement:"left-start"})
 
    return (
        <>
        {loading?("loading"):(
        <>
            {shop.name}

<div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
      {groupProducts.map((groupListItem)=>(
        <Disclosure defaultOpen="true" key={groupListItem.category} >
          {({ open }) => (
            <div id={`${groupListItem.category}`}>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>{groupListItem.category}</span>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className=" pt-4 pb-2 ">
                  {groupListItem.products.map((product)=>
              <SingleProductCard key={product._id} product={product}/>
            )}
          
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
            ))}
      </div>
    </div>


    <Popover className="fixed -right-3  z-10 -bottom-4" > 
      <Popover.Button ref={setReferenceElement} className=" bg-slate-700 rounded-full  text-white  px-6 py-8 ">Menu</Popover.Button>

      <Popover.Panel      ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}    className=" bg-yellow-400 z-10">
        <div className="flex flex-col">
                    {categories.map((cat)=>(
          <a key={cat} className="p-2" href={"#"+`${cat}`}>{cat}</a>
          ))}
        </div>

      </Popover.Panel>
    </Popover>
            
        </>
        )}
        </>
    )
}

export default Shop
