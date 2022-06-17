import { useEffect } from "react";
import HomeShopList from "../components/allShops/HomeShopList";
import AllCategories from "../components/categories/AllCategories";
import BottomNav from "../components/layout/BottomNav"
// import ScriptLoader from "next/script";

export default function Home() {



//   <ScriptLoader id="onerror-id" src="https://accounts.google.com/gsi/client" onLoad={()=>{
//   console.log("hiiiii")
  
// }}  /> 
  

  return (
    
   <div>
   
<AllCategories/>
<HomeShopList/>
<BottomNav/>
</div>
  )
}
