import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
let initialState = { Mails :[] , TotalCount : 0 , NoViewCount: 0}
console.log(initialState)

export const fetchMails = createAsyncThunk('mails/fetchMails', async (token, { rejectWithValue }) => {
    try {
        const response = await axios.get('http://localhost:4000/receivedmails', {
            headers: {
                Authorization: token
            }
        });
        return response.data.mails;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

const MailSlice = createSlice({
    name: 'Mails',
    initialState ,
    reducers : {
        fetchmails(state,action){
                state.Mails = [...action.payload];
                state.TotalCount = state.Mails.length
                state.NoViewCount = state.Mails.reduce((count, mail) => {
                    return !mail.read ? count + 1 : count;
                }, 0);

        }
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMails.fulfilled, (state, action) => {
                state.Mails = [...action.payload];
                state.TotalCount = state.Mails.length;
                state.NoViewCount = state.Mails.reduce((count, mail) => {
                    return !mail.read ? count + 1 : count;
                }, 0);
            })
            .addCase(fetchMails.rejected, (state, action) => {
                console.error("Error fetching mails:", action.payload);
            });
    }
})
console.log(initialState)

export const Mailactions = MailSlice.actions;
export default MailSlice.reducer;