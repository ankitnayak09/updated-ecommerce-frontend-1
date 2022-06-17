const categories = [
    {
      id: 1,
      name: 'Pizza',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',

    },
    {
      id: 2,
      name: 'Burger',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    
    },
    {
      id: 3,
      name: 'Dessert',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
   
    },
    {
      id: 4,
      name: 'Juice',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
   
    },
    {
      id: 5,
      name: 'South Indian',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
     
    },
    // More products...
  ]

const AllCategories = () => {
    return (
        <div className="bg-white">
        <div className="max-w-2xl mx-auto  px-4  sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 my-10">Categories</h2>
  
  
          <div className="grid grid-cols-4 gap-y-10  gap-x-6 lg:grid-cols-5 xl:grid-cols-4 xl:gap-x-8">
            {categories.map((category) => (
              <a key={category.id} href={category.href} className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-full overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={category.imageSrc}
                    alt={category.name}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-center font-bold text-gray-700">{category.name}</h3>
           
              </a>
            ))}
          </div>
        </div>
      </div>
    )
}

export default AllCategories
