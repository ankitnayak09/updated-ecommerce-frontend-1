import Image from "next/image";
import {  useState,useEffect } from "react";

import { useDispatch,useSelector } from "react-redux";
import { addItemsToCart, clearCartLocalStorage, removeItemsFromCart } from "../../actions/cartAction";
import CartQtyBtn from "../button/CartQtyBtn";
import AlreadyItemsInCartModal from "./AlreadyItemsInCartModal";

const SingleProductCard = ({product,isShopActive}) => {
    const dispatch=useDispatch()
    const [quantity, setQuantity] = useState(0)
    const [open, setOpen] = useState(false)
const {isShopOpen} = useSelector(state => state.shopDetails)
    const {cartItems,cartShop} = useSelector(state =>state.cart)
    useEffect(() => {
    
     
        let cartProd=cartItems.find((rev)=>rev.product==product._id)
        if(cartProd){
        setQuantity(cartProd.quantity)
        }
    }, [cartItems])

    const increaseQuantity=async(e)=>{
        e.preventDefault()
        if(product.Stock<=quantity) return;
        let qty=quantity+1;
       
        setQuantity(qty)
        dispatch(addItemsToCart(product.shop,product._id,quantity+1))
    }
    const decreaseQuantity=async(e)=>{
        e.preventDefault()
        // if(quantity<1) {
            
        //     return};
        let qty=quantity-1;
        setQuantity(qty);
        if(qty==0) {
            if(cartItems.length==1){
                //  console.log('haaa')
                dispatch(clearCartLocalStorage())
                return
              }

            dispatch(removeItemsFromCart(product._id))
            return};
            dispatch(addItemsToCart(product.shop,product._id,quantity-1))
    }
    // const quantityOnChange=(q)=>{
    //     console.log(q.target.value)
    // }

    return (
        <>
           <AlreadyItemsInCartModal increaseQuantity={increaseQuantity} open={open} setOpen={setOpen}/>

<div className=" w-full my-4 pl-4  border-t bg-white relative flex overflow-hidden">
    {/* <img alt="moto" src="https://picsum.photos/200" className="absolute -right-20 -bottom-8 h-40 w-40 mb-4"/> */}
    <div className="flex-col flex w-full justify-center mt-3">
        <p className="text-pri-text-light-gray text-lg font-bold mb-1">
            {product.name}
        </p>
        <p className="text-pri-text-gray text-base font-semibold mb-1">
        ₹{product.price}
        </p>

        <p className="text-gray-400 mt-2 text-base">
          {product.description}
        </p>
        {/* <div className="flex">
            {product.categories.map((cat)=>(
                 <p key={cat} className="text-gray-500 mt-3 text-xs">
                 {cat},
               </p>
            ))}
        </div> */}
       
   
    </div>
    <div className="flex flex-col w-3/4">
{product.image.url!==""&&
<div className="relative flex-grow h-28 ">
  
    <Image
   
   src={product.image.url}
//    src="https://picsum.photos/200" 
   
 layout="fill"
 objectFit="cover"
className="rounded-bl-medium "
 />
 </div>
 }
 {(isShopOpen===true&&isShopActive)?( product.Stock==0?(<button className="bg-gray-100 font-bold text-pri-orange text-lg rounded-xl  h-12 ml-3 mr-3 my-4 cursor-not-allowed"  >Out of stock</button> ):( quantity==0?(
     <button className="pri-button  w-36 h-11 ml-2 mr-3 my-4" onClick={(e)=>{
         if(Object.keys(cartShop).length !== 0&&( cartShop!==product.shop )){
            //  console.log(cartShop)
             setOpen(true)
            return
    
         }
        increaseQuantity(e)
    }} >ADD+</button>
    //  <button className="pri-button h-12 ml-3 mr-3 my-2" onClick={increaseQuantity} >ADD+</button>
 ):(
  
    <CartQtyBtn increaseQuantity={increaseQuantity}  quantity={quantity} decreaseQuantity={decreaseQuantity}/>
      )
      )):(  <button className="bg-gray-100 font-bold text-gray-400 rounded-xl  h-12 ml-3 mr-3 my-4 cursor-not-allowed text-lg"  >closed</button> )
    }

    </div>
</div>
 


        </>
    )
}

export default SingleProductCard
