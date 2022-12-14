import '../styles/globals.css'
import {wrapper} from "../store"
// import Layout from '../components/layout/Layout'
import { useEffect, useState} from 'react';
import { useDispatch,useSelector} from 'react-redux'
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { loadUser } from '../actions/userAction'
import { useRouter } from 'next/router';
import LoadingBar from 'react-top-loading-bar'
import { useGeolocated } from 'react-geolocated';

import Image from 'next/image';
import { myActiveOrders } from '../actions/orderAction';

// function MyApp({ Component, pageProps }) {
//   const [showChild, setShowChild] = useState(false);
//   useEffect(() => {
//     setShowChild(true);
//   }, []);

//   if (!showChild) {
//     return null;
//   }

//   if (typeof window === 'undefined') {
//     return <></>;
//   } else {
//     return (
    
//        <Layout>
//         <Component {...pageProps} />
//         </Layout>
//     );
//   }
// }
function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0)
  // const [location, setLocation] = useState()
  const router=useRouter()
 const {user,loading,isAuthenticated}=useSelector(state=>state.user)
 
  const dispatch=useDispatch();

  const { coords, isGeolocationAvailable, isGeolocationEnabled} =
  useGeolocated({
      positionOptions: { 
          enableHighAccuracy: true,
          timeout: Infinity,
      },
      userDecisionTimeout: 5000,
  }); 
  
  // useEffect(()=>{  
  //   // console.log(location)
  //   if(location){
    
  //     // const location={
  //     //   latitude:coords.latitude,
  //     //   longitude:coords.longitude
  //     // }
    
  //     dispatch(loadUser(location))   
  //   }else{
  //     // console.log("hi")
  //     dispatch(loadUser())   
  //   }
  
  // },[location])
  useEffect(() => {
    dispatch(myActiveOrders())
    
}, [])

  useEffect(()=>{   

 
    if(isGeolocationAvailable==true&&isGeolocationEnabled==true&&coords){
      console.log("_app.js",coords)
      const location={ 
        latitude:coords.latitude,
        longitude:coords.longitude
      }
    
      dispatch(loadUser(location))  
      

      localStorage.setItem("userLocation",JSON.stringify({
        latitude:coords.latitude,
        longitude:coords.longitude
      }))
    } 
    if(isGeolocationAvailable==false||isGeolocationEnabled==false){
      dispatch(loadUser()) 
    }
  },[isGeolocationAvailable,isGeolocationEnabled,coords])

  

  // if (pageProps.protected==true  ) {
  // // console.log("here")
  // if(loading==true){
  //   return (
  //     <div> Loading...</div>
  //     // <Layout>Loading...</Layout>
  //   )}
  //   if(loading==false &&isAuthenticated==false ){
  //   router.push("/")
  //    &&isAuthenticated==false }
  // }

  useEffect(()=>{
    // dispatch(loadUser())
    router.events.on('routeChangeStart', ()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
    })
    
  },[router]) 
 




  return (
    <>

<LoadingBar
        color='#f11946'
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />
{loading==false?
   <GoogleOAuthProvider clientId="454780861603-r3tnk1o4oa7geftk4mpl49ps8okcmp55.apps.googleusercontent.com">
      <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>

{/* <Layout > */}
        <Component {...pageProps} />
        {/* </Layout> */}
      
        </GoogleOAuthProvider>
   :(
     <div className="flex flex-col h-screen bg-white w-full justify-center ">
     <div className="block  self-center ">
         <Image  src="/loading/dotsLoading.gif" alt="loading" width={"280px"} height={"280px"} />
     </div>
     <h1 className='text-center text-lg italic'>Loading, please wait</h1>
     </div>
   )  } 
</>  )
}

// export default MyApp;
export default wrapper.withRedux(MyApp);
