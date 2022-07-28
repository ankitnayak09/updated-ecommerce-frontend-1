import axios from "axios";


export const getAllShops=(page,pageSize,location)=>async(dispatch)=>{
    try{
        dispatch({
            type:"ALL_SHOP_REQUEST",
        });
        let url=`http://localhost:4000/api/v1/shops?page=${page}&pageSize=${pageSize}`
        
        if(location.latitude&&location.longitude){
           
             url=`http://localhost:4000/api/v1/shops?page=${page}&pageSize=${pageSize}&latitude=${location.latitude}&longitude=${location.longitude}`
            
        }

        const{data}=await axios.get(url)
        // console.log(data)
        
 

        dispatch({ 
            type:"ALL_SHOP_SUCCESS",
            payload:data
        });

    }catch(error){
        console.log(error)      
        dispatch({ 
            type:"ALL_SHOP_FAIL",
            payload:error.response.data.message
        });
    }

}
export const getSuperAdminShops=(page,pageSize,shopStatus)=>async(dispatch)=>{
//    console.log(shopStatus)
    try{
        dispatch({
            type:"SUPER_ADMIN_ALL_SHOP_REQUEST",
        });
         let url=`http://localhost:4000/api/v1/shops/superAdmin?page=${page}&pageSize=${pageSize}`

         if(shopStatus){
        
        if(shopStatus!=="All shops"){
           
             url=`http://localhost:4000/api/v1/shops/superAdmin?page=${page}&pageSize=${pageSize}&shopStatus=${shopStatus}`
            
        }else{
            url=`http://localhost:4000/api/v1/shops/superAdmin?page=${page}&pageSize=${pageSize}`
        }
    }
        // console.log(url)

        const{data}=await axios.get(url,{withCredentials: true})
        // console.log(data)
        
 

        dispatch({ 
            type:"SUPER_ADMIN_ALL_SHOP_SUCCESS",
            payload:data
        });

    }catch(error){
        console.log(error)      
        dispatch({ 
            type:"SUPER_ADMIN_ALL_SHOP_FAIL",
            payload:error.response.data.message
        });
    }

}
// export const getCategoryShops=(page,pageSize,category)=>async(dispatch)=>{
//     try{
//         dispatch({
//             type:"CATEGORY_SHOP_REQUEST",
//         });
        
//         const {data}=await axios.get(`http://localhost:4000/api/v1/shops?page=${page}&category=${category}&pageSize=${pageSize}`)
//         // console.log(data)
        
        
        
//         // console.log(data)

//         dispatch({ 
//             type:"CATEGORY_SHOP_SUCCESS",
//             payload:data
//         });

//     }catch(error){
//         console.log(error)      
//         dispatch({ 
//             type:"CATEGORY_SHOP_FAIL",
//             payload:error.response.data.message
//         });
//     }

// }
export const getSearchedShops=(page,pageSize,query)=>async(dispatch)=>{
    try{
        dispatch({
            type:"SEARCH_SHOP_REQUEST",
        });
      
        const{data}=await axios.get(`http://localhost:4000/api/v1/shops/advSearch?page=${page}&keyword=${query}&pageSize=${pageSize}`)
        // console.log(data)
        
 

        dispatch({ 
            type:"SEARCH_SHOP_SUCCESS",
            payload:data
        });

    }catch(error){
        console.log(error)      
        dispatch({ 
            type:"SEARCH_SHOP_FAIL",
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
export const adminShopDetails=(shopId)=>async(dispatch)=>{
    try{
        dispatch({
            type:"ADMIN_SHOP_DETAILS_REQUEST",
        });
        // console.log(shopId)

        const{data}=await axios.get(`http://localhost:4000/api/v1/shop/${shopId}/admin`,{withCredentials: true})
  
        dispatch({
            type:"ADMIN_SHOP_DETAILS_SUCCESS",
            payload:data
        });

    }catch(error){

        dispatch({
            type:"ADMIN_SHOP_DETAILS_FAIL",
            payload:error.response.data.message
        });
    }

}
export const createUpdateShopReview=(reviewData,shopId,orderId)=>async(dispatch)=>{
    try{
        dispatch({
            type:"NEW_SHOP_REVIEW_REQUEST",
        });
        // console.log(shopId)
        const config={headers:{"Content-Type":"application/json"},withCredentials: true}

        const{data}=await axios.put(`http://localhost:4000/api/v1/shop/${shopId}/review`,reviewData,config)
        const{orderdata}=await axios.put(`http://localhost:4000/api/v1/order/${orderId}/review`,reviewData,config)

  
        dispatch({
            type:"NEW_SHOP_REVIEW_SUCCESS",
            payload:data.success
        });

    }catch(error){

        dispatch({
            type:"NEW_SHOP_REVIEW_FAIL",
            payload:error.response.data.message
        });
    }

}



//create shop
export const createShop=(shopData)=>async(dispatch)=>{
    try{
        dispatch({
            type:"NEW_SHOP_REQUEST",
        });
        // console.log(shopId)
        const config={headers:{"Content-Type":"application/json"},withCredentials: true}

        const{data}=await axios.post(`http://localhost:4000/api/v1/shop/new`,shopData,config)
      

  
        dispatch({
            type:"NEW_SHOP_SUCCESS",
            payload:data
        });

    }catch(error){

        dispatch({
            type:"NEW_SHOP_FAIL",
            payload:error.response.data.message
        });
    }

}





//update shop-admin
export const updateShop=(shopData,shopId)=>async(dispatch)=>{
    try{
        dispatch({
            type:"UPDATE_SHOP_REQUEST",
        });
        // console.log(shopId+productData+productId)
        const config={headers:{"Content-Type":"application/json"},withCredentials: true}


        const{data}=await axios.put(`http://localhost:4000/api/v1/shop/${shopId}`,shopData,config)
      

  
        dispatch({
            type:"UPDATE_SHOP_SUCCESS",
            payload:data
        });

    }catch(error){

        dispatch({
            type:"UPDATE_SHOP_FAIL",
            payload:error.response.data.message
        });
    }

}


//update shop- superAdmin
export const updateShopSuperAdmin=(shopData,shopId)=>async(dispatch)=>{
    try{
        dispatch({
            type:"SUPER_ADMIN_UPDATE_SHOP_REQUEST",
        });
        // console.log(shopId+productData+productId)
        const config={headers:{"Content-Type":"application/json"},withCredentials: true}


        const{data}=await axios.put(`http://localhost:4000/api/v1/shop/${shopId}/superAdmin`,shopData,config)
      

  
        dispatch({
            type:"SUPER_ADMIN_UPDATE_SHOP_SUCCESS",
            payload:data
        });

    }catch(error){

        dispatch({
            type:"SUPER_ADMIN_UPDATE_SHOP_FAIL",
            payload:error.response.data.message
        });
    }

}



export const clearSearch=()=>async(dispatch)=>{
    dispatch({type:"CLEAR_SEARCH"})
}



// clearrr error
export const clearErrors=()=>async(dispatch)=>{
    dispatch({type:"CLEAR_ERRORS"})
}