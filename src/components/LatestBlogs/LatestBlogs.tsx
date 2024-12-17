const LatestBlogs = ({ blogs }) => {
  return (
    <div>
      <h1 className="text-4xl text-center m">
        Latest Blogs from <span className="text-accent">Blogiz</span>{" "}
      </h1>
      <p className="text-xl text-center text-gray-400 w-2/4 mx-auto">
        {" "}
        <i>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
          dicta!
        </i>{" "}
      </p>
    </div>
  );
};

export default LatestBlogs;
