import blogContent from "../../components/blogContent";
import Image from "next/image";
import RecentBlog from "@/app/components/recentBlog";
import Comments from "@/app/components/comments";

const blogPost = ({ params }:any) => {

  function generateRemoveSpaceSlug(title) {
    return title.replace(/\s+/g, '-').toLowerCase();
  };

  let findPost = blogContent.find((blog) => generateRemoveSpaceSlug(blog.title) === params.id)
  if (!findPost) {
    return <div>Page Not Found</div>;
  }
  return (
    <>
    <div>
      <title>{findPost.title}</title>
    </div>
      <div className="mx-auto max-w-[90%] xl:w-[1440px] my-20">
        <div>
          <div className="flex flex-col gap-10 items-center sm:items-start">
          <div><h1 className="text-center text-2xl font-extrabold text-[#c4ef04] sm:text-3xl md:text-4xl sm:text-start">{findPost.title}</h1></div>
          <div><Image src={findPost.Image} alt="title-image" className="w-[600px] lg:w-[900px]"></Image></div>
          <div className="border-t-2 border-[#c4ef04] text-white py-10 pr-10">{findPost.longDes}</div>
          </div>
          <RecentBlog/>
          <Comments/>
      </div>
      </div>
    </>

  )
}

export default blogPost;