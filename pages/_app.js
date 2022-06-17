import '../styles/globals.css'
import {wrapper} from "../store"
import Layout from '../components/layout/Layout'
import { useEffect} from 'react';
import { useDispatch,useSelector} from 'react-redux'
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { loadUser } from '../actions/userAction'


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

 const {user,loading}=useSelector(state=>state.user)
 
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(loadUser())
  },[])


  return (
    <>

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
{/* {loading?("loadin the user"):( */}
<Layout >
        <Component {...pageProps} />
        </Layout>
        {/* )} */}
        </GoogleOAuthProvider>
     
</>  )
}

// export default MyApp;
export default wrapper.withRedux(MyApp);
