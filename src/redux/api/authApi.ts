import { baseApi } from './baseApi'

const AUTH_URL = "/auth";

export const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        userSignup: build.mutation({
            query: (signupData) => ({
                url: `${AUTH_URL}/signup`,
                method: "POST",
                data: signupData
            }),
            invalidatesTags: ["user"]
        }),
        userLogin: build.mutation({
            query: (loginData) => ({
                url: `${AUTH_URL}/login`,
                method: "POST",
                data: loginData
            }),
            invalidatesTags: ["user"]
        }),
        changePassword: build.mutation({
            query: ({ id, info }) => ({
                url: `${AUTH_URL}/change_password/${id}`,
                method: "POST",
                data: info
            }),
            // invalidatesTags: ["user"]
        }),
    }),
})

export const { useUserSignupMutation, useUserLoginMutation, useChangePasswordMutation } = authApi;