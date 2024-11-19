import Blog from "../components/blog";
import RecentBlog from "../components/recentBlog";
const blog = () => {
  return (
    <>
    <div>
      <title>Blog</title>
    </div>
    <Blog/>
    <div className="max-w-[90%] xl:w-[1440px] mx-auto my-20">
    <RecentBlog/>
    </div>
    </>
  )
};

export default blog;
