import axios from "axios";


export const getAllShops=()=>async(dispatch)=>{
    try{
        dispatch({
            type:"ALL_SHOP_REQUEST",
        });

        const{data}=await axios.get("http://localhost:4000/api/v1/shops")
  
        dispatch({
            type:"ALL_SHOP_SUCCESS",
            payload:data.shops
        });

    }catch(error){

        dispatch({
            type:"ALL_SHOP_FAIL",
            payload:error.response.data.message
        });
    }

}
export const getShopDetails=(shopId)=>async(dispatch)=>{
    try{
        dispatch({
            type:"SHOP_DETAILS_REQUEST",
        });
        // console.log(shopId)

        const{data}=await axios.get(`http://localhost:4000/api/v1/shop/${shopId}`)
  
        dispatch({
            type:"SHOP_DETAILS_SUCCESS",
            payload:data
        });

    }catch(error){

        dispatch({
            type:"SHOP_DETAILS_FAIL",
            payload:error.response.data.message
        });
    }

}





// clearrr error
export const clearErrors=()=>async(dispatch)=>{
    dispatch({type:"CLEAR_ERRORS"})
}