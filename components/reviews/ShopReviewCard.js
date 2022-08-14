
import Image  from 'next/image'
import { StarIcon } from '@heroicons/react/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
const ShopReviewCard = ({review,reviewIdx}) => {
    return (<>
      {review.user&&  <div key={review._id} className="flex text-sm text-gray-500 space-x-4">
        <div className="flex-none py-10 ">
          {/* <img src={review.user?.avatar} alt="" className="w-10 h-10 bg-gray-100 rounded-full" /> */}
         <Image src={review.user.avatar} width="50px" height="50px" className="bg-gray-100 rounded-full"/>
        </div>
        <div className={classNames(reviewIdx === 0 ? '' : 'border-t border-gray-200', 'flex-1 py-10')}>
          <h3 className="font-medium text-gray-900">{review.user.name}</h3>
          <p>
            {/* <time dateTime={review.datetime}>{review.date}</time> */}
          </p>

          <div className="flex items-center mt-4">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={classNames(
                  review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                  'h-5 w-5 flex-shrink-0'
                )}
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="sr-only">{review.rating} out of 5 stars</p>

          <div
            className="mt-1 prose prose-sm max-w-none text-gray-500"
          />
          <p className=" text-sec-text-gray">{review.comment}</p>
        </div>
          {/* <div
            className="mt-1 prose prose-sm max-w-none text-gray-500"
            dangerouslySetInnerHTML={{ __html: review.comment }}
          />
        </div> */}
      </div>
        } </> )
}

export default ShopReviewCard
