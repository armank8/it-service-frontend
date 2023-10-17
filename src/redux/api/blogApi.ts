import { baseApi } from './baseApi'

const BLOG_URL = "/blogs";

export const blogApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getBlogs: build.query({
            query: () => ({
                url: `${BLOG_URL}`,
                method: "GET",

            }),
            // invalidatesTags: ["user"]
        }),
        getSingleBlog: build.query({
            query: (id) => ({
                url: `${BLOG_URL}/${id}`,
                method: "GET",
            }),
            // invalidatesTags: ["user"]
        }),
        createBlog: build.mutation({
            query: (blogData) => ({
                url: `${BLOG_URL}`,
                method: "POST",
                data: blogData
            }),
            // invalidatesTags: ["user"]
        }),
        updateBlog: build.mutation({
            query: ({ id, blogData }) => ({
                url: `${BLOG_URL}/${id}`,
                method: "PATCH",
                data: blogData
            }),
            // invalidatesTags: ["user"]
        }),
        deleteBlog: build.mutation({
            query: (id) => ({
                url: `${BLOG_URL}/${id}`,
                method: "DELETE",
            }),
            // invalidatesTags: ["user"]
        }),
    }),
})

export const { useGetBlogsQuery, useGetSingleBlogQuery, useCreateBlogMutation, useUpdateBlogMutation, useDeleteBlogMutation } = blogApi;