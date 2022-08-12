import axios from "axios"

// add to cart
export const addItemsToCart=(shopId,id,quantity)=>async(dispatch,getState)=>{
    // console.log(quantity)
   
    const {data}= await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/v1/${shopId}/product/${id}`,{withCredentials:true})
// console.log(data.productShopPaytmMid)
        dispatch({
            type:"ADD_TO_CART",
            
            payload:{
                product:data.product._id,
                name:data.product.name,
                cookingTime:data.product.cookingTime,
                price:data.product.price,
                image:data.product.image.url,
                stock:data.product.Stock,
                quantity,
                shop:data.product.shop,
                cartShopMid:data.productShopPaytmMid,
                cartShopName:data.productShopName,
                cartShopOpenTime:data.productShopOpenTime,
                cartShopCloseTime:data.productShopCloseTime,
            }
            
        });
      
        // let cartItems=getState().cart.cartItems;
        // localStorage.setItem("cart",JSON.stringify({shopId,cartItems}))
   localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
   localStorage.setItem("cartShop",JSON.stringify(getState().cart.cartShop))
   localStorage.setItem("cartShopMid",JSON.stringify(getState().cart.cartShopMid))
   localStorage.setItem("cartShopName",JSON.stringify(getState().cart.cartShopName))
   localStorage.setItem("cartShopTimings",JSON.stringify(getState().cart.cartShopTimings))
   localStorage.setItem("cartTotal",getState().cart.cartTotal)

  
    

}



// remove from cart
export const removeItemsFromCart=(id)=>async(dispatch,getState)=>{
    dispatch({
        type:"REMOVE_CART_ITEM",
        payload:id,
    })
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
 
}



// clear cartLocalStorage
export const clearCartLocalStorage=()=>async(dispatch,getState)=>{
    localStorage.removeItem("cartItems")
    localStorage.removeItem("cartShop")
    localStorage.removeItem("cartShopMid")
    localStorage.removeItem("cartShopName")
    localStorage.removeItem("cartTotal")
    localStorage.removeItem("cartShopTimings")
 
    dispatch({
        type:"CLEAR_CART_LOCAL_STORAGE",
      
    })
 
}
// save orderInfo
export const saveOrderInfo=(data)=>async(dispatch)=>{
   
    dispatch({
        type:"SAVE_ORDER_INFO",
        payload:data,
    })
 
}

