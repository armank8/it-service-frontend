import { baseApi } from './baseApi'

const SERVICES_URL = "/services";

export const servicesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getServices: build.query({
            query: () => ({
                url: `${SERVICES_URL}`,
                method: "GET",               
            }),
           
        }),
    }),
})

export const { useGetServicesQuery } = servicesApi;