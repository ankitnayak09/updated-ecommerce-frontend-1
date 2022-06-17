import Link from "next/link"

const SingleShopCard = ({shop}) => {
  // console.log(shop)
    return (
        <div key={shop._id} className="group relative flex md:flex-col sm:w-full bg-slate-300 lg:flex-col">
        <div className="w-1/3 h-40  md:w-full md:h-72 bg-gray-200 aspect-w-1 aspect-h-1 rounded-xl overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img
            src={shop?.images[0]?.url}
            alt={shop?.name}
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </div>
        <div className="mt-4 w-full px-4 flex-col md:flex justify-between">
          <div>
            <h3 className="text-sm font-bold text-gray-700">
              <Link href={`/shop/${shop._id}`}>
              <a >
                {/* <span aria-hidden="true" className="absolute inset-0" /> */}
                {shop.name} 
              </a>
              </Link>
            </h3>
            <p  className="mt-1 text-sm text-gray-700">{shop.description}</p>
            <div className="flex">
            {shop.categories.map((cat,i)=>{
              return(
              <p key={i} className="mt-1 text-sm text-gray-500">{cat},,</p>
              )
            })}
            </div>
          </div>
          <p className="text-sm font-medium text-gray-900">{shop.ratings}</p>
        </div>
      </div>
    )
}

export default SingleShopCard

