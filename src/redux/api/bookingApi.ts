import { baseApi } from './baseApi'

const BOOKING_URL = "/booking";

export const bookingApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getBookings: build.query({
            query: () => ({
                url: `${BOOKING_URL}`,
                method: "GET",

            }),
            // invalidatesTags: ["user"]
        }),
        getSingleBooking: build.query({
            query: (id) => ({
                url: `${BOOKING_URL}/${id}`,
                method: "GET",
            }),
            // invalidatesTags: ["user"]
        }),
        createBooking: build.mutation({
            query: (blogData) => ({
                url: `${BOOKING_URL}`,
                method: "POST",
                data: blogData
            }),
            // invalidatesTags: ["user"]
        }),
       
        deleteBooking: build.mutation({
            query: (id) => ({
                url: `${BOOKING_URL}/${id}`,
                method: "DELETE",
            }),
            // invalidatesTags: ["user"]
        }),
    }),
})

export const {  } = bookingApi ;