import { CheckIcon, ClockIcon, XIcon } from '@heroicons/react/solid'
import {  useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemsToCart, clearCartLocalStorage, removeItemsFromCart } from "../../actions/cartAction";
import CartQtyBtn from '../button/CartQtyBtn';



const CartCard = ({product}) => {
    const dispatch=useDispatch()
    const [quantity, setQuantity] = useState(1)
    const {cartItems}= useSelector(state => state.cart)

    useEffect(() => {
       
        setQuantity(product.quantity)
    }, [])


    // useEffect(() => {
    //  if(quantity==0) {
    //    if(cartItems.length<=1){
    //     //  console.log('haaa')
    //     dispatch(clearCartLocalStorage())
    //     return
    //   }
      
    //   //  console.log("arre")
    //     dispatch(removeItemsFromCart(product.product))
        
    //  }
    // }, [quantity])


    // useEffect(() => {
    
    //   console.log(cartItems)
    //    if(cartItems.length==0){
    //     dispatch(clearCartLocalStorage())
    //     // return
    //   }
   
     
    // }, [cartItems])

  
    const increaseQuantity=(e)=>{
        e.preventDefault()
        if(product.stock<=product.quantity) return;
        let qty=product.quantity+1;   
       
        setQuantity(qty)
        dispatch(addItemsToCart(product.shop,product.product,qty))
    }
    const decreaseQuantity=(e)=>{
        e.preventDefault()
       
        if(product.quantity<1) return;
        let qty=product.quantity-1;
         setQuantity(qty);


         if(qty==0) {
          if(cartItems.length==1){
              //  console.log('haaa')
              dispatch(clearCartLocalStorage())
              return
            }

          dispatch(removeItemsFromCart(product.product))
          return};
      


            dispatch(addItemsToCart(product.shop,product.product,qty))


    }
    return (
        <>
            <li  className="flex py-6 sm:py-10">
                    {/* <div className="flex-shrink-0">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                      />
                    </div> */}
  
                    <div  className="ml-4 w-full  flex  justify-between ">
                      <div className="relative md:pr-9">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-sm">
                              <a href="#" className="font-bold text-lg text-pri-text-gray hover:text-gray-800">
                                {product.name}
                              </a>
                            </h3>
                          </div>
                          <div className="mt-1 flex  text-sm">
                            <p className="text-gray-500">Veg</p>
                            {/* {product.size ? (
                              <p className="ml-4 pl-4 border-l border-gray-200 text-gray-500">{product.size}</p>
                            ) : null} */}
                          <p className="ml-2 text-sm font-medium text-gray-900">₹{product.price}</p>
                          </div>
                        </div>
  
                        {/* <div className="mt-4 sm:mt-0 sm:pr-9"> */}
                         
  
                          <div className=" flex-col flex">
                          {/* <div className="absolute top-0 right-0 flex-col flex"> */}


                          </div> 
                          </div>
                            <div className="flex  ">
                              {/* <div>
        <button onClick={decreaseQuantity}>-</button>
        <input  className="w-6 text-center" type="number" readOnly value={quantity} />
        <button onClick={increaseQuantity}>+</button>
        </div> */}
            <CartQtyBtn increaseQuantity={increaseQuantity}  quantity={quantity} decreaseQuantity={decreaseQuantity}/>
        <span className="self-center font-semibold w-14 pr-1 text-right">            ₹{`${product.price*product.quantity}`}
        </span>

        </div>



        
                          
                         
                        {/* </div> */}
                    
  
                      {/* <p className="mt-4 flex text-sm text-gray-700 space-x-2">
                        {product.inStock ? (
                          <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                        ) : (
                          <ClockIcon className="flex-shrink-0 h-5 w-5 text-gray-300" aria-hidden="true" />
                        )}
  
                        <span>{product.inStock ? 'In stock' : `Ships in ${product.leadTime}`}</span>
                      </p> */}
                    </div>
                  </li>
        </>
    )
}

export default CartCard
