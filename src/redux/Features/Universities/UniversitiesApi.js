import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../../../Utils/BaseURL";

const UniversitiesApi = createApi({
  reducerPath: "UniversitiesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/niversities`,
    credentials: "include",
  }),
  tagTypes: ["Universities"],
  endpoints: (builder) => ({
    // fetching all products
    fetchAllUniversities: builder.query({
      query: ({
        category,
        color,
        minPrice,
        maxPrice,
        page = 1,
        limit = 10,
      }) => {
        const queryParams = new URLSearchParams({
          category: category || "",
          color: color || "",
          minPrice: minPrice || 0,
          maxPrice: maxPrice || "",
          page: page.toString(),
          limit: limit.toString(),
        }).toString();

        return `/?${queryParams}`;
      },
      providesTags: ["Products"],
    }),
    // single fetching
    fetchProductById: builder.query({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: "Products", id }],
    }),
    // add products
    AddProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/create-product",
        method: "POST",
        body: newProduct,
        credentials: "include",
      }),
      invalidatesTags: ["Products"],
    }),

    // related products
    fetchRelatedProducts: builder.query({
      query: (id) => `/related/${id}`,
    }),

    // update products
    updateProduct: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `update-product/${id}`,
        method: "PATCH",
        body: rest,
        credentials: "include",
      }),
      invalidatesTags: ["Products"],
    }),
    // delete products
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Products", id }],
    }),
  }),
});

export const {
  useFetchAllProductsQuery,
  useFetchProductByIdQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useFetchRelatedProductsQuery,
} = UniversitiesApi;

export default UniversitiesApi;
