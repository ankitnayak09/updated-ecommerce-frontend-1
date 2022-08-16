import { Fragment, useEffect, useState } from 'react'
// import { Menu, Transition } from '@headlessui/react'
// import { DotsVerticalIcon } from '@heroicons/react/outline'
// import { CheckCircleIcon } from '@heroicons/react/solid'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { clearErrors, myOrders } from '../../actions/orderAction'
import Link from 'next/link'
import ShopReview from '../reviews/ShopReview'
import Image from 'next/image'
import AllShopsLoader from '../loading/AllShopsLoader'
import InfiniteScroll from 'react-infinite-scroll-component'

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
    
    const {loading,error,orders,ordersCount,page} = useSelector(state => state.myOrders)
    const {user} = useSelector(state => state.user)
    const {error:reviewError,success}=useSelector(state => state.newShopReview)
    const [pageSize,setpageSize]=useState(6)

    useEffect(() => {
    if(error){
        toast.error(error);
        dispatch(clearErrors())
        // console.log("mmmmmm")
    }
    if(page===1){
    dispatch(myOrders(page,pageSize))
    }
    }, [dispatch,toast,error])

    const fetchMoreData = () => {
      // setpage(page+1),
    
      dispatch(myOrders(page,pageSize))
      
      loading
    };
 
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
        <div className="bg-white rounded-t-primary z-10 relative shadow-myOrderTop -mt-10">
        <div className="pt-10  pb-36">
          <div className="max-w-7xl px-6 mx-auto sm:px-2 lg:px-8">
            {/* <div className="max-w-2xl px-14"> */}

     

              <h1 className="text-3xl font-bold tracking-tight text-gray-900 ">Order history</h1>
           
            {/* </div> */}
          </div>
    
          <div className="mt-4">
            <h2 className="sr-only">Recent orders</h2>
            <div className="max-w-7xl  mx-auto ">
              {/* <div className="max-w-2xl pb-28 mx-auto space-y-8 sm:px-4 lg:max-w-4xl lg:px-0"> */}
              <InfiniteScroll
          dataLength={orders.length}
          next={fetchMoreData}
          hasMore={orders.length!==ordersCount}
          loader={<AllShopsLoader/>}
        >
              <div className="grid bg-white grid-cols-1 gap-y-10  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {orders&&orders.map((order) => (
                  <div
                    key={order._id}
                    className="bg-white border border-gray-200 drop-shadow-xl rounded-medium mx-5 md:mx-3 sm:border"
                  >
                    <h3 className="sr-only">
                      Order placed on {order.createdAt}
                      {/* Order placed on <time dateTime={order.createdDatetime}>{order.createdDate}</time> */}
                    </h3>
  
                    <div className="flex items-center px-6 py-6 mx-6  sm:p-6 ">
                      <div className="flex justify-between w-full ">
                        <div >
                          <p className="font-bold text-pri-text-gray text-center">Shop Name</p>
                          <p className="mt-1 text-pri-text-light-gray text-center">{order.shopName}</p>
                        </div>
                   
                       

                        <div>
                          <p className="font-bold text-pri-text-gray text-center">Total amount</p>
                          <p className="mt-1 font-medium text-pri-text-light-gray text-center">₹{order.totalPrice}</p>
                        </div>
                      </div>
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
                      {/* <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4">
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
                      </div> */}
                    </div>
  
                    {/* Products */}
                    <h4 className="sr-only">Items</h4>
                    <ul role="list" className="divide-y  divide-gray-200">
                    
                        <li className=" ">
                          <div className="flex border-dashed border-y-[2px] border-sec-orange  sm:items-start pb-4">
                            <div >
                            <div className="flex-shrink-0 w-24 h-20 -mt-1     relative">
                              {/* <img
                                src="https://picsum.photos/200"
                            
                                className="w-full h-full object-center object-cover"
                              /> */}

<Image src={order.shop.images[0].url}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-br-medium "
                      />
</div>
<div className="flex ml-2 md:ml-4 md:mt-3 items-center">
                              {/* <CheckCircleIcon className="w-5 h-5 text-green-500" aria-hidden="true" /> */}
                              <p className="ml-2  text-sm font-medium text-gray-500">
                            
                   <span className="hidden md:block"> Order status : <br/></span> <span 
                    className={classNames(
                      order.orderStatus=="delivered"&& 'text-success-green' ,
                      order.orderStatus=="accepted"&& 'text-yellow-500' ,
                      order.orderStatus=="initiated"&& 'text-yellow-500' ,
                      order.orderStatus=="rejected"&& 'text-pri-orange' ,
                      '  font-bold'
                    )}
                    > {order.orderStatus}</span>

                
                              </p>
                            </div>
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
                              <div className="flex-grow">
                                  <Link href={
                                    {
                                      pathname: `/myAccount/orders/${order._id}`,
                                      query: { shopId: order.shop._id },
                                    }
                                  }>
                                  <a >
                              <p className="w-full text-sm md:text-base md:font-semibold text-smtext-pri-text-light-gray px-3 pt-3  inline-grid md:grid-cols-2  gap-1">
                              {order.orderItems.map((product) => (
                                  <span key={product._id} className=" text-black ">
                                <span className="text-sec-text-gray "> {product.quantity}x&nbsp; </span>    {product.name}  
                                  </span>
                              ))}
                                  </p>
                                  </a>
                                  </Link>
                                  </div>
                            {/* </div> */}
                          </div>
  
                          {/* <div className="mt-6 sm:flex sm:justify-between"> */}
                        
  
                            <div className="  my-5 px-7 flex justify-between  w-full ">
                              <div className="flex ">
                              
                                <ShopReview orderId={order._id} shopId={order.shop._id} yourReview={order.yourReview}/>
                              </div>
                              <div className=" flex justify-center">
                                
                                   <Link  href={`/shop/${order.shop._id}`}><a className="pri-button w-32 md:w-36 text-center self-center py-2 "> 
                  Reorder
                  </a></Link>
                              </div>
                            </div>
                          {/* </div> */}
                        </li>
                     
                    </ul>
                  </div>
                ))}

              </div>
</InfiniteScroll>
            </div>
          </div>
        </div>
      </div>
    )
}

export default MyOrders
