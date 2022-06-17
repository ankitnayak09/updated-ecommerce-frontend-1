import { createReducer } from "@reduxjs/toolkit";


export const userReducer=createReducer({user:{}},{
    GOOGLE_SIGNIN_REQUEST:(state)=>{
        state.loading=true;
        state.isAuthenticated=false
    },
    GOOGLE_SIGNIN_SUCCESS:(state,action)=>{
  
        state.loading=false;
        state.isAuthenticated=true,
        state.user=action.payload
    },
    GOOGLE_SIGNIN_FAIL:(state,action)=>{
    
        state.loading=false;
        state.isAuthenticated=false
        state.user=null,
        state.error=action.payload
    },


    LOAD_USER_REQUEST:(state)=>{
        state.loading=true;
        state.isAuthenticated=false
    },
    LOAD_USER_SUCCESS:(state,action)=>{
  
        state.loading=false;
        state.isAuthenticated=true,
        state.user=action.payload
    },
    LOAD_USER_FAIL:(state,action)=>{
    
        state.loading=false;
        state.isAuthenticated=false
        state.user=null
       
    },


    LOGOUT_SUCCESS:(state,action)=>{
  
        state.loading=false,
        state.isAuthenticated=false,
        state.user=null
    },
    LOGOUT_FAIL:(state,action)=>{
    
        state.loading=false;
        state.error=action.payload
       
    },





    CLEAR_ERRORS:(state,action)=>{
         
        state.error=null
    }, 

})