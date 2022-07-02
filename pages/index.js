import { useEffect } from "react";
import HomeShopList from "../components/allShops/HomeShopList";
import AllCategories from "../components/categories/AllCategories";
import BottomNav from "../components/layout/BottomNav"
import Navbar from "../components/layout/Navbar";
// import ScriptLoader from "next/script";

export default function Home() {



//   <ScriptLoader id="onerror-id" src="https://accounts.google.com/gsi/client" onLoad={()=>{
//   console.log("hiiiii")
  
// }}  /> 
  

  return (
    
   <div>
   <Navbar/>
   <h2 className="text-2xl max-w-2xl px-4 font-bold tracking-tight text-gray-900 my-10">What do u want...</h2>
<AllCategories/>
<HomeShopList/>
<BottomNav/>
</div>
  )
}
