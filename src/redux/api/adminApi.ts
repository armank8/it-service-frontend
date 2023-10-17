import { baseApi } from './baseApi'

const ADMIN_URL = "/admins";

export const adminsApi: any = baseApi.injectEndpoints({
    endpoints: (build) => ({
        admins: build.query({
            query: () => ({
                url: `${ADMIN_URL}`,
                method: "GET",
            }),

        }),
        getSingleAdmin: build.query({
            query: (id) => ({
                url: `${ADMIN_URL}/${id}`,
                method: "GET",
            }),

        }),
    }),
});

export const { useAdminsQuery, useGetSingleAdminQuery } = adminsApi;