import React from 'react'
import Usefetch from '../Usefetch';
import { Link } from 'react-router-dom';
function Bloglist() {
    let {data, error, loading} = Usefetch('http://localhost:1337/api/blogs?populate=*')
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    console.log(data)
  return (
    <div>
        <div className="py-12">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="mb-12 space-y-2 text-center">
                <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">Abdullah alnooh</h2>
                <p className="text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-6/12">
                Welcome to a realm of captivating stories, where technology, lifestyle, and innovation come together to spark your imagination and fuel your passion for learning
                </p>
              </div>
{/* =============================== */}

            {data.data.map((blog) =>
            
            <Link to={`${blog.id}`}>
              <div className="lg:w-3/4 xl:w-2/4 lg:mx-auto mb-2">
                  <div className="group relative -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-transparent border border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-transparent hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300 hover:z-10">
                    <div className="sm:w-2/6 rounded-3xl overflow-hidden transition-all duration-500 group-hover:rounded-xl">
                      <img
                        src={`http://localhost:1337${blog.attributes.header.data.attributes.url}`}
                        alt="art cover"
                        loading="lazy"
                        width="1000"
                        height="667"
                        className="h-56 sm:h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="sm:p-2 sm:pl-0 sm:w-4/6">
                      <span className="mt-4 mb-2 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0">{blog.attributes.publishdate}</span>
                      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                      {blog.attributes.Title}

                      </h3>
                      <p className="my-6 text-gray-600 dark:text-gray-300">
                        {blog.attributes.Excerpt}
                      </p>

                    </div>
                    
                  </div>

              </div>

              </Link>
            )}

{/* =============================== */}
              
            </div>
        </div>
    </div>
  )
}

export default Bloglist
