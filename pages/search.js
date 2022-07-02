import AdvSearch from "../components/advSearch/AdvSearch"
import AllCategories from "../components/categories/AllCategories"
import BottomNav from "../components/layout/BottomNav"
// import Search from "../components/search/Search"
const search = () => {
    return (
        <div className="h-screen">
            {/* <Search/> */}
            <div className="flex  flex-col  h-full">
                <div className="flex-grow">
                <h2 className="text-2xl max-w-2xl px-4 font-bold tracking-tight text-gray-900 mt-24 mb-8">Popular Categories</h2>
                    <AllCategories/>
                </div>
                <div className="mb-28">
            <AdvSearch/>

            </div>
            </div>
            <BottomNav/>
        </div>
    )
}

export default search
