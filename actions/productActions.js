import axios from "axios";


export const getAdminProducts=(shopId)=>async(dispatch)=>{
    try{
        dispatch({
            type:"ADMIN_PRODUCTS_REQUEST",
        });
        // console.log(shopId)

        const {data}=await axios.get(`http://localhost:4000/api/v1/${shopId}/admin/products`,{withCredentials:true})
  
        dispatch({
            type:"ADMIN_PRODUCTS_SUCCESS",
            payload:data
        });

    }catch(error){
// console.log(error)
        dispatch({
            type:"ADMIN_PRODUCTS_FAIL",
            payload:error.response.data.message
        });
    }

}

//create product-admin
export const createProduct=(productData,shopId)=>async(dispatch)=>{
    try{
        dispatch({
            type:"NEW_PRODUCT_REQUEST",
        });
        // console.log(shopId)
        const config={headers:{"Content-Type":"application/json"},withCredentials: true}

        const{data}=await axios.post(`http://localhost:4000/api/v1/${shopId}/product/new`,productData,config)
      

  
        dispatch({
            type:"NEW_PRODUCT_SUCCESS",
            payload:data
        });

    }catch(error){

        dispatch({
            type:"NEW_PRODUCT_FAIL",
            payload:error.response.data.message
        });
    }

}


//update product-admin
export const updateProduct=(productData,shopId,productId)=>async(dispatch)=>{
    try{
        dispatch({
            type:"UPDATE_PRODUCT_REQUEST",
        });
        // console.log(shopId+productData+productId)
        const config={headers:{"Content-Type":"application/json"},withCredentials: true}

     
        const{data}=await axios.put(`http://localhost:4000/api/v1/${shopId}/product/${productId}`,productData,config)
     
  
        dispatch({
            type:"UPDATE_PRODUCT_SUCCESS",
            payload:data
        });

    }catch(error){

        dispatch({
            type:"UPDATE_PRODUCT_FAIL",
            payload:error.response.data.message
        });
    }

}
//delete product-admin
export const deleteProduct=(shopId,productId)=>async(dispatch)=>{
    try{
        dispatch({
            type:"DELETE_PRODUCT_REQUEST",
        });
        // console.log(shopId+productData+productId)
        const config={headers:{"Content-Type":"application/json"},withCredentials: true}


        const{data}=await axios.delete(`http://localhost:4000/api/v1/${shopId}/product/${productId}`,config)
      

  
        dispatch({
            type:"DELETE_PRODUCT_SUCCESS",
            payload:data
        });

    }catch(error){

        dispatch({
            type:"DELETE_PRODUCT_FAIL",
            payload:error.response.data.message
        });
    }

}




// clearrr error
export const clearErrors=()=>async(dispatch)=>{
    dispatch({type:"CLEAR_ERRORS"})
}