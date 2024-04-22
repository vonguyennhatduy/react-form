import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    danhSachGheDangDat:  [],

}

const btBookingSlice = createSlice({
    name: 'btBooking',

    initialState,

    reducers: {

    },

    extraReducers: (builder) => {},
})

export const {reducer: btBookingReducer , actions: btBookingActions} = btBookingSlice;