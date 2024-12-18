import BlogDetails from "@/components/ui/BlogDetails";

interface BlogId {
  params: {
    blogId: string;
  };
}
const BlogDetailsPage = async ({ params }: BlogId) => {
  //   console.log(params); params er moddhe blogId passi
  const res = await fetch(`http://localhost:8000/blogs/${params.blogId}`);
  const blog = await res.json();
  console.log(blog);
  return (
    <div>
      <BlogDetails blog={blog}></BlogDetails>
    </div>
  );
};

export default BlogDetailsPage;
