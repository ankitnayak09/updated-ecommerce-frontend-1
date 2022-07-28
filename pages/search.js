import AdvSearch from "../components/advSearch/AdvSearch"
import AllCategories from "../components/categories/AllCategories"
import BottomNav from "../components/layout/BottomNav"
import TopNavbar from "../components/layout/TopNavbar"
// import Search from "../components/search/Search"
const search = () => {
    return (
        <div className="h-screen md:h-auto">
            {/* <div className="absolute z-10 w-full"> */}
            <TopNavbar/>
            {/* </div> */}
            {/* <Search/> */}
            <div className="flex md:flex-col-reverse flex-col  h-full">
                <div className="flex-grow">
                <h2 className="text-2xl max-w-2xl mx-auto lg:max-w-3xl lg:px-8  px-4 font-bold tracking-tight text-gray-900 mt-32 md:mt-0 mb-8">Popular Categories</h2>
                    <AllCategories/>
                </div>
                <div className="mb-28  md:mt-28 md:mb-10  ">
            <AdvSearch/>

            </div>
            </div>
            <BottomNav/>
        </div>
    )
}


  

export default search
