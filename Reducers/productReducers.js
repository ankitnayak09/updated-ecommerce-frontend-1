import { createReducer } from "@reduxjs/toolkit";


// export const shopProductsReducer=createReducer({groupProducts:[]},{
//     SHOP_PRODUCTS_REQUEST:(state)=>{
//         state.loading=true;
//         state={...state};
//     },
//     SHOP_PRODUCTS_SUCCESS:(state,action)=>{
//         state.loading=false;
//         state.groupProducts=action.payload
//     },
//     SHOP_PRODUCTS_FAIL:(state,action)=>{
//         state.loading=false;
//         state.error=action.payload
//     },
//     CLEAR_ERRORS:(state,action)=>{
//         state={...state};
//         state.error=null
//     },

// })