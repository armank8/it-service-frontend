"use client";

import Blogs from "@/components/ui/Blogs"
import { useGetBlogsQuery } from "@/redux/api/blogApi";
import Loading from "../loading";

const BlogsPage = () => {
    const { data: blogsData, isLoading: blogsLoading } = useGetBlogsQuery(undefined);

    if (blogsLoading) {
        return <Loading></Loading>
    }

    // console.log(blogsData);

    return (
        <div>
            <h1 style={{textAlign:'center'}}>Our Tech Blogs</h1>
            {
                blogsData && <Blogs blogs={blogsData}></Blogs>
            }
        </div>
    )
}

export default BlogsPage