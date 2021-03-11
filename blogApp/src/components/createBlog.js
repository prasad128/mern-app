import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [snippet, setSnippet] = useState("");
  const [body, setBody] = useState("");
  const history = useHistory();
  const [pending, setPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPending(true);
    const blog = { title, snippet, body };
    console.log(blog);
    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then(() => {
        console.log("new blog added");
        setPending(false);
        history.push("/blogs");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center px-5 py-16 text-gray-900">
      <form onSubmit={handleSubmit} className="w-1/3 text-lg tracking-wide">
        <div className="space-y-6 ">
          <div className="">
            <div className="">Blog title:</div>
            <div className="my-2">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-400 rounded-md"
              />
            </div>
          </div>
          <div className="">
            <div className="">Blog snippet:</div>
            <div className="my-2">
              <input
                type="text"
                value={snippet}
                onChange={(e) => setSnippet(e.target.value)}
                className="w-full px-3 py-2 border border-gray-400 rounded-md"
              />
            </div>
          </div>
          <div className="">
            <div className="">Blog body:</div>
            <div className="my-2">
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="w-full px-3 py-2 border border-gray-400 rounded-md"
                name="body"
                id=""
                cols="30"
                rows="5"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="my-4 text-center">
          {pending && (
            <button className="px-2 py-1 text-lg text-white bg-crimson">
              Adding Blog...
            </button>
          )}
          {!pending && (
            <button className="px-2 py-1 text-lg text-white bg-crimson">
              Add Blog
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreateBlog;
