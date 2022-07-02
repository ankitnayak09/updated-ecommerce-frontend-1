import { createReducer } from "@reduxjs/toolkit";

// const initialState={
//     shops:[]
// }

export const shopReducer=createReducer({shops:[],shopCount:0,page:1},{
// export const shopReducer=createReducer({shops:[]},{
    ALL_SHOP_REQUEST:(state)=>{
        state.loading=true;
        state=state
        // console.log(state.shops)
        
    },
    ALL_SHOP_SUCCESS:(state,action)=>{
        state.loading=false;
        // console.log("payload",action.payload)
        // console.log("concat",state.shops.concat(action.payload))
        // state.shops=[...state.shops,{...action.payload}]
        state.shops=state.shops.concat(action.payload.shops)
        state.shopCount=action.payload.shopCount
        state.page=state.page+1
        // state.shops=action.payload
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
// export const categoryShopReducer=createReducer({shops:[],shopCount:0,page:1},{
// // export const shopReducer=createReducer({shops:[]},{
//     CATEGORY_SHOP_REQUEST:(state)=>{
//         state.loading=true;
//         state=state
//         // console.log(state.shops)
        
//     },
//     CATEGORY_SHOP_SUCCESS:(state,action)=>{
//         state.loading=false;
//         // console.log("payload",action.payload)
//         // console.log("concat",state.shops.concat(action.payload))
//         // state.shops=[...state.shops,{...action.payload}]
//         state.shops=state.shops.concat(action.payload.shops)
//         state.shopCount=action.payload.shopCount
//         state.page=state.page+1
//         // state.shops=action.payload
//     },
//     CATEGORY_SHOP_FAIL:(state,action)=>{
//         state.loading=false;
//         state.error=action.payload
//     },
//     CATEGORY_SHOP_RESET:(state,action)=>{
//         state.shops=[];
//         state.shopCount=0;
//         state.page=1
//     },
//     CLEAR_ERRORS:(state,action)=>{
//         state={...state};
//         state.error=null
//     },

// })
export const searchShopReducer=createReducer({shops:[],shopCount:0,products:[],productCount:0},{
// export const shopReducer=createReducer({shops:[]},{
    SEARCH_SHOP_REQUEST:(state)=>{
        state.loading=true;
     
        
    },
    SEARCH_SHOP_SUCCESS:(state,action)=>{
        state.loading=false;
      
        // state.shops=state.shops.concat(action.payload.shops)
        state.shopCount=action.payload.shopCount
        state.productCount=action.payload.productCount
        state.shops=action.payload.shops
        state.products=action.payload.products
    },
    SEARCH_SHOP_FAIL:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },
    CLEAR_SEARCH_SHOP:(state,action)=>{
        state.shopCount=0
        state.shops=[]
        state.productCount=0
        state.products=[]
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
export const newShopReviewReducer=createReducer({},{
    NEW_SHOP_REVIEW_REQUEST:(state)=>{
        state.loading=true;
        // state={...state};
    },
    NEW_SHOP_REVIEW_SUCCESS:(state,action)=>{
        state.loading=false;
        state.success=action.payload;
    
    },
    NEW_SHOP_REVIEW_FAIL:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },
    NEW_SHOP_REVIEW_RESET:(state,action)=>{
        state.loading=false;
        state.success=false
    },
    CLEAR_ERRORS:(state,action)=>{
        state={...state};
        state.error=null
    },

})


