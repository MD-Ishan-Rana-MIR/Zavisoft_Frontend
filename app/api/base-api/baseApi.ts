import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
console.log(BASE_URL)

export const baseApi = createApi({


    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}`,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");

            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }

            headers.set("Accept", "application/json");

            return headers;
        },
    }),
    tagTypes: [
        "Product",

    ],
    endpoints: () => ({}),
});
