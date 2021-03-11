import React from "react";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";
// import { Link } from "react-router-dom";

function Blogs() {
  const { data: blogs, isLoading, error } = useFetch(
    "http://localhost:8000/blogs/"
  );

  return (
    <div className="px-5 py-16 text-gray-900">
      <div className="text-3.5xl font-semibold">All Blogs</div>
      <div className="mt-8 space-y-10">
        {isLoading && <div className="text-2xl">Loading...</div>}
        {error && <div className="text-2xl text-red-500">{error}</div>}
        {blogs &&
          blogs.map((blog) => {
            console.log(blog);
            return (
              <div key={blog._id}>
                <div className="px-8 cursor-pointer border-l-6 border-crimson group">
                  <Link to={`/blogDetails/${blog._id}`}>
                    <div className="text-lg font-semibold group-hover:text-crimson">
                      {blog.title}
                    </div>
                    <div className="mt-1">{blog.snippet}</div>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Blogs;
