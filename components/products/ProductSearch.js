import { Fragment, useState } from 'react'
import { Combobox, Dialog, Transition } from '@headlessui/react'
import { SearchIcon,XCircleIcon } from '@heroicons/react/solid'
import {

  ExclamationCircleIcon,

} from '@heroicons/react/outline'
import SingleProductCard from './SingleProductCard'

// const items = [
//   {
//     id: 1,
//     name: 'Text',
//     description: 'Add freeform text with basic formatting options.',
//     url: '#',
//     color: 'bg-indigo-500',
//     icon: PencilAltIcon,
//   },
//   // More items...
// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ProductSearch = ({items}) => {
    const [query, setQuery] = useState('')
    
    const [open, setOpen] = useState(false)
    
  
    const filteredItems =query === ''? []: items.filter((item) => {
        return item.name.toLowerCase().includes(query.toLowerCase())||item.description.toLowerCase().includes(query.toLowerCase())||item.categories.find(cat=>cat.toLowerCase().includes(query.toLowerCase()))
    })
    // console.log(filteredItems)
   
  
    return (<>
     <div className=" flex items-center justify-center">
        {/* <button
          type="button"
          onClick={()=>{setOpen(true)}}
          className="cursor-pointer  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <SearchIcon className="w-6 mr-2"/>
        </button> */}

        <button  onClick={()=>{setOpen(true)}} className=" mx-1  py-2 px-4 rounded-full text-pri-text-light-gray cursor-pointer hover:bg-gray-100  md:flex "> 
                    <SearchIcon className="h-6 w-6 mr-1" />
                    <span className="hidden md:block">
                    Search
                    </span>
                </button>
        
      </div>
      <Transition.Root show={open} as={Fragment} afterLeave={() => setQuery('')}>
        <Dialog as="div" className="fixed inset-0 z-30 overflow-y-auto p-4 sm:p-6 md:pt-7" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 my-backdrop-blur transition-opacity" />
          </Transition.Child>
  
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Combobox
              as="div"
              className="mx-auto max-w-xl transform divide-y  overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
              onChange={() => {}}
            //   onChange={(item) => (window.location = item)}
            >
              <div className="flex justify-between">
                <SearchIcon
                  className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <Combobox.Input
                  className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm" 
                  placeholder="Search..."
                  onChange={(event) => setQuery(event.target.value)}
                />
                  <XCircleIcon onClick={()=>setOpen(false)}
                  className="pointer-events-none self-center mr-4 w-7 text-pri-orange"
        
                />
              </div>
  
              {filteredItems.length > 0 && (
                <Combobox.Options static className="max-h-[600px] scroll-py-3 overflow-y-auto ">
                  {filteredItems.map((item) => (
                    <Combobox.Option
                      key={item._id}
                      value={item}
                      className={({ active }) =>
                        classNames('flex cursor-default select-none rounded-xl pt-3 pl-2')
                        // classNames('flex cursor-default select-none rounded-xl p-3', active && 'bg-gray-100')
                      }
                    >
                      {({ active }) => (
                        <>
                     
                           <SingleProductCard product={item}/>
                        </>
                      )}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              )}
  
              {query !== '' && filteredItems.length === 0 && (
                <div className="py-14 px-6 text-center text-sm sm:px-14">
                  <ExclamationCircleIcon
                    type="outline"
                    name="exclamation-circle"
                    className="mx-auto h-6 w-6 text-gray-400"
                  />
                  <p className="mt-4 font-semibold text-gray-900">No results found</p>
                  <p className="mt-2 text-gray-500">No components found for this search term. Please try again.</p>
                </div>
              )}
            </Combobox>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
  
  </>  )
}

export default ProductSearch
