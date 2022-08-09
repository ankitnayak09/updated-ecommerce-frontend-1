import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getAdminProducts, updateProduct } from '../../../actions/productActions'
import { useRouter } from 'next/router'
import { TrashIcon } from '@heroicons/react/solid'
import EditProductModal from '../editProducts/EditProductModal'
import { toast } from 'react-toastify'
import DeleteProductModal from './DeleteProductModal'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const MenuSingleItemCard = ({editState,product}) => {
  const dispatch = useDispatch()
  const router=useRouter()
  const shopId=router.query.shopId
    const [enabled, setEnabled] = useState(true)

    // const {isDeleted}= useSelector(state => state.updateProduct);


    useEffect(() => {
      setEnabled(product.isActive)
    }, [product])

//     useEffect(() => {
     
//       if(isDeleted){
            
    
//         dispatch({type:"DELETE_PRODUCT_RESET"})
//     dispatch(getAdminProducts(shopId))
//  }
//     }, [isDeleted])

const updateProductActive=(e)=>{

setEnabled(!enabled)
const productData={
  isActive:!enabled
}


dispatch(updateProduct(productData,shopId,product._id))
}
    return (
        <div className="flex justify-between py-2 px-4 border-b-2 h-16  rounded-br-2xl">
            <p className="font-semibold   self-center flex ">
              {/* <p className="bg-blue-300 self-center flex"> */}
            {product.name} <span className={classNames(
                      product.Stock>=20&& 'text-success-green' ,
                      (product.Stock<20&&product.Stock>0)&& 'text-yellow-500' ,
                      product.Stock==0&& 'text-pri-orange' ,
                      'text-lg  font-bold',
                      " text-sm"
                    )}>({product.Stock===0?("Out of stock"):(<>{product.Stock} left</>)})</span>
                    {/* </p> */}
            </p>
           
{editState==true?
<div className="flex ">
{/* <TrashIcon onClick={()=>{
  // dispatch(deleteProduct(shopId,product._id)),
  toast.success("product deleted") 


  }} className="w-8 cursor-pointer fill-pri-orange "/> */}
  <DeleteProductModal name={product.name} shopId={shopId} productId={product._id}/>
<EditProductModal product={product}/>
</div>
 :(          
            <Switch
        checked={enabled}
        // checked={enabled}
        onChange={updateProductActive}
        // onChange={setEnabled}
        className={`${enabled ? 'bg-success-green' : 'bg-slate-300'}
          relative self-center inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      ) }
        </div>
    )
}

export default MenuSingleItemCard
