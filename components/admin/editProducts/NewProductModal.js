import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import {  XIcon } from '@heroicons/react/outline'
import NewProduct from './NewProduct'
import { PlusIcon } from '@heroicons/react/solid'

const NewProductModal = () => {
    let [isOpen, setIsOpen] = useState(false)

    
    function closeModal() {
        setIsOpen(false)
      }
    
      function openModal() {
        setIsOpen(true)
      }
    return (
        <>
        {/* <div className=""> */}


{/* <button  type="button"
  onClick={openModal} className="rounded-full aspect-square flex flex-col justify-center h-full  bg-sec-orange">
      <p className="text-sm flex self-center text-pri-text-gray font-semibold">
        newProduct </p>
      </button> */}

{/* </div> */}

<button onClick={openModal} className="bg-sec-light-orange text-pri-orange font-extrabold text-4xl  rounded-full aspect-square drop-shadow-pri-small w-10 flex justify-center mx-2"><PlusIcon className="w-6 self-center "/></button>

<Transition appear show={isOpen} as={Fragment}>
<Dialog as="div" className="relative z-50" onClose={closeModal}>
  <Transition.Child
    as={Fragment}
    enter="ease-out duration-300"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="ease-in duration-200"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <div className="fixed inset-0 bg-black bg-opacity-25" />
  </Transition.Child>

  <div className="fixed inset-0 overflow-y-auto">
    <div className="flex min-h-full items-center justify-center p-4 text-center">
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
        <div className=" sm:block absolute top-0 right-0 pt-4 pr-4">
        <button
          type="button"
          className="bg-white rounded-md text-gray-400 hover:text-gray-500 "
          onClick={closeModal}
        >
          <span className="sr-only">Close</span>
          <XIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
          <Dialog.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900"
          >
            newProduct 
          </Dialog.Title>
        
      <NewProduct setIsOpen={setIsOpen}/>
    
        </Dialog.Panel>
      </Transition.Child>
    </div>
  </div>
</Dialog>
</Transition>


</>
    )
}

export default NewProductModal
