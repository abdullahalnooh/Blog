import React from 'react'
import { useParams } from 'react-router-dom';
import {useState} from 'react'

function Post({blogs}) {
  const param = useParams();

let blog={}
if(blog){
        let arr = blogs.data.filter(blog=> blog.id == param.blogId)
        blog=arr[0]

}else{
    blog={}
}
console.log(blog)

  return (
              <article className="px-4 py-24 mx-auto max-w-7xl" itemID="#" itemScope itemType="http://schema.org/BlogPosting">
            <div className="w-full mx-auto mb-10 text-left md:w-3/4 lg:w-1/2">
              <div className="pb-6 mb-6 border-b border-blue-500">
                <h1 className="mb-3 text-3xl font-bold text-gray-200 md:leading-tight md:text-4xl" itemProp="headline" >
                  {blog.attributes.Title}
                </h1>
                <p className="text-base text-gray-400">{blog.attributes.publishdate} — Written by <b>Abdullah Alnooh</b></p>
              </div>
              <img src={`http://localhost:1337${blog.attributes.header.data.attributes.url}`} className="object-cover w-full h-64 bg-center rounded" alt='art pic' />
            </div>

            <div className="w-full text-gray-200 mx-auto prose md:w-3/4 lg:w-1/2">
              <p>
               {blog.attributes.posts}
              </p>
             
            </div>
          </article>

  )
}

export default Post
