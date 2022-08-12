import { useRouter } from "next/router"
import { useSelector,useDispatch } from "react-redux"
import { useEffect,useState } from "react"
import Link from "next/link"
import { PencilIcon,PlusIcon } from "@heroicons/react/solid"



import { clearErrors, getAdminProducts } from "../../../actions/productActions"
import MenuSingleItemCard from "./MenuSingleItemCard"
import NewProduct from "../editProducts/NewProductModal"
import { toast } from "react-toastify"


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Menu = () => {
    const router=useRouter();
    const shopId=router.query.shopId
    const [category, setcategory] = useState("ALL_PRODUCTS")
    const [editState, setEditState] = useState(false)
    const [categoryProducts, setcategoryProducts] = useState([])

    const dispatch=useDispatch();
const {isDeleted} = useSelector(state => state.updateProduct)
    
    useEffect(() => {

       
        if(shopId){
            dispatch(getAdminProducts(shopId))
           } 
      
    }, [])



    useEffect(() => {
      
        if(isDeleted){
            dispatch({type:"DELETE_PRODUCT_RESET"}),
  toast.success("product deleted") 
            dispatch(getAdminProducts(shopId))
        }
       }, [dispatch,isDeleted])




    useEffect(() => {
    
        if(category!=="ALL_PRODUCTS"){
                 
            let tempProducts=products.find((rev)=>
                rev.category===category
             ).products
            // console.log(tempProducts)
            setcategoryProducts(tempProducts)
        }
      
    }, [category])
    
   

   


    

    const {loading,error,unGroupProducts,products,categories}=useSelector(state => state.adminProducts)
   
    return (
        



        <div>

<div className="flex justify-between md:pt-24 p-4">
    <h1 className="text-3xl font-bold">Your menu</h1>

    {editState?(
    <button className="border-dashed w-32 rounded-small py-1  self-center border-[3px] border-sec-orange text-pri-text-gray flex justify-center font-semibold" onClick={(e)=>{
        e.preventDefault()
        setEditState(false)
    }}>done editing</button>
):(   

    <div className="flex">
      <NewProduct/>
        <button onClick={(e)=>{
    e.preventDefault()
    setEditState(true)
}} className="bg-sec-light-orange text-pri-orange font-extrabold text-4xl  rounded-full aspect-square drop-shadow-pri-small w-10 flex justify-center mx-2"> <PencilIcon className="w-6 self-center "/></button>
    </div>
     )}
</div>  

      





<div className="flex flex-wrap p-2">

<p className={classNames("mx-1 my-2 py-2 px-5 bg-sec-light-orange  font-bold rounded-full cursor-pointer",category=="ALL_PRODUCTS"?"bg-gradient-to-br from-pri-orange via-mid-orange to-pri-yellow text-white":"text-pri-orange")} onClick={()=>{setcategory("ALL_PRODUCTS")}}>All products</p>

{categories&& categories.map((cat) => (
                <p className={classNames("mx-1 my-2 py-2 px-5 bg-sec-light-orange  font-bold rounded-full cursor-pointer",cat==category?"bg-gradient-to-br from-pri-orange via-mid-orange to-pri-yellow text-white":"text-pri-orange")} onClick={()=>{setcategory(cat)}} key={cat}>{cat}</p>
            ))}
</div>


{loading?(
<>
    <div className="  rounded-md p-4 w-full ">
    <div className="animate-pulse flex space-x-4">
     
      <div className="flex-1 space-y-6 py-1">
        <div className="h-2 bg-sec-light-orange rounded"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-sec-light-orange rounded col-span-2"></div>
            <div className="h-2 bg-sec-light-orange rounded col-span-1"></div>
          </div>
          <div className="h-2 bg-sec-light-orange rounded"></div>
        </div>
      </div>
      <div className="rounded-full bg-sec-light-orange h-10 w-10"></div>
    </div>
  </div>
  <div className="  rounded-md p-4  w-full ">
  
    <div className="animate-pulse flex space-x-4">
     
      <div className="flex-1 space-y-6 py-1">
        <div className="h-2 bg-sec-light-orange rounded"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-sec-light-orange rounded col-span-2"></div>
            <div className="h-2 bg-sec-light-orange rounded col-span-1"></div>
          </div>
          <div className="h-2 bg-sec-light-orange rounded"></div>
        </div>
      </div>
      <div className="rounded-full bg-sec-light-orange h-10 w-10"></div>
    </div>
  </div>
  
  <div className="  rounded-md p-4  w-full ">
   
    <div className="animate-pulse flex space-x-4">
      <div className="flex-1 space-y-6 py-1">
        <div className="h-2 bg-sec-light-orange rounded"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-sec-light-orange rounded col-span-2"></div>
            <div className="h-2 bg-sec-light-orange rounded col-span-1"></div>
          </div>
          <div className="h-2 bg-sec-light-orange rounded"></div>
        </div>
      </div>
      <div className="rounded-full bg-sec-light-orange h-10 w-10"></div>
    </div>
  </div>
  
  <div className="  rounded-md p-4  w-full ">
   
    <div className="animate-pulse flex space-x-4">
      <div className="flex-1 space-y-6 py-1">
        <div className="h-2 bg-sec-light-orange rounded"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-sec-light-orange rounded col-span-2"></div>
            <div className="h-2 bg-sec-light-orange rounded col-span-1"></div>
          </div>
          <div className="h-2 bg-sec-light-orange rounded"></div>
        </div>
      </div>
      <div className="rounded-full bg-sec-light-orange h-10 w-10"></div>
    </div>
  </div>
  </>
):(<>

{category!=="ALL_PRODUCTS"&&categoryProducts&&categoryProducts.map(prod=>(
    <MenuSingleItemCard editState={editState} key={prod._id} product={prod}/>
    ) )}

    {category=="ALL_PRODUCTS"&&unGroupProducts&&unGroupProducts.map(prod=>(
    <MenuSingleItemCard editState={editState} key={prod._id} product={prod}/>
    ) )}
  </>)}
        </div>
    )
}

export default Menu
