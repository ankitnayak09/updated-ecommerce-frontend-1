import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import {  XIcon } from '@heroicons/react/outline'
import ShopReviewCard from './ShopReviewCard'
import { useSelector } from 'react-redux'
import { StarIcon } from '@heroicons/react/solid'



const ViewShopReviews = () => {
    let [isOpen, setIsOpen] = useState(false)

    
    function closeModal() {
        setIsOpen(false)
      }
    
      function openModal() {
        setIsOpen(true)
      }

      const {loading,shop}=useSelector(state => state.shopDetails)


      const reviews = [
        {
          id: 1,
          rating: 5,
          content: `
            <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
          `,
          date: 'July 16, 2021',
          datetime: '2021-07-16',
          author: 'Emily Selman',
          avatarSrc:
            'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
        },
        {
          id: 2,
          rating: 5,
          content: `
            <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
          `,
          date: 'July 12, 2021',
          datetime: '2021-07-12',
          author: 'Hector Gibbons',
          avatarSrc:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
        },
        // More reviews...
      ]
    return (
        <>
                <div className="">
        {/* <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          All Reviews
        </button> */}

        <button  type="button"
          onClick={openModal} className="rounded-full aspect-square flex flex-col justify-center h-full  bg-sec-orange">
              <p className="text-lg flex self-center text-sec-text-gray font-bold">
                {shop.ratings} <StarIcon className="w-5 fill-sec-text-gray"/> </p>
              </button>

      </div>

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
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur transition-opacity" />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
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
                    Shop reviews
                  </Dialog.Title>
                  <div className="mt-2">

                  {loading===false&&shop.reviews.map((review, reviewIdx) => (
                     <ShopReviewCard key={review._id} review={review} reviewIdx={reviewIdx}/>
                  ))}

 
                  </div>

            
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>


        </>
    )
    
}

export default ViewShopReviews
