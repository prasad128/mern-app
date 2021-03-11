import React from "react";
// import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

function BlogDetails() {
  const { id } = useParams();
  const { data: blog, isLoading, error } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );

  const history = useHistory();

  const handleClick = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "Delete",
    })
      .then((result) => history.push("/blogs"))
      .catch((err) => console.log(err));
  };

  console.log(blog);
  return (
    <div className="px-5 py-16 text-gray-900">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <div className="flex items-center justify-between">
        <div className="text-2xl font-semibold">{blog.title}</div>
        <div
          onClick={handleClick}
          className="p-3 rounded-full cursor-pointer active:text-gray-500 hover:shadow-lg"
        >
          <MdDelete size="1.5rem" />
        </div>
      </div>

      <div className="px-5 mt-10 text-lg">{blog.body}</div>
    </div>
  );
}

export default BlogDetails;
