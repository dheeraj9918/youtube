import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constant";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages:[],
    },
    reducers:{
        addmessages:(state,action)=>{
            state.messages.splice(LIVE_CHAT_COUNT,1);
            state.messages.unshift(action.payload);
        },
    }
});

export const {addmessages} = chatSlice.actions;
export default chatSlice.reducer;