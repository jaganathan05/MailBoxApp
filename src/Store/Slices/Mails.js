import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
let initialState = { ReceivedMails :[], SendedMails : [] , TotalCount : 0 , NoViewCount: 0}
console.log(initialState)

export const fetchReceivedMails = createAsyncThunk('mails/fetchReceivedMails', async (token, { rejectWithValue }) => {
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

export const fetchSendedMails = createAsyncThunk('mails/fetchSendedMails', async (token, { rejectWithValue }) => {
    try {
        const response = await axios.get('http://localhost:4000/sendedmails', {
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
      
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchReceivedMails.fulfilled, (state, action) => {
                state.ReceivedMails = [...action.payload];
                state.TotalCount = state.ReceivedMails.length;
                state.NoViewCount = state.ReceivedMails.reduce((count, mail) => {
                    return !mail.read ? count + 1 : count;
                }, 0);
            })
            .addCase(fetchReceivedMails.rejected, (state, action) => {
                console.error("Error fetching mails:", action.payload);
            })
            .addCase(fetchSendedMails.fulfilled, (state, action) => {
                state.SendedMails = [...action.payload];
            })
            .addCase(fetchSendedMails.rejected, (state, action) => {
                console.error("Error fetching sent mails:", action.payload);
            });
    }
})
console.log(initialState)

export const Mailactions = MailSlice.actions;
export default MailSlice.reducer;