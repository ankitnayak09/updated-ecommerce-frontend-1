import axios from "axios";


// export const getShopProducts=(shopId)=>async(dispatch)=>{
//     try{
//         dispatch({
//             type:"SHOP_PRODUCTS_REQUEST",
//         });
//         // console.log(shopId)

//         const{data}=await axios.get(`http://localhost:4000/api/v1/${shopId}/products`)
  
//         dispatch({
//             type:"SHOP_PRODUCTS_SUCCESS",
//             payload:data.groupProducts
//         });

//     }catch(error){

//         dispatch({
//             type:"SHOP_PRODUCTS_FAIL",
//             payload:error.response.data.message
//         });
//     }

// }



// clearrr error
export const clearErrors=()=>async(dispatch)=>{
    dispatch({type:"CLEAR_ERRORS"})
}