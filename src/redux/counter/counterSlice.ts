import { createSlice } from "@reduxjs/toolkit";

interface ICounterInitialState {
    value:number;
}

const initialState :ICounterInitialState={
    value:0,
}

const couterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
           state.value +=1;
        },
        decrement : (state)=>{
            state.value -=1;
        },
        incrementAmount : (state,action)=>{
            state.value +=action.payload;
        },
    },
})

export const counterActions= couterSlice.actions;

export default couterSlice.reducer;

