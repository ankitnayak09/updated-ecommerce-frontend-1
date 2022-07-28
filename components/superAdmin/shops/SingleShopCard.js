
import date from 'date-and-time';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const SingleShopCard = ({shop,handleApprove,handleReject}) => {
    return (
        <div className="bg-white border border-gray-200 drop-shadow-xl rounded-medium mx-5">
           
           <div className="flex p-4 justify-between">
               <h1 className="text-sec-text-gray text-xl font-bold">{shop.name}</h1>
               <p className="">status : <span className={classNames(
                      shop.shopStatus=="approved"&& 'text-success-green' ,
                      shop.shopStatus=="pending"&& 'text-yellow-500' ,
                      shop.shopStatus=="rejected"&& 'text-pri-orange' ,
                      'text-lg  font-bold'
                    )}>{shop.shopStatus}</span> </p>
           </div>

                <div className="border-dashed  border-y-[4px] border-sec-orange py-5 px-7 mx-4">
                    <div className="flex my-1 justify-between">
                        <p>timings</p>
                        <p className="font-bold">{date.transform(shop.openTime, 'HH:mm', 'h:mm A')} - {date.transform(shop.closeTime, 'HH:mm', 'h:mm A')}</p>
                    </div>
                    <div className="flex my-1 justify-between">
                        <p>working Days</p>
                        <p className="font-bold">{shop.workingDays.map((rev)=>rev.slice(0, 3)+", ")}</p>
                    </div>
                    <div className="flex my-1 justify-between">
                        <p>location</p>
                        <p className="font-bold">{shop.location}</p>
                    </div>
                </div>

                <div className="flex justify-between p-4">
                    <button onClick={()=>handleReject(shop._id)} className="rounded-small bg-sec-light-orange py-3 w-36 font-bold text-pri-orange">Reject</button>
                    <button onClick={()=>handleApprove(shop._id)} className="pri-button w-36 text-center py-3">Approve</button>
                </div>
        </div>
    )
}

export default SingleShopCard
