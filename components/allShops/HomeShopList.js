import SingleShopCard from "./SingleShopCard"
import { clearErrors, getAllShops } from "../../actions/shopAction"
import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react"
import AllShopsLoader from "../loading/AllShopsLoader"
import { toast } from "react-toastify"



const products = [
    {
      id: 1,
      name: 'Basic Teejhbjsh jh d dj dj jv  nvvnnbn b nv n',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$3',
      color: 'Black'
    },{
      id: 2,
      name: 'second shop Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$13',
      color: 'Black'
  },
  {
      id: 3,
      name: 'third shop',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$40',
      color: 'Black',
    },
  {
      id: 4,
      name: 'third shop',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$40',
      color: 'Blac',
    },
  {
      id: 5,
      name: 'third shop',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$40',
      color: 'Black',
    },
  ]
const HomeShopList = () => {

  const dispatch=useDispatch();
  const {loading,error,shops}=useSelector(state => state.shops)
  // const executedRef=useRef(false);

  useEffect(() => {
    if(error){
   toast.error(error);
   dispatch(clearErrors);
    }
  
    // if(executedRef.current){return};
  dispatch(getAllShops())

  // executedRef.current=true;
  }, [dispatch,error])

    return (
      <>
        <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Shops</h2>
  
            {loading?(
              <AllShopsLoader/>
              ):(
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {/* <AllShopsLoader/> */}
            {shops.map((shop) => (
  <SingleShopCard shop={shop} key={shop._id}/>
             
            ))}
          </div>
        )}
        </div>
      </div>


      </>
    )
}

export default HomeShopList
