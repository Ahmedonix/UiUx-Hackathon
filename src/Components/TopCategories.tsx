import React from 'react'

const categoryData  = [
    {
      title: "Wing Chair",
      productCount: 3584,
      imageUrl: "/i7.png"
    },
    {
      title: "Wooden Chair",
      productCount: 157,
      imageUrl: "/c2.png"
    },
    {
      title: "Desk Chair",
      productCount: 154,
      imageUrl: "/c3.png"
    }
  ];

  const TopCategories = () => {
    return (
      <div className="flex overflow-hidden flex-col mt-8">
        {/* Top Categories Title */}
        <div className="flex items-center w-full justify-start max-md:px-5 mb-10">
          <div className="text-3xl font-semibold leading-none capitalize text-slate-800 max-md:text-2xl">
            Top Categories
          </div>
          <div className="flex shrink-0 self-stretch my-auto h-11 w-[106px]" />
        </div>
  
        {/* Category Cards */}
        <div className="self-center  w-full max-w-[1320px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-5">
            {categoryData.map((category, index) => (
              <div key={index} className="flex flex-col w-[33%] max-md:w-full max-md:mb-5">
                {/* Category Card */}
                <div className="flex relative flex-col pt-80 leading-none text-white capitalize rounded-xl min-h-[424px] max-md:pt-24 max-md:mt-6 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src={category.imageUrl}
                    alt={`${category.title} category image`}
                    className="object-cover absolute inset-0 size-full"
                  />
                  
                  {/* Black Background with Info */}
                  <div className="flex flex-col absolute bottom-0 p-5 rounded-none bg-black bg-opacity-70 w-full">
                    <div className="text-xl font-semibold max-md:text-lg">{category.title}</div>
                    <div className="mt-2 text-sm opacity-70 max-md:text-xs">{category.productCount} Products</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default TopCategories;
  