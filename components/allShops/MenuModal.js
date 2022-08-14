import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
// import Link from 'next/link'
import { useRouter } from 'next/router'

const MenuModal = ({categories}) => {
    const router = useRouter()
    const [open, setOpen] = useState(false)

    const cancelButtonRef = useRef(null)

    const menuBtnClick=(href)=>{

        setOpen(false)
        router.push(href)
       
    }

    return (
        <>
          <div className="fixed bottom-48 -right-14 flex items-center justify-center">
        <button
          type="button" 
          onClick={()=>{setOpen(true)}}
          className="rotate-90  rounded-b-full bg-black  px-11 py-1 text-base font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          menu
        </button>
      </div>
        <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed z-10 bottom-16 md:bottom-0 right-8 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
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
              <Dialog.Overlay className="fixed inset-0 backdrop-blur-md transition-opacity" />
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
              <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-10 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 border-2 border-gray-400 ">



              <div className="flex  flex-col">
                    {categories.map((cat)=>(
                        <div key={cat} className="flex hover:bg-gray-100 border-b-2 pr-16">
                            {/* <Link href={"#"+`${cat}`}> */}
          <button  onClick={()=>{menuBtnClick("#"+`${cat}`)}} className="p-2 text-lg font-medium text-pri-text-light-gray" >{cat}</button>
          {/* <a onClick={ menuBtnClick(cat)} className="p-2" >{cat}</a> */}
          {/* </Link> */}
          </div>
          ))}
        </div>

         </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      </>
    )
}

export default MenuModal
