"use client";

import BlogsDatas from "@/app/jsonData/BlogsData.json";

const Blog = () => {
  return (
    <>
      <div className="px-[8%] lg:px-[10%] py-20">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h2 className="text-5xl font-semibold Lufga">
              Lates Post
            </h2>
            <p className="GolosText text-lg mt-1">
              Discover the most trending Post in <span className="text-(--second) font-semibold">ABStore</span>
            </p>
          </div>

          <div>
            <button className="bg-black text-white cursor-pointer GolosText text-xl px-6 py-3 rounded-md transition-all duration-300">
              View All
            </button>
          </div>
        </div>


        <div className="idx-blog-wrap grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 ">
            {BlogsDatas.slice(0, 4).map((data) => (
              <div key={data.id} className="idx-blog-card flex flex-col md:flex-row gap-6 cursor-pointer hover:scale-[1.02] transition-all duration-300 shadow-black/10 shadow-md p-4 rounded-md">
                <div className="idx-blog-img w-full md:w-1/3 h-60 md:h-auto">
                  <img src={data.image} alt={data.title} className="w-full h-full object-cover rounded-md" />
                </div>
                <div className="idx-blog-content flex flex-col justify-between w-full md:w-2/3">
                    <div>
                        <h3 className="text-2xl font-semibold Lufga">
                            {data.title}
                        </h3>
                        <p className="GolosText text-gray-600 text-lg mt-2">
                            {data.Description} 
                        </p>    
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                        <span className=" px-4 rounded-2xl py-3  GolosText text-black font-semibold">
                            {data.date}
                        </span>
                     
                      <button className="btn bg-(--second) text-white cursor-pointer GolosText text-xl px-6 py-3 rounded-md transition-all duration-300">
              Read More
            </button>

                    </div>  
                </div>
              </div>
            ))}
        </div> 
      </div>
    </>
  );
};

export default Blog;
