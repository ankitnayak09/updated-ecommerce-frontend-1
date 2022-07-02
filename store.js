import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { HYDRATE,createWrapper } from "next-redux-wrapper";
import { cartReducer } from "./Reducers/cartReducer";
import { myOrdersReducer, newOrderReducer, orderDetailsReducer } from "./Reducers/orderReducer";
// import { shopProductsReducer } from "./Reducers/productReducers";
import { categoryShopReducer, newShopReviewReducer, searchShopReducer, shopDetailsReducer,  shopReducer } from "./Reducers/shopReducer";
import { userReducer } from "./Reducers/userReducer";



const combineReducer=combineReducers({
   
    shops:shopReducer,
    shopDetails:shopDetailsReducer,
    user:userReducer,
    cart:cartReducer,
    newOrder:newOrderReducer,
    myOrders:myOrdersReducer,
    orderDetails:orderDetailsReducer,
    searchShops:searchShopReducer,
    newShopReview:newShopReviewReducer,
    // categoryShops:categoryShopReducer
    // products:shopProductsReducer
})

// let initialState={
//     cart:{
//     cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]
//     }
// }

const masterReducer=(state,action)=>{
    if(action.type==HYDRATE){
        // console.log("hydrate",action.payload.shops)
        const nextState={
            ...state,
            ...action.payload
            // shopDetails:{
            //   shop:action.payload.shopDetails.shop
            // }
        }
        return nextState
    }else{
        return combineReducer(state,action)
    }
}

export const store=()=>configureStore({
    reducer:masterReducer,
});

export const wrapper=createWrapper(store,{debug:false});
// export const wrapper=createWrapper(store,{debug:true});