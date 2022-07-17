import SingleShopCard from "../allShops/SingleShopCard"
import { clearErrors, getCategoryShops } from "../../actions/shopAction"
import { useSelector,useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import AllShopsLoader from "../loading/AllShopsLoader"
import { toast } from "react-toastify"
import InfiniteScroll from "react-infinite-scroll-component";
import { useRouter } from "next/router"
import ShopList from "../allShops/ShopList"
import axios from "axios"
import Image from "next/image"


const CategoryShopList = () => {

    const dispatch=useDispatch();
    const router=useRouter();
    let category= router.query.category
    // const {loading,error,shops,shopCount,page}=useSelector(state => state.categoryShops)
  
    
    const [page,setpage]=useState(1);
    const [loading,setloading]=useState(false);
    const [shopCount,setshopCount]=useState(0);
    const [pageSize,setpageSize]=useState(3)
    const [shops,setshops]=useState([])
 
    // useEffect(() => {
    //   if(error){
    //  toast.error(error);
    //  dispatch(clearErrors);
    //   }

   
    // // if(page==1){
    // //     dispatch(getCategoryShops(page,pageSize,category))
    // //       }
  
    // }, [dispatch,error,router])
  
  
   const fetchMoreData = async() => {
    // dispatch(getCategoryShops(page,pageSize,category))
    setpage(page+1)
    let url=`http://localhost:4000/api/v1/shops?page=${page+1}&category=${category}&pageSize=${pageSize}`
    setloading(true);
    const {data}=await axios.get(url)
    // console.log(shops.length+",,"+shopCount)
    setshops(shops.concat(data.shops))
    setshopCount(data.shopCount)
    setloading(false);
    // this.setState({loading:false})
    
    };

    useEffect(() => {
       const runfunction=async()=>{

           
           
           let url=`http://localhost:4000/api/v1/shops?page=${page}&category=${category}&pageSize=${pageSize}`
           setloading(true);
           const {data}=await axios.get(url)
           setshops(data.shops)
           setshopCount(data.shopCount)
           setloading(false);
        }
        if(category){
        runfunction()
        }
    }, [category])



    return (
        <>
        <div className="bg-white">
          {/* <div className="w-full max-w-2xl aspect-square relative"> */}
            <Image src={`/categoryImg/${category}.png` }
           
            layout="responsive"
            width="2000px"
            height="2400px"
            />
          {/* </div> */}
        {/* <div className="max-w-2xl mx-auto pb-16 pt-4 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"> */}

<div className="bg-white z-10 relative  rounded-t-primary shadow-myOrderTop border-b-2 border-gray-300 -mt-8 pb-16 pt-4 px-4">

          {/* <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 ">Shops</h2> */}
  
      
           <InfiniteScroll
          dataLength={shops.length}
          next={fetchMoreData}
          hasMore={shops.length!==shopCount}
          loader={<AllShopsLoader/>}
        >
        <ShopList shops={shops}/>
        </InfiniteScroll>
        </div>
      {/* </div> */}
      </div>


      </>
    )
}

export default CategoryShopList
