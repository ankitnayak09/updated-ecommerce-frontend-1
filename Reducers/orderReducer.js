import { createReducer } from "@reduxjs/toolkit";


export const newOrderReducer=createReducer({},{
    CREATE_ORDER_REQUEST:(state)=>{
        state.loading=true;
        
    },
    CREATE_ORDER_SUCCESS:(state,action)=>{
        state.loading=false;
        state.order=action.payload;
  
    },
    CREATE_ORDER_FAIL:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },
    CLEAR_ERRORS:(state,action)=>{
        
        state.error=null
    },

})




export const adminAllOrdersReducer=createReducer({futureOrders:[],startCookingOrders:[],notYetAcceptedOrders:[]},{
    ADMIN_ORDERS_REQUEST:(state)=>{
        state.loading=true;
  
    },
    ADMIN_ORDERS_SUCCESS:(state,action)=>{
        state.loading=false;
        // state.acceptedOrders=action.payload.acceptedOrders;
        state.futureOrders=action.payload.futureOrders;
        state.startCookingOrders=action.payload.startCookingOrders;
        state.notYetAcceptedOrders=action.payload.notYetAcceptedOrders;
  
    },
    ADMIN_ORDERS_FAIL:(state,action)=>{
        state.loading=false;
        state.error=action.payload 
    },
    PUSH_NEW_ORDER:(state,action)=>{
    //    console.log(action.payload.order)
    
        state.loading=false;
        // state.notYetAcceptedOrders=state.notYetAcceptedOrders.concat(action.payload.order);
        state.notYetAcceptedOrders.push(action.payload);
       
    },
    UPDATE_START_COOKING_ORDER:(state,action)=>{

        state.loading=false;
        state.futureOrders=[...state.futureOrders].filter((rev)=>rev._id!==action.payload._id)
        state.startCookingOrders.push(action.payload);
    },
    CLEAR_ERRORS:(state,action)=>{
        
        state.error=null
    },

})
export const adminOrdersHistoryReducer=createReducer({orders:[]},{
    ADMIN_ORDERS_HISTORY_REQUEST:(state)=>{
        state.loading=true;
  
    },
    ADMIN_ORDERS_HISTORY_SUCCESS:(state,action)=>{
        state.loading=false;
        // state.acceptedOrders=action.payload.acceptedOrders;
        state.orders=action.payload.ordersHistory;
     
  
    },
    ADMIN_ORDERS_HISTORY_FAIL:(state,action)=>{
        state.loading=false;
        state.error=action.payload 
    },
 
    CLEAR_ERRORS:(state,action)=>{
        
        state.error=null
    },

})

export const adminOrderReducer=createReducer({},{
    UPDATE_ORDER_REQUEST:(state)=>{
        state.loading=true;
        // state={...state};
    },
    UPDATE_ORDER_SUCCESS:(state,action)=>{
        state.loading=false;
        // state.isUpdated=false;
        state.isUpdated=action.payload.success;
        state.orderStatus=action.payload.orderStatus;
    
    },
    UPDATE_ORDER_FAIL:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },
    UPDATE_ORDER_RESET:(state,action)=>{
        state.loading=false;
        state.isUpdated=false
    },


    DELETE_ORDER_REQUEST:(state)=>{
        state.loading=true;
        // state={...state};
    },
    DELETE_ORDER_SUCCESS:(state,action)=>{
        state.loading=false;
        state.isDeleted=action.payload.success;
      
    },
    DELETE_ORDER_FAIL:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },
    DELETE_ORDER_RESET:(state,action)=>{
        state.loading=false;
        state.isDeleted=false
    },

    CLEAR_ERRORS:(state,action)=>{
        
        state.error=null
    },


})








export const myOrdersReducer=createReducer({orders:[]},{
    MY_ORDERS_REQUEST:(state)=>{
        state.loading=true;
        
    },
    MY_ORDERS_SUCCESS:(state,action)=>{
        state.loading=false;
        state.orders=action.payload;
  
    },
    MY_ORDERS_FAIL:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },
    CLEAR_ERRORS:(state,action)=>{
        
        state.error=null
    },

})

export const orderDetailsReducer=createReducer({order:{}},{
    ORDER_DETAILS_REQUEST:(state)=>{
        state.loading=true;
        
    },
    ORDER_DETAILS_SUCCESS:(state,action)=>{
        state.loading=false;
        state.order=action.payload;
  
    },
    ORDER_DETAILS_FAIL:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },
    CLEAR_ERRORS:(state,action)=>{
        
        state.error=null
    },

})