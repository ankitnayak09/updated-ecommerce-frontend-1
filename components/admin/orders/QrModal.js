import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon, PlusIcon, XIcon,QrcodeIcon } from '@heroicons/react/outline'
 
import { QrReader } from 'react-qr-reader';
import { useRouter } from 'next/router';
import { updateOrder } from '../../../actions/orderAction';
import { useDispatch } from 'react-redux';

const QrModal = ({qrOpen,setQrOpen}) => {
    const [data, setData] = useState();

    const router=useRouter()
    const dispatch = useDispatch()

    // const handleDelivered=(result)=>{
     
    //       console.log(result)
    //     const shopId=router.query.shopId
    //     const orderId=result.text
    //     const orderData={
    //         status:"delivered"
    //     }
    //     dispatch(updateOrder(orderData,shopId,orderId))
    //     setQrOpen(false)
    // }

    useEffect(() => {
        const shopId=router.query.shopId
        const orderId=data
        const orderData={
            status:"delivered"
        }
        if(orderId){
            // console.log(orderId) 
        dispatch(updateOrder(orderData,shopId,orderId))
        setData()
        }
       
    }, [data])

    return (
        <>
       

        <button onClick={()=>{setQrOpen(true)}} className="bg-sec-light-orange text-pri-orange font-extrabold text-4xl  rounded-full aspect-square drop-shadow-pri-small w-12  h-12 self-center flex justify-center mx-2"><QrcodeIcon className="w-8 self-center "/></button>

        <Transition.Root show={qrOpen} as={Fragment}>
        <Dialog as="div" className="fixed z-50 inset-0 overflow-y-auto" onClose={setQrOpen}>
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
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur transition-opacity" />
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
              <div className="relative md:w-3xl inline-block align-bottom bg-white rounded-lg px-0 w-full pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div className=" sm:block absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => setQrOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex flex-col sm:items-start">
                  <div className="mx-auto   flex-shrink-0 flex items-center justify-center w-20 aspect-square  rounded-full bg-red-100 ">
                    <QrcodeIcon className=" w-10 text-red-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 w-full text-center sm:mt-0 sm:text-left">
                    {/* <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                      New Order
                    </Dialog.Title> */}

<h1 className=" text-3xl my-4   font-bold tracking-tight text-pri-text-gray ">scan qr</h1>
                  
<QrReader
        onResult={(result, error) => {
          if (!!result) {
            //   console.log(result)
            setData(result?.text);
            setQrOpen(false)
            // handleDelivered(result)
          }

          if (!!error) {
            // console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
      <p>{data}</p> 
 

                  </div>
                </div>
             </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      </>
    )
}

export default QrModal
