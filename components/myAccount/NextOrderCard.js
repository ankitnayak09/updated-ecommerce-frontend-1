import { ChevronRightIcon,BadgeCheckIcon, QrcodeIcon } from "@heroicons/react/solid"
import Link from "next/link";
// import Image from "next/image"
import QRCode from 'react-qr-code';

const NextOrderCard = ({order}) => {
    // const orderDetails={
    //     orderId:order._id,
    //     // testOrderId:order._id
    // }
    return (
        <div className=" shadow-lg rounded-2xl   bg-gradient-to-br from-pri-orange via-mid-orange to-pri-yellow mx-3 mb-2 md:w-96 md:mx-auto mt-2  p-2">
<div className="flex">
<BadgeCheckIcon className="w-8 fill-success-green"/>
<p className="self-center pl-1"> Paid - ₹ {order.totalPrice} </p> 
</div>

        {/* <img src="https://picsum.photos/200" alt="adidas" className="w-32 p-4 h-36 m-auto"/> */}
        <div className="my-4 flex justify-center"> 
        {/* <Image src="/QrCode/qrcode.svg" 
        height="140px"
        width="140px"
        
        /> */}
         <QRCode
            title={"orderId"}
            value={order._id}
            // value={JSON.stringify(orderDetails)}
          bgColor="#ffffff"
          fgColor='#000000'
          level="M"
          size={150}

          />
        </div>

        <div className="flex flex-col mx-16 justify-center">
            <span className="flex self-center w-full justify-between"> <p className="font-light">Shop</p>  <p className="font-bold">{order.shopName}</p>  </span>

            <span className="flex self-center w-full justify-between"> <p className="font-light">order Number</p>  <p className="font-bold">{order.orderNumber}</p>  </span>

            <span className="flex self-center w-full justify-between"> <p className="font-light">Pickup Time</p>  <p className="font-bold">{order.orderInfo.wantFoodAt}</p>  </span>
        </div>
        <div className="border-dashed border-y-[3px] border-sec-orange m-4 py-4 rounded-lg">
            {/* <p className="text-white text-xl font-bold ">
                {order.shopName}
            </p>
            <p className=" text-xs">
                              {order.orderItems.map((product) => (
                                  <span key={product._id} >
                                  {product.name}({product.quantity}) ||,, 
                                  </span>
                              ))}
                                  </p>
            <div className="flex items-center justify-between ">
                <p className="text-white">
                    $98.00
                </p>
            </div>
             */}

<p className=" text-white w-full sm:block sm:mt-2 inline-grid grid-cols-2 gap-x-12 gap-y-1">
                              {order.orderItems.map((product) => (
                                  <span key={product._id} className="font-semibold text-sm text-center justify-between flex w-full "> {product.name}  
                                <span className="font-semibold ">  x{product.quantity} </span>   
                                  </span>
                              ))}
                                  </p>

        </div>
        <div className="flex w-full">
            <Link href="/myAccount">
        <button type="button" className="w-10 rounded-tr-md  rounded-bl-md  rounded-tl-[21px]  rounded-br-xl  h-10 text-base ml-auto font-medium   bg-sec-light-orange">
            <ChevronRightIcon className="w-8 fill-pri-yellow m-auto"/>
          </button>
          </Link>
          </div>
    </div>
    )
}

export default NextOrderCard
