import { Fragment, useEffect } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { DotsVerticalIcon } from '@heroicons/react/outline'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { clearErrors, myOrders } from '../../actions/orderAction'
import Link from 'next/link'
import ShopReview from '../reviews/ShopReview'
import Image from 'next/image'

// const orders = [
//   {
//     number: 'WU88191111',
//     href: '#',
//     invoiceHref: '#',
//     createdDate: 'Jul 6, 2021',
//     createdDatetime: '2021-07-06',
//     deliveredDate: 'July 12, 2021',
//     deliveredDatetime: '2021-07-12',
//     total: '$160.00',
//     products: [
//       {
//         id: 1,
//         name: 'Micro Backpack',
//         description:
//           'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
//         href: '#',
//         price: '$70.00',
//         imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-03-product-01.jpg',
//         imageAlt:
//           'Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps.',
//       },
//       // More products...
//     ],
//   },
//   // More orders...
// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



const MyOrders = () => {
    const dispatch=useDispatch()
    
    const {loading,error,orders} = useSelector(state => state.myOrders)
    const {user} = useSelector(state => state.user)
    const {error:reviewError,success}=useSelector(state => state.newShopReview)


    useEffect(() => {
    if(error){
        toast.error(error);
        dispatch(clearErrors())
        // console.log("mmmmmm")
    }
    dispatch(myOrders())
    }, [dispatch,toast,error])


    useEffect(() => {
      if(reviewError){
        toast.error(reviewError)
      }
      if(success){
        toast.success("review updated successfully");
        dispatch({type:" NEW_SHOP_REVIEW_RESET"})
      }
             
         }, [dispatch,reviewError,success])
     

    return (
        <div className="bg-white rounded-t-primary shadow-myOrderTop -mt-10">
        <div className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
            <div className="max-w-2xl mx-auto px-9 lg:max-w-4xl lg:px-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 ">Order history</h1>
              {/* <p className="mt-2 text-sm text-gray-500">
                Check the status of recent orders, manage returns, and discover similar products.
              </p> */}
            </div>
          </div>
  
          <div className="mt-4">
            <h2 className="sr-only">Recent orders</h2>
            <div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
              <div className="max-w-2xl pb-28 mx-auto space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
                {orders.map((order) => (
                  <div
                    key={order._id}
                    className="bg-white border border-gray-200 drop-shadow-xl rounded-medium mx-5  sm:border"
                  >
                    <h3 className="sr-only">
                      Order placed on {order.createdAt}
                      {/* Order placed on <time dateTime={order.createdDatetime}>{order.createdDate}</time> */}
                    </h3>
  
                    <div className="flex items-center px-6 py-6 mx-6 border-dashed border-b-[2px] border-sec-orange sm:p-6 sm:grid sm:grid-cols-4 sm:gap-x-6">
                      <dl className="flex-1  grid grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
                        <div>
                          <dt className="font-bold text-pri-text-gray text-center">Shop Name</dt>
                          <dd className="mt-1 text-pri-text-light-gray text-center">{order.shopName}</dd>
                        </div>
                        {/* <div className="hidden sm:block">
                          <dt className="font-medium text-gray-900">Date placed</dt>
                          <dd className="mt-1 text-gray-500">{order.createdAt}
                          </dd>
                        </div> */}
                       

                        <div>
                          <dt className="font-bold text-pri-text-gray text-center">Total amount</dt>
                          <dd className="mt-1 font-medium text-pri-text-light-gray text-center">{order.totalPrice}</dd>
                        </div>
                      </dl>
{/*   
                      <Menu as="div" className="relative flex justify-end lg:hidden">
                        <div className="flex items-center">
                          <Menu.Button className="-m-2 p-2 flex items-center text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Options for order {order.orderId}</span>
                            <DotsVerticalIcon className="w-6 h-6" aria-hidden="true" />
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
                          <Menu.Items className="origin-bottom-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'block px-4 py-2 text-sm'
                                    )}
                                  >
                                    View
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'block px-4 py-2 text-sm'
                                    )}
                                  >
                                    Invoice
                                  </a>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
   */}
                      <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4">
                        <a
                          href="#"
                          className="flex items-center justify-center bg-white py-2 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <span>View Order</span>
                          <span className="sr-only">{order.orderId}</span>
                        </a>
                        <a
                          href="#"
                          className="flex items-center justify-center bg-white py-2 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <span>View Invoice</span>
                          <span className="sr-only">for order {order.orderId}</span>
                        </a>
                      </div>
                    </div>
  
                    {/* Products */}
                    <h4 className="sr-only">Items</h4>
                    <ul role="list" className="divide-y divide-gray-200">
                    
                        <li className=" ">
                          <div className="flex  sm:items-start">
                            <div className="flex-shrink-0 w-28 h-20 -mt-1 bg-gray-200  overflow-hidden sm:w-40 sm:h-40 relative">
                              {/* <img
                                src="https://picsum.photos/200"
                            
                                className="w-full h-full object-center object-cover"
                              /> */}

<Image src="https://picsum.photos/200"
                      layout="fill"
                      className="rounded-br-medium "
                      />
                            </div>
                            {/* <div className="flex-1 ml-6 text-sm"> */}
                              {/* <div className="font-medium text-gray-900 sm:flex sm:justify-between">
                                <h5>
                                  <Link href={
                                    {
                                      pathname: `/myAccount/orders/${order._id}`,
                                      query: { shopId: order.shop._id },
                                    }
                                  }>
                                  <a >
                                  {order.shopName}
                                  </a>
                                  </Link>
                                </h5>
                               
                              </div> */}
                                  <Link href={
                                    {
                                      pathname: `/myAccount/orders/${order._id}`,
                                      query: { shopId: order.shop._id },
                                    }
                                  }>
                                  <a >
                              <p className=" text-pri-text-light-gray px-3 pt-3 sm:block sm:mt-2 inline-grid grid-cols-2 gap-1">
                              {order.orderItems.map((product) => (
                                  <span key={product._id} className="font-semibold text-black text-base">
                                <span className="font-semibold  text-sec-text-gray"> {product.quantity}x&nbsp; </span>    {product.name}  
                                  </span>
                              ))}
                                  </p>
                                  </a>
                                  </Link>
                            {/* </div> */}
                          </div>
  
                          <div className="mt-6 sm:flex sm:justify-between">
                            <div className="flex ml-4 items-center">
                              <CheckCircleIcon className="w-5 h-5 text-green-500" aria-hidden="true" />
                              <p className="ml-2 text-sm font-medium text-gray-500">
                                Delivered 
                              </p>
                            </div>
  
                            <div className="mt-6 mx-4  border-dashed  border-t-[2px] border-sec-orange py-5 px-7 flex justify-between   sm:mt-0  ">
                              <div className="flex ">
                              
                                <ShopReview orderId={order._id} shopId={order.shop._id} yourReview={order.yourReview}/>
                              </div>
                              <div className=" flex justify-center">
                                
                                   <Link  href={`/shop/${order.shop._id}`}><a className="pri-button w-36 text-center self-center py-2 "> 
                  Reorder
                  </a></Link>
                              </div>
                            </div>
                          </div>
                        </li>
                     
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default MyOrders
