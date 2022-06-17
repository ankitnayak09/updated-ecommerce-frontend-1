const SingleProductCard = ({product}) => {
    return (
        <>
           
<div className="shadow-lg rounded-2xl w-full py-4 px-0 bg-white relative flex overflow-hidden">
    {/* <img alt="moto" src="https://picsum.photos/200" className="absolute -right-20 -bottom-8 h-40 w-40 mb-4"/> */}
    <div className="flex-col flex w-full justify-center ">
        <p className="text-gray-800 text-lg font-medium mb-2">
            {product.name}
        </p>
        <p className="text-gray-400 text-xs">
          {product.description}
        </p>
        <div className="flex">
            {product.categories.map((cat)=>(
                 <p key={cat} className="text-gray-500 mt-3 text-xs">
                 {cat},
               </p>
            ))}
        </div>
        <p className="text-indigo-500 text-xl font-medium">
            Rs.{product.price}
        </p>
    </div>
    <img alt="moto" src="https://picsum.photos/200" className=" h-40 w-40 rounded-xl"/>
</div>
 


        </>
    )
}

export default SingleProductCard
