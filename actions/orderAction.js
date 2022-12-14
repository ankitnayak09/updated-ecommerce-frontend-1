import axios from "axios";

export const myOrders=(page,pageSize)=>async(dispatch)=>{
    try{
        dispatch({
            type:"MY_ORDERS_REQUEST",
        });
        const config={withCredentials: true}


        const{data}=await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/v1/orders/me?page=${page}&pageSize=${pageSize}`,config)
  
        dispatch({
            type:"MY_ORDERS_SUCCESS",
            payload:data
        });

    }catch(error){

        dispatch({
            type:"MY_ORDERS_FAIL",
            payload:error.response.data.message
        });
    }

}
export const myActiveOrders=()=>async(dispatch)=>{
    try{
        dispatch({
            type:"MY_ACTIVE_ORDERS_REQUEST",
        });
        const config={withCredentials: true}


        const{data}=await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/v1/activeOrders/me`,config)
 
        dispatch({
            type:"MY_ACTIVE_ORDERS_SUCCESS",
            payload:data
        });

    }catch(error){

        dispatch({
            type:"MY_ACTIVE_ORDERS_FAIL",
            payload:error.response.data.message
        });
    }

}
export const adminAllOrders=(shopId)=>async(dispatch)=>{
    try{
        dispatch({
            type:"ADMIN_ORDERS_REQUEST",
        });
        const config={withCredentials: true}


        const{data}=await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/v1/${shopId}/orders/`,config)
  
        dispatch({
            type:"ADMIN_ORDERS_SUCCESS",
            // payload:data.orders
            payload:data
        });

    }catch(error){
console.log(error)
        dispatch({
            type:"ADMIN_ORDERS_FAIL",
            payload:error.response.data.message
        });
    }

}
export const adminOrdersHistory=(page,pageSize,shopId,numOfDays)=>async(dispatch)=>{
    try{
        dispatch({
            type:"ADMIN_ORDERS_HISTORY_REQUEST",
        });
        const config={withCredentials: true}
let url;
// console.log(numOfDays)
if(numOfDays){
    url=`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/v1/${shopId}/ordersHistory?numOfDays=${numOfDays}&page=${page}&pageSize=${pageSize}`
}else{
    url=`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/v1/${shopId}/ordersHistory?page=${page}&pageSize=${pageSize}`
}


        const{data}=await axios.get(url,config)
  
        dispatch({
            type:"ADMIN_ORDERS_HISTORY_SUCCESS",
            // payload:data.orders
            payload:data
        });

    }catch(error){

        dispatch({
            type:"ADMIN_ORDERS_HISTORY_FAIL",
            payload:error.response.data.message
        });
    }

}





//update order-admin
export const updateOrder=(orderData,shopId,orderId)=>async(dispatch)=>{
    try{
        dispatch({
            type:"UPDATE_ORDER_REQUEST",
        });
        // console.log(shopId+productData+productId)
        const config={headers:{"Content-Type":"application/json"},withCredentials: true}


        const{data}=await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/v1/${shopId}/order/${orderId}`,orderData,config)
      

  
        dispatch({
            type:"UPDATE_ORDER_SUCCESS",
            payload:data
        });

    }catch(error){

        dispatch({
            type:"UPDATE_ORDER_FAIL",
            payload:error.response.data.message
        });
    }

}


export const deleteOrders=(shopId,orderId)=>async(dispatch)=>{
    try{
        dispatch({
            type:"DELETE_ORDERS_REQUEST",
        });
        const config={withCredentials: true}


        const{data}=await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/v1/${shopId}/order/${orderId}`,config)
  
        dispatch({
            type:"DELETE_ORDERS_SUCCESS",
            payload:data.success
        });

    }catch(error){

        dispatch({
            type:"DELETE_ORDERS_FAIL",
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


        const{data}=await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/v1/${shopId}/order/${orderId}`,config)
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





// push order
export const pushNewOrder=(order)=>async(dispatch)=>{
// console.log(order)
    dispatch({type:"PUSH_NEW_ORDER",
    payload:order
})
}

// push order to startCookingOrder
export const updateStartCookingOrders=(order)=>async(dispatch)=>{
// console.log(order)
    dispatch({type:"UPDATE_START_COOKING_ORDER",
    payload:order
})
}

// clearrr error
export const clearErrors=()=>async(dispatch)=>{
    dispatch({type:"CLEAR_ERRORS"})
}