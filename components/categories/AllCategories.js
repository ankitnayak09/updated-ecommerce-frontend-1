import Link from "next/link"

// import { Fragment, useEffect } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/outline'
import SingleCategoryCard from "./SingleCategoryCard"
import categoriesJson from "../../json/categories.json"

const categories = categoriesJson.categoriesList

// const categories = [
//     {
//       id: 1,
//       name: 'pizza',
//       href: '#',
//       imageSrc: '/categoriesPng/pizza.png',

//     },
//     {
//       id: 2,
//       name: 'burger',
//       href: '#',
//       imageSrc: '/categoriesPng/burger.png',
    
//     },
//     {
//       id: 3,
//       name: 'dessert',
//       href: '#',
//       imageSrc: '/categoriesPng/dessert.png',
   
//     },
//     {
//       id: 4,
//       name: 'juice',
//       href: '#',
//       imageSrc: '/categoriesPng/juice.png',
   
//     },

//   ]

  const hiddenCategories=categoriesJson.hiddenCategoriesList

const AllCategories = () => {
    return (
        // <div className="bg-white">
        <div className="max-w-2xl mx-auto  px-4  sm:px-6 lg:max-w-3xl lg:px-8">
        {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900 my-10">What do u want...</h2> */}
  
  
          {/* <div className="grid grid-cols-4 gap-y-10  gap-x-6 lg:grid-cols-5 xl:grid-cols-4 xl:gap-x-8">
            {categories.map((category) => (
                 <Link key={category.id} href={`/shop/category/${category.name}`}>
            
               
              <a  className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-full overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={category.imageSrc}
                    alt={category.name}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-center font-bold text-gray-700">{category.name}</h3>
           
              </a>
              </Link>
            ))}


          </div>
 */}




          <Disclosure as="div" >
      {({ open }) => (
        <>
     
          
     <div className="grid grid-cols-4 gap-y-10  gap-x-5 ">
            {categories.map((category) => (

              //    <Link key={category.id} href={`/shop/category/${category.name}`}>
            
               
              // <a  className="group">
              //   <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-full overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              //     <img
              //       src={category.imageSrc}
              //       alt={category.name}
              //       className="w-full h-full object-center object-cover group-hover:opacity-75"
              //     />
              //   </div>
              //   <h3 className="mt-4 text-sm text-center font-bold text-gray-700">{category.name}</h3>
           
              // </a>
              // </Link>
           
           <SingleCategoryCard key={category.id} category={category}/>
           ))}





</div>





<Transition.Child
        enter="transition duration-900 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
        // enter="transition duration-100 ease-out"
        // enterFrom="transform scale-95 opacity-0"
        // enterTo="transform scale-100 opacity-100"
        // leave="transition duration-75 ease-out"
        // leaveFrom="transform scale-100 opacity-100"
        // leaveTo="transform scale-95 opacity-0"
      >

          <Disclosure.Panel className="" className="transform transition-all">
     
       

             
          <div className="grid grid-cols-4 gap-y-10 mt-6  gap-x-5">
            {hiddenCategories.map((category) => (
                 <SingleCategoryCard key={category.id} category={category}/>
            ))}


          </div>





           
          </Disclosure.Panel>
        

          </Transition.Child>










          {/* <span
                 
                 className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
               > */}
               
                 <Disclosure.Button className="w-full">
                 {open ? (
                       <div className="w-full text-center border-dashed border-2 border-sec-orange rounded-small mt-6 font-semibold py-1 "><span className="inline-flex mx-auto">  Show less <ArrowUpIcon className="w-4 mx-1"/> </span> </div>
                 ) : (

                  <div className="w-full text-center border-dashed border-[3px] border-sec-orange rounded-small mt-6 font-semibold py-1 "><span className="inline-flex mx-auto">  Show more  <ArrowDownIcon className="w-4 mx-1"/> </span> </div>


                  //  <ChevronDoubleDownIcon className="h-6 text-yellow-500 w-6" aria-hidden="true" />
                 )}
                

                 </Disclosure.Button>
               {/* </span> */}
        </>
      )}
    </Disclosure>










{/* 
        </div> */}
      </div>
    )
}

export default AllCategories
