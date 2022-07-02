import axios from "axios";

export const myOrders=()=>async(dispatch)=>{
    try{
        dispatch({
            type:"MY_ORDERS_REQUEST",
        });
        const config={withCredentials: true}


        const{data}=await axios.get(`http://localhost:4000/api/v1/orders/me`,config)
  
        dispatch({
            type:"MY_ORDERS_SUCCESS",
            payload:data.orders
        });

    }catch(error){

        dispatch({
            type:"MY_ORDERS__FAIL",
            payload:error.response.data.message
        });
    }

}




export const getOrderDetails=(orderId,shopId)=>async(dispatch)=>{
    try{
        dispatch({
            type:"ORDER_DETAILS_REQUEST",
        });
        const config={withCredentials: true}


        const{data}=await axios.get(`http://localhost:4000/api/v1/${shopId}/order/${orderId}`,config)
        // console.log(data)
  
        dispatch({
            type:"ORDER_DETAILS_SUCCESS",
            payload:data.order
        });

    }catch(error){

        dispatch({
            type:"ORDER_DETAILS_FAIL",
            payload:error.response.data.message
        });
    }

}





// clearrr error
export const clearErrors=()=>async(dispatch)=>{
    dispatch({type:"CLEAR_ERRORS"})
}