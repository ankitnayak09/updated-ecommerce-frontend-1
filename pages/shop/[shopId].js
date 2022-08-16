import { useRouter } from "next/router"
import { useSelector,useDispatch } from "react-redux"
import { useEffect,useState } from "react"
import Link from "next/link"
import { toast } from "react-toastify"
import { clearErrors, getShopDetails } from "../../actions/shopAction"
// import { getShopProducts } from "../../actions/productActions"
import SingleProductCard from "../../components/products/SingleProductCard"
import { Disclosure,Popover } from '@headlessui/react'
import { ChevronDoubleLeftIcon, ChevronDownIcon, ChevronLeftIcon, StarIcon } from '@heroicons/react/solid'
import { HeartIcon, SearchIcon } from '@heroicons/react/outline'
// import { usePopper } from 'react-popper';

import ProductSearch from "../../components/products/ProductSearch"
import ViewShopReviews from "../../components/reviews/ViewShopReviews"
import MenuModal from "../../components/allShops/MenuModal"
import axios from "axios"
import date from 'date-and-time';
import { updateFavourites } from "../../actions/userAction"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Shop = () => {
  // console.log(props)
    const router=useRouter();
    const shopId=router.query.shopId
    const [Liked, setLiked] = useState(user?.favourites.includes(shop._id))
    // const [isShopOpen, setisShopOpen] = useState()


    const dispatch=useDispatch();
    // const {loading,error}=useSelector(state => state.shopDetails)
    const {loading,error,shop,groupProducts,categories,isShopOpen}=useSelector(state => state.shopDetails)
    const {cartItems,cartTotal} = useSelector(state => state.cart)
    const {user} = useSelector(state => state.user)
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


    // useEffect(() => {
    //   if(shop.closeTime&&shop.openTime){
    //     const nowDate = new Date();
    //     // console.log(nowDate)
    //     const shopOpenDate=date.parse(date.format(nowDate, 'MMM DD YYYY') +" "+shop.openTime, 'MMM DD YYYY HH:mm');
    //     const shopCloseDate=date.parse(date.format(nowDate, 'MMM DD YYYY') +" "+shop.closeTime, 'MMM DD YYYY HH:mm');
         
    //   const openTimeDiff=  date.subtract(nowDate,shopOpenDate).toMinutes()
    //   const closeTimeDiff=  date.subtract(shopCloseDate,nowDate).toMinutes()
    
    //    if(openTimeDiff<0||closeTimeDiff<0){
    //     setisShopOpen(false)
      
    //   }else{
    //     setisShopOpen(true)
    //   }
    //   }
    // }, [shop])

  
 
    return (
        <>
        {/* {loading?("loading"):(
        <> */}
        <div className="flex justify-between bg-white  rounded-b-primary sticky top-0 border-b-2 drop-shadow-sm z-30  py-3 px-3">
        <Link href={`/`}>
                   <button className=" cursor-pointer  p-2 bg-sec-light-orange  rounded-tr-[21px] rounded-bl-[21px] rounded-tl-small rounded-br-small drop-shadow-xl">
              <ChevronLeftIcon className="w-8 fill-pri-text-gray"/>
              </button>
              </Link>
              <div className="flex  flex-col ">
          <p className='text-lg font-bold flex'>{shop.name} <HeartIcon onClick={()=>{setLiked(!Liked),dispatch(updateFavourites(shop._id))}} className={classNames(
                    Liked&&"fill-pri-orange ","w-8 ml-2 cursor-pointer text-sec-orange"
                  )}/></p>
          <p className="text-center text-secondary-text-gray text-xs">LPU</p>
        </div>
       
          <ProductSearch items={shop.products} isShopActive/>
 
              </div>


              <div className="flex justify-between mt-3">
                <div className=" m-5 w-44">
          <p className="text-2xl font-bold">  {shop.name}</p>

             <p className="mt-1 text-sm font-bold text-sec-text-gray mb-1">~ {shop?.description} ~ </p>

          <div className="flex flex-wrap italic">
            {shop?.categories?.map((cat,i)=>{
              return(
              <p key={i} className=" text-sm text-pri-text-gray">{cat} ,</p>
              )
            })}
            </div>
           
            </div>

            <div className="flex h-20 flex-grow self-center rounded-l-full bg-gradient-to-br from-pri-orange via-mid-orange to-pri-yellow pl-1 pt-1 pb-1">
              {/* <div className="rounded-full aspect-square flex flex-col justify-center h-full  bg-sec-orange">
              <p className="text-sm justify-center flex text-pri-text-gray font-semibold">
                {shop.ratings} <StarIcon className="w-4 fill-white"/> </p>
              </div> */}
              <ViewShopReviews/>
            <div className="mx-2 w-full  self-center text-right">
              {(isShopOpen===true&&shop.isActive)?(
              <p className="text-success-green text-sm  font-bold pb-1"> Open now</p>
              ):( <p className="text-gray-300  text-sm  font-bold"> Closed now</p>)}
              <p className="text-white text-xs "> {shop.openTime&&date.transform(shop.openTime, 'HH:mm', 'h:mm A')} (to)</p>
              <p className="text-white text-xs "> {shop.closeTime&&date.transform(shop.closeTime, 'HH:mm', 'h:mm A')}</p>
            </div>
            </div> 


            </div>


<div className="w-full px-0 pt-6 pb-11">
      <div className="mx-auto w-full max-w-lg rounded-2xl bg-white p-0">
      {groupProducts.map((groupListItem)=>(
        <Disclosure defaultOpen="true" key={groupListItem.category} >
          {({ open }) => (
            <div id={`${groupListItem.category}`}>
              <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4  text-left text-xl font-bold text-pri-text-light-gray  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-2xl">{groupListItem.category}</span>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  }  w-8 text-pri-text-light-gray`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className=" pt-1 pb-2 ">
                  {groupListItem.products.map((product)=>
              <SingleProductCard isShopActive={shop.isActive} isShopOpen={isShopOpen} key={product._id} product={product}/>
            )}
          
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
            ))}
      </div>
    </div>

{/* 
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
    </Popover> */}

    <MenuModal categories={categories}/>
    <div suppressHydrationWarning={true}>
            {cartItems.length!==0&&
              <Link href="/cart" >
            
            <div  className="flex cursor-pointer shadow-test rounded-b-primary justify-between rounded-t-full bg-gradient-to-br from-pri-orange via-mid-orange to-pri-yellow fixed bottom-0 w-full z-10 py-3 px-20">
              <p className=" text-white font-semibold text-center" > Total - {cartTotal}</p>
              <p className=" text-white font-semibold text-center" >Go to cart</p>
             
            </div>
            </Link>
            }
            </div>
      
        </>
    )
}






// export async function getServerSideProps(context) {
//   // Fetch data from external API
//   const shopId=context
//   console.log(shopId)
// //    {shopId&&
// //   console.log(`http://localhost:4000/api/v1/shop/${shopId}`)
// // }
//   // const{data}=await axios.get(`http://localhost:4000/api/v1/shop/${shopId}`)

//   return { props: {
    
//     // shop:data.shop,
//     // groupProducts:data.groupProducts,
//     // categories:data.categories,
//      } }
// }

export default Shop
