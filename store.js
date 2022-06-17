import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { HYDRATE,createWrapper } from "next-redux-wrapper";
// import { shopProductsReducer } from "./Reducers/productReducers";
import { shopDetailsReducer,  shopReducer } from "./Reducers/shopReducer";
import { userReducer } from "./Reducers/userReducer";



const combineReducer=combineReducers({
   
    shops:shopReducer,
    shopDetails:shopDetailsReducer,
    user:userReducer
    // products:shopProductsReducer
})

const masterReducer=(state,action)=>{
    if(action.type==HYDRATE){
        const nextState={
            ...state,
            ...action.payload
        }
        return nextState
    }else{
        return combineReducer(state,action)
    }
}

export const store=()=>configureStore({
    reducer:masterReducer,
});

export const wrapper=createWrapper(store,{debug:true});