
import { useSelector } from "react-redux"
import Test from "../components/Test"
import { wrapper } from "../store"
import {getAllShops} from "../actions/shopAction"

const test = () => {

    return (
        <div>
            {/* <ShopCard/> */}
            <Test/>
        </div>
    )
}; 

 
export const getServerSideProps=wrapper.getServerSideProps((store)=>async()=>{
    // // const {loading,error,user}=useSelector(state => state.user)
    // // console.log("bhbb");   
    // store.dispatch(getAllShops())      
    // return{ 
    //     props:{}
    // }   
}) 
export default test