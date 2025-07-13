import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["products"],
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      async queryFn() {
        try {
          const productsCollectionRef = collection(db, "products");
          const data = await getDocs(productsCollectionRef);
          
          const filterData = data.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          return { data: filterData };
        } catch (error) {
          console.log(error.message);
          return { error: error.message };
        }
      },
      providesTags: ["products"],
    }),

    addProduct: builder.mutation({
      async queryFn(product) {
        try {
          await addDoc(collection(db, "products"), product);
          return { data: product };
        } catch (error) {
          return { error: error.message };
        }
      },
      invalidatesTags: ["products"],
    }),
  }),
});

export const { useGetAllProductsQuery, useAddProductMutation } = apiSlice;
