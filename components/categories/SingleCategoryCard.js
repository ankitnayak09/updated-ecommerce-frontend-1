import Link from "next/link"
import Image from 'next/image'

const SingleCategoryCard = ({category}) => {
    return (
                  
        <Link  href={`/shop/category/${category.name}`}>
            
               
        <a  className="group bg-sec-light-orange rounded-full pb-3  ">
          <div className="w-full aspect-square border-4 border-pri-orange rounded-full overflow-hidden xl:aspect-w-7 xl:aspect-h-8 block relative">
            {/* <img
              src={category.imageSrc}
              alt={category.name}
              className="w-full h-full object-center object-cover group-hover:opacity-75"
            /> */}


<Image
   
      src={category.imageSrc}
      alt={category.name}
    layout="fill"
  
  //   layout="responsive"
  //  height="2px"
  //  width="2px"
    />


          </div>
          <h3 className="my-2  text-sm text-center font-medium text-sec-text-gray">{category.name}</h3>
     
        </a>
        </Link>
     
    )
}

export default SingleCategoryCard
