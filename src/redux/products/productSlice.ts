import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface IProduct {
   id: string;
   title: string;
   subtitle: string;
   image:string;
   description:string;
   rate:number;
   price:number;
   size:string;
   color:string;
}

interface IProductInitialState{
    value: IProduct[];
    isLoading:boolean;
};

const initialState:IProductInitialState={
    value:[],
    isLoading:false,
};

export const fetchProducts = createAsyncThunk("fetchproducts", async ()=>{
    const res = await axios.get<IProduct[]>("https://ecommerce-backend-fawn-eight.vercel.app/api/products")
    return res.data;
});


const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled, (state,action)=>{
            state.value = action.payload;
        });
    },
});

export default productSlice.reducer;