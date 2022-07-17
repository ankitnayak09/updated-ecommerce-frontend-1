import { createReducer } from "@reduxjs/toolkit";


export const adminProductsReducer=createReducer({products:[]},{
    ADMIN_PRODUCTS_REQUEST:(state)=>{
        state.loading=true;
        state={...state};
    },
    ADMIN_PRODUCTS_SUCCESS:(state,action)=>{
        state.loading=false;
        state.products=action.payload.groupProducts;
        state.unGroupProducts=action.payload.unGroupProducts;
        state.categories=action.payload.categories;
    },
    ADMIN_PRODUCTS_FAIL:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },
    ADMIN_ERRORS:(state,action)=>{
        state={...state};
        state.error=null
    },

})


export const newProductReducer=createReducer({product:{}},{
    NEW_PRODUCT_REQUEST:(state)=>{
        state.loading=true;
        // state={...state};
    },
    NEW_PRODUCT_SUCCESS:(state,action)=>{
        state.loading=false;
        state.success=action.payload.success;
        state.product=action.payload.product;
    
    },
    NEW_PRODUCT_FAIL:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },
    NEW_PRODUCT_RESET:(state,action)=>{
        state.loading=false;
        state.success=false
    },
    CLEAR_ERRORS:(state,action)=>{
        
        state.error=null
    },

})



export const updateProductReducer=createReducer({},{
    UPDATE_PRODUCT_REQUEST:(state)=>{
        state.loading=true;
        // state={...state};
    },
    UPDATE_PRODUCT_SUCCESS:(state,action)=>{
        state.loading=false;
        state.success=action.payload.success;
        state.product=action.payload.product;
    
    },
    UPDATE_PRODUCT_FAIL:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },
    UPDATE_PRODUCT_RESET:(state,action)=>{
        state.loading=false;
        state.success=false
    },


    DELETE_PRODUCT_REQUEST:(state)=>{
        state.loading=true;
        // state={...state};
    },
    DELETE_PRODUCT_SUCCESS:(state,action)=>{
        state.loading=false;
        state.isDeleted=action.payload.success;
      
    },
    DELETE_PRODUCT_FAIL:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },
    DELETE_PRODUCT_RESET:(state,action)=>{
        state.loading=false;
        state.isDeleted=false
    },
  
    CLEAR_ERRORS:(state,action)=>{
        
        state.error=null
    },

})