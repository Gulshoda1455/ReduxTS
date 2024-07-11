import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface ICategory {
   id: string;
   name:string;
   image:string;
}

interface ICategoryInitialState{
    value:ICategory[];
};

const initialState:ICategoryInitialState={
    value:[],
};

export const fetchCategories = createAsyncThunk("fetchcategories", async ()=>{
    const res = await axios.get<ICategory[]>("https://ecommerce-backend-fawn-eight.vercel.app/api/categories")
    return res.data;
});


const categorySlice = createSlice({
    name:"category",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchCategories.fulfilled, (state,action)=>{
            state.value = action.payload;
        });
    },
});

export default categorySlice.reducer;