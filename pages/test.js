
import { useSelector } from "react-redux"
import Test from "../components/Test"
import { wrapper } from "../store"
import {getAllShops} from "../actions/shopAction"
import axios from "axios";


export async function getServerSideProps(context) {
 
    //   const shopId=context.query
    //   console.log(shopId)
    //    {shopId&&
    //   console.log(`http://localhost:4000/api/v1/shop/${shopId}`)
    // }
    //   const{data}=await axios.get(`http://localhost:4000/api/v1/shop/629c6a14ff4e0a1707f895ea`)

      const res = await fetch(`http://localhost:4000/api/v1/shop/629c6a14ff4e0a1707f895ea`)
  const data = await res.json()

    
      return { props: {
        
        shop:data.shop.name,
        
         } }
    }
    



const test = ({shop}) => {

    return (
        <div>
            {/* <ShopCard/> */}
            {/* <Test/> */}
        <h2>testingggg</h2>
        <h1>
            {shop}
            </h1>
        </div>
    )
}; 

 
// export const getServerSideProps=wrapper.getServerSideProps((store)=>async()=>{
//     // // const {loading,error,user}=useSelector(state => state.user)
//     // // console.log("bhbb");   
//     // store.dispatch(getAllShops())      
//     // return{ 
//     //     props:{}
//     // }   
// }) 


export default test