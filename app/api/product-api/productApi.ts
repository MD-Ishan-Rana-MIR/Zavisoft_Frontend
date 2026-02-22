import { baseApi } from "../base-api/baseApi"


export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getProducts: builder.query({
            query: ({ page = 1, limit = 8 }) => {
                const offset = (page - 1) * limit
                return `products?offset=${offset}&limit=${limit}`
            },
        }),

        productDetails: builder.query({
            query: (id) => ({
                url: `/products/${id}`,
                method: "GET"
            }),
            providesTags: ["Product"]
        })
    }),
})

export const {
    useGetProductsQuery,
    useProductDetailsQuery

} = authApi
