import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
const { VITE_APP_API_BASE_URL, VITE_APP_API_KEY } = import.meta.env;
export const cliApi = createApi({
  reducerPath: "cliApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${VITE_APP_API_BASE_URL}/clientes`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).sec.token;
      headers.set("apikey", VITE_APP_API_KEY || "");
      headers.set("Authorization", `Bearer ${token}`);
    },
  }),
  tagTypes: ["Clientes"],
  endpoints: (builder) => ({
    getAll: builder.query({
      query: () => ({
        url: "all",
      }),
      providesTags: ["Clientes"],
    }),
    getById: builder.query({
      query: (id) => ({
        url: `byid/${id}`,
      }),
      providesTags: ["Clientes"],
    }),
    addNew: builder.mutation({
      query: (cli: {
        identidad: string;
        nombre: string;
        apellido: string;
        email: string;
      }) => ({
        url: "new",
        method: "POST",
        body: cli,
      }),
      invalidatesTags: ["Clientes"],
    }),
    updateCliente: builder.mutation({
      query: (cli: {
        identidad: string;
        nombre: string;
        apellido: string;
        email: string;
        genero?: string;
        fechaNac?: Date;
        notas?: string;
      }) => ({
        url: "upd",
        method: "PUT",
        body: cli,
      }),
      invalidatesTags: ["Clientes"],
    }),
  }),
});

export const { useGetAllQuery, useGetByIdQuery, useAddNewMutation } = cliApi;
