import Card from "../components/card";
import Link from "next/link";
import blogContent from "./blogContent";
import RecentBlog from "../components/recentBlog";
const Blog = () => {
    function generateRemoveSpaceSlug(title:string) {
        return title.replace(/\s+/g, '-').toLowerCase();
    };
    return (
        <>
            <div className="max-w-[90%] xl:w-[1440px] mx-auto my-20">
                <title>Blog</title>
                <h2 className="text-xl md:text-xl lg:text-2xl xl:text-3xl text-[#fff] font-bold text-center uppercase my-10">Blog</h2>
                <div className="grid grid-cols-1 gap-10 my-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {
                        blogContent.map((item, index) => {
                            const slug = generateRemoveSpaceSlug(item.title)
                            return (
                                <Link href={`/blog/${slug}`} key={index}>
                                    <Card title={item.title} des={item.des} img={item.Image}/>
                                </Link>
                            )
                        })
                    }
                </div>
                <RecentBlog />
            </div>
        </>
    )
}

export default Blog;