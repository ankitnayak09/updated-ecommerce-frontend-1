import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import {  XIcon } from '@heroicons/react/outline'
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from 'react-redux';
import { createUpdateShopReview } from '../../actions/shopAction';
import { toast } from 'react-toastify';

const ShopReview = ({shopId,yourReview,orderId}) => {
    const dispatch=useDispatch()
    let [isOpen, setIsOpen] = useState(false)
    let [alreadyReviewRating, setalreadyReviewRating] = useState()
    let [reviewComment, setReviewComment] = useState("")
    let [rating, setRating] = useState(0)

    const {loading,user,isAuthenticated}=useSelector(state => state.user)


    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }
    function submitReview() {
        // console.log("aaa")
      const reviewData={
          comment:reviewComment,
          rating:rating
      }
        dispatch(createUpdateShopReview(reviewData,shopId,orderId))
        // setReviewComment("")
        // setRating("")
        setIsOpen(false)
    }

    useEffect(() => {
        if(yourReview){
        // setalreadyReviewRating(yourReview.rating)
        setRating(Number(yourReview.rating))
        setReviewComment(yourReview.comment)

        // console.log(yourReview)
        }
    }, [])



    return (
        <>
                <div className="">
        <button
          type="button"
          onClick={openModal}
          className="rounded-small w-32 md:w-36 self-center py-2 bg-sec-light-orange text-pri-orange font-extrabold text-base"
        >
          {/* Give Rating,yourRating-({rating}) */}
          {rating==0?"Rate":(<> <span className="font-medium"> your rating -</span> {rating} </>) }
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
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur" />
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
                    Submit review
                  </Dialog.Title>
                  <div className="mt-2">


                  <ReactStars
             value={rating}     
             
    count={5}
    onChange={(e)=>{setRating(e)}}
    size={24}
    activeColor="#ffd700"
  />
                
        <textarea
        
          rows={4}
          name="comment"
          id="comment"
          onChange={(e)=>{setReviewComment(e.target.value)}}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 bg-slate-100 rounded-md"
          defaultValue={reviewComment}
        />
 
                  </div>

                  <div className="mt-4">
                    <button disabled={rating==0?true:false}
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-gradient-to-br from-pri-orange via-mid-orange to-pri-yellow w-full px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={submitReview}
                    >
                      Submit Review
                    </button>
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

export default ShopReview
