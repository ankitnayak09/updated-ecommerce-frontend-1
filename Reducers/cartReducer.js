import { createReducer } from "@reduxjs/toolkit";

let cartInitialState={
    cartItems:[],
    cartShop:{},
    cartShopMid:{},
    cartShopName:{},
    cartShopTimings:{},
    cartTotal:0,
    orderInfo:{}}
if (typeof window !== 'undefined') {
 cartInitialState={
    cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],

    cartTotal:localStorage.getItem("cartTotal")?Number( localStorage.getItem("cartTotal") ):0,

    cartShop:localStorage.getItem("cartShop")?JSON.parse(localStorage.getItem("cartShop")):{},
    // orderInfo:{},

    cartShopMid:localStorage.getItem("cartShopMid")?JSON.parse(localStorage.getItem("cartShopMid")):{},

    cartShopTimings:localStorage.getItem("cartShopTimings")?JSON.parse(localStorage.getItem("cartShopTimings")):{},
    // orderInfo:{},

    cartShopName:localStorage.getItem("cartShopName")?JSON.parse(localStorage.getItem("cartShopName")):{},
    orderInfo:{}
}

}
// console.log("aaaa")

export const cartReducer=createReducer(cartInitialState,{
    ADD_TO_CART:(state,action)=>{
       const item=action.payload;
    //    console.log(state.cartItems.reduce((acc,item)=>acc+item.quantity*item.price,0))

       const isItemExist=state.cartItems.find((i)=>i.product===item.product);
        state.cartShop=item.shop;
        state.cartShopMid=item.shop;
        state.cartShopMid=item.cartShopMid;
        state.cartShopName=item.cartShopName;
        state.cartShopTimings.cartShopOpenTime=item.cartShopOpenTime;
        state.cartShopTimings.cartShopCloseTime=item.cartShopCloseTime;
       if(isItemExist){
        //    return{
            //    state={...state},
               state.cartItems=state.cartItems.map((i)=>i.product===isItemExist.product?item:i)
        //    }
       }else{
        // return{
            // state={...state},
            state.cartItems=[...state.cartItems,item]
        // }
       };
       state.cartTotal=state.cartItems.reduce((acc,item)=>acc+item.quantity*item.price,0)
      
       
    },

    REMOVE_CART_ITEM:(state,action)=>{
        state.cartItems=state.cartItems.filter((i)=>i.product!==action.payload)
    },
    CLEAR_CART_LOCAL_STORAGE:(state,action)=>{
        state.cartItems=[],
        state.cartShop={},
        state.cartShopMid={},
        state.cartShopName={},
        state.cartTotal=0,
        state.orderInfo={}
        state.cartShopTimings={}
    },
    SAVE_ORDER_INFO:(state,action)=>{
        // console.log(action.payload.data)
        state.orderInfo.wantFoodAt=action.payload.WantAt
        state.orderInfo.suggestion=action.payload.Suggestion
    }


})