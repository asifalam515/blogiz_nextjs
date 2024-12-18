import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types";
import React from "react";

const BlogsPage = async () => {
  const res = await fetch("http://localhost:8000/blogs", {
    cache: "no-store",
  });
  const blogs = await res.json();

  return (
    <div className="w-[90%] mx-auto ">
      <h1 className="text-4xl text-center ">
        All Blogs from <span className="text-accent">Blogiz</span>{" "}
      </h1>
      <p className="text-xl text-center text-gray-400 w-2/4 mx-auto">
        {" "}
        <i>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
          dicta!
        </i>{" "}
      </p>
      <div className="grid grid-cols-3 gap-4 my-5">
        {blogs.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
