import { baseApi } from './baseApi'

const SERVICES_URL = "/services";

export const servicesApi: any = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getServices: build.query({
            query: () => ({
                url: `${SERVICES_URL}`,
                method: "GET",
            }),

        }),
        getSingleService: build.query({
            query: (id) => ({
                url: `${SERVICES_URL}/${id}`,
                method: "GET",
            }),

        }),
    }),
})

export const { useGetServicesQuery, useGetSingleServiceQuery } = servicesApi;