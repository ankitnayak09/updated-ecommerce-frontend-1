import { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'

import { CheckIcon, SelectorIcon,SearchIcon,XIcon } from '@heroicons/react/solid'
import { Combobox } from '@headlessui/react'
import { getSearchedShops} from "../../actions/shopAction"
import Link from 'next/link'


const people = [
  {
    id: 1,
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More users...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}




const Search = () => {
    const dispatch=useDispatch()

    const [query, setQuery] = useState('')
    // const [selectedPerson, setSelectedPerson] = useState()
    const {loading,error,shops,shopCount,products,productCount}=useSelector(state => state.searchShops)

    // const filteredPeople =
    //   query === ''
    //     ? people
    //     : people.filter((person) => {
    //         return person.name.toLowerCase().includes(query.toLowerCase())
    //       })

          useEffect(() => {
              const pageSize=10
              const page=1
              
              if(error){
                toast.error(error);
                dispatch(clearErrors());
                 }
            if(query.length>1){
                dispatch( getSearchedShops(page,pageSize,query))
            }
            if(query.length<1){
                dispatch( {type:"CLEAR_SEARCH_SHOP"})
            }
            // console.log(query)
          }, [dispatch,error,query])


    return (
        <Combobox as="div" className="p-3" >
      {/* <Combobox.Label className="block text-sm font-medium text-gray-700">Assigned to</Combobox.Label> */}
      <div className="relative mt-1">
        <Combobox.Input
          className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm "
          onChange={(event) => setQuery(event.target.value)}
        //   displayValue={(shops) => shops.name}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
      
            {shops.length||products.length>0?(
                 <XIcon onClick={()=>{dispatch({type:"CLEAR_SEARCH_SHOP"})}} aria-hidden="true"  className='h-5 w-5 text-gray-400  ' />
            ):(
          <SearchIcon aria-hidden="true"  className='h-5 w-5 text-gray-400  ' />
          )}
          
        
        
          
          
        </Combobox.Button>

        {(products.length > 0||shops.length > 0) && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-screen w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {shops.length > 0 &&shops.map((shop) => (
              <Link href={`/shop/${shop._id}`}  key={shop._id}>
              <Combobox.Option
               
                value={shop}
          
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    // active ? 'bg-indigo-600 text-white' : 
                    'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <div className="flex items-center">
                      <img src={shop.images[0]?.url} alt="" className="h-6 w-6 flex-shrink-0 rounded-full" />
                      <div className="flex flex-col">
                      <span className={classNames('ml-3 truncate', selected && 'font-semibold')}>{shop.name}</span>
                      <span className="font-thin ml-3">shop</span>
                      </div>
                    </div>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-indigo-600'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
             </Link>
            ))}




{products.length > 0 &&products.map((product) => (
   <Link href={`/shop/${product.shop}`}  key={product._id}>
              <Combobox.Option
               
                value={product}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    // active ? 'bg-indigo-600 text-white' :
                     'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <div className="flex items-center">
                      <img src={product.image?.url} alt="" className="h-6 w-6 flex-shrink-0 rounded-full" />
                      <div className="flex flex-col">
                      <span className={classNames('ml-3 truncate', selected && 'font-semibold')}>{product.name}</span>
                      <span className="font-thin ml-3">product</span>
                      </div>
                    </div>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-indigo-600'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
              </Link>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>

    )
}

export default Search
