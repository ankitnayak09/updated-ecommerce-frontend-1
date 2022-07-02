import SingleShopCard from "./SingleShopCard"


const ShopList = ({shops}) => {
    return (
        <div className="mt-6 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

        {shops.map((shop) => (
          <SingleShopCard shop={shop} key={shop._id}/>
                     
                    ))}
                </div>
    )
}

export default ShopList
