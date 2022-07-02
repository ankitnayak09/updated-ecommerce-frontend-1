import Image from "next/image"

const CartQtyBtn = ({increaseQuantity,decreaseQuantity,quantity}) => {
    return (
       
             <div className="mb-2 mt-2 h-12   flex w-44 justify-between relative bg-[url('/button/cartQtyBtn.svg')] bg-contain bg-center bg-no-repeat">




<button className="flex-grow " onClick={decreaseQuantity}></button>
<input  className="w-6 font-bold text-pri-orange text-lg bg-transparent text-center " type="number" readOnly value={quantity} />
<button className="flex-grow" onClick={increaseQuantity}></button>


{/* <Image
   
   src={"/button/cartQtyBtn.svg"}

 layout="fill"
 objectFit="contain"

 /> */}


</div>



       
    )
}

export default CartQtyBtn
