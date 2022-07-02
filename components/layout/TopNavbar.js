import { Fragment, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon,SearchIcon, ChevronDoubleDownIcon,ChevronDoubleUpIcon } from '@heroicons/react/outline'
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors,googleSignIn, logout } from '../../actions/userAction';
import {GoogleLogin} from '@react-oauth/google';
import { toast } from 'react-toastify';
import NextOrdersSlider from '../myAccount/NextOrdersSlider';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const TopNavbar = () => {

  const dispatch=useDispatch();
  const {loading,error,isAuthenticated}=useSelector(state => state.user)

  const responseSuccessGoogle=(response)=>{
    // console.log(response.credential);
    dispatch(googleSignIn(response.credential))
  }
  const responseErrorGoogle=(response)=>{
    // console.log(response);
    toast.error(response);

  }

  useEffect(() => {
    if(error){
   toast.error(error);
   dispatch(clearErrors());
    }

  }, [dispatch,error,toast])


    return (
        
               <Disclosure as="nav" className="bg-white drop-shadow-lg rounded-b-primary py-2  ">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center  h-16">
      
              <div className=" flex items-center justify-start  sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  />
                </div>
             
              </div>

        <div className="flex flex-col mx-auto">
          <p className='text-lg'>hello <span className="font-bold"> Mohith</span>👋</p>
          <p className="text-center text-secondary-text-gray text-sm">LPU</p>
        </div>


              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <span className=" mx-2 bg-gray-800 p-1 rounded-full text-gray-400 cursor-pointer hover:text-white hidden md:flex ">
                    <SearchIcon className="h-6 w-6 mr-1" />
                    Search
                </span>
        

                     {isAuthenticated===true&&<button onClick={()=>{
  dispatch(logout());
  toast.success("logged out successfully")
}} className="bg-yellow-300 p-2 ">logout</button>
}
                     {isAuthenticated===false&&             <GoogleLogin
          
          onSuccess={responseSuccessGoogle}
          onFailure={responseErrorGoogle}
          useOneTap
        
        />
}



                <span
                 
                  className=" p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  {/* <span className="sr-only">View notifications</span> */}
                  <Disclosure.Button>
                  {open ? (
                    <ChevronDoubleUpIcon className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <ChevronDoubleDownIcon className="h-6 w-6" aria-hidden="true" />
                  )}
                 

                  </Disclosure.Button>
                </span>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 hidden md:block relative">
                  <div>

                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
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
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
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
