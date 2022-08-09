import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon, LinkIcon, ShareIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Image from 'next/image'
const ShopShareModal = ({shopId}) => {
const [open,setOpen]=useState(false)

    return (<>
    <ShareIcon onClick={()=>setOpen(true)} className="w-7 my-2 cursor-pointer text-sec-orange"/>
        <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed z-50 inset-0 overflow-y-auto" onClose={setOpen}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 my-backdrop-blur transition-opacity" />
            </Transition.Child>
  
            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="relative md:w-3xl inline-block align-bottom bg-white border-2 rounded-lg px-0 w-full pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div className=" sm:block absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex flex-col sm:items-start">
               
                  <div className="mt-3 w-full  sm:mt-0 text-left">
                    {/* <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                      New Order
                    </Dialog.Title> */}

<h1 className=" text-3xl my-4 ml-6 text-left font-bold tracking-tight text-pri-text-gray ">Share</h1>
                  
                  

                  </div >
                  <div className="flex md:justify-start justify-center p-2">
                  <Link href={`whatsapp://send?text=${process.env.NEXT_PUBLIC_FRONTEND_HOST}/shop/${shopId}`}
               
                //  <Link href="whatsapp://send?text=https://youtube.com" 
>
                  <a className="mx-2 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 relative ">
                    {/* <ExclamationIcon  className="h-6 w-6 text-red-600" aria-hidden="true" /> */}
                    <Image src="/share/whatsapp.png" layout="fill"/>

                  </a>
                  </Link>
                  <CopyToClipboard text={`${process.env.NEXT_PUBLIC_FRONTEND_HOST}/shop/${shopId}`}
          onCopy={() => setOpen(false)}>
        
       
                  <button className="mx-2 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 ">
                    <LinkIcon  className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </button>
                  </CopyToClipboard>
                  </div>
                </div>
             </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
   </> )
}

export default ShopShareModal
 