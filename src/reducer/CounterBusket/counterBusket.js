import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    quantity: 0,
    busket: [],
    CartQuentity: 0,
}


export const fetchBusket = createAsyncThunk(
    'counterBusket/fetchBusket',
    async () => {
        try {
            const response = await axios.get("http://localhost:3000/busket");
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);


export const addBusket = createAsyncThunk(
    'busket/addBusket',
    async (obj) => {
        try {
            const response = await axios.post("http://localhost:3000/busket", obj);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);


export const deletTovar = createAsyncThunk(
    'busket/deletTovar',
    async function (id, { dispatch }) {
        try {
            const { data } = await axios.delete(`${"http://localhost:3000/busket"}/${id}`)
            dispatch(fetchBusket())
            return data
        } catch (error) {
            console.log(error);
        }
    }
)



export const counterBusket = createSlice({
    name: 'busket',
    initialState,
    reducers: {
        setIncrement: (state, action) => {
            const itemIndex = state.busket.findIndex(
                (item) => item.id === action.payload.id
            )

            if (itemIndex >= 0) {
                state.CartQuentity = state.busket[itemIndex].CartQuentity +=1
            }
        },
        setDecrement: (state, action) => {
            const itemIndex = state.busket.findIndex(
                (item) => item.id === action.payload.id
            )

            if (state.busket[itemIndex].CartQuentity > 1) {
                state.CartQuentity = state.busket[itemIndex].CartQuentity -=1
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBusket.fulfilled, (state, action) => {
            state.busket = action.payload
        })
    },
})
export const {setDecrement, setIncrement } = counterBusket.actions;
export default counterBusket.reducer