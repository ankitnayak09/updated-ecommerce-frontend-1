import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { ArrowRightIcon,PlusIcon } from '@heroicons/react/solid'
import Link from "next/link"
import { loadUser, logout } from "../../actions/userAction"
import { HeartIcon } from "@heroicons/react/outline"
import { useGeolocated } from "react-geolocated"
import { useEffect } from "react"
import { toast } from "react-toastify"


const MyProfile = () => {
    const {user,adminOf,loading,isAuthenticated}=useSelector(state=>state.user)
    const {isDeleted}=useSelector(state=>state.updateShop)
    const {error,success}= useSelector(state => state.newShop);
     const dispatch = useDispatch()

     const { coords, isGeolocationAvailable, isGeolocationEnabled} =
     useGeolocated({
         positionOptions: { 
             enableHighAccuracy: true,
             timeout: Infinity,
         },
         userDecisionTimeout: 5000,
     }); 

     useEffect(() => {
      // console.log(success)
        if(isDeleted||success){
            if(isDeleted){
                toast.success("Shop deleted, please reload"),
                dispatch({type:"DELETE_SHOP_RESET"});
            }
            if(success){
                toast.success("shop created");
            dispatch({type:"NEW_SHOP_RESET"});
            }
            if(isGeolocationAvailable==true&&isGeolocationEnabled==true&&coords){
                console.log("_app.js",coords)
                const location={ 
                  latitude:coords.latitude,
                  longitude:coords.longitude
                }
              
                dispatch(loadUser(location))  
          
                localStorage.setItem("userLocation",JSON.stringify({
                  latitude:coords.latitude,
                  longitude:coords.longitude
                }))
              } 
            //   if(isGeolocationAvailable==false||isGeolocationEnabled==false){
                else{
                dispatch(loadUser()) 
              }
        }
       }, [dispatch,isDeleted,success])

    return ( 
        <>
        {loading===false&&
        <div className="pt-28  pb-24 sticky top-0   bg-gradient-to-br from-pri-orange via-mid-orange to-pri-yellow flex flex-col  ">

<div className="flex justify-between px-4 pb-8">

<button onClick={()=>{dispatch(logout())}} className=" cursor-pointer border-dashed  rounded-small px-4 py-1   border-[3px] border-[#ECECEC] text-[#FFEFF0] flex justify-center">
               Log out
            </button>
            <Link href="/myAccount/myFavourites">
<button  className=" cursor-pointer border-dashed px-2 rounded-small py-1   border-[3px] border-[#ECECEC] text-[#FFEFF0] flex justify-center">
                Favourites <HeartIcon className="w-5 self-center fill-white ml-2"/> 
            </button></Link>
            </div>
            <div className=" md:flex-row-reverse md:flex w-full">
        <div className="flex bg-sec-light-orange h-36 md:h-44 rounded-l-full ml-4 py-3 pl-3 flex-grow self-center ">
            <div className="aspect-square h-full rounded-full relative ">
              {/* {loading===false&&isAuthenticated===true&&   */}
                      <Image src={user?.avatar}
                      layout="fill"
                    //   height={"1000px"}
                    //   width={"1000px"}
                      className="rounded-full "
                      />
                {/* }  */}
                
            </div>
            <div className="flex flex-col self-center pl-4 w-full">
<p className="border-b border-sec-orange pb-1 ">Hello <span className="font-bold"> {user.name}</span>👋</p>
<p className="border-b border-sec-orange pb-1 mt-3">Role - <span className="font-bold"> {user.isSuperAdmin===true?"superAdmin":(user.admin===[]?"User":"Admin")}</span></p>
<p className="border-b border-sec-orange pb-1 mt-3">{user.email}</p>
            </div>

        </div>
    
      <div className="flex relative md:my-auto md:w-2/5 bg-pri-orange/40 text-white mt-14 mx-4 py-4 pl-4 rounded-tl-md rounded-br-md rounded-bl-medium rounded-tr-medium">

<div>

            <p className="font-bold py-2 pl-10">Your shops</p>
            </div>

            <div className="divide-y-2  divide-white/40 flex-grow  pl-5 ">
                 {adminOf.length!==0 ?(adminOf.map((rev)=>
                 <Link key={rev._id} href={`/${rev._id}/admin/orders`}>
                <div className="py-2 cursor-pointer flex justify-between">{rev.name} <ArrowRightIcon className="w-6 ml-2 mr-4"/> </div> 
                </Link>
                )):( <p className=" mt-2 italic  self-center">~no shops yet</p> )}
            </div>
            <Link href={`/newShop`}>
            <button className="bg-sec-light-orange m-2 rounded-tl-md rounded-br-md rounded-bl-medium rounded-tr-medium p-2 absolute bottom-0 left-0 text-pri-text-light-gray"><PlusIcon className="w-6  "/></button>
            </Link>
                </div>

             </div>
        </div>
   
    }   </>  )
}

export default MyProfile
