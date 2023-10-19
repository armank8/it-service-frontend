import { baseApi } from './baseApi'

const SERVICES_URL = "/services";

export const servicesApi: any = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getServices: build.query({
            query: () => ({
                url: `${SERVICES_URL}`,
                method: "GET",
            }),
            providesTags: ['deletion'],
        }),
        getSingleService: build.query({
            query: (id) => ({
                url: `${SERVICES_URL}/${id}`,
                method: "GET",
            }),
            providesTags: ['comments'],

        }),
        createService: build.mutation({
            query: (data) => ({
                url: `${SERVICES_URL}`,
                method: "POST",
                data: data
            }),
        }),
        addReview: build.mutation({
            query: ({ id, info }) => {
                console.log(id, info); // You can log the id and data here
                return {
                    url: `${SERVICES_URL}/${id}/review`,
                    method: "POST",
                    data: info,
                };
            },
            invalidatesTags: ['comments']
        }),
        deleteService: build.mutation({
            query: (id) => ({
                url: `${SERVICES_URL}/${id}/delete`,
                method: "DELETE",
            }),
            invalidatesTags: ['deletion'],

        }),
    }),
})

export const { useGetServicesQuery, useGetSingleServiceQuery, useCreateServiceMutation,useAddReviewMutation,useDeleteServiceMutation } = servicesApi;