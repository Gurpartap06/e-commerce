import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: []
};


export const WishSlice = createSlice({
    name:'like',
    initialState,
    reducers:{
        addToLike:(state,action)=>{
            const itemIndex = state.items.findIndex(item=> item.id === action.payload.id);

            if(itemIndex>=0){
                state.items[itemIndex].quantity +=1;
            } else {
                state.items.push({...action.payload, quantity: 1});
            }
        },


    }
})