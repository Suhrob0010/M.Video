import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";


const initialState = {
    quantity: 0,
    izbranoe: []
}


export const fetchIzb = createAsyncThunk(
    'counterIzbranoe/fetchIzb',
    async () => {
        try {
            const response = await axios.get("http://localhost:3000/izbranoe")
            return response.data
        } catch (error) {
            console.log(error);
        }
    }
)


export const addIzb = createAsyncThunk(
    'izbranoe/addIzb',
    async (user) => {
        try {
            const response = await axios.post("http://localhost:3000/izbranoe", user)
            return response.data
        } catch (error) {
            console.log(error);
        }
    }
    
)


export const deletIzb = createAsyncThunk(
    'izbranoe/deletIzb',
    async function (id, { dispatch }) {
        try {
            const { data } = await axios.delete(`${"http://localhost:3000/izbranoe"}/${id}`)
            dispatch(fetchIzb())
            return data
        } catch (error) {
            console.log(error);
        }
    }
)



export const counterIzbranoe = createSlice({
    name: 'izbranoe',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchIzb.fulfilled, (state, action) => {
            state.izbranoe = action.payload
        })
    }
})

export const { } = counterIzbranoe.actions;
export default counterIzbranoe.reducer