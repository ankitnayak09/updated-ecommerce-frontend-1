import  { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify";
import { clearErrors, createProduct, getAdminProducts } from "../../../actions/productActions";


const NewProduct = ({setIsOpen}) => {

    const dispatch = useDispatch();
    const router=useRouter()
    const shopId=router.query.shopId
    
    const {loading,error,success}= useSelector(state => state.newProduct);

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [description, setDescription] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [image, setImage] = useState("");
    const [imagePreview, setImagePreview] = useState("");
    const [isPureVeg, setIsPureVeg] = useState(false);
    
    const categories=[
        "burger",
        "juice",
        "pizza",
        "dessert",
        "chinese",
        "southIndian"
    ]


    useEffect(() => {
     if(error){
         toast.error(error);
         dispatch(clearErrors())
     }
     if(success){
         toast.success("product created")
        //  router.push("/orders")
         dispatch({type:"NEW_PRODUCT_RESET"})
         setIsOpen(false)
 
         dispatch(getAdminProducts(shopId))

     }

     
    }, [dispatch,toast,error,router,success])

    const createProductSubmitHandler=(e)=>{
        e.preventDefault();
       

        const myForm=new FormData();

        myForm.set("name",name);
        myForm.set("price",price);
        myForm.set("description",description);
        
        // myForm.set("categories",selectedCategories);
        selectedCategories.forEach((category)=>{
            myForm.append("categories",category)
        })

        if(image!==""){
        myForm.set("image",image);
        }
        myForm.set("isVegetarian",isPureVeg);
        myForm.set("shop",router.query.shopId);
        
        dispatch(createProduct(myForm,shopId))
    }

    const createProductImageChange=(e)=>{
        const file=e.target.files[0];

        setImage();
        setImagePreview();

        const reader=new FileReader();

        reader.onload=()=>{
            if(reader.readyState===2){
                setImagePreview(reader.result);
                setImage(reader.result)
            }
        }
        reader.readAsDataURL(file)

    }

    const handleCheckBoxChange=(e)=>{
        const {value,checked}=e.target;
          // Case 1 : The user checks the box
    if (checked) {
        setSelectedCategories([...selectedCategories, value]
 
        );
      }
    
      // Case 2  : The user unchecks the box
      else {
        setSelectedCategories(
            selectedCategories.filter((e) => e !== value)
        );
      }
    };
    

    return (
        <div>
             <form className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div>
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">Profile</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              This information will be displayed publicly so be careful what you share.
            </p>
          </div>

          <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Product Name
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="max-w-lg flex rounded-md shadow-sm">
                
                  <input
                    type="text"
                    name="name"
                    id="name"
                   
                    // value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                   
                    className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                  />
                </div>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Product Price
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="max-w-lg flex rounded-md shadow-sm">
                
                  <input
                    type="number"
              
                    
                    onChange={(e)=>{setPrice(e.target.value)}}
                   
                    className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                  />
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Description
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <textarea
                    // value={description}
                   onChange={(e)=>{setDescription(e.target.value)}}
                  rows={3}
                  className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                  defaultValue={''}
                />
                <p className="mt-2 text-sm text-gray-500">Write a few sentences about ur product.</p>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                Photo
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="flex items-center">
                  <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                    <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>

              {imagePreview!=="" &&  <img src={imagePreview} alt="nothing" />} 
                  <button
                    type="button"
                    className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Cover photo
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input id="file-upload" onChange={createProductImageChange} name="productPhoto" accept="image/" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-200 pt-8 space-y-6 sm:pt-10 sm:space-y-5">
         
          <div className="space-y-6 sm:space-y-5 divide-y divide-gray-200">
            <div className="pt-6 sm:pt-5">
              <div role="group" aria-labelledby="label-email">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                  <div>
                    <div className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700" id="label-email">
                      Categories
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0  sm:col-span-2">
                    <div className="max-w-lg  grid grid-cols-2 gap-1">
                 {categories.map(cat=>(
                          <div key={cat} className="relative flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id={cat}
                              name={cat}
                              onChange={handleCheckBoxChange}
                              value={cat}
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor={cat} className="font-medium text-gray-700">
                              {cat}
                            </label>
                         
                          </div>
                        </div>
                 ))}
                 
                      <div>
                   
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-6 sm:pt-5">
              <div role="group" aria-labelledby="label-notifications">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                  <div>
                    <div
                      className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"
                      id="label-notifications"
                    >
                      Type
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="max-w-lg">
                    
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            id="nonVeg"
                            name="isVegitarian"
                            type="radio"
                            value={false}
                            onChange={(e)=>{setIsPureVeg(e.target.value)}}
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          />
                          <label htmlFor="nonVeg" className="ml-3 block text-sm font-medium text-gray-700">
                            Nonveg
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="pureVeg"
                            name="isVegitarian"
                            type="radio"
                            value={true}
                            onChange={(e)=>{setIsPureVeg(e.target.value)}}
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          />
                          <label htmlFor="pureVeg" className="ml-3 block text-sm font-medium text-gray-700">
                            Pure veg
                          </label>
                        </div>
                 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading?true:false}
            onClick={createProductSubmitHandler}
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {loading?(     <>    <span 
        className="w-6 my-auto mr-3 aspect-square border-4 border-white border-dashed rounded-full animate-spin"></span>

              <p className=" text-white text-lg font-semibold text-center" > just a sec, v r creating product </p>
              </>):("New product")}
          </button>
        </div>
      </div>
    </form>
        </div>
    )
}

export default NewProduct
