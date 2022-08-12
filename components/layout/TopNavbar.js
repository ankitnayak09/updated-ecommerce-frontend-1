import { Fragment, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon,SearchIcon, ChevronDownIcon,ChevronUpIcon,ShoppingCartIcon } from '@heroicons/react/outline'
import { LocationMarkerIcon } from '@heroicons/react/solid'
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors,googleSignIn, logout } from '../../actions/userAction';
import {GoogleLogin} from '@react-oauth/google';
import { toast } from 'react-toastify';
import NextOrdersSlider from '../myAccount/NextOrdersSlider';
import { useGeolocated } from 'react-geolocated';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const TopNavbar = () => {

  const {   isGeolocationEnabled} =
  useGeolocated({
      positionOptions: { 
          enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
  }); 

  const dispatch=useDispatch();
  const {loading,error,isAuthenticated,user}=useSelector(state => state.user)

  const {cartItems,cartShopName} = useSelector(state => state.cart)
 

  const responseSuccessGoogle=(response)=>{
    // console.log(response.credential);
    dispatch(googleSignIn(response.credential))
  }
  const responseErrorGoogle=(response)=>{
    // console.log(response);
    toast.error(response);

  }
  const logOut=()=>{
   
                    
 
 
      const beamsClient = new PusherPushNotifications.Client({
       instanceId: process.env.NEXT_PUBLIC_INSTANCE_ID
     });
     beamsClient.stop();
                            
       dispatch(logout());
       toast.success("logged out successfully")
     

  }

  useEffect(() => {
    if(error){
   toast.error(error);
   dispatch(clearErrors());
    }

  }, [dispatch,error,toast])


    return (
        
               <Disclosure as="nav" className="bg-white border-b-2 drop-shadow rounded-b-primary py-1 fixed z-30 w-full top-0  ">
      {({ open }) => (

        <>
          <div className="max-w-7xl mx-auto px-1  lg:px-3">
            <div className="relative flex items-center  h-16">
      
              {/* <div className=" flex items-center  justify-start  sm:justify-start"> */}
                <Link href="/">
                <div className="flex-shrink-0 ml-2 cursor-pointer flex items-center">
                  <img
                    className="block  h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
              
                </div>
                </Link>
             
              {/* </div> */}
        <div className="flex flex-col mx-auto md:ml-9">
        {isAuthenticated===true&&<>

          <p className='text-lg'>hello <span className="font-bold"> { user.name.split(' ')[0]}</span>👋</p>
          <p className="text-center flex text-secondary-text-gray text-sm">
          <LocationMarkerIcon className="w-4 fill-pri-orange mr-1"/>  {isGeolocationEnabled?("current location"):("please enable location access ")}
            </p>
    </>  }
        </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <Link href="/search" >
                <span className=" mx-1  py-2 px-4 rounded-full text-pri-text-light-gray cursor-pointer hover:bg-gray-100 hidden md:flex ">
                    <SearchIcon className="h-6 w-6 mr-1" />
                    Search
                </span>
                </Link>
                <Link href="/cart" >
                <span className=" mx-1  py-2 px-4 rounded-full text-pri-text-light-gray cursor-pointer hover:bg-gray-100 hidden md:flex ">
                  <span className="relative">
                  {cartItems.length!==0&&
                <span className="flex h-3 w-3 absolute right-0 -mt-1">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pri-orange opacity-75"></span>
  <span className="relative inline-flex rounded-full h-3 w-3 bg-pri-orange"></span>
</span>
}

                    <ShoppingCartIcon className="h-6 w-6 mr-1" />
                    </span>
                    Cart({cartItems.length})
                </span>
                </Link>
<Script
  src="https://js.pusher.com/beams/1.0/push-notifications-cdn.js"
 strategy="lazyOnload"
/>
                     {/* {isAuthenticated===true&&<button onClick={logOut} className="bg-yellow-300 p-2 ">logout</button>
} */}
                     {isAuthenticated===false&&             <GoogleLogin
          
          onSuccess={responseSuccessGoogle}
          onFailure={responseErrorGoogle}
          useOneTap
        
        />
}

  
                {/* Profile dropdown */}
                <Menu as="div" className="mx-3 hidden md:block relative">
                  <div>

                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      {/* <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      /> */}
                    {user&&
                      <Image src={user.avatar} height={"40px"} width={"40px"} className="rounded-full" />
                    }
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Link href="/myAccount"  >
                   <Menu.Item>
                   {({ active }) => (
                     <a
                className={classNames(active ? 'bg-gray-100' : '','block px-4 py-2 text-sm text-gray-700 cursor-pointer')}
                     
                   
                     >
                       My account
                     </a>
                   )}
                 </Menu.Item>
                     </Link>
                 {user?.isSuperAdmin===true&&
                     <Link href="/superAdmin/shops"  >
                   <Menu.Item>
                   {({ active }) => (
                     <a
                  // className="hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700"
                className={classNames(active ? 'bg-gray-100' : '','block px-4 py-2 text-sm text-gray-700 cursor-pointer')}
                     
                   
                     >
                       superAdmin account
                     </a>
                   )}
                 </Menu.Item>
                     </Link>
                   }
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            onClick={logOut}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Log out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
            


                <span
                 
                  className=" p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  {/* <span className="sr-only">View notifications</span> */}
               {isAuthenticated===true&&   <Disclosure.Button className=" text-pri-text-gray rounded-bl-md rounded-tr-md rounded-tl-medium rounded-br-medium bg-sec-light-orange p-2">
                  {open ? (
                    <ChevronUpIcon className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
                  )}
                 

                  </Disclosure.Button>
                  }
                </span>
  </div>
            </div>
          </div>

          <Disclosure.Panel className="">
          {/* <Disclosure.Panel className="sm:hidden"> */}
            <div className="px-2 pt-2  text-white space-y-1">
             Here i will display ur next order
             <NextOrdersSlider/>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>


       
    )
}

export default TopNavbar
