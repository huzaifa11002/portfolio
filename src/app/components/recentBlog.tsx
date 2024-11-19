import Card from "../components/card";
import Link from "next/link";
import blogContent from "../components/blogContent";
const RecentBlog = () => {
    function generateRemoveSpaceSlug(title: string) {
        return title.replace(/\s+/g, '-').toLowerCase();
    };
    return (
        <>
            <div className="border-t-2 border-[#c4ef04] mb-10">
                <h2 className="text-xl md:text-xl lg:text-2xl xl:text-3xl text-[#fff] font-bold text-center uppercase my-10 sm:text-start">Recent</h2>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
            </div>
        </>
    )
}

export default RecentBlog;