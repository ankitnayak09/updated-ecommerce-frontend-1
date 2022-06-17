import { SearchIcon,UserIcon,CakeIcon } from "@heroicons/react/outline"
const BottomNav = () => {
    return (
       
        <div className="w-full md:hidden ">
          
            <section className="block fixed inset-x-0 bottom-0 z-10 bg-slate-400">
       <div className="flex justify-between"> 
       <a href="#" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
        <CakeIcon className="inline-block mb-1 w-5"/>
        <span className="tab tab-home block text-xs">Food</span>
			</a>
       <a href="#" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
        <SearchIcon className="inline-block mb-1 w-5"/>
        <span className="tab tab-home block text-xs">Search</span>
			</a>
       <a href="#" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
        <UserIcon className="inline-block mb-1 w-5"/>
        <span className="tab tab-home block text-xs">Account</span>
			</a>
       </div>
            </section>
        </div>
    )
}

export default BottomNav
