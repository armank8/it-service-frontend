import { baseApi } from './baseApi'

const USERS_URL = "/users";

export const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => ({
                url: `${USERS_URL}`,
                method: "GET",

            }),
            // invalidatesTags: ["user"]
        }),
        getSingleUser: build.query({
            query: (id) => ({
                url: `${USERS_URL}/${id}`,
                method: "GET",
            }),
            // invalidatesTags: ["user"]
        }),
        UpdateSingleUser: build.mutation({
            query: ({ id, userData }) => ({
                url: `${USERS_URL}/${id}`,
                method: "PATCH",
                body: userData
            }),
            // invalidatesTags: ["user"]
        }),
    }),
})

export const { useGetUsersQuery, useGetSingleUserQuery,useUpdateSingleUserMutation } = userApi;