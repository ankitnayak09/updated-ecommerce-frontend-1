import { createReducer } from "@reduxjs/toolkit";


let cartInitialState={
    location:{},
    user:{}
  }
// if (typeof window !== 'undefined') {
//  cartInitialState={
//     location:localStorage.getItem("userLocation")?JSON.parse(localStorage.getItem("userLocation")):{},
//     user:{}

// }
// }


export const userReducer=createReducer(cartInitialState,{
    // LOAD_USER_LOCATION:(state,action)=>{
    //     console.log(action.payload)
    //     state.location=action.payload
    // },

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
      
        if(action.payload.location){
            state.location=action.payload.location
        }
        state.loading=false;
        state.isAuthenticated=true,
        state.user=action.payload.user
        state.adminOf=action.payload.admin
    },
    LOAD_USER_FAIL:(state,action)=>{
    
        state.loading=false;
        state.isAuthenticated=false
        state.user=null
       
    },


    USER_FAVOURITES_REQUEST:(state)=>{
      
    },
    USER_FAVOURITES_SUCCESS:(state,action)=>{
     
     
        state.isFavouritesUpdated=true,
        state.user=action.payload.user
        
    },
    USER_FAVOURITES_FAIL:(state,action)=>{
    
          
    },

    ALL_FAVOURITES_SUCCESS:(state,action)=>{

        state.favourites=action.payload.favourites
        
    },

    USER_FAVOURITES_FAIL:(state,action)=>{
    
          state.error=action.payload
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