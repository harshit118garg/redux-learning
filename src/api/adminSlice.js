import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
  reducerPath: "admin",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3000/` }),
  endpoints: (builder) => ({
    getAccounts: builder.query({
      query: () => `accounts`,
      transformResponse: (response) =>
        response.sort((a, b) => a.amount - b.amount),
      providesTags: ["accounts"],
    }),
    addAccount: builder.mutation({
      query: ({ name, amount }) => ({
        url: "accounts",
        method: "POST",
        body: { name, amount },
      }),
      invalidatesTags: ["accounts"],
    }),
    deleteAccount: builder.mutation({
      query: (id) => ({
        url: `accounts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["accounts"],
    }),
    updateAccount: builder.mutation({
      query: ({ id, name, amount }) => ({
        url: `accounts/${id}`,
        method: "PATCH",
        body: { name, amount },
      }),
      invalidatesTags: ["accounts"],
    }),
  }),
});

export const {
  useGetAccountsQuery,
  useAddAccountMutation,
  useDeleteAccountMutation,
  useUpdateAccountMutation,
} = adminApi;
