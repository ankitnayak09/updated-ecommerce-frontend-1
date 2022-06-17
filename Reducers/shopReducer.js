import { createReducer } from "@reduxjs/toolkit";



export const shopReducer=createReducer({shops:[]},{
    ALL_SHOP_REQUEST:(state)=>{
        state.loading=true;
        state.shops=[]
    },
    ALL_SHOP_SUCCESS:(state,action)=>{
        state.loading=false;
        state.shops=action.payload
    },
    ALL_SHOP_FAIL:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },
    CLEAR_ERRORS:(state,action)=>{
        state={...state};
        state.error=null
    },

})
export const shopDetailsReducer=createReducer({shop:{},groupProducts:[],categories:[]},{
    SHOP_DETAILS_REQUEST:(state)=>{
        state.loading=true;
        state={...state};
    },
    SHOP_DETAILS_SUCCESS:(state,action)=>{
        state.loading=false;
        state.shop=action.payload.shop;
        state.groupProducts=action.payload.groupProducts;
        state.categories=action.payload.categories;
    },
    SHOP_DETAILS_FAIL:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },
    CLEAR_ERRORS:(state,action)=>{
        state={...state};
        state.error=null
    },

})


