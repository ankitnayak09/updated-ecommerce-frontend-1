import axios from "axios";

export const googleSignIn=(tokenId)=>async(dispatch)=>{
    try{
        dispatch({
            type:"GOOGLE_SIGNIN_REQUEST",
        });
        // console.log(tokenId)
        const config={headers:{"Content-Type":"application/json"},withCredentials: true}

        const{data}=await axios.post(`http://localhost:4000/api/v1/googleSignIn`,{tokenId},config)
   
        dispatch({
            type:"GOOGLE_SIGNIN_SUCCESS",
            payload:data.user
        });

    }catch(error){
// console.log(error) 
        dispatch({
            type:"GOOGLE_SIGNIN_FAIL",
            payload:error.response.data.message
        });
    }

}


// load user
export const loadUser=()=>async(dispatch)=>{
    try{
        dispatch({type:"LOAD_USER_REQUEST"});
        

        const {data}=await axios.get(
            `http://localhost:4000/api/v1/me`,{withCredentials: true}
          
        );
        dispatch({type:"LOAD_USER_SUCCESS",payload:data.user});
    }catch(error){
     
        dispatch({type:"LOAD_USER_FAIL",payload:error.response.data.message});
    }
}


// logout user
export const logout=()=>async(dispatch)=>{
    try{
        
        
        await axios.get(
            `http://localhost:4000/api/v1/logout`,{withCredentials: true}
            
            );
            dispatch({type:"LOGOUT_SUCCESS"});
  
    }catch(error){
     
        dispatch({type:"LOGOUT_FAIL",payload:error.response.data.message});
    }
}




// clearrr error
export const clearErrors=()=>async(dispatch)=>{
    dispatch({type:"CLEAR_ERRORS"})
}