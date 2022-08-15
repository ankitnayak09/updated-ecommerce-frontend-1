import Link from "next/link"
import Image from 'next/image'

const SingleCategoryCard = ({category}) => {
    return (
                  
        <Link  href={`/shop/category/${category.name}`}>
            
               
        <a  className="  ">
          <div className="w-full aspect-square block relative">
      
<Image
   
      src={category.imageSrc}
      alt={category.name}
    layout="fill"
  
    />


          </div>
          <div className=" bg-gradient-to-br pb-3 pl -z-10 -mt-7 md:-mt-14 pt-7 md:pt-12  relative rounded-t-medium rounded-bl-medium rounded-br-[100px]  from-pri-orange via-mid-orange to-pri-yellow">
          <p className="mb-2 px-1   text-left font-semibold text-xs md:px-3 md:text-lg text-white">{category.name}</p>
          </div>
     
        </a>
        </Link>
       
    )
}

export default SingleCategoryCard
