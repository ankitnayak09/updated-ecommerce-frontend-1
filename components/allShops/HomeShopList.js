import SingleShopCard from "./SingleShopCard"
import { clearErrors, getAllShops } from "../../actions/shopAction"
import { useSelector,useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import AllShopsLoader from "../loading/AllShopsLoader"
import { toast } from "react-toastify"
import InfiniteScroll from "react-infinite-scroll-component";
import ShopList from "./ShopList"



// const products = [
//     {
//       id: 1,
//       name: 'Basic Teejhbjsh jh d dj dj jv  nvvnnbn b nv n',
//       href: '#',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//       imageAlt: "Front of men's Basic Tee in black.",
//       price: '$3',
//       color: 'Black'
//     },{
//       id: 2,
//       name: 'second shop Tee',
//       href: '#',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//       imageAlt: "Front of men's Basic Tee in black.",
//       price: '$13',
//       color: 'Black'
//   },
//   {
//       id: 3,
//       name: 'third shop',
//       href: '#',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//       imageAlt: "Front of men's Basic Tee in black.",
//       price: '$40',
//       color: 'Black',
//     },
//   {
//       id: 4,
//       name: 'third shop',
//       href: '#',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//       imageAlt: "Front of men's Basic Tee in black.",
//       price: '$40',
//       color: 'Blac',
//     },
//   {
//       id: 5,
//       name: 'third shop',
//       href: '#',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//       imageAlt: "Front of men's Basic Tee in black.",
//       price: '$40',
//       color: 'Black',
//     },
//   ]
const HomeShopList = () => {

  const dispatch=useDispatch();
  // const {error}=useSelector(state => state.shops)
  const {location}=useSelector(state => state.user)
  const {loading,error,shops,shopCount,page}=useSelector(state => state.shops)

  // const executedRef=useRef(false);
 
  // const [page,setpage]=useState(1);
  const [pageSize,setpageSize]=useState(3)
  // const [shops,setshops]=useState([])
  // const [loading,setloading]=useState(false)

  useEffect(() => {
    if(error){
   toast.error(error);
   dispatch(clearErrors);
    }
  // console.log(page)
    // if(executedRef.current){return};
    // if(page&&pageSize){
    //   dispatch(getAllShops(page,pageSize))
    //     }


    if(page==1){
      dispatch(getAllShops(page,pageSize,location))
        }

  // executedRef.current=true;
  }, [dispatch,error])


 const fetchMoreData = () => {
    // setpage(page+1),
  
    dispatch(getAllShops(page,pageSize,location))
    
    loading
  };
  
  // useEffect(() => {
    
  //   if(page==1){
  //     dispatch(getAllShops(page,pageSize))
  //       }
    
  // }, [])

    return (
      <>
        <div className="bg-white">
        <div className="max-w-2xl mx-auto pt-12 pb-52 px-4 sm:py-24 sm:px-6
        md:max-w-4xl lg:max-w-7xl lg:px-8">
          {/* <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Shops</h2> */}
  
            {/* {loading?(
              <AllShopsLoader/> 
              ):(
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
               
            {shops.map((shop) => (
  <SingleShopCard shop={shop} key={shop._id}/>
             
            ))}
          </div>
        )} */} 
           <InfiniteScroll
          dataLength={shops.length}
          next={fetchMoreData}
          hasMore={shops.length!==shopCount}
          loader={<AllShopsLoader/>}
        >
            {/* <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

{shops.map((shop) => (
  <SingleShopCard shop={shop} key={shop._id}/>
             
            ))}
        </div> */}
        <ShopList shops={shops}/>
        </InfiniteScroll>
        </div>
      </div>


      </>
    )
}

export default HomeShopList
